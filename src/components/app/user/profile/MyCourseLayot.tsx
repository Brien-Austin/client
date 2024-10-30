import { ChevronLeft } from "lucide-react"
import React from "react"

const MyCourseLayot = ({children} : {
    children : React.ReactNode
}) => {
  return (
<aside>
    <nav className=" border-b border-neutral-50 shadow-sm bg-white z-50 w-full top-0 left-0  ">
       <div className="p-4 flex items-center space-x-4">

        <div className="flex  items-center justify-center px-3 py-2 border rounded-lg text-purple-600">
            <ChevronLeft/>
        </div>
        <h1 className="text-neutral-700 font-medium  text-lg">Enrolled Courses</h1>

       </div>

    </nav>
    {children}
</aside>
  )
}

export default MyCourseLayot