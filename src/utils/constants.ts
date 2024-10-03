export const API_URL = ` ${import.meta.env.VITE_API_URL}`
const AUTH_URL='/api/v1/auth/user'
export const USER_URL = '/api/v1/user'
export const PROFILE_URL = `${USER_URL}/profile`
export const REGISTER_URL= `${AUTH_URL}/register`
export const LOGIN_URL = `${AUTH_URL}/login`