import * as z from 'zod'

export type AuthState = "Register"|"Login"

const emailSchema = z.string().email()
const passwordSchema = z.string().regex(new RegExp( /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/),"Password must be 8 characters long")

export const loginSchema = z.object({
    email : emailSchema,
    password : passwordSchema
})


export const registerShcema = z.object({
    email : emailSchema,
    password : passwordSchema,
    confirmPassword : passwordSchema

}).refine((object)=>object.password === object.confirmPassword, {
    message : "Passwords do not match"
})