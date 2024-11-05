import { Chapter } from '@/types/api-return'
import React from 'react'
import EnrolledCourseChapterItem from './chapterItem'

interface EnrolledCourseChaptersProps {
    chapters : Chapter[]
}
const EnrolledCourseChapters:React.FC<EnrolledCourseChaptersProps> = ({chapters}) => {
  return (
    <div className='flex flex-col space-y-4 pb-20'>
        {chapters.map((c,i) =>(
            <EnrolledCourseChapterItem key={i} chapter={c || []}/>
        ))}
    </div>
  )
}

export default EnrolledCourseChapters