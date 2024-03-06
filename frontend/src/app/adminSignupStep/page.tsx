"use client";
import React, { useState } from "react";
import SignUppage3 from "@/components/SignUpPage3";
import SignUppage4 from "@/components/SignUpPage4";
import SignUppage1 from "@/components/SignUppage1";
import SignUppage2 from "@/components/SignUppage2";
import AdminContextProvider from "@/components/AdminContext";
import { useRouter } from "next/navigation";

const page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const next = () => {
    setActiveIndex(activeIndex + 1);
  };
  const back = () => {
    setActiveIndex(activeIndex - 1);
  };
  const backSignup = () => {
    router.push("/adminSignup");
  };
  return (
    <AdminContextProvider>
      {activeIndex === 0 && <SignUppage2 next={next} back={backSignup} />}
      {activeIndex === 1 && <SignUppage3 next={next} back={back} />}
      {activeIndex === 2 && <SignUppage4 back={back} />}
    </AdminContextProvider>
  );
};

export default page;
