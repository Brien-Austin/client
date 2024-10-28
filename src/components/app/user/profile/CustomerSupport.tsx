import { Headset } from 'lucide-react'
import React from 'react'

const CustomerSupport:React.FC = () => {
  return (
    <section className='mt-4 p-5 border  rounded-lg gap-2 border-neutral-100 shadow-sm flex items-center'>
        <Headset size={24} className='text-purple-600'/> Customer Support
    </section>
  )
}

export default CustomerSupport