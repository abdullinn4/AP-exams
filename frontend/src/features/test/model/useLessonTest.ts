import type {LessonDetails} from "@/entities/course/course.ts";
import {useMemo, useState} from "react";
import {useGetTestResultDetailsQuery, useStartTestMutation, useSubmitTestMutation} from "@/shared/api/courseApi.ts";
import {type TestAnswers, TestAttemptStatus} from "@/entities/test/test.ts";

type TestView = "instruction" | "inProgress" | "summary" | "results"

export const useLessonTest = (lesson?: LessonDetails) => {
    const [manualView, setManualView] = useState<TestView | null>(null)

    const [startTest, {data: testData, isLoading: isStarting}] = useStartTestMutation()

    const [submitTest, {data: testResult, isLoading: isSubmitting}] = useSubmitTestMutation()

    const attemptId = testResult?.id || lesson?.testAttemptId

    const {
        data: resultDetails,
        isLoading: isLoadingResults,
    } = useGetTestResultDetailsQuery(attemptId || '', {
        skip: !attemptId || (manualView !== 'results'),
    })

    const view = useMemo<TestView>(() => {
        // Если есть ручное переключение view, используем его
        if (manualView) return manualView

        // Если тест не существует, показываем instruction
        if (!lesson?.testId) return 'instruction'

        // Если тест уже завершен, показываем summary
        if (lesson?.testAttemptStatus === TestAttemptStatus.COMPLETED) {
            return 'summary'
        }

        // По умолчанию показываем instruction
        return 'instruction'
    }, [lesson?.testId, lesson?.testAttemptStatus, manualView])

    const start = () => {
        if (!lesson?.testId) {
            console.error('No testId in lesson:', lesson)
            return
        }

        startTest(lesson.testId)
        setManualView('inProgress')
    }

    const submit = async (answers: TestAnswers) => {
        if (!testData) return

        try {
            await submitTest({attemptId: testData.attemptId, answers}).unwrap()
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

        // data
        testData,
        resultDetails,
        testAttemptSummary,

        // states
        isStarting,
        isSubmitting,
        isLoadingResults,

        // actions
        startTest: start,
        submitTest: submit,
        viewResults,
        backToSummary,
    }

}
