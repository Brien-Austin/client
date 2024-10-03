import { useRoutes } from '@/hooks/useRoutes'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import React from 'react'
import { useLocation } from 'react-router-dom'

const NavBar = () => {
    const routes = useRoutes()
    
  return (
    <nav className='fixed bottom-0 left-0 px-2 py-1 border-t bg-neutral-50  w-full'>
        <section className='w-full  h-12 flex items-center justify-around'>
            {
                routes.map((r,i)=>(
                    <NavItems key={i} label={r.label} route={r.route} icon={r.icon}/>
                ))
            }
         

        </section>

    </nav>
  )
}

interface NavItemProps {
    label : string,
    route : string,
    icon : LucideIcon
}
const NavItems:React.FC<NavItemProps> = ({label,route,icon:Icon}) =>{
    const pathname = useLocation()
    return (
        <a href={route} className={cn('flex flex-col items-center gap-1 text-neutral-500', pathname.pathname === route && "text-neutral-800 font-medium" )}>
            <Icon size={18}/>
            <p className='text-xs'>{label}</p>

        </a>
    )
}
export default NavBar