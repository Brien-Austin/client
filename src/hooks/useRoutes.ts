import { useMemo } from "react"
import {Book, Home, UserRound} from 'lucide-react'

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
            icon : Book,
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