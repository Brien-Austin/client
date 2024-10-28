import React from 'react'

interface GreetProps {
    name : string
}

const Greet:React.FC<GreetProps> = ({name}) => {
  return (
    <header className='  lg:text-3xl  text-slate-800 '>
        Hey , <span className='font-[400] text-lg'>{name}</span>
    </header>
  )
}

export default Greet