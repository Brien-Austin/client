
import { useQuery } from "react-query";
import appApiClient from "@/utils/auth";
import { FETCH_COURSES } from "@/utils/constants";
import { Course as CourseType} from "@/types/api-return";
import Course   from "./course";

const CourseList = () => {

  const {data:courses,isFetched} = useQuery<CourseType[]>({
    queryKey : ['fetch courses'],
    queryFn : (async()=>{
      const response = await appApiClient.get(FETCH_COURSES)
      return response.data.courses

    })
  })

  console.log(courses)
  return (
    <section className="flex space-x-5 overflow-x-auto ">
      {
        isFetched ? <> {
          courses?.map((c,i)=>(
            <Course key={i} title={c.title} description={c.description!} id={c._id} imageurl={c.imageurl!} tags={c.tags!}/>
          ))
         }
       </> : 
       <div className="flex space-x-5 overflow-x-auto">
        <div className="flex-shrink-0 w-56 h-64  bg-neutral-50 animate-pulse rounded-md p-1 flex flex-col "/>
        <div className="flex-shrink-0 w-56 h-64  bg-neutral-50 animate-pulse rounded-md p-1 flex flex-col "/>
       </div>
      }
    </section>
  );
};

export default CourseList;
