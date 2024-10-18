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
  