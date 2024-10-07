
import UserLayout from "@/components/app/layout/navbar/userLayout"
import appApiClient from "@/utils/auth"
import { PROFILE_URL } from "@/utils/constants"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const [user,setUser] = useState<string>()
  const router = useNavigate()

  useEffect(()=>{
    async function getUser() {
      try {
        const response = await appApiClient.get(PROFILE_URL)
      const data = response.data;
      setUser(data.user.email)
      console.log(data)
        
      } catch (error) {
        console.log('[USER_DATA_FETCH_ERROR]',error)
        
      }

    }
    getUser()

  },[])

  if(!user){
    router('/auth')
  }
  return (
   <UserLayout>
     <main>
  
  {user}
</main>
   </UserLayout>
  )
}

export default Home