import { useMemo } from "react"
import { BookOpen, Home, TvMinimalPlay, UserRound} from 'lucide-react'

export const useRoutes = () =>{
    
    const routes = useMemo(()=>
    [
        {
            label : 'Home',
            icon : Home,
            route :'/'
        },
        {
            label : 'My Courses',
            icon : BookOpen,
            route :'/courses'
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