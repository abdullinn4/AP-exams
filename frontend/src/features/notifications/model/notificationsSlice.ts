import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { tokenService } from '@/features/auth/lib/tokenService'

const NOTIFICATIONS_STORAGE_KEY_PREFIX = 'ap-exams-dismissed-notifications'

interface NotificationsState {
    dismissedIds: string[]
}

const getUserEmail = (): string | null => {
    const token = tokenService.getAccessToken()
    if (!token) return null
    try {
        const payload = JSON.parse(atob(token.split('.')[1]))
        return payload.sub || null
    } catch {
        return null
    }
}

const getNotificationsKey = (userEmail?: string | null): string => {
    return userEmail
        ? `${NOTIFICATIONS_STORAGE_KEY_PREFIX}-${userEmail}`
        : `${NOTIFICATIONS_STORAGE_KEY_PREFIX}-anonymous`
}

const loadDismissedFromStorage = (): string[] => {
    try {
        const userEmail = getUserEmail()
        const key = getNotificationsKey(userEmail)
        const stored = localStorage.getItem(key)
        if (stored) {
            return JSON.parse(stored)
        }
    } catch (error) {
        console.error('Failed to load dismissed notifications:', error)
    }
    return []
}

const saveDismissedToStorage = (dismissedIds: string[]) => {
    try {
        const userEmail = getUserEmail()
        const key = getNotificationsKey(userEmail)
        localStorage.setItem(key, JSON.stringify(dismissedIds))
    } catch (error) {
        console.error('Failed to save dismissed notifications:', error)
    }
}

const initialState: NotificationsState = {
    dismissedIds: loadDismissedFromStorage()
}

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        dismissNotification: (state, action: PayloadAction<string>) => {
            if (!state.dismissedIds.includes(action.payload)) {
                state.dismissedIds.push(action.payload)
                saveDismissedToStorage(state.dismissedIds)
            }
        },
        clearDismissed: (state) => {
            state.dismissedIds = []
            saveDismissedToStorage([])
        },
        reloadDismissed: (state) => {
            state.dismissedIds = loadDismissedFromStorage()
        }
    }
})

export const { dismissNotification, clearDismissed, reloadDismissed } = notificationsSlice.actions
export default notificationsSlice.reducer