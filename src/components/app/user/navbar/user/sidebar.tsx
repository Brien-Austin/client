

import { useRoutes } from '@/hooks/useRoutes'



import { cn } from '@/lib/utils'
import { LucideIcon, } from 'lucide-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const DesktopSideBar = () => {
  const routes = useRoutes()


    
  return (
    <>
    
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

// const SideBarItems: React.FC<NavItemProps> = ({ label, route, icon: Icon }) => {
//   const pathname = useLocation();
//   const isActive = pathname.pathname === route;

//   return (
//     <Link
//       to={route}
//       className={cn(
//         "flex items-center rounded-md text-purple-700 transition-all duration-300 group px-3 py-2",
//         isActive ? "bg-purple-50" : "hover:bg-purple-50"
//       )}
//     >
//       <div className="flex items-center space-x-2">
//         <div className="bg-white opacity-70 z-50 border-white p-1 rounded-full shadow-sm flex items-center justify-center">
//           <Icon size={16} />
//         </div>
//         <span className="flex-1 text-left truncate">{label}</span>
//       </div>
//     </Link>
//   );
// };


export default DesktopSideBar