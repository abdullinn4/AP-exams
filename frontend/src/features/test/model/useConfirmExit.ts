import { useCallback, useEffect, useRef } from 'react'
import type { TestAnswers } from '@/entities/test/test'
import {useNavigate} from "react-router-dom";

interface UseConfirmExitOptions {
    attemptId?: string
    answers?: TestAnswers
    isActive: boolean
    timeLimitSec?: number
}

const STORAGE_KEY_PREFIX = 'test_progress_'

interface SavedProgress {
    attemptId: string
    answers: TestAnswers
    savedAt: number
    timeLimitSec: number
}

export const useConfirmExit = ({
                                   attemptId,
                                   answers,
                                   isActive,
                                   timeLimitSec
                               }: UseConfirmExitOptions) => {
    const navigate = useNavigate()
    const hasUnsavedChanges = useRef(false)

    const saveProgress = useCallback(() => {
        if (!attemptId || !answers || !timeLimitSec) return

        const progress: SavedProgress = {
            attemptId,
            answers,
            savedAt: Date.now(),
            timeLimitSec
        }

        localStorage.setItem(
            `${STORAGE_KEY_PREFIX}${attemptId}`,
            JSON.stringify(progress)
        )

        hasUnsavedChanges.current = false
    }, [attemptId, answers, timeLimitSec])

    // Автосохранение
    useEffect(() => {
        if (!isActive || !answers) return

        hasUnsavedChanges.current = true
        const id = setTimeout(saveProgress, 1000)

        return () => clearTimeout(id)
    }, [isActive, answers, saveProgress])

    // beforeunload
    useEffect(() => {
        if (!isActive) return

        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            saveProgress()
            e.preventDefault()
            e.returnValue = ''
        }

        window.addEventListener('beforeunload', handleBeforeUnload)
        return () => window.removeEventListener('beforeunload', handleBeforeUnload)
    }, [isActive, saveProgress])

    useEffect(() => {
        if (!isActive) return

        const handlePopState = () => {
            const confirmExit = window.confirm(
                'The test is not yet complete. Your progress will be saved, but the timer will continue.\n\nExit?'
            )

            if (confirmExit) {
                saveProgress()
                navigate(-1)
            } else {
                // Отменяем навигацию - возвращаемся вперед
                window.history.pushState(null, '', window.location.href)
            }
        }

        // Блокируем кнопку "Назад"
        window.history.pushState(null, '', window.location.href)
        window.addEventListener('popstate', handlePopState)

        return () => {
            window.removeEventListener('popstate', handlePopState)
        }
    }, [isActive, saveProgress, navigate])

    // Очистка
    const clearProgress = useCallback(() => {
        if (!attemptId) return
        localStorage.removeItem(`${STORAGE_KEY_PREFIX}${attemptId}`)
    }, [attemptId])

    // Восстановление (только для UI)
    const restoreProgress = useCallback(
        (attemptId: string): SavedProgress | null => {
            try {
                const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}${attemptId}`)
                if (!saved) return null

                const progress: SavedProgress = JSON.parse(saved)

                const elapsed = Date.now() - progress.savedAt
                const timeLimit = progress.timeLimitSec * 1000

                if (elapsed > timeLimit) {
                    // Тест истёк - удаляем из localStorage
                    localStorage.removeItem(`${STORAGE_KEY_PREFIX}${attemptId}`)
                    return null
                }

                return progress
            } catch {
                return null
            }
        },
        []
    )

    return {
        saveProgress,
        clearProgress,
        restoreProgress
    }
}