import UserLayout from "@/components/app/layout/navbar/userLayout";
import { useAuth } from "@/hooks/useAuth";



const Home = () => {

  const {user } = useAuth()
  




  if(user){
    console.log(user)
  }






  return (
    <UserLayout>
      <main>{user?.email}</main>
    </UserLayout>
  );
};

export default Home;
