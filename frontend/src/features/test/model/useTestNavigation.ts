import type {StartTestResponse, TestAnswers} from "@/entities/test/test.ts";
import {useState} from "react";

export const useTestNavigation = (testData: StartTestResponse) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState<TestAnswers>({})

    const currentQuestion = testData.questions[currentQuestionIndex]

    const answerQuestion = (
        questionId: string,
        value: string,
        type: 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE' | 'OPEN'
    ) => {
        setAnswers(prev => {
            if (type === 'MULTIPLE_CHOICE') {
                const prevAnswers = Array.isArray(prev[questionId])
                    ? prev[questionId]
                    : []

                return {
                    ...prev,
                    [questionId]: prevAnswers.includes(value)
                        ? prevAnswers.filter(v => v !== value)
                        : [...prevAnswers, value],
                }
            }

            return {
                ...prev,
                [questionId]: value,
            }
        })
    }


    const goNext = () =>  {
        setCurrentQuestionIndex(prev => Math.min(prev + 1, testData.questions.length - 1))
    }

    const goPrevious = () => {
        setCurrentQuestionIndex(prev => Math.max(prev - 1, 0))
    }

    const goTo = (index: number) => {
        if (index >= 0 && index < testData.questions.length) setCurrentQuestionIndex(index);
    }

    const isLast = currentQuestionIndex === testData.questions.length - 1
    const isFirst = currentQuestionIndex === 0

    return {
        currentQuestionIndex,
        currentQuestion,
        answers,
        answerQuestion,
        goNext,
        goPrevious,
        goTo,
        isFirst,
        isLast,
    };
}