
import { cn } from '@/lib/utils'
import { ChevronDown, ChevronUp, LucideIcon } from 'lucide-react'


import React, { useState } from 'react'
import { IconType } from 'react-icons'
import { Link, useLocation } from 'react-router-dom'

interface SideBarChildren {
  route: string
  isActive?: boolean
  label: string,
  icon: LucideIcon | IconType
}

interface SideBarItemProps {
  route: string
  isActive?: boolean
  label: string,
  icon: LucideIcon | IconType,
  childSideOptions?: SideBarChildren[]
  open: boolean
}

const SideBarItems: React.FC<SideBarItemProps> = ({
  route: href, label, isActive, icon: Icon, open, childSideOptions
}) => {
  const pathname = useLocation().pathname
  const [showChild, setShowChild] = useState<boolean>(false)

  const handleShowChildItems = () => setShowChild(!showChild)
  

  return (
    <>
      {open ? (
        <>
          <Link to={href} className={cn(
            "cursor-pointer w-full h-full whitespace-nowrap mb-0 flex items-center p-4 hover:bg-purple-50 text-slate-500 hover:text-purple-600 gap-2 text-sm",
            isActive && 'bg-purple-50 border-r-[3px] border-purple-500 text-purple-600'
          )}>
            <Icon size={20} />
            <div className="flex justify-between items-center w-full">
              <h1 className='cursor-pointer'>{label}</h1>
              {childSideOptions && (
                showChild ? (
                  <ChevronUp
                    onClick={handleShowChildItems}
                    className='rounded p-1 bg-purple-500 text-white'
                    strokeWidth={3}
                    size={20}
                  />
                ) : (
                  <ChevronDown
                    onClick={handleShowChildItems}
                    className='rounded p-1 bg-purple-500 text-white'
                    strokeWidth={3}
                    size={20}
                  />
                )
              )}
            </div>
          </Link>
          {childSideOptions && showChild && (
            <div className='flex flex-col gap-2 mt-2 ml-4'>
              {childSideOptions.map((c, i) => (
                <Link
                  key={i}
                  to={c.route}
                  className={cn(
                    "border border-neutral-100 shadow-sm rounded-md cursor-pointer w-full h-full whitespace-nowrap mb-0 flex items-center px-2 py-1 hover:text-purple-600 gap-2 text-sm",
                    c.route === pathname && 'bg-slate-50 border-purple-500 text-purple-600'
                  )}>
                  <c.icon size={14} />
                  {c.label}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link to={href} className={cn(
          'p-3 rounded-xl mb-4 bg-neutral-50 border text-neutral-600 border-neutral-50 shadow-sm hover:bg-purple-500 hover:text-white',
          isActive && 'bg-purple-600 text-white'
        )}>
          <Icon size={20} />
        </Link>
      )}
    </>
  )
}

export default SideBarItems;