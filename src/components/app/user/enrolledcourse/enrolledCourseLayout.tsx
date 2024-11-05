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

  const { data: course, isLoading } = useQuery<Course>({
    queryKey: 'fetch-course',
    queryFn: async () => {
      const response = await appApiClient.get(`${FETCH_COURSE}/${currentCourse}`);
      return response.data.course;
    }
  });

  if (isLoading) {
    return <div>Loading...</div>; // Display loading state if needed
  }

  return (
    <main>
      <nav className=" z-50">
        <section className="fixed  top-0 w-full h-14">
          <div className="p-5 bg-white z-50 flex items-center gap-5">
            <div onClick={() => navigate(-1)} className="p-2 rounded-md bg-white flex items-center justify-center border border-neutral-200 shadow-sm">
              <ChevronLeft className="text-purple-600" />
            </div>
            <div className="text-lg text-neutral-700 font-[600]">
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
      </section>
    </main>
  );
};

export default EnrolledCourseLayout;
