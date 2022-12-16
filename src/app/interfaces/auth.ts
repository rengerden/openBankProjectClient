export interface LoginResponse {
    accessToken: string,
    refreshToken?: string,
    userName: string,
    status: boolean
}
export interface LoginRequest {
    username: string | undefined;
    password: string | undefined;
}
