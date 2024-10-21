import InstructorItem from "@/components/app/user/instructor/instructorItem";
import { InstructorType } from "@/types/auth/userauth";
import appApiClient from "@/utils/auth";
import { FETCH_INSTRUCTORS } from "@/utils/constants";
import { getUserName } from "@/utils/get-username";
import { ChevronLeft } from "lucide-react";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const Instructors: React.FC = () => {
  const navigate = useNavigate();
  const { data: instructors, isLoading } = useQuery<InstructorType[]>({
    queryKey: "Fetch Instructors",
    queryFn: async () => {
      const response = await appApiClient.get(FETCH_INSTRUCTORS);
      return response.data?.instructors;
    },
    cacheTime: 10 * 60 * 1000,
  });

  console.log(instructors);

  return (
    <main>
      <header className="fixed top-0 w-full left-0 flex px-5 py-3 z-50 space-x-3 items-center z-50 bg-white shadow-sm   backdrop-blur-md">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className=" border border-neutral-50 shadow-sm flex justify-center items-center p-2 rounded-md text-purple-600"
        >
          <ChevronLeft />
        </button>
        <div className="flex flex-col">
          <h1 className="text-lg text-purple-700 font-[700] tracking-wide">
            Instructors of Acquel
          </h1>
          <h1 className="text-sm ">The course creators of our platform</h1>
        </div>
      </header>

      <section className="flex  mb-20 flex-col space-y-10 px-5 mt-24">
        {!isLoading && instructors ? (
          <>
            {" "}
            {instructors?.map((prof, i) => (
              <InstructorItem
                key={i}
                noOfCourses={prof.courses.length!}
                profileUrl={prof.profileUrl}
                name={getUserName(prof.email)!}
                email={prof.email}
                verified={prof.canCreateCourse}
              />
            ))}
          </>
        ) : (
          <div className="flex flex-col space-y-10">
            <div className="w-full h-24 rounded-lg bg-neutral-50 animate-pulse" />
            <div className="w-full h-24 rounded-lg bg-neutral-50 animate-pulse" />

            <div className="w-full h-24 rounded-lg bg-neutral-50 animate-pulse" />
            <div className="w-full h-24 rounded-lg bg-neutral-50 animate-pulse"/>


            <div className="w-full h-24 rounded-lg bg-neutral-50 animate-pulse" />
          </div>
        )}
      </section>
    </main>
  );
};

export default Instructors;
