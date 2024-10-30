import {  TvMinimalPlay } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const MyCourses:React.FC = () => {
    const navigate = useNavigate()
  return (
    <section onClick={()=>navigate("/mycourses")} className='mt-4 p-5 border  rounded-lg gap-2 border-neutral-100 shadow-sm flex items-center'>
        <TvMinimalPlay size={24} className='text-purple-600'/> Enrolled Courses
    </section>
  )
}

export default MyCourses