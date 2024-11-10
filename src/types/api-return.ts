import { Types } from "mongoose";
export type InstructorType = {
    _id: string;
    email: string;

  }
  
  export type CourseType = {
    _id: string;
    title: string;
    chapters: string[];
  }

  export type Tag = {
    domain: string,
    languages : {
        name : string
    }[]
  }
  

 export  interface Chapter {
    _id: string;
    title: string;
    index : number
    description: string;
    imageurl: string;
    videoUrl: string;
    isCompleted: boolean;
  }
  
export interface Instructor {
  _id: string
email: string
profileUrl: string
}

export interface Course {
    _id : string
  title: string;
  instructor: Instructor;
  imageurl?: string;
  price?: number;
  isFree: boolean;
  isYoutubeCourse: boolean;
  studentsEnrolled: Types.ObjectId[];
  description?: string;
  tags?: Tag;
  chapters?: Chapter[];
}

export interface UserCourse {
  _id : string
  completedChapters : string[];
  enrolledDate : Date,
  isCompleted : boolean
  course : Course

}
export interface enrolledCourses {
 
  completedChapters : string[]
  course : Course | Course[]
  enrolledDate : Date
  isCompleted : boolean
}


export type User = {
  username : string,
  age  : number,
  contactNumber : number,
  email : string,
  isProfileComplete : boolean,
  profileUrl : string,
  courses : UserCourse[]
}

