"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Down, ToLeft } from "@/images";
import { AsideBar, Navbar } from "@/components";

const API = "http://localhost:8000/order/one";

const page = () => {
  const orderId = JSON.parse(localStorage.getItem("orderId") as string);
  const [data, setData] = useState<string[] | any>([]);
  const getOrderData = async () => {
    try {
      const get = await axios.post(API, { _id: orderId.id });
      setData(get.data.getOneOrder);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrderData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex mx-auto w-[1440px]">
        <AsideBar />
        <div className="flex flex-col w-full">
          <div className="flex gap-10 items-center">
            <button className="flex h-14 w-14 items-center justify-center">
              <ToLeft />
            </button>
            <h1 className="text-xl">Захиалгын дэлгэрэнгүй</h1>
          </div>
          <div className="flex bg-[#F0F0F0] w-full h-screen p-9 justify-between">
            <div className="flex bg-white w-[540px] rounded-xl p-6">
              <div className="flex flex-col w-full gap-5">
                <div className="flex justify-between w-full">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-gray-700">Захиалгын ID дугаар:</h1>
                    <p className="font-semibold">#{data.orderNumber}</p>
                  </div>
                  <div>
                    <button className="flex gap-3 border rounded-3xl p-1 px-4 text-gray-700">
                      Шинэ захиалга <Down />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-gray-700">Захиалагч: Хувь хүн</h1>
                  <div className="flex gap-1">
                    <p className="font-semibold">{data.userId?.name}-</p>
                    <p>
                      {data.userId?.email}, {data.userId?.phoneNumber}
                    </p>
                  </div>
                </div>
                {data.details?.map((e: any) => {
                  return (
                    <div className="flex bg-gray-100 h-40 w-full rounded-xl">
                      <img src={e.images.src} alt="" />
                      <div className="h-full w-[185px] bg-black rounded-l-xl"></div>
                      <div className="flex flex-col p-3 justify-between w-full">
                        <h1 className="font-semibold text-xl text-black">
                          {e.productName}
                        </h1>
                        <div className="my-3">
                          <p>{e.createdAt.slice(0, 10)}</p>
                          <p>Бүтээгдэхүүний ID: {e._id.slice(0, 10)}</p>
                        </div>
                        <div className="flex justify-between">
                          <p>Тоо ширхэг:3 * ₮{data.amountPaid}</p>
                          <p className="font-semibold">
                            ₮{3 * data.amountPaid}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div></div>
            </div>
            <div className="flex w-[540px] h-fit flex-col gap-5">
              <div className="rounded-xl bg-white w-full">
                <div className="p-7 border-b-2 pb-6">
                  <h1>Хүргэлтийн мэдээлэл</h1>
                </div>
                <div className="p-7">
                  <p>Гэр:</p>
                  <p className="font-semibold">
                    {data.userId?.city},{data.userId?.district},
                    {data.userId?.khoroo},14-р байр,8-р орц,6 давхар
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-white w-full">
                <div className="p-7 border-b-2 pb-6">
                  <h1>Төлбөрийн мэдээлэл</h1>
                </div>
                <div className="p-7">
                  <p>Бүтээгдэхүүн:</p>
                  <div className="flex flex-col gap-3"></div>
                  <hr className="my-5" />
                  <div className="flex justify-between items-center font-semibold">
                    <p>Нийт төлсөн дүн</p>
                    <p>₮{3 * data?.amountPaid}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
