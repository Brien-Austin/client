import { cn } from "@/lib/utils"
import { setCurrentTab } from "@/store/slice/course"
import { useAppDispatch, useAppSelector } from "@/store/store"
import { LucideIcon } from "lucide-react"
import React from "react"

interface NavItemProps {
    menu : string,
    icon : LucideIcon
}



const NavItems:React.FC<NavItemProps> = ({menu,icon : Icon}) => {
    const dispatch = useAppDispatch()
    const {currentTab} = useAppSelector((state)=>state.enrolledCourse)

    function handleTabClick() {
        dispatch(setCurrentTab(menu))

    }

  return (
    <div className={cn("flex items-center gap-2 pb-1", currentTab === menu && "border-b-2 pb-1 border-purple-500") } onClick={handleTabClick}>
        <span>
            <Icon size={14}/>
        </span>
        <h1 className="sm:text-xs lg:text-sm">{menu}</h1>
    </div>
  )
}

export default NavItems