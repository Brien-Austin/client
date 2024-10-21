
import InstructorHeader from "@/components/app/instructor/header"
import InstructorLayout from "@/components/app/instructor/instructorlayout"
import { useAuth } from "@/hooks/useAuth"
import { getUserName } from "@/utils/get-username"


const Instructor = () => {
  const {instructor,isInstructorLoading} = useAuth()
  console.log(instructor)
  return (
    <InstructorLayout>
      {
        isInstructorLoading ?   <div className="pt-5 w-72 h-8 bg-slate-50 animate-pulse"/>   :  <InstructorHeader name={getUserName(instructor?.email)!}/>
      }
  
    </InstructorLayout>
  )
}

export default Instructor