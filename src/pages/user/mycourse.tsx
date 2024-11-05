import UserLayout from "@/components/app/user/navbar/userLayout";

import MyCoursesList from "@/components/app/user/profile/MyCoursesList";
import { enrolledCourses, Course } from "@/types/api-return";
import appApiClient from "@/utils/auth";
import { USER_MY_COURSES } from "@/utils/constants";
import { useQuery } from "react-query";

const MyCourse = () => {
  
  const { data: courses, isLoading, error } = useQuery<enrolledCourses[]>({
    queryKey: ["fetch-my-course"],
    queryFn: async () => {
      const response = await appApiClient.get(USER_MY_COURSES);
      return response.data.data;
    },
  });
  console.log(courses)
  if (isLoading) {
    return (
  
       <UserLayout>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"><div className="w-10 h-10 border-4 border-purple-600 rounded-full animate-spin border-t-transparent">
          </div></div>
       </UserLayout>
  
    );
  }

  if (error) {
    return (
      <UserLayout>
        <div className="text-red-500 p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap ">Failed to load courses</div>
      </UserLayout>
    );
  }

  return (
    <UserLayout>

      <section className="sm:flex sm:flex-col lg:flex sm:space-y-8 sm:px-3 sm:py-5 sm:pb-24 ">
        {courses && courses.length > 0 ? (
          courses.map((enrolledCourse) => {
          
            const courseData = enrolledCourse.course as unknown as Course;
            const chaptersCompleted = enrolledCourse.completedChapters.length 
            
            return (
         
                <MyCoursesList key={courseData._id} title={courseData.title} id={courseData._id} progress={chaptersCompleted} chapters={courseData.chapters?.length} imageUrl={courseData.imageurl!} description={courseData.description!}/>
          
            );
          })
        ) : (
          <div className="text-center py-8">No courses enrolled</div>
        )}
      </section>
  
    </UserLayout>
  );
};

export default MyCourse;