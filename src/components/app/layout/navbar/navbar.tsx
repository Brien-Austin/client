// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useRoutes } from '@/hooks/useRoutes'
// import { useAuth } from '@/hooks/useAuth'

import { useSideBarRoutes } from '@/hooks/useSideBarRoutes'
import { cn } from '@/lib/utils'
import { LucideIcon, Menu } from 'lucide-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const routes = useRoutes()
  const sideBarRoutes = useSideBarRoutes()
  // const { user } = useAuth();
    
  return (
    <>
      {/* Top NavBar */}
      <nav className="fixed top-0 left-0 py-1  bg-white z-50 w-full">
        <section className="w-full h-12 flex items-center space-x-5 lg:px-10 sm:px-5 lg:py-5 sm:py-8">
          <div className="flex space-x-5 items-center w-full">
            <Sheet>
              <SheetTrigger className="sm:block lg:hidden">
                <div className="border rounded-full border-neutral-50 shadow-sm p-2">
                  <Menu className="text-neutral-600" />
                </div>
              </SheetTrigger>
              <SheetContent side={"left"}>
                <div className="flex flex-col space-y-2 mt-8">
                  {sideBarRoutes.map((r, i) => (
                    <SideBarItems
                      key={i}
                      label={r.label}
                      icon={r.icon}
                      route={r.route}
                    />
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            <input type="text" className='border h-10 w-full rounded-full px-3 py-2 focus:outline-none focus:border-neutral-500 focus:transition focus:delay-100' placeholder='Search for Courses ...' />
           
          </div>
          {/* <Popover>
            <PopoverTrigger>
              <div className="h-10 w-10 bg-neutral-50 rounded-full relative ring-[1.5px] ring-purple-600">
                {user?.profileUrl !== undefined ? (
                  <img
                    src={user?.profileUrl}
                    className="rounded-full absolute object-cover"
                    alt="image"
                  />
                ) : (
                  <></>
                )}
              </div>
            </PopoverTrigger>
            <PopoverContent sideOffset={10} collisionPadding={10} className="">
              <h1 className="text-neutral-500 text-xs">ACCOUNT</h1>
              <hr className="mt-3" />
              <div className="mt-3">
                <h1 className="px-3 py-2 text-purple-600 font-semibold rounded-sm text-sm">
                  UPDATE PROFILE
                </h1>
              </div>
            </PopoverContent>
          </Popover> */}
        </section>
      
      </nav>

      {/* Bottom NavBar */}
      <nav className='fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg border border-purple-100 rounded-full shadow-lg z-50'>
        <section className='w-full h-10 flex items-center justify-around space-x-8'>
          {routes.map((r, i) => (
            <NavItems key={i} label={r.label} route={r.route} icon={r.icon} />
          ))}
        </section>
      </nav>
    </>
  )
}

interface NavItemProps {
  label: string,
  route: string,
  icon: LucideIcon
}

const NavItems: React.FC<NavItemProps> = ({ label, route, icon: Icon }) => {
  const pathname = useLocation()
  console.log(label)
  const isActive = pathname.pathname === route;

  return (
    <Link
      to={route}
      className={cn(
        "flex flex-col items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group",
        isActive ? "bg-purple-100" : "hover:bg-purple-50"
      )}
    >
      <div className="relative">
        <Icon
          size={20}
          className={cn(
            "transition-all duration-300",
            isActive ? "text-purple-600" : "text-neutral-500 group-hover:text-purple-400"
          )}
        />
        
        {/* <div
          className={cn(
            "absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 w-1 rounded-full bg-purple-600 transition-all duration-300",
            isActive ? "scale-100" : "scale-0"
          )}
        /> */}
      </div>
      
   
    </Link>
  );
}

const SideBarItems: React.FC<NavItemProps> = ({ label, route, icon: Icon }) => {
  const pathname = useLocation();
  const isActive = pathname.pathname === route;

  return (
    <Link
      to={route}
      className={cn(
        "flex items-center rounded-md text-purple-700 transition-all duration-300 group px-3 py-2",
        isActive ? "bg-purple-50" : "hover:bg-purple-50"
      )}
    >
      <div className="flex items-center space-x-2">
        <div className="bg-white opacity-70 z-50 border-white p-1 rounded-full shadow-sm flex items-center justify-center">
          <Icon size={16} />
        </div>
        <span className="flex-1 text-left truncate">{label}</span>
      </div>
    </Link>
  );
};


export default NavBar