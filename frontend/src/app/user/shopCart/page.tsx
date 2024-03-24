"use client";
import { OrderComplete, ShopCart } from "@/components";
import Footer from "@/components/Footer";
import NavbarUser from "@/components/NavbarUser";
import React from "react";

const page = () => {
  return (
    <div>
      <NavbarUser />
      <div className="flex gap-6 mt-[60px]">
        <div>
          <div className="w-[650px]">
            <div className="flex font-bold text-[20px] text-[#1D3178]">
              <p className="w-[300px]">Бүрэлдэхүүн</p>
              <p className="w-[100px]">Үнэ</p>
              <p className="w-[150px]">Тоо ширхэг</p>
              <p className="w-[100px]">Нийт</p>
            </div>
            <div className="flex flex-col gap-[20px] mt-[40px]">
              <ShopCart />
              <ShopCart />
              <ShopCart />
              <ShopCart />
            </div>
            <div className="flex justify-end mt-[20px]">
              <button className="bg-[#FB2E86] w-[173px] flex justify-center  px-4 py-2 text-white font-bold text-[14px] ">
                Kарт цэнэглэх
              </button>
            </div>
          </div>
        </div>
        <div className="w-[384px] flex flex-col">
          <p className="font-bold text-[20px] text-[#1D3178] flex justify-center">
            Нийт төлөх дүн
          </p>
          <div className="bg-[#F4F4FC] p-8 flex flex-col gap-4 mt-[40px]">
            <div className="flex justify-between">
              <p className="text-[18px] text-[#1D3178]">Нийлбэр:</p>
              <p className="text-[#1D3178] text-[18px] font-bold">750000₮</p>
            </div>
            <div className=" border-b-[2px] border-gray-200"></div>
            <div className="flex justify-between">
              <p className="text-[18px] text-[#1D3178]">Төлөх дүн:</p>
              <p className="text-[#1D3178] text-[18px] font-bold">750000₮</p>
            </div>
            <div className=" border-b-[2px] border-gray-200"></div>
            <button className="bg-[#19D16F] text-[16px] py-2 text-white font-bold">
              Худалдаж авах
            </button>
          </div>
        </div>
      </div>
      <OrderComplete />
      <Footer />
    </div>
  );
};

export default page;
