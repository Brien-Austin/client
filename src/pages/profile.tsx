import Greet from "@/components/app/user/layout/header";
import * as z from 'zod'
import UserLayout from "@/components/app/user/navbar/userLayout";
import CustomerSupport from "@/components/app/user/profile/CustomerSupport";
import EditProfile from "@/components/app/user/profile/EditProfile";
import LogOut from "@/components/app/user/profile/LogOut";
import UserData from "@/components/app/user/profile/userData";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useAuth } from "@/hooks/useAuth";
import { editProfileSchema } from "@/types/auth/userauth";
import appApiClient from "@/utils/auth";
import { USER_COMPLETE_PROFILE } from "@/utils/constants";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import MyCourses from "@/components/app/user/profile/MyCourses";

const Profile = () => {
  const { user, isLoading } = useAuth();
  console.log(user?.email);
  const router = useNavigate()
  const [loading,setIsLoading] = useState<boolean>(false)
  const [dialogOpen,setIsDialogOpen] = useState<boolean>(false)
const form = useForm<z.infer<typeof editProfileSchema>>({
  resolver: zodResolver(editProfileSchema),

});
const { errors , isValid,isSubmitting  } = form.formState;

const onSubmit = async (values: z.infer<typeof editProfileSchema>) => {
  try {
      setIsLoading(true)
    const response = await appApiClient.patch(USER_COMPLETE_PROFILE, values);
    const data = response.data;
    console.log(data);
    if(response.status === 200) {
      setIsLoading(false)
     setTimeout(()=>{
      setIsDialogOpen(false); 
     },1000)

      toast.success("Updated profile")
     setTimeout(()=>{
      router(0)
     },1500)
    }
  } catch (error) {
    console.log("][COMPLETE_PROFILE_ERROR] ", error);
    toast.error("Something went wrong");
  
    
  }
  finally{
      setIsLoading(false)
  }

};

  return (
    <UserLayout>
      <main>
        {isLoading ? (
          <div className="h-12 animate-pulse bg-neutral-50 " />
        ) : (
          <section>
           {user?.email &&  <Greet
              name={ user?.email }
            />}

            {user?.isProfileComplete ? (
              <>
                <UserData noOfCourses={user?.courses.length} completed={0} />
                
              {user.age && user.contactNumber &&   <EditProfile
                  age={user?.age}
                  contactNumber={user?.contactNumber}
                  username={user?.username}
                />}
                <MyCourses/>
                <CustomerSupport />
                <LogOut />
              </>
            ) : (
              <section className="mt-4 p-3 relative border border-neutral-50 rounded-lg shadow-sm">
                <h1 className="text-purple-700 font-medium">
                  Complete Profile
                </h1>
                <h1 className="text-xs mt-2 text-muted-foreground mb-5">
                  Your profile seems incomplete. Please complete your profile
                  for good course suggestions
                </h1>

             <Dialog open={dialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger>
              <button className="absolute right-0 bottom-0 px-3 py-2 bg-purple-600 rounded-tl-3xl rounded-br-lg flex items-center justify-center text-white">
                  <ChevronRight className="" />
                </button>
              </DialogTrigger>
              <DialogContent>
              <form
              action=""
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex mt-5 flex-col "
            >
              <input
              autoFocus
                {...form.register("username")}
                placeholder="Username"
                className=" px-3 mt-4 py-2 border w-full focus:outline-none focus:ring-1 focus:ring-purple-600 rounded-md"
                type="text"
              />
              {errors.username && (
                <p className="text-red-500 text-xs">
                  {errors.username.message}
                </p>
              )}
              <input
                {...form.register("age")} placeholder="Your age"
                className=" mt-4 px-3 py-2 border w-full focus:outline-none focus:ring-1 focus:ring-purple-600 rounded-md"
                type="text"
              />
              {errors.age && (
                <p className="text-red-500 text-xs">{errors.age.message}</p>
              )}
              <input placeholder="Contact Number"
                {...form.register("contactNumber")}
                className="mt-4 px-3 py-2 border w-full focus:outline-none focus:ring-1 focus:ring-purple-600 rounded-md"
                type="text"
              />
              {errors.contactNumber && (
                <p className="text-red-500 text-xs">
                  {errors.contactNumber.message}
                </p>
              )}
              <button
                type="submit" disabled={!isValid || isSubmitting||loading}
                className={cn(
                    "bg-gradient-to-r from-purple-600 to-purple-700 p-3 text-sm mt-4 rounded-md text-white  flex items-center justify-center",
                    (!isValid || isSubmitting || loading) && "opacity-50 cursor-not-allowed"
                )}
              >
                Save 
              </button>
            </form>
                
              </DialogContent>
             </Dialog>
              </section>
            )}
          </section>
        )}
      </main>
    </UserLayout>
  );
};

export default Profile;
