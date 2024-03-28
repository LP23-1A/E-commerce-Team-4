"use client";
import {
  Carousel,
  Footer,
  NavbarUser,
  New,
  Ontsloh,
  Service,
} from "@/components";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const page = () => {
  const router = useRouter();
  useEffect(() => {
    const rawJson: string | null = localStorage.getItem("userEmail");
    const user = rawJson && JSON.parse(rawJson);

    if (!user) {
      router.push("/user/login");
      toast.error("Та нэвтэрнэ үү.");
      return;
    }
  }, []);
  return (
    <div>
      <NavbarUser />
      <Carousel />
      <div className="px-[202px] py-[100px] flex flex-col gap-[100px]">
        <Ontsloh />
        <New />
      </div>
      <Service />
      <Footer />
    </div>
  );
};

export default page;
