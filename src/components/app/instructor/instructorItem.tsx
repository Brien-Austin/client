import { BadgeCheck } from 'lucide-react'
import React from 'react'

interface InstructorItemProps {
    name : string,
    email : string,
    verified : boolean,
    profileUrl : string,
    noOfCourses : number
}
const InstructorItem:React.FC<InstructorItemProps> = ({email,profileUrl,name,verified,noOfCourses}) => {
    console.log(verified,profileUrl)
  return (
    <section className='ring-1 shadow-sm ring-purple-300 p-3 rounded-xl '>
        <div className="flex  justify-between items-center">
            <div className="h-16 w-16 rounded-full bg-neutral-100 relative">
                {noOfCourses > 0 && <div className="absolute top-2 left-0">
                    <BadgeCheck size={15} fill='white'  className='text-purple-600'/>
                </div>}
            </div>
            <div className="flex flex-col space-y-1 justify-center ml-3">
                <h1 className='flex items-center gap-2'>{name}<span className='text-[0.6rem] text-purple-600 bg-white ring-1 ring-purple-500 px-2 py-1 rounded-full'>{noOfCourses} courses</span></h1>
                <h1 className="text-sm text-muted-foreground">
                    {email}
                </h1>
            </div>
            <button className='ml-auto text-sm flex items-center bg-gradient-to-br from-purple-500 to-purple-600 text-white px-4 py-2 rounded-3xl '>Follow </button>

        </div>
    </section>
  )
}

export default InstructorItem