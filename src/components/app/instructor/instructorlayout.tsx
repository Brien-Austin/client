import React, { useEffect, useState } from "react";

import clsx from "clsx";

import { getInstructorAccessToken } from "@/utils/localstorage";
import { useNavigate } from "react-router-dom";

import { AuthState } from "@/types/auth/userauth";
import InstructorRegister from "./register";
import InstructorLogin from "./login";
import InstructorSideBar from "../user/navbar/instructorsidebar";
import {  useSidebar } from "@/context/sidebarcontext";
const InstructorLayout = ({ children }: { children: React.ReactNode }) => {
  const { toggle ,setToggle} = useSidebar();
  
  const [authState, setAuthState] = React.useState<AuthState>("Register");
  const [notLoggedIn, setNotLoggedIn] = useState<boolean>(false);
  const instructorAt = getInstructorAccessToken();
  console.log(instructorAt);
  const navigate = useNavigate();

  useEffect(() => {
    if (!instructorAt) {
      setNotLoggedIn(true);
    }
  }, [instructorAt, navigate]);
  return (
    <>

        {notLoggedIn ? (
          <div>
            {authState === "Register" ? (
              <InstructorRegister setAuthState={setAuthState} />
            ) : (
              <InstructorLogin setAuthState={setAuthState} />
            )}
          </div>
        ) : (
          <div>
            <InstructorSideBar toggle={toggle} setToggle={setToggle} />

            <div className={clsx("ml-20 transition px-5", toggle && "ml-56 ")}>
              {children}
            </div>
          </div>
        )}
  
    </>
  );
};

export default InstructorLayout;
