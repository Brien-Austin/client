import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { Image } from 'lucide-react';
import ChaptersList from '@/components/app/user/course/chapterslist';
import { Course as CourseType } from '@/types/api-return';
import appApiClient from '@/utils/auth';
import { USER_URL } from '@/utils/constants';
import { useAuth } from '@/hooks/useAuth';

const Course: React.FC = () => {
  const { id: courseId } = useParams();
  const {user} = useAuth()
  console.log(user)
  const FETCH_COURSE = USER_URL + `/course/${courseId}`;
  const navigate = useNavigate();

  const { data: course } = useQuery<CourseType>({
    queryKey: ["fetch course by id", courseId],
    queryFn: async () => {
      const response = await appApiClient.get(FETCH_COURSE);
      return response.data.course;
    }
  });

  return (
    <article className="w-full min-h-screen bg-white sm:px-4 sm:py-4 pb-20">
      <header>
        <h1 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-700'>
          {course?.title}
        </h1>
      </header>

      <figure className='mt-4'>
        <div className='w-full h-48 border border-neutral-200 shadow-sm rounded-2xl bg-white flex justify-center items-center relative'>
          <div className="absolute top-0 left-0">
            <div className="flex flex-wrap items-center space-x-2 p-2">
              <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                <span className="text-xs">{course?.tags?.domain}</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0">
            <div className="flex flex-wrap items-center space-x-4 p-2">
              {course?.tags?.languages.map((t, i) => (
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
        <ChaptersList chapters={course?.chapters} />
      </section>

      <nav className="fixed bottom-0 bg-white w-full h-16 z-50 border shadow-sm p-2 border-neutral-100 left-0 flex justify-center items-center">
        <div className="flex justify-between w-full max-w-md space-x-2">
          <button onClick={() => navigate(-1)} className="px-3 py-2 w-full border ring-1 ring-purple-500 rounded-lg">
            <span className="text-purple-700 font-semibold">Back</span>
          </button>
          <button className="px-3 py-2 w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg">
           {
            course?.isFree ? <h1>Enroll</h1> : "Buy this course"
           }
          </button>
        </div>
      </nav>
    </article>
  );
};

export default Course;