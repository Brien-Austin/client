import React, { useEffect } from 'react'
import NavBar from './navbar'


import { useLocation, useNavigate } from 'react-router-dom'


const UserLayout = ({children} : {children : React.ReactNode}) => {

 

  const router = useNavigate();
  const location = useLocation();

 
useEffect(()=>{
  setTimeout(()=>{
 
    const queryParams = new URLSearchParams(location.search);
    const accessToken = queryParams.get('accessToken');
    const refreshToken = queryParams.get('refreshToken');
  
    if (accessToken && refreshToken) {
      // Store tokens in local storage
      localStorage.setItem('userAccessToken', accessToken);
      localStorage.setItem('userRefreshToken', refreshToken);
  
      // Remove the tokens from the URL
      const newUrl = window.location.pathname; // Only keep the path without query parameters
      window.history.replaceState({}, document.title, newUrl);

   
  }},1000)
    
},[location.search])
  
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