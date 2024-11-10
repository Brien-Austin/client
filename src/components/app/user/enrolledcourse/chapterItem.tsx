import { cn } from '@/lib/utils'
import {  setCurrentChapterId } from '@/store/slice/course'
import { useAppDispatch} from '@/store/store'
import { Chapter } from '@/types/api-return'
import { CheckCheck, Play } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface EnrolledCourseChapterItemProps {
    chapter: Chapter,
    completedChapters : string[]
}

const EnrolledCourseChapterItem: React.FC<EnrolledCourseChapterItemProps> = ({ chapter ,completedChapters }) => {
    console.log(chapter)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const isCompleted = completedChapters.includes(chapter._id)

    // useEffect(()=>{
    //     async function chapterSave() {
    //         dispatch(setCurrentChapter({
    //             title: chapter.title,
    //             description: chapter.description,
    //             index: chapter.index,
    //             videoUrl: chapter.videoUrl,
    //             isCompleted :isCompleted
    //         }))
    //     }

    //     chapterSave()
    // },[chapter,isCompleted,dispatch])

    const handleChapterWatch = () =>{
        dispatch(setCurrentChapterId(chapter._id))
        navigate("chapter")
    }
    return (
        <div className='border p-2 w-full h-36 rounded-lg shadow-sm border-purple-500  flex flex-col'>
            <div className="flex-grow">
                <h1 className='text font-[600] text-purple-600'>{chapter.title}</h1>
                <h1 className="mt-3 text-xs text-muted-foreground line-clamp-2">{chapter.description}</h1>
            </div>
            <div className="flex justify-end mt-2">
                <button onClick={handleChapterWatch} className={cn("text-xs flex items-center gap-2 text-white bg-gradient-to-b from-purple-600 to-purple-700 via-purple-500 px-3 py-2 rounded-full shadow-sm", isCompleted && "bg-gradient-to-r from-white to-white via-white ring-1 ring-green-500 text-green-500")}>
                   
                    <h1 className="dropshadow">{isCompleted ? <div className="flex items-center gap-2">
                        <CheckCheck size={14}/><h1>Completed</h1>
                    </div> : <div className='flex items-center gap-2'> <Play size={12} /><h1>Watch now</h1></div>}</h1>
                </button>
            </div>
        </div>
    )
}

export default EnrolledCourseChapterItem
