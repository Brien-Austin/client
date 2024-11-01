import React, { useEffect } from 'react'
import NavBar from './navbar'
import Cookies from 'js-cookie'

import { useNavigate } from 'react-router-dom'
import {  LoadCookie } from '@/utils/localstorage'

const UserLayout = ({children} : {children : React.ReactNode}) => {

  const router = useNavigate()
 
  LoadCookie()

  const token = Cookies.get('accessToken');

  useEffect(() => {
    if (!token) {
      router("/onboard");
    }
  }, [router, token]);
  
  
  return (
    <main className='h-screen w-full ' >
        <NavBar/>
  
        <div className="mt-5 lg:px-10 sm:px-5 ">
        {children}
        </div>
        
    </main>
  )
}

export default UserLayout