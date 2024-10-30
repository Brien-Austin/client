export const API_URL = ` ${import.meta.env.VITE_API_URL}`
const AUTH_URL='/api/v1/auth/user'
export const USER_URL = '/api/v1/user'
export const ADMIN_URL = '/api/v1/admin'
export const ADMIN_AUTH = '/api/v1/auth/admin'
export const PROFILE_URL = `${USER_URL}/profile`
export const REGISTER_URL= `${AUTH_URL}/register`
export const LOGIN_URL = `${AUTH_URL}/login`
export const ADMIN_LOGIN = `${ADMIN_AUTH}/login`
export const IMAGE_UPLOAD = `${ADMIN_URL}/image`
export const CREATE_COURSE = `${ADMIN_URL}/create-course`
export const FETCH_INSTRUCTORS = `${USER_URL}/instructors`
export const FETCH_COURSES = `${USER_URL}/courses`
export const FETCH_COURSE = `${USER_URL}/course`
export const INSTRUCTOR_AUTH = `/api/v1/auth/instructor`
export const INSTRUCTOR_REGISTER = `${INSTRUCTOR_AUTH}/register`
export const INSTRUCTOR_LOGIN = `${INSTRUCTOR_AUTH}/login`
export const INSTRUCTOR = '/api/v1/instructor'
export const INS_CREATE_COURSE = `${INSTRUCTOR}/create-course`
export const INSTRUCTOR_PROFILE_URL = `${INSTRUCTOR}/profile`
export const USER_COMPLETE_PROFILE = `${USER_URL}/complete-profile`
export const USER_MY_COURSES = `${USER_URL}/my-courses`
export const USER_ENROLL_FREE_COURSE = `${USER_URL}/enroll`