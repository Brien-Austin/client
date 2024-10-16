
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';


import useAdminRoutes from '@/hooks/useAdminRoutes';
import SideBarItems from './sidebaritems';


interface SideBarProps {
    toggle: boolean;
    setToggle: (toggle: boolean) => void;
}

const SideBar: React.FC<SideBarProps> = ({ toggle, setToggle }) => {
    const routes = useAdminRoutes();
    return (
        <motion.div
            animate={{ width: toggle ? 200 : 60, height: '100%' }}
            className='h-full fixed border-r shadow-sm flex flex-col'
        >
            <div className="absolute top-5 right-[-12px]">
                <div onClick={() => setToggle(!toggle)} className='cursor-pointer'>
                    <div className="rounded-full border p-1 z-40 bg-white">
                        {toggle ? <> <ChevronLeft size={16} className='' /></> : <ChevronRight size={16} className='' />}
                    </div>
                </div>
            </div>

            <div className="flex flex-col   items-center mt-16">
                {
                    routes.map((route)=>
                    <SideBarItems  key={route.label} route={route.route} icon={route.icon} isActive={route.isActive} label={route.label} open={toggle}/>)
                }

            </div>
        </motion.div>
    );
}

export default SideBar;