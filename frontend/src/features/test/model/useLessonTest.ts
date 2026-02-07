import type {LessonDetails} from "@/entities/course/course.ts";
import {useEffect, useState} from "react";
import {useGetTestResultDetailsQuery, useStartTestMutation, useSubmitTestMutation} from "@/shared/api/courseApi.ts";
import {type TestAnswers, TestAttemptStatus} from "@/entities/test/test.ts";

type TestView = "instruction" | "inProgress" | "summary" | "results"

export const useLessonTest = (lesson: LessonDetails) => {
    const [view, setView] = useState<TestView>("instruction")

    const [startTest, {data: testData, isLoading: isStarting}] = useStartTestMutation()

    const [submitTest, {data: testResult, isLoading: isSubmitting}] = useSubmitTestMutation()

    const attemptId = testResult?.id || lesson.testAttemptId

    const {
        data: resultDetails,
        isLoading: isLoadingResults,
    } = useGetTestResultDetailsQuery(attemptId || '', {
        skip: !attemptId || view !== 'results',
    })

    useEffect(() => {
        if (!lesson.testId) return

        if (lesson.testAttemptStatus === TestAttemptStatus.COMPLETED){
            setView('summary')
            return;
        }

        setView('instruction')
    }, [lesson])

    const start = () => {
        if (!lesson.testId) return

        startTest(lesson.testId)
        setView('inProgress')
    }

    const submit = (answers: TestAnswers) => {
        if (!testData) return

        submitTest({attemptId: testData.attemptId, answers})
        setView('summary')
    }

    const viewResults = () => {
        setView('results')
    }

    const backToSummary = () => {
        setView('summary')
    }

    return {
        view,

        // data
        testData,
        testResult,
        resultDetails,

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
