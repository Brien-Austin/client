import UserLayout from "@/components/app/layout/navbar/userLayout";
import { useAuth } from "@/hooks/useAuth";
import { getUserName } from "@/utils/get-username";





const Home = () => {

  const {user } = useAuth()
 
  




  if(user){
    console.log(user)
  }






  return (
    <UserLayout>
      <main  className="">
        <div className="m">
      <h1 className=" text-xl font-[900] text-neutral-600"> Welcome ,  <span className="font-extrabold text-xltracking-wider text-purple-700 drop-shadow-sm">{getUserName(user?.email)}!</span> </h1>
        </div>

        {/* <section className="mt-4 bg-white w-full h-16 shadow-sm rounded-md border border-gray-50">
          Get Started
        </section> */}
      </main>
    </UserLayout>
  );
};

export default Home;
