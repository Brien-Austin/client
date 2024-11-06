import { Chapter } from '@/types/api-return'
import { Play } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface EnrolledCourseChapterItemProps {
    chapter: Chapter
}

const EnrolledCourseChapterItem: React.FC<EnrolledCourseChapterItemProps> = ({ chapter }) => {
    console.log(chapter)
    const navigate = useNavigate()
    return (
        <div className='border p-2 w-full h-36 rounded-lg shadow-sm border-purple-500  flex flex-col'>
            <div className="flex-grow">
                <h1 className='text font-[600] text-purple-600'>{chapter.title}</h1>
                <h1 className="mt-3 text-xs text-muted-foreground line-clamp-2">{chapter.description}</h1>
            </div>
            <div className="flex justify-end mt-2">
                <button onClick={()=>{navigate("chapter")}} className='text-xs flex items-center gap-2 text-white bg-gradient-to-b from-purple-600 to-purple-700 via-purple-500 px-3 py-2 rounded-full shadow-sm'>
                    <Play size={12} />
                    <h1 className="dropshadow">Watch now</h1>
                </button>
            </div>
        </div>
    )
}

export default EnrolledCourseChapterItem
