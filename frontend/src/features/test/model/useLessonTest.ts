import type {LessonDetails} from "@/entities/course/course.ts";
import {useMemo, useState} from "react";
import {useGetTestResultDetailsQuery, useSubmitTestMutation} from "@/shared/api/courseApi.ts";
import {type TestAnswers, TestAttemptStatus} from "@/entities/test/test.ts";
import {useConfirmExit} from "@/features/test/model/useConfirmExit.ts";
import {useAttempt} from "@/features/test/model/useAttempt.ts";

type TestView = "instruction" | "inProgress" | "summary" | "results"

export const useLessonTest = (lesson?: LessonDetails) => {
    const [manualView, setManualView] = useState<TestView | null>(null)
    const [savedAnswers, setSavedAnswers] = useState<TestAnswers>({})

    const {
        attempt,
        startOrResume,
        clearAttempt,
        isLoading: isStarting
    } = useAttempt()

    const [submitTest, {data: testResult, isLoading: isSubmitting}] = useSubmitTestMutation()

    const attemptId = testResult?.id || lesson?.testAttemptId || attempt?.attemptId

    const { restoreProgress, clearProgress } = useConfirmExit({
        attemptId: attempt?.attemptId,
        answers: undefined, // answers управляются в TestInProgressView
        isActive: false, // isActive управляется в TestInProgressView
        timeLimitSec: attempt?.timeLimitSec
    })

    const {
        data: resultDetails,
        isLoading: isLoadingResults,
    } = useGetTestResultDetailsQuery(attemptId || '', {
        skip: !attemptId || (manualView !== 'results'),
    })

    const view = useMemo<TestView>(() => {
        if (manualView) return manualView
        if (!lesson?.testId) return 'instruction'
        if (lesson?.testAttemptStatus === TestAttemptStatus.COMPLETED) {
            return 'summary'
        }
        return 'instruction'
    }, [lesson?.testId, lesson?.testAttemptStatus, manualView])

    const start = async () => {
        if (!lesson?.testId) {
            console.error('No testId in lesson:', lesson)
            return
        }

        try {
            const data = await startOrResume(lesson.testId)

            // Восстанавливаем answers из localStorage (если есть)
            const saved = restoreProgress(data.attemptId)
            if (saved) {
                console.log('Restored saved answers:', saved.answers)
                setSavedAnswers(saved.answers)
            }

            setManualView('inProgress')
        } catch (error) {
            console.error('Failed to start test:', error)
        }
    }

    const submit = async (answers: TestAnswers) => {
        if (!attempt) {
            console.error('No attempt to submit')
            return
        }

        try {
            await submitTest({attemptId: attempt.attemptId, answers}).unwrap()
            clearProgress()
            clearAttempt()
            setManualView('summary')
        } catch (error) {
            console.error('Failed to submit test:', error)
        }
    }

    const testAttemptSummary = useMemo(() => {
        if (testResult) {
            try {
                const parsed = JSON.parse(testResult.resultJson)
                return {
                    correctCount: parsed.correctCount,
                    totalCount: parsed.totalCount,
                    score: testResult.score,
                    attemptedAt: testResult.finishedAt
                }
            } catch {
                return null
            }
        }
        return lesson?.testAttemptSummary || null
    }, [testResult, lesson?.testAttemptSummary])

    const viewResults = () => {
        setManualView('results')
    }

    const backToSummary = () => {
        setManualView('summary')
    }

    return {
        view,
        testData: attempt,
        savedAnswers,
        resultDetails,
        testAttemptSummary,
        isStarting,
        isSubmitting,
        isLoadingResults,
        startTest: start,
        submitTest: submit,
        viewResults,
        backToSummary,
    }
}