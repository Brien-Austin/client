import React from 'react'
import NavBar from './navbar'



const UserLayout = ({children} : {children : React.ReactNode}) => {


 
  
  
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