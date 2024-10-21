import {   Book,  LucideLayoutDashboard, PackageCheck, SettingsIcon, UserRound } from "lucide-react";

import { useMemo } from "react"
import { useLocation } from "react-router-dom";

const useInstructorRoutes = () =>{
    const pathname = useLocation().pathname;

    const routes = useMemo(()=>[
        {   
            route : '/instructor/dashboard',
            label : 'Dashboard',
            icon : LucideLayoutDashboard,
            isActive : pathname === '/instructor/dashboard'
        },
        {
            route : '/instructor/courses',
            label : 'Courses',
            icon : Book,
            isActive : pathname === '/instructor/courses'

        },
        {
            route : '/instructor/webminars',
            label : 'Webminars  ',
            icon : PackageCheck,
            isActive : pathname === '/instructor/webminars'

        },
 
        {   
            route : '/instructor/enrollments',
            label : 'Your  Students',
            icon : UserRound,
            isActive : pathname === '/instructor/enrollments'
        },
     
        {   
            route : '/instructor/settings',
            label : 'Settings',
            icon : SettingsIcon,
            isActive : pathname === '/instructor/settings'
        },

      

    ],[pathname])
    return routes;

}

export default useInstructorRoutes