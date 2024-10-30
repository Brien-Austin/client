import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { editProfileSchema } from "@/types/auth/userauth";
import appApiClient from "@/utils/auth";
import { USER_COMPLETE_PROFILE } from "@/utils/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Cake, PencilIcon, Phone, UserRound } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

interface EditProfileProps {
  age: number;
  contactNumber: number;
  username: string;
}
const EditProfile: React.FC<EditProfileProps> = ({
  age,
  contactNumber,
  username,
}) => {
    const router = useNavigate()
    const [loading,setIsLoading] = useState<boolean>(false)
    const [dialogOpen,setIsDialogOpen] = useState<boolean>(false)
  const form = useForm<z.infer<typeof editProfileSchema>>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: { age, contactNumber, username },
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
    <section className="mt-4 p-5 border  rounded-lg gap-2 border-neutral-100 shadow-sm relative">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center gap-2">
          <UserRound size={20} className="text-purple-600" /> {username}
        </div>
        <div className="flex items-center gap-2">
          <Cake size={20} className="text-purple-600" /> {age}
        </div>
        <div className="flex items-center gap-2">
          <Phone size={20} className="text-purple-600" /> {contactNumber}
        </div>

        <Dialog open={dialogOpen} onOpenChange={setIsDialogOpen} >
          <DialogTrigger>
            <button  className="absolute right-0 bottom-0 px-3 py-2 bg-purple-600 rounded-tl-3xl rounded-br-lg flex items-center justify-center text-white">
              <PencilIcon size={14} className="" />
            </button>
          </DialogTrigger>

          <DialogContent  className="w-[90%]">
            <form
              action=""
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex mt-5 flex-col "
            >
              <input
                {...form.register("username")}
                className=" px-3 mt-4 py-2 border w-full"
                type="text"
              />
              {errors.username && (
                <p className="text-red-500 text-xs">
                  {errors.username.message}
                </p>
              )}
              <input
                {...form.register("age")}
                className=" mt-4 px-3 py-2 border w-full"
                type="text"
              />
              {errors.age && (
                <p className="text-red-500 text-xs">{errors.age.message}</p>
              )}
              <input
                {...form.register("contactNumber")}
                className="mt-4 px-3 py-2 border w-full"
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
                Save Changes
              </button>
            </form>
          </DialogContent>
        </Dialog>
      </div>{" "}
    </section>
  );
};

export default EditProfile;
