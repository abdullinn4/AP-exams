import { useCallback, useState } from 'react'
import { useStartTestMutation } from '@/shared/api/courseApi'
import type { StartTestResponse } from '@/entities/test/test'

export const useAttempt = () => {
    const [attempt, setAttempt] = useState<StartTestResponse | null>(null)
    const [startTest] = useStartTestMutation()
    const [isLoading, setIsLoading] = useState(false)

    const startOrResume = useCallback(async (testId: string) => {
        setIsLoading(true)

        try {
            const data = await startTest(testId).unwrap()
            setAttempt(data)
            return data
        } catch (error: any) {
            // 409 = активная попытка уже есть
            // Backend ОБЯЗАН вернуть её в error.data
            if (error?.status === 409 && error.data) {
                setAttempt(error.data)
                return error.data
            }

            throw error
        } finally {
            setIsLoading(false)
        }
    }, [startTest])

    const clearAttempt = () => setAttempt(null)

    return {
        attempt,
        isLoading,
        startOrResume,
        clearAttempt
    }
}