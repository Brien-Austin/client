import { useMemo } from "react"
import { BookOpen, Home, UserRound} from 'lucide-react'

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
            label : 'Profile',
            icon : UserRound,
            route :'/profile'
        }

    ],[])
    return routes
}