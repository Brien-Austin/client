import UserLayout from "@/components/app/user/navbar/userLayout";
import { useAuth } from "@/hooks/useAuth";
import { getUserName } from "@/utils/get-username";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import CourseList from "@/components/app/user/home/courselist";
import CategoryList from "@/components/app/user/home/catergorylist";

import { getUserAccessToken } from "@/utils/localstorage";

const Home = () => {
  const { user, isLoading } = useAuth();
  const router = useNavigate();
  const location = useLocation();

 
useEffect(()=>{
  setTimeout(()=>{
 
    const queryParams = new URLSearchParams(location.search);
    const accessToken = queryParams.get('accessToken');
    const refreshToken = queryParams.get('refreshToken');
  
    if (accessToken && refreshToken) {
      // Store tokens in local storage
      localStorage.setItem('userAccessToken', accessToken);
      localStorage.setItem('userRefreshToken', refreshToken);
  
      // Remove the tokens from the URL
      const newUrl = window.location.pathname; // Only keep the path without query parameters
      window.history.replaceState({}, document.title, newUrl);

   
  }},1000)
    
},[location.search])
  
  const at = getUserAccessToken()
  console.log('Access Token',at)
  
  console.log('User : ',user)
 

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
                {user?.email && getUserName(user?.email)}!
              </span>{" "}
            </h1>
          )}
        </section>

        <section className="mt-6">
          <div className="flex justify-between items-center">
          <h1 className="text-neutral-600 font-[900] text-xl drop-shadow-sm ">
           Courses
          </h1>
          {/* <div className="sm:block lg:hidden text-sm text-white bg-purple-600  rounded-full p-1 font-semibold">
            <ChevronRight size={16}/>
          </div> */}
          </div>
         

          <div className="mt-2">
          <CategoryList/>
            <CourseList/>

          </div>
        </section>

        {/* <section className="mt-6">
        <h1 className="text-neutral-600 font-[900] text-xl drop-shadow-sm ">
        
          </h1>
       
        </section> */}
  

      </main>
    </UserLayout>
  );
};

export default Home;
