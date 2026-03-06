import { tokenService } from "@/features/auth/lib/tokenService"

const ANON_KEY = "apex_anon_key"

function getUserIdFromToken(): string | null {
    const token = tokenService.getAccessToken()
    if (!token) return null

    try {
        const payload = JSON.parse(atob(token.split(".")[1]))
        return payload.userId || payload.sub || null
    } catch {
        return null
    }
}

function getAnonKey() {
    let key = localStorage.getItem(ANON_KEY)

    if (!key) {
        key = crypto.randomUUID()
        localStorage.setItem(ANON_KEY, key)
    }

    return key
}

export const getUserKey = () => {
    const userId = getUserIdFromToken()

    if (userId) {
        return `user-${userId}`
    }

    return `anon-${getAnonKey()}`
}