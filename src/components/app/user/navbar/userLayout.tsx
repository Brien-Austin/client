import React, { useEffect } from 'react'
import NavBar from './navbar'


import { useNavigate } from 'react-router-dom'
import { LoadCookie } from '@/utils/localstorage'

const UserLayout = ({children} : {children : React.ReactNode}) => {

  const router = useNavigate()
  const {accessToken,refreshToken} = LoadCookie()
  console.log(accessToken,refreshToken)
  const at = localStorage.getItem('userAccessToken')
  useEffect(()=>{
    if(!at){
      router("/onboard")
    }
    
  },[at,router])
  
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