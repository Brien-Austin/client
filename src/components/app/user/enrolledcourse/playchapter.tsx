// PlayChapter.tsx
import VideoPlayer from "@/components/ui/videoplayer";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/store/store";
import { Chapter } from "@/types/api-return";
import appApiClient from "@/utils/auth";
import { USER_COMPLETE_CHAPTER, USER_FETCH_CHAPTER } from "@/utils/constants";
import { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";

const PlayChapter = () => {
  const { id } = useAppSelector((state) => state.enrolledCourse.currentChapter);
  const { data: chapter } = useQuery<Chapter>({
    queryKey: ['fetch-chapter', id],  
    queryFn: async () => {
      const response = await appApiClient.get(`${USER_FETCH_CHAPTER}/${id}`);
      return response.data.chapter;
    }
  });

  const [completed, setChapterCompleted] = useState<boolean>(false);
  console.log(chapter?.isCompleted)
  const {currentCourse, currentChapter} = useAppSelector((state)=>state.enrolledCourse)


  async function chapterCompletion() {
    try {
      
      const response = await appApiClient.post(`${USER_COMPLETE_CHAPTER}/${currentCourse}/${currentChapter.id}`)
      if(response){
        toast.success("Completed Chapter Successfully")
      }
    } catch (error) {
      console.log('[CHAPTER_COMPLETEION_ERROR]',error)
      toast.error('Error completing Chapter ')
    }

  }

  return (
    <main>
      <section className="px-5 py-5">
      {chapter?.videoUrl && (
        <VideoPlayer
          initialCompleted={completed}  // renamed prop to initialCompleted
          setChapterCompleted={setChapterCompleted}
          src={chapter.videoUrl}
        />
      )}

      <div className="mt-3">
        <h1 className="text-lg font-[600] text-purple-600">{chapter?.title}</h1>
        <h1 className="mt-3 text-muted-foreground text-xs">
          {chapter?.description}
        </h1>
      </div>
    </section>

    <nav className="fixed bottom-0 left-0 h-16 w-full  ">
      <div className="px-5 flex justify-between items-center">
        <button className="border rounded-full px-3 py-2 text-neutral-700">
          previous
        </button>
        <button onClick={chapterCompletion} className={cn("bg-purple-400/80 text-white px-3 py-2 rounded-full  ring-1 ring-gray-100", completed && "bg-gradient-to-r from-purple-600 via-purple-500  to-purple-700 ring-1 ring-purple-400")}>
          Mark as complete
        </button>

      </div>

    </nav>
    </main>
  );
};

export default PlayChapter;