"use client";
import { Footer, NavbarUser, PathUser, ProductUserDetail } from "@/components";
import React from "react";

const page = () => {
  return (
    <div>
      <NavbarUser />
      <PathUser />
      <div className="flex flex-col gap-10 w-[1440px] mx-auto">
        <div className="flex flex-col gap-1 mt-20">
          <h1 className="text-xl text-[#151886] font-bold">Электрон бараа</h1>
          <p className="text-[#8A8FB9]">125 бүтээгдэхүүн</p>
        </div>
        <ProductUserDetail />
      </div>
      <Footer />
    </div>
  );
};

export default page;
