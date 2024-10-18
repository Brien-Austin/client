import CreateCourse from "@/components/app/admin/create-course/createcourse";
import Adminlayout from "@/components/app/admin/layout/adminlayout";
import TabHeader from "@/components/app/admin/layout/tabHeader";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const AdminCourses = () => {
  const [createCourse, setCreateCourse] = useState<boolean>(false);
  const subHeader = new Map<number,string>();
  if(createCourse){
    subHeader.set(1,"Create")
  }

  console.log(createCourse);
  return (
    <Adminlayout>
      <TabHeader title="Courses" subHeader={subHeader} />
      <section>
        {createCourse ? (
          <CreateCourse setCreate={setCreateCourse} create={createCourse} />
        ) : (
          <div className="w-full border border-neutral-200 shadow-sm rounded-md p-6 mt-4 flex items-center justify-between">
            <h1>Create a course</h1>
            <button
              onClick={() => {
                setCreateCourse(true);
              }}
              className="rounded-md px-3 py-2 bg-gradient-to-b from-purple-500 to-purple-600 text-white flex items-center gap-2"
            >
              Create <ChevronRight size={16} />{" "}
            </button>
          </div>
        )}
      </section>
    </Adminlayout>
  );
};

export default AdminCourses;
