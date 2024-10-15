import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Profile from './pages/profile'
import Auth from './pages/auth'
import Courses from './pages/courses'
import OnBoard from './pages/onboard'

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
    </Routes>
   </Router>
  )
}

export default App