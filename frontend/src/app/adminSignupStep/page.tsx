"use client";
import SignUppage3 from "@/components/SignUpPage3";
import SignUppage4 from "@/components/SignUpPage4";
import SignUppage1 from "@/components/SignUppage1";
import SignUppage2 from "@/components/SignUppage2";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
export const AdminContext = createContext([]);
type EmailType = {
  email: String;
};
// const API = "http://localhost:8000/admin";
const page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  //   const createAdmin = async () => {
  //     try {
  //       const create = await axios.post(API, {
  //         email: data.email,
  //       });
  //       console.log(create);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   useEffect(() => {
  //     createAdmin();
  //   });
  const handler = () => {
    setActiveIndex(activeIndex + 1);
  };
  const back = () => {
    setActiveIndex(activeIndex - 1);
  };

  return (
    <AdminContext.Provider value={{ data, setData }}>
      <div>
        {activeIndex === 0 && <SignUppage1 skip={handler} />}
        {activeIndex === 1 && <SignUppage2 skip={handler} back={back} />}
        {activeIndex === 2 && <SignUppage3 skip={handler} back={back} />}
        {activeIndex === 3 && <SignUppage4 back={back} />}
      </div>
    </AdminContext.Provider>
  );
};

export default page;
