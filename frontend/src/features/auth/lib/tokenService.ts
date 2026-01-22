export const tokenService = {
    // Получить access token
    getAccessToken(): string | null {
        return localStorage.getItem('accessToken')
    },

    // Получить refresh token
    getRefreshToken(): string | null {
        return localStorage.getItem('refreshToken')
    },

    // Сохранить токены
    setTokens(accessToken: string, refreshToken: string): void {
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
    },

    // Удалить токены (при logout)
    clearTokens(): void {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
    },

    // Проверить, авторизован ли пользователь
    isAuthenticated(): boolean {
        return !!this.getAccessToken()
    }
}