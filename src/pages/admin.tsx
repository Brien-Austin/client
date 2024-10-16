import AdminLayout from '@/components/app/admin/layout/adminlayout'
import TabHeader from '@/components/app/admin/layout/tabHeader'


import React from 'react'

const Admin:React.FC = () => {
  return (
  <AdminLayout>
   <TabHeader title='Dashboard'/>
  </AdminLayout>
  )
}

export default Admin