import { House, Info, NotebookPen,  Users } from "lucide-react"

export function useMyCourseNav() {
    const menus = [
        {
            menu : 'Home',
            icon : House
        },
        {
            menu : 'Resources',
            icon : NotebookPen
        },
     
        {
            menu : 'Forum',
            icon: Users
        },
 
        {
            menu : "Info",
            icon : Info
        }
    ]

    return {menus}

   
}