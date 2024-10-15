import UserLayout from "@/components/app/layout/navbar/userLayout";
import { useAuth } from "@/hooks/useAuth";
import { getUserName } from "@/utils/get-username";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CourseList from "@/components/app/home/courselist";

const Home = () => {
  const { user, isLoading } = useAuth();
  const router = useNavigate();
 

  useEffect(() => {
    if (!user && !isLoading) {
      router("/auth", { replace: true });
    }
  }, [router, user, isLoading]);

  return (
    <UserLayout>
      <main className=" w-full h-full  ">
        <section className="">
          {isLoading ? (
            <div className="h-12  animate-pulse bg-slate-50 rounded col-span-2"></div>
          ) : (
            <h1 className=" text-sm font-medium text-neutral-600 m">
              {" "}
              Welcome <br />{" "}
              <span className=" font-bold to-purple-600 text-xl">
                {getUserName(user?.email)}!
              </span>{" "}
            </h1>
          )}
        </section>

        <section className="mt-6">
          <h1 className="text-neutral-600 font-bold text-xl drop-shadow-sm ">
           Courses
          </h1>

          <div className="mt-2">
            <CourseList/>

          </div>
        </section>

        <section className="mt-6">
        <h1 className="text-neutral-600 font-bold text-xl drop-shadow-sm ">
           Explore by Categories
           
          </h1>
        </section>
  

      </main>
    </UserLayout>
  );
};

export default Home;
