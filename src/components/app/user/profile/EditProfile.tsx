import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Cake,  PencilIcon, Phone, UserRound } from "lucide-react";
import React from "react";

interface EditProfileProps {
    age : number,
    contactNumber : number,
    username : string
}
const EditProfile: React.FC<EditProfileProps> = ({age,contactNumber,username}) => {
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

        <Dialog>
            <DialogTrigger>
            <button className="absolute right-0 bottom-0 px-3 py-2 bg-purple-600 rounded-tl-3xl rounded-br-lg flex items-center justify-center text-white">
        <PencilIcon size={14} className="" />
      </button>
            </DialogTrigger>

            <DialogContent  className="w-[90%]">
                Hey
            </DialogContent>
        </Dialog>
       
      </div>{" "}
  
    </section>
  );
};

export default EditProfile;
