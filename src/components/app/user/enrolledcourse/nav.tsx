import { useMyCourseNav } from "@/hooks/useMyCourseNav"
import NavItems from "./navItems"

const Nav = () => {
    const {menus} = useMyCourseNav()
  return (
    <nav className="border-b bg-white z-50  h-10 w-full flex gap-5 items-center overflow-x-auto ">
        {
            menus.map((m,i)=>(
                <NavItems menu={m.menu} key={i} icon={m.icon}/>
            ))
        }

      </nav>
  )
}

export default Nav