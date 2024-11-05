import { Chapter } from "@/types/api-return"
import React from "react"
import EnrolledCourseChapters from "../chapters"

interface CourseHomeProps {
    chapters : Chapter[] ,
    completedChapters : string[]
}
const CourseHome:React.FC<CourseHomeProps> = ({chapters,completedChapters}) => {
  const completed = chapters.filter(chapter => completedChapters.includes(chapter._id))
  console.log(completed)
  return (
    <main>
      <section>
        <EnrolledCourseChapters chapters={chapters}/>
      </section>
    </main>
  )
}

export default CourseHome