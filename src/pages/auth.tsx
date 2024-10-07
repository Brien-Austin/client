import Login from "@/components/app/auth/login"
import Register from "@/components/app/auth/register"
import { AuthState } from "@/types/auth/auth"

import React from "react"



const Auth = () => {
    const [authState,setAuthState] =React.useState<AuthState>('Register')
   
  return (
    <main className="absolute transform top-1/2 left-1/2  rounded-sm -translate-x-1/2 -translate-y-1/2 lg:w-2/5 sm:w-4/5 sm:h-3/5 lg:h-3/5">
        {
            authState === "Register" ? <Register setAuthState={setAuthState}/> :  <Login setAuthState={setAuthState}/>
        }
    </main>
  )
}

export default Auth