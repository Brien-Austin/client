import { useAppSelector } from "@/store/store";
import { Course } from "@/types/api-return";
import appApiClient from "@/utils/auth";
import { FETCH_COURSE } from "@/utils/constants";
import { ChevronLeft } from "lucide-react";
import React from "react";
import { useQuery } from "react-query";
import Nav from "./nav";

const EnrolledCourseLayout = ({ children }: { children: React.ReactNode }) => {
  const {currentCourse} = useAppSelector((state)=>state.enrolledCourse)
  console.log(currentCourse)
  const {data : course} = useQuery<Course>({
    queryKey : 'fetch-course',
    queryFn : async() =>{
      const response = await appApiClient.get(`${FETCH_COURSE}/${currentCourse}`)
      return response.data.course
    }
  })
  console.log(course)
  return <main >
    <nav className="fixed top-0 w-full h-14 bg" >
        <div className="p-5 flex items-center gap-5">
          <div className="p-2 rounded-md bg-gray-100 flex items-center justify-center border">
            <ChevronLeft className="text-purple-600"/>
          </div>
          <div className="text-lg text-neutral-700 font-[600]">
            {course?.title}
          </div>
            
        </div>
        
    </nav >
    <section className=" fixed top-20 w-full  px-5">
     <Nav/>
    </section>
    <section className="mt-32 px-5 py-3">
    {children}
    </section>
  </main>
};

export default EnrolledCourseLayout;
