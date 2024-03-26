"use client";
import { Footer, NavbarUser, ShopCart, UserOrderContext } from "@/components";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const API = "http://localhost:8000/products/one";
const page = () => {
  const { orderData, data, setData }: any = useContext(UserOrderContext);
  const [data1, setData1] = useState([]);
  const handler = async () => {
    try {
      const order = await axios.post(API, { id: data[0] });
      console.log(order);
      const a = order?.data.getData;
      setData1((prev) => ({ ...prev }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handler();
  }, []);
  return (
    <div className="">
      <NavbarUser />
      <div className="flex my-[80px] justify-between w-[1440px] mx-auto">
        <div>
          <div className="w-fit">
            <div className="flex font-bold text-[20px] text-[#1D3178]">
              <p className="w-[300px]">Бүрэлдэхүүн</p>
              <p className="w-[240px]">Үнэ</p>
              <p className="w-[250px]">Тоо ширхэг</p>
              <p className="w-fit">Нийт</p>
            </div>
            {/* <p>{data.price}</p> */}
            <div className="flex flex-col gap-[20px] mt-[40px]">
              {/* {data1 &&
                data1.a.map((e: any) => {
                  return (
                    <div>
                      <ShopCart data={e} />
                    </div>
                  );
                })} */}
            </div>
            <div className="flex justify-end mt-[20px]">
              <button className="bg-[#FB2E86] w-[173px] flex justify-center px-4 py-2 text-white font-bold text-[14px] ">
                Kарт цэнэглэх
              </button>
            </div>
          </div>
        </div>
        <div className="w-[420px] flex flex-col">
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
      <Footer />
    </div>
  );
};

export default page;
