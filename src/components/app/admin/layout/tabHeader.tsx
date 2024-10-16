
interface TabHederProps {
    title : string
}

const TabHeader:React.FC<TabHederProps> = ({title}) => {
  return <h1 className="text-2xl pt-5 px-5 font-[900] text-neutral-600">
    {title}
  </h1>
  
}

export default TabHeader