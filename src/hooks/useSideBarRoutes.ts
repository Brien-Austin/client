import { useMemo } from "react"
import {  Home, UserRound} from 'lucide-react'

export const useSideBarRoutes = () =>{
    
    const routes = useMemo(()=>
    [
        {
            label : 'Home',
            icon : Home,
            route :'/'
        },
        {
            label : 'Instructors',
            icon : UserRound,
            route :'/instructors'
        },
    
        // {
        //     label : 'Instructors',
        //     icon : Teacher
        // }

    ],[])
    return routes
}