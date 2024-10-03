import React from 'react'
import NavBar from './navbar'

const UserLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div>
        <NavBar/>
        {children}
    </div>
  )
}

export default UserLayout