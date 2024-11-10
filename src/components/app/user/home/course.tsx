import { useAuth } from "@/hooks/useAuth";
import { setCurrentCourse} from "@/store/slice/course";
import { useAppDispatch } from "@/store/store";
import { Chapter, Tag } from "@/types/api-return";
import { Image } from "lucide-react";
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

interface CourseProps {
  id: string;
  title: string;
  imageurl: string;
  description: string;
  tags: Tag;
  chapters: Chapter[]; 
}

const Course: React.FC<CourseProps> = ({
  id,
  title,
  imageurl,
  description,
  tags,
  chapters,
}) => {
  console.log(tags)
  const { user } = useAuth();
  const navigate = useNavigate();


  const isUserEnrolled = useMemo(() => {
    return (
      id &&
      user?.courses.some((enrolledCourse) =>
        Array.isArray(enrolledCourse.course)
          ? enrolledCourse.course.some((c) => c._id === id)
          : enrolledCourse.course._id === id
      )
    );
  }, [id, user?.courses]);
  const dispatch = useAppDispatch()
  const enrolledCourse =() => {
    dispatch(setCurrentCourse(id))
    navigate(`mycourses/course/${id}`);
  }


  const progressPercentage = useMemo(() => {
    if (!isUserEnrolled || !user?.courses || !chapters) return 0;

    const currentCourse = user.courses.find((c) =>
      Array.isArray(c.course)
        ? c.course.some((course) => course._id === id)
        : c.course._id === id
    );

    if (!currentCourse) return 0;

    

    const completedChaptersCount = currentCourse.completedChapters.length;
    const totalChaptersCount = chapters.length;

    return totalChaptersCount > 0
      ? Math.round((completedChaptersCount / totalChaptersCount) * 100)
      : 0;
  }, [id, user?.courses, chapters, isUserEnrolled]);
  const isFull = progressPercentage === 100
    console.log(title, isFull)

  return (
    <section className="sm:flex-shrink-0 sm:w-full sm:h-72 lg:h-80  lg:w-full   lg:h-48 border border-neutral-200 bg-white rounded-md p-1 sm:flex sm:flex-col sm:shadow-sm">
      {imageurl ? (
        <img
          src={imageurl}
          className="rounded-lg w-full shadow-sm h-3/6"
          alt=""
        />
      ) : (
        <div className="w-full h-3/6 border shadow-sm rounded-tr rounded-tl flex items-center justify-center">
          <Image className="text-neutral-400" size={28} />
        </div>
      )}
      <div className="mt-2 flex-grow">
        <h1 className="text-purple-600 font-[600] line-clamp-1">{title}</h1>
        <h1 className="truncate text-muted-foreground text-xs mt-1">
          {description}
        </h1>
        {isUserEnrolled && (
          <div className="mt-2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <p className="text-xs text-gray-600 mt-1 ">
              {progressPercentage}% Complete
            </p>
          </div>
        )}
      </div>
      <div className="mt-2">
        {isUserEnrolled ? (
          <button
            onClick={enrolledCourse}
            className="flex justify-center items-center w-full py-2 text-white rounded-sm bg-gradient-to-b from-purple-500 to-purple-600"
          >
          {isFull ? <>Download certificates</> : <>Continue Learning</>}
          </button>
        ) : (
          <button
            onClick={() => {
              navigate(`/course/${id}`);
            }}
            className="flex justify-center items-center w-full py-2 text-white rounded-sm bg-gradient-to-b from-purple-500 to-purple-600"
          >
            View Details
          </button>
        )}
      </div>
    </section>
  );
};

export default Course;