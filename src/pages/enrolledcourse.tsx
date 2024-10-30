import EnrolledCourseLayout from '@/components/app/user/enrolledcourse/enrolledCourseLayout';

import {  useParams } from 'react-router-dom'

const EnrolledCourse = () => {
  
    const {id} = useParams();
  return (
  <EnrolledCourseLayout>
    Enrolled {id}
  </EnrolledCourseLayout>
  )
}

export default EnrolledCourse