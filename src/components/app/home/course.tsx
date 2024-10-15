import { Image } from "lucide-react";
import React from "react";

interface CourseTags {
  domain: string;
  languages: {
    name: string;
  }[];
}
interface CourseProps {
  title: string;
  imageurl: string;
  description: string;
  tags: CourseTags[];
}

const Course: React.FC<CourseProps> = ({
  title,
  imageurl,
  description,
  tags,
}) => {
  console.log(tags)
  return (
    <section className="flex-shrink-0 w-56 h-64 border border-neutral-200 bg-white rounded-md p-1 flex flex-col shadow-sm ">
      {imageurl ? (
        <img src={imageurl} className="w-full shadow-sm h-3/6" alt="" />
      ) : (
        <div className="w-full h-3/6 border shadow-sm rounded-tr rounded-tl flex items-center justify-center">
          <Image className="text-neutral-400" size={28} />
        </div>
      )}
      <div className="mt-2 flex-grow">
        <h1 className="text-purple-600 font-[600]">{title}</h1>
        <h1 className="truncate text-muted-foreground text-xs mt-1">
          {description}
        </h1>
      </div>
      <div className="mt-4">
        <button className="flex justify-center items-center w-full py-2 text-white rounded-sm bg-gradient-to-b from-purple-500 to-purple-600">
          Enroll
        </button>
      </div>
    </section>
  );
};

export default Course;