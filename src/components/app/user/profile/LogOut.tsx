import { cleanUserTokens } from '@/utils/localstorage'
import { LogOutIcon } from 'lucide-react'
import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const LogOut:React.FC = () => {
    const navigate = useNavigate()
    async function handleLogout(){
        toast.success("Logged out")
        setTimeout(()=>{
            cleanUserTokens()
        navigate("/onboard")
        },1000)
    }
  return (
    <section onClick={()=>handleLogout()} className='mt-4 p-5 border  rounded-lg gap-2 border-neutral-100 shadow-sm flex items-center'>
    <LogOutIcon size={24} className='text-purple-600'/> Logout
</section>
  )
}

export default LogOut