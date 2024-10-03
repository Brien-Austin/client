import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Profile from './pages/profile'
import Auth from './pages/auth'

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/auth' element={<Auth/>}/>
    </Routes>
   </Router>
  )
}

export default App