import { Chapter } from '@/types/api-return'
import React from 'react'

interface EnrolledCourseChapterItemProps {
    chapter : Chapter
}
const EnrolledCourseChapterItem:React.FC<EnrolledCourseChapterItemProps> = ({chapter}) => {
    console.log(chapter)
  return (
    <div className='border p-2 w-full h-36 rounded-lg shadow-sm border-purple-300 border-2 flex flex-col'>

        <div className="">
            <h1 className='text font-[600] text-purple-600'>{chapter.title}</h1>
            <h1 className="mt-3 text-xs text-muted-foreground line-clamp-2">{chapter.description}</h1>
        </div>


    </div>
  )
}

export default EnrolledCourseChapterItem