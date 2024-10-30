import React from "react";

const EnrolledCourseLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>
    <nav className="fixed bottom-0 w-full h-14 bg-gray-100" >
        <div className="px-5">
            
        </div>
        
    </nav >
    {children}
  </main>
};

export default EnrolledCourseLayout;
