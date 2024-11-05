import EnrolledCourseLayout from '@/components/app/user/enrolledcourse/enrolledCourseLayout';
import CourseForum from '@/components/app/user/enrolledcourse/menus/forum';
import CourseHome from '@/components/app/user/enrolledcourse/menus/home';
import CourseInfo from '@/components/app/user/enrolledcourse/menus/info';
import CourseResources from '@/components/app/user/enrolledcourse/menus/resources';
import { useAppSelector } from '@/store/store';



const EnrolledCourse = () => {

  const {currentTab}= useAppSelector((state)=>state.enrolledCourse)
  function renderCurrentCourse() {
    switch(currentTab){
      case 'Home':
        return <CourseHome/>
      case 'Resources':
        return <CourseResources/>
      case 'Info':
        return <CourseInfo/>
      default :
      return <CourseForum/>

    }
  }
  
   
  return (
  <EnrolledCourseLayout>
    {
      renderCurrentCourse()
    }
 
 
  
  </EnrolledCourseLayout>
  )
}

export default EnrolledCourse