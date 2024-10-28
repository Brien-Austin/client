
import Greet from "@/components/app/user/layout/header"
import UserLayout from "@/components/app/user/navbar/userLayout"
import CustomerSupport from "@/components/app/user/profile/CustomerSupport"
import EditProfile from "@/components/app/user/profile/EditProfile"
import LogOut from "@/components/app/user/profile/LogOut"
import UserData from "@/components/app/user/profile/userData"
import { useAuth } from "@/hooks/useAuth"
import { ChevronRight } from "lucide-react"


const Profile = () => {
  const {user ,isLoading} = useAuth()
console.log(user)

  return (
 <UserLayout>
    <main>
    {
        isLoading ? <div className="h-12 animate-pulse bg-neutral-50 "/> : 
        <section>
<Greet name={user?.isProfileComplete ? user?.username : user?.email} />

    {
      user?.isProfileComplete ? <>
      <UserData noOfCourses={user?.courses.length} completed={0}/>
      <EditProfile age={user?.age} contactNumber={user?.contactNumber} username={user?.username}/>
      <CustomerSupport/>
      <LogOut/>
      </> :       <section className="mt-4 p-3 relative border border-neutral-50 rounded-lg shadow-sm">
      <h1 className="text-purple-700 font-medium">Complete Profile</h1>
      <h1 className="text-xs mt-2 text-muted-foreground mb-5">
        Your profile seems incomplete. Please complete your profile for good course suggestions
      </h1>
      
      <button className="absolute right-0 bottom-0 px-3 py-2 bg-purple-600 rounded-tl-3xl rounded-br-lg flex items-center justify-center text-white">
        <ChevronRight className="" />
      </button>
    </section>
    }

        
        
        </section>

      }
    


  
    </main>
 </UserLayout>
  )
}

export default Profile