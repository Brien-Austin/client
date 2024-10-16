import { ArrowUpDown,  Book,  LucideLayoutDashboard, PackageCheck, SettingsIcon,User } from "lucide-react";

import { useMemo } from "react"
import { useLocation } from "react-router-dom";

const useAdminRoutes = () =>{
    const pathname = useLocation().pathname;

    const routes = useMemo(()=>[
        {   
            route : '/admin',
            label : 'Dashboard',
            icon : LucideLayoutDashboard,
            isActive : pathname === '/admin'
        },
        {
            route : '/admin/courses',
            label : 'Courses',
            icon : Book,
            isActive : pathname === '/admin/courses'

        },
        {
            route : '/admin/webminars',
            label : 'Webminars  ',
            icon : PackageCheck,
            isActive : pathname === '/admin/webminars'

        },
 
        {   
            route : '/admin/enrollments',
            label : 'Enrolled Students',
            icon : ArrowUpDown,
            isActive : pathname === '/admin/enrollments'
        },
        {   
            route : '/admin/users',
            label : 'Users',
            icon : User,
            isActive : pathname === '/admin/users'
        },
        {   
            route : '/admin/settings',
            label : 'Settings',
            icon : SettingsIcon,
            isActive : pathname === '/admin/settings'
        },

      

    ],[pathname])
    return routes;

}

export default useAdminRoutes