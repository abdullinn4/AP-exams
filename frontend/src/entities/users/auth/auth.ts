export interface LoginRequest {
    email: string
    password: string
}

export interface TokenPair {
    accessToken: string
    refreshToken: string
}

export interface LoginResponse {
    tokens: TokenPair
}

export interface ForgotPasswordRequest {
    email: string
}
