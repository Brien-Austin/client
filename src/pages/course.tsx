import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { Image } from 'lucide-react';
import ChaptersList from '@/components/app/user/course/chapterslist';
import { Course as CourseType } from '@/types/api-return';
import appApiClient from '@/utils/auth';
import { USER_ENROLL_FREE_COURSE, USER_URL } from '@/utils/constants';
import { useAuth } from '@/hooks/useAuth';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';


const Course: React.FC = () => {
  const { id: courseId } = useParams();
  const {user} = useAuth()
  console.log(user)
  const FETCH_COURSE = USER_URL + `/course/${courseId}`;
  const navigate = useNavigate();

  const { data: course , isLoading} = useQuery<CourseType>({
    queryKey: ["fetch course by id", courseId],
    queryFn: async () => {
      const response = await appApiClient.get(FETCH_COURSE);
      return response.data.course;
    }
  });

  async function handleEnroll(free: boolean | undefined) {
    try {
      if (free) {
        const response = await appApiClient.post(`${USER_ENROLL_FREE_COURSE}/${courseId}`);
        console.log(response)
        toast.success("Enrolled successfully");
      }
    } catch (error) {
      console.log('[COURSE_ENROLL_ERROR]', error);
      
  
      const axiosError = error as AxiosError;
      
      if (axiosError.response) {
        
        switch (axiosError.response.status) {
          case 400:
            toast.error("User already enrolled");
            break;
          case 401:
            toast.error("Please login to enroll");
            break;
          case 403:
            toast.error("You don't have permission to enroll");
            break;
          default:
            toast.error("Error enrolling in course");
        }
      } else {
     
        toast.error("Unable to connect to server");
      }
    }
  }
  const isUserEnrolled = useMemo(() => {
    return courseId && user?.courses.some(enrolledCourse =>
      Array.isArray(enrolledCourse.course)
        ? enrolledCourse.course.some(c => c._id === courseId)
        : enrolledCourse.course._id === courseId
    );
  }, [courseId, user?.courses]);
  console.log(isUserEnrolled)

  return (
   <main>
    {isLoading ? <div className='flex flex-col px-5'>
      <div className="mt-6 w-full h-16 rounded-md bg-neutral-50 aimate-pulse"/>
      <div className="mt-6 w-full h-48 rounded-md bg-neutral-50 aimate-pulse"/>
      <div className="mt-6 w-full h-16 rounded-md bg-neutral-50 aimate-pulse"/>
      <div className="mt-6 w-2/5 h-10 rounded-md bg-neutral-50 aimate-pulse"/>
      <div className="mt-6 w-full h-24 rounded-md bg-neutral-50 aimate-pulse"/>
      <div className="mt-6 w-full h-24 rounded-md bg-neutral-50 aimate-pulse"/>
      <div className="mt-6 w-full h-24 rounded-md bg-neutral-50 aimate-pulse"/>
    </div> :  <article className="w-full min-h-screen bg-white sm:px-4 sm:py-4 mb-20">
      
      <header>
        <h1 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-700'>
          {course?.title}
        </h1>
      </header>

      <figure className='mt-4'>
        <div className='w-full h-48 border border-neutral-200 shadow-sm rounded-2xl bg-white flex justify-center items-center relative'>
         <img src={course?.imageurl}  className="h-full rounded-lg"alt="" />
          <div className="absolute top-0 left-0">
            <div className="flex flex-wrap items-center space-x-2 p-2">
              <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                <span className="text-xs">{course?.tags?.domain}</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0">
            <div className="flex flex-wrap items-center space-x-4 p-2">
              {course?.tags?.languages.slice(0,3).map((t, i) => (
                <div key={i} className='space-x-2'>
                  <span className="text-xs bg-white border border-neutral-100 ring-1 ring-purple-500 text-purple-800 px-2 py-1 rounded-full mr-1">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Image className='text-neutral-400' size={30} aria-label="Course image placeholder" />
        </div>
        <figcaption className="sr-only">Course cover image</figcaption>
      </figure>

      <section className="mt-4">
        <h2 className="sr-only">Course Description</h2>
        <p className="text-sm text-neutral-700 font-medium">
          {course?.description}
        </p>
      </section>

      <section className='mt-6'>
        <h2 className='text-lg font-bold text-neutral-600'>
          Chapters
        </h2>
       {course?.chapters &&  <ChaptersList chapters={course?.chapters} />}
      </section>

      <nav className="fixed bottom-0 bg-white w-full h-16 z-50 border shadow-sm p-2 border-neutral-100 left-0 flex justify-center items-center">
       {isUserEnrolled ? <div className='w-full px-3 py-2 text-white text-center rounded-full bg-gradient-to-r from-purple-600 to-purple-700 via-purple-500'>
        Continue Learning </div> :  <div className="flex justify-between w-full max-w-md space-x-2">
          <button onClick={() => navigate(-1)} className="px-3 py-2 w-full border ring-1 ring-purple-500 rounded-full">
            <span className="text-purple-700 font-semibold">Back</span>
          </button>
          <button onClick={()=>handleEnroll(course?.isFree)} className="px-3 py-2 w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-full">
           {
            course?.isFree ? <h1>Enroll</h1> : "Buy this course"
           }
          </button>
        </div> }
      </nav>
    </article>}
   </main>
  );
};

export default Course;