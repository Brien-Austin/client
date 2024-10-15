import { courses } from "@/utils/data/dummy";
import Course from "./course";

const CourseList = () => {
  return (
    <section className="flex space-x-5 overflow-x-auto ">
      {courses.map((c, i) => (
        <Course key={i} 
        title={c.title} tags={c.tags} imageurl={c.imageurl} description={c.description}/>
      ))}
    </section>
  );
};

export default CourseList;
