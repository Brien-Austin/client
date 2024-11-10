import { useAuth } from '@/hooks/useAuth'
import { useRoutes } from '@/hooks/useRoutes'
import { cn } from '@/lib/utils'
import { cleanUserTokens } from '@/utils/localstorage'
import { LogOut, LucideIcon } from 'lucide-react'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const routes = useRoutes()
  const {user} = useAuth()
  const navigate = useNavigate()
  async function logOut() {
    cleanUserTokens()
    navigate(0)
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className='hidden lg:flex fixed left-0 top-0 h-full w-64 bg-white border-r border-purple-100 p-4 flex-col z-50'>
        <div className='flex flex-col space-y-2 mt-4'>
          {routes.map((r, i) => (
            <SideBarItems key={i} label={r.label} route={r.route} icon={r.icon} />
          ))}
        </div>
        <div className="fixed bottom-4 left-4 border w-12 h-12 rounded-full flex-shrink-0">
          {
            user?.email && user.profileUrl ?  <div className='flex items-center space-x-3 '>
              <img src={user.profileUrl} className='w-full h-full rounded-full flex-shrink-0' alt="" />
              
              <div className="flex items-start flex-col space-y-1">
                <h1 className='text-[16px] text-neutral-600 line-clamp-1 w-28'>{user.username}</h1>
                <button onClick={logOut} className='text-xs flex items-center text-neutral-600'> <LogOut size={14}/>Logout</button>
              </div>
            
            </div> : <div></div>
          }
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className='lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg border border-purple-100 rounded-full shadow-lg z-50'>
        <section className='flex items-center justify-around space-x-8'>
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

// Mobile Bottom Nav Items
const NavItems: React.FC<NavItemProps> = ({  route, icon: Icon }) => {
  const pathname = useLocation()
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
      </div>
    </Link>
  );
}

// Desktop Sidebar Items
const SideBarItems: React.FC<NavItemProps> = ({ label, route, icon: Icon }) => {
  const pathname = useLocation();
  const isActive = pathname.pathname === route;

  return (
    <Link
      to={route}
      className={cn(
        "flex items-center px-3 py-2.5 rounded-lg transition-all duration-300",
        isActive 
          ? "bg-purple-50 text-purple-600" 
          : "text-neutral-600 hover:bg-purple-50/50 hover:text-purple-500"
      )}
    >
      <Icon 
        size={20} 
        className={cn(
          "transition-colors duration-300",
          isActive ? "text-purple-600" : "text-neutral-500"
        )}
      />
      <span className="ml-3 text-sm font-medium">{label}</span>
    </Link>
  );
};

export default NavBar