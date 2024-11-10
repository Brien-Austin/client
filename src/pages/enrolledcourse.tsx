import EnrolledCourseLayout from "@/components/app/user/enrolledcourse/enrolledCourseLayout";
import CourseForum from "@/components/app/user/enrolledcourse/menus/forum";
import CourseHome from "@/components/app/user/enrolledcourse/menus/home";

import CourseInfo from "@/components/app/user/enrolledcourse/menus/info";
import CourseResources from "@/components/app/user/enrolledcourse/menus/resources";
import { useAppSelector } from "@/store/store";
import {  UserCourse } from "@/types/api-return";

import appApiClient from "@/utils/auth";
import {USER_FETCH_MY_COURSE } from "@/utils/constants";
import { useQuery } from "react-query";

const EnrolledCourse = () => {
  const { currentCourse } = useAppSelector((state) => state.enrolledCourse);
  const { data: course } = useQuery<UserCourse>({
    queryKey: "enrolled-course",
    queryFn: async () => {
      const response = await appApiClient.get(
        `${USER_FETCH_MY_COURSE}/${currentCourse}`
      );
      return response.data.specificCourse;
    },
  });
  console.log('Current course : ',course);
  const { currentTab } = useAppSelector((state) => state.enrolledCourse);
  function renderCurrentCourse() {
    switch (currentTab) {
      case "Home":
        return (
          <main>
            {course && course.course.chapters && course.completedChapters && <CourseHome chapters={course?.course.chapters} completedChapters={course?.completedChapters} />}
          </main>
        )
      case "Resources":
        return <CourseResources />;
      case "Info":
        return <CourseInfo />;
      default:
        return <CourseForum />;
    }
  }

  return <EnrolledCourseLayout>{renderCurrentCourse()}
    </EnrolledCourseLayout>;
};

export default EnrolledCourse;
