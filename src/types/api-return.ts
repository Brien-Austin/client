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
  

 


export interface Course {
    _id : string
  title: string;
  instructor: Types.ObjectId;
  imageurl?: string;
  price?: number;
  isFree: boolean;
  isYoutubeCourse: boolean;
  studentsEnrolled: Types.ObjectId[];
  description?: string;
  tags?: Tag;
  chapters?: [];
}

export interface enrolledCourses {
 
  completedChapters : string[]
  course : Course | Course[]
  enrolledDate : Date
  isCompleted : boolean
}


