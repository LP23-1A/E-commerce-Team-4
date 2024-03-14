"use client";
import React, { useContext, useState } from "react";
import SignUppage3 from "@/components/SignUpPage3";
import SignUppage4 from "@/components/SignUpPage4";
import SignUppage2 from "@/components/SignUppage2";
import AdminContextProvider, { AdminContext } from "@/components/AdminContext";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

const page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const next = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setActiveIndex(activeIndex + 1);
    }, 1000);
  };
  const back = () => {
    setActiveIndex(activeIndex - 1);
  };
  const backSignup = () => {
    router.push("/");
  };
  return (
    <AdminContextProvider>
      {loading === false && activeIndex === 0 && (
        <SignUppage2 next={next} back={backSignup} />
      )}
      {activeIndex === 0 && loading === true ? (
        <Loading />
      ) : (
        loading === false &&
        activeIndex === 1 && <SignUppage3 next={next} back={back} />
      )}
      {activeIndex === 1 && loading === true ? (
        <Loading />
      ) : (
        activeIndex === 2 && <SignUppage4 back={back} />
      )}
    </AdminContextProvider>
  );
};

export default page;
