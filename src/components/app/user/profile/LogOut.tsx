import { LogOutIcon } from 'lucide-react'
import React from 'react'

const LogOut:React.FC = () => {
  return (
    <section className='mt-4 p-5 border  rounded-lg gap-2 border-neutral-100 shadow-sm flex items-center'>
    <LogOutIcon size={24} className='text-purple-600'/> Logout
</section>
  )
}

export default LogOut