import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Profile from './pages/profile'
import Auth from './pages/auth'
import Courses from './pages/courses'
import OnBoard from './pages/onboard'
import Course from './pages/course'
import Admin from './pages/admin'
import Users from './pages/admin/users'
import Settings from './pages/admin/settings'
import AdminCourses from './pages/admin/courses'
import Enrollments from './pages/admin/enrollments'
import Webminars from './pages/admin/webminars'
import Instructors from './pages/instructors'

import Instructor from './pages/instructor/home'
import InstructorWebminars from './pages/instructor/webminars'
import InstructorEnrollments from './pages/instructor/enrollments'
import InstructorSettings from './pages/instructor/settings'
import InstructorCourses from './pages/instructor/courses'
import MyCourse from './pages/user/mycourse'
import EnrolledCourse from './pages/enrolledcourse'
import PlayerChapter from './components/app/user/enrolledcourse/playchapter'


const App = () => {
  return (
    // Changes not reflecting
   <Router>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/mycourses' element={<MyCourse/>}/>
      <Route path='/onboard' element={<OnBoard/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path = "/course/:id" element={<Course/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/admin/users' element={<Users/>}/>
      <Route path='/admin/settings' element={<Settings/>}/>
      <Route path='/admin/courses' element={<AdminCourses/>}/>
      <Route path='/admin/enrollments' element={<Enrollments/>}/>
      <Route path='/admin/webminars' element={<Webminars/>}/>
      <Route path='/instructors' element={<Instructors/>}/>
      <Route path='/instructor/dashboard' element={<Instructor/>}/>
      <Route path='/instructor/courses' element={<InstructorCourses/>}/>
      <Route path='/instructor/webminars' element={<InstructorWebminars/>}/>
      <Route path='/instructor/enrollments' element={<InstructorEnrollments/>}/>
      <Route path='/instructor/settings' element={<InstructorSettings/>}/>
      <Route path='/mycourses/course/:id' element={<EnrolledCourse/>}/>
      <Route path='/mycourses/course/:id/chapter' element={<PlayerChapter/>}/>
    </Routes>
   </Router>
  )
}

export default App