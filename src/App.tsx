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

const App = () => {
  return (
    // Changes not reflecting
   <Router>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
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
    </Routes>
   </Router>
  )
}

export default App