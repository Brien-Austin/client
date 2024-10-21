import AdminLogin from '@/components/app/admin/auth/login'
import AdminLayout from '@/components/app/admin/layout/adminlayout'
import TabHeader from '@/components/app/admin/layout/tabHeader'
import { getAdminAccessToken } from '@/utils/localstorage'


import React, { useEffect, useState } from 'react'

const Admin:React.FC = () => {
  const [unauthenticated , setUnAuthenticated] = useState<boolean>(false)
  console.log(unauthenticated)

  const adminAt = getAdminAccessToken()
  console.log(adminAt)
useEffect(()=>{
  if(!adminAt){
    setUnAuthenticated(true)
  }
},[adminAt])
  return (
  <>
  {
    unauthenticated ? <AdminLogin/> : <AdminLayout>
    <TabHeader title='Dashboard'/>
   </AdminLayout>
  }
  
  
  </>
  )
}

export default Admin