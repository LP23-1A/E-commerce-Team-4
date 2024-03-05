"use client";
import AdminContextProvider from "@/components/AdminContext";
import SignUppage3 from "@/components/SignUpPage3";
import SignUppage4 from "@/components/SignUpPage4";
import SignUppage1 from "@/components/SignUppage1";
import SignUppage2 from "@/components/SignUppage2";
import React, { useState } from "react";

const page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const next = () => {
    setActiveIndex(activeIndex + 1);
  };
  const back = () => {
    setActiveIndex(activeIndex - 1);
  };
  return (
    <AdminContextProvider>
      {activeIndex === 0 && <SignUppage1 next={next} />}
      {activeIndex === 1 && <SignUppage2 next={next} back={back} />}
      {activeIndex === 2 && <SignUppage3 next={next} back={back} />}
      {activeIndex === 3 && <SignUppage4 back={back} />}
    </AdminContextProvider>
  );
};

export default page;
