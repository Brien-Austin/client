import React from "react"


interface UserDataProps {
    noOfCourses : number,
    completed : number
}
const UserData:React.FC<UserDataProps> = ({noOfCourses,completed}) => {
  return (
    <section className="flex items-center justify-between border p-3 sm:mt-4 lg:mt-8 rounded-lg">
        <div className="flex flex-col items-center space-y-2">
            <h1 className="sm:text-lg lg:text-xl text-purple-700 font-[900]">{noOfCourses}</h1>
            <h1 className="text-neutral-700 sm:text-sm lg:text-lg">Ongoing courses</h1>
        </div>
        <div className="flex flex-col items-center space-y-2 ">
            <h1 className="sm:text-lg lg:text-xl text-purple-700  font-[900]">{completed}</h1>
            <h1 className="text-neutral-700 sm:text-sm lg:text-lg">Completed</h1>
        </div>

    </section>
  )
}

export default UserData