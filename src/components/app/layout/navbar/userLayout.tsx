import React, { useEffect } from 'react'
import NavBar from './navbar'


import { useNavigate } from 'react-router-dom'
import { getAccessToken } from '@/utils/localstorage'

const UserLayout = ({children} : {children : React.ReactNode}) => {

  const router = useNavigate()
  const token = getAccessToken();
  useEffect(() => {
    if (!token) {
      router("/onboard");
    }
  }, [router, token]);
  
  
  return (
    <main className='h-screen w-full ' >
        <NavBar/>
  
        <div className="mt-12 lg:px-10 sm:px-5 ">
        {children}
        </div>
        
    </main>
  )
}

export default UserLayout