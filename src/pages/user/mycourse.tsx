import MyCourseLayot from "@/components/app/user/profile/MyCourseLayot";
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

  if (isLoading) {
    return (
      <MyCourseLayot>
        <div className="flex items-center justify-center p-8">Loading...</div>
      </MyCourseLayot>
    );
  }

  if (error) {
    return (
      <MyCourseLayot>
        <div className="text-red-500 p-4">Failed to load courses</div>
      </MyCourseLayot>
    );
  }

  return (
    <MyCourseLayot>
      <section className="sm:flex sm:flex-col lg:flex sm:space-y-8 sm:px-3 sm:py-2 mb-16">
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
    </MyCourseLayot>
  );
};

export default MyCourse;