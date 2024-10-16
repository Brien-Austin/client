import ChaptersList from '@/components/app/course/chapterslist';
import { getCourseById } from '@/utils/data/dummy';
import { Image } from 'lucide-react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Course: React.FC = () => {
  const { id } = useParams();
  const course = getCourseById(id!);
  const navigate = useNavigate();
    console.log(course)
  return (
    <main className="w-full h-screen bg-white sm:px-4 sm:py-2 mb-20">
      <h1 className='text-xl m font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-700'>
        {course?.title}
      </h1>
      <div className='mt-4'>
        {course?.imageurl ? null : (
          <div className='w-full h-48 border border-neutral-200 shadow-sm rounded-2xl bg-white flex justify-center items-center relative '>
       <div className="absolute top-0 left-0">
  <div className="flex flex-wrap items-center space-x-2 p-2">
    {course?.tags.map((t, i) => (
      <div key={i} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
        <h1 className="text-xs">{t.domain}</h1>
      </div>
    ))}
  </div>
</div>

<div className="absolute bottom-0 right-0">
  <div className="flex flex-wrap items-center space-x-4 p-2">
    {course?.tags.map((t, i) => (
      <div key={i} className='space-x-2'>
        {t.languages.map((l, j) => (
          <span key={j} className="text-xs bg-white border border-neutral-100 ring-1 ring-purple-500  text-purple-800 px-2 py-1 rounded-full mr-1">
            {l.name}
          </span>
        ))}
      </div>
    ))}
  </div>
</div>

            <Image className='text-neutral-400' size={30} />
          </div>
        )}
      </div>

      <div className="mt-4 text-sm text-neutral-700 font-medium">
        {course?.description}
      </div>

      {/* Chapters */}

      <section className='mt-6'>
        <h1 className='text-lg font-bold text-neutral-600'>
            Chapters
        </h1>

        <ChaptersList chapters={course?.chapters}/>
      </section>

      <section className="fixed bottom-0 bg-white w-full h-16 z-50 border shadow-sm p-2 border-neutral-100 left-0 flex justify-center items-center">
        <div className="flex justify-between w-full max-w-md space-x-2">
          <button onClick={() => { navigate(-1) }} className="px-3 py-2 w-full border ring-1 ring-purple-500 rounded-lg">
            <h1 className="text-purple-700 font-semibold">Back</h1>
          </button>

          <button className="px-3 py-2 w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg">
            Buy this course
          </button>
        </div>
      </section>
    </main>
  );
};

export default Course;
