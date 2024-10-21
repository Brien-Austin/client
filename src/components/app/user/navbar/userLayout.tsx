import React, { useEffect } from 'react'
import NavBar from './navbar'


import { useNavigate } from 'react-router-dom'
import { getUserAccessToken } from '@/utils/localstorage'

const UserLayout = ({children} : {children : React.ReactNode}) => {

  const router = useNavigate()
  const token = getUserAccessToken();
  useEffect(() => {
    if (!token) {
      router("/onboard");
    }
  }, [router, token]);
  
  
  return (
    <main className='h-screen w-full ' >
        <NavBar/>
  
        <div className="mt-20 lg:px-10 sm:px-5 ">
        {children}
        </div>
        
    </main>
  )
}

export default UserLayout