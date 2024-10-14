import React, { useEffect } from 'react'
import NavBar from './navbar'
import SideBar from './sidebar'
import { useAuth } from '@/hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const UserLayout = ({children} : {children : React.ReactNode}) => {
  const {user,isLoading} = useAuth()
  const router = useNavigate()
  useEffect(()=>{
    if( !isLoading && !user){
      router("/auth")
    }
  },[router,user,isLoading])
  return (
    <main className='h-screen w-full bg-[#ffffe6]' >
        <NavBar/>
        <SideBar/>
        <div className="mt-12 lg:px-10 sm:px-5 ">
        {children}
        </div>
        
    </main>
  )
}

export default UserLayout