import { useAppSelector } from "@/store/store";
import { Course } from "@/types/api-return";
import appApiClient from "@/utils/auth";
import { FETCH_COURSE } from "@/utils/constants";
import { ChevronLeft } from "lucide-react";
import React from "react";
import { useQuery } from "react-query";
import Nav from "./nav";
import { useNavigate } from "react-router-dom";

const EnrolledCourseLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { currentCourse } = useAppSelector((state) => state.enrolledCourse);

  const { data: course, isLoading} = useQuery<Course>({
    queryKey: 'fetch-course',
    queryFn: async () => {
      const response = await appApiClient.get(`${FETCH_COURSE}/${currentCourse}`);
      return response.data.course;
    }
  });



  return (
    <main>

      {isLoading ? <>
        <div className='flex flex-col px-5'>
    <div className="mt-6 w-full h-16 rounded-md bg-neutral-50 aimate-pulse"/>
    <div className="mt-3 w-full h-12 rounded-md bg-neutral-50 aimate-pulse"/>
    <div className="mt-6 w-full h-40 rounded-md bg-neutral-50 aimate-pulse"/>
    <div className="mt-6 w-full h-40 rounded-md bg-neutral-50 aimate-pulse"/>
    <div className="mt-6 w-full h-40 rounded-md bg-neutral-50 aimate-pulse"/>
    <div className="mt-6 w-full h-40 rounded-md bg-neutral-50 aimate-pulse"/>
    
  </div> </> : <><nav className=" z-50">
        <section className="fixed  top-0 w-full h-14">
          <div className="p-5 bg-white z-50 flex items-center gap-5">
            <div onClick={() => navigate(-1)} className="p-2 rounded-md bg-white flex items-center justify-center border border-neutral-200 shadow-sm">
              <ChevronLeft className="text-purple-600" />
            </div>
            <div className="sm:text-lg lg:text-2xl text-neutral-700 font-[600]">
              {course?.title}
            </div>
          </div>
        </section>
        <section className="fixed   top-20 w-full px-5">
          <Nav />
        </section>
      </nav>
      <section className="mt-32 px-5 py-3">
        {children}
      </section></>}
    </main>
  );
};

export default EnrolledCourseLayout;
