"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AdminContextProvider,
  SignUppage2,
  SignUppage3,
  SignUppage4,
} from "@/components";

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
    router.push("/");
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
