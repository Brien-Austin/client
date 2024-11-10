import { useMemo } from "react"
import {  Home, TvMinimalPlay, UserRound} from 'lucide-react'

export const useRoutes = () =>{
    
    const routes = useMemo(()=>
    [
        {
            label : 'Home',
            icon : Home,
            route :'/'
        },
  
        {
            label : 'My Courses',icon : TvMinimalPlay,route:'/mycourses'

        },
        {
            label : 'Profile',
            icon : UserRound,
            route :'/profile'
        },
        // {
        //     label : 'Instructors',
        //     icon : Teacher
        // }

    ],[])
    return routes
}