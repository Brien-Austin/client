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


export const courseSchema = z.object({
    title : z.string({
        message : "Course title is required"
    }).min(10,{message : "Course title should be atleast 10 characters"}),
    description : z.string({
        message : "Course description is required"
    }).min(20, {
        message : "Description should be atleast 20 characters"
    }),
    domain : z.string({
        message : "Domain or Category of the course is required"
    }).min(5, {
        message : "Dmain should be atleast 5 characters"
    }),

    imageurl : z.string({
        message : "Image us required !!!"
    }).min(10, {
        message : "Image needs to be uploaded"
    })
})

export type InstructorType = {
    _id: string;
    email: string;
    profileUrl: string;
    canCreateCourse: boolean;
    courses: CourseType[];
  }
  
  export type CourseType = {
    _id: string;
    title: string;
    chapters: string[];
  }
  