"use client";
import { Footer, NavbarUser, PurchaseCart, PurchaseField } from "@/components";

import React from "react";

const page = () => {
  return (
    <div>
      <NavbarUser />
      <div className="flex w-[1440px] m-auto">
        <PurchaseField />
        <div className="my-[200px] flex flex-col">
          <div className="flex flex-col gap-[20px]">
            <PurchaseCart />
            <PurchaseCart />
            <PurchaseCart />
            <PurchaseCart />
          </div>
          <div className="bg-[#F4F4FC] p-8 mt-[20px] flex flex-col ">
            <div className="flex justify-between  ">
              <p className="text-[#1D3178] ">Нийлбэр:</p>
              <p className="text-[#151878] text-[18px] font-bold">750’000₮</p>
            </div>
            <div className=" border-b-[2px] mt-[10px] border-[#E1E1E4]"></div>
            <div className="flex justify-between mt-4">
              <p className="text-[#1D3178] ">Төлөх дүн:</p>
              <p className="text-[#151878] text-[18px] font-bold">750’000₮</p>
            </div>
            <div className=" border-b-[2px] mt-[10px] border-[#E1E1E4]"></div>
            <button className="text-white bg-[#19D16F] w-full py-3 rounded mt-5">
              Худалдан авах
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
