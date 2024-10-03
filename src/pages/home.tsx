import appApiClient from "@/utils/auth"
import { PROFILE_URL } from "@/utils/constants"
import { useEffect, useState } from "react"

const Home = () => {
  const [user,setUser] = useState<string>()

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
  return (
    <div>
      {user}
    </div>
  )
}

export default Home