import { Chapter } from '@/types/api-return'
import React from 'react'
import EnrolledCourseChapterItem from './chapterItem'

interface EnrolledCourseChaptersProps {
    chapters : Chapter[],
    completedChapters : string[]
}
const EnrolledCourseChapters:React.FC<EnrolledCourseChaptersProps> = ({chapters,completedChapters}) => {
  return (
    <div className='flex flex-col space-y-4 pb-20'>
        {chapters.map((c,i) =>(
            <EnrolledCourseChapterItem completedChapters={completedChapters} key={i} chapter={c || []}/>
        ))}
    </div>
  )
}

export default EnrolledCourseChapters