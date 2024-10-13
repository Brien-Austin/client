import { useRoutes } from '@/hooks/useRoutes'
import { cn } from '@/lib/utils'
import { LucideIcon, Menu } from 'lucide-react'
// import React from 'react'
import { useLocation } from 'react-router-dom'

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useAuth } from '@/hooks/useAuth'


const NavBar = () => {
    const routes = useRoutes()
    const {user } = useAuth()
    
   
    
  return (
    <nav className='fixed top-0 left-0 px-2 py-1 border-t bg-white z-50 shadow-sm  w-full'>
        <section className='w-full  h-12 flex  items-center justify-between'>
           <div className="flex space-x-5  items-center">
          <Sheet>
            <SheetTrigger>
            <Menu className='text-neutral-600'/>
            </SheetTrigger>
            <SheetContent side={'left'} >
              <div className='flex flex-col space-y-2 mt-8'>
              {
                routes.map((r,i)=>(
                    <NavItems key={i} label={r.label} icon={r.icon} route={r.route}/>
                ))
                }
              </div>

            </SheetContent>
          </Sheet>
           <h1 className='text-xl font-semibold text-[#252525]'>Acquel</h1>
           </div>
           <Popover>
            <PopoverTrigger>
            <div className='h-10 w-10 bg-neutral-50 rounded-full relative ring-[1.5px] ring-purple-600'>
              {user?.profileUrl !== undefined ?   <img src={user?.profileUrl} className=' rounded-full absolute object-cover' alt="image" /> : <></>}

</div>
            </PopoverTrigger>
            <PopoverContent sideOffset={10} collisionPadding={10} className=''>
              <h1 className='text-neutral-500 text-xs'>
                ACCOUNT
              </h1>
              <hr  className='mt-3'/>
              <div className="mt-3">
                <h1 className='px-3 py-2 text-purple-600 font-semibold rounded-sm text-sm'>UPDATE PROFILE</h1>
              </div>
            </PopoverContent>
           </Popover>

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
        <a href={route} style={{strokeWidth : pathname.pathname == route  ? 2 : 1}} className={cn('flex px-4 py-3  items-center gap-1 text-neutral-500', pathname.pathname === route && "text-purple-800  bg-purple-50 rounded-md font-medium" )}>
            <Icon size={18} />
            <p className='text-sm font-semibold'>{label}</p>

        </a>
    )
}
export default NavBar