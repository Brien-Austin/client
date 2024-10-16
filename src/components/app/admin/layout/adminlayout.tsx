

import { useState } from "react";

import clsx from "clsx";
import SideBar from "../../layout/navbar/sidebar";
const Adminlayout = ({
    children
} : {
    children : React.ReactNode
}) => {

    const [toggle , setToggle] = useState<boolean> (false)
  return (
    <>
    <SideBar toggle={toggle } setToggle={setToggle}/>
  
<div className={clsx('ml-20 transition', toggle && 'ml-56 ')}>


    {
        children
    }

</div>
    </>
  )
}

export default Adminlayout