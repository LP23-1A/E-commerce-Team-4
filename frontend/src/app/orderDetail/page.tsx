"use client";
import AsideBar from "@/components/AsideBar";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import ToLeft from "../../images/ToLeft";
import Down from "@/images/Down";
import axios from "axios";
import Loading from "@/components/Loading";
const API = "http://localhost:8000/order/one";
const page = () => {
  const orderId = JSON.parse(localStorage.getItem("orderId") as string);
  const [data, setData] = useState<string[] | any>([]);
  const [details, setDetails] = useState<string[] | any>([]);
  const [user, setUser] = useState<string[] | any>([]);
  const [loading, setLoading] = useState(false);

  const getOrderData = async () => {
    try {
      const get = await axios.post(API, { _id: orderId.id });
      setData(get.data.getOneOrder);
      setDetails(get.data.getOneOrder.details);
      setUser(get.data.getOneOrder.userId);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  const pr = details.price * details.viewsCount;

  useEffect(() => {
    getOrderData();
    // localStorage.removeItem("orderId");
  }, []);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  console.log(details, "d");

  return (
    <div>
      {loading === true ? (
        <Loading />
      ) : (
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
                        <p className="font-semibold">{user.name}-</p>
                        <p>
                          {user.email}, {data.phoneNumber}
                        </p>
                      </div>
                    </div>
                    <div className="flex bg-gray-100 h-40 w-full rounded-xl">
                      <img src={""} alt="" />
                      <div className="h-full w-[185px] bg-black rounded-l-xl"></div>
                      <div className="flex flex-col p-3 justify-between w-full">
                        <h1 className="font-semibold text-xl text-black">
                          WOMEN'S HORSEBIT MULE
                        </h1>
                        <div className="my-3">
                          <p>2024-03-08</p>
                          <p>Бүтээгдэхүүний ID: {details._id}</p>
                        </div>
                        <div className="flex justify-between">
                          <p>
                            Тоо ширхэг:{details.viewsCount} * {details.price}
                          </p>
                          <p className="font-semibold">₮{pr}</p>
                        </div>
                      </div>
                    </div>
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
                        {user.city}, {user.district}, {user.khoroo},14-р
                        байр,8-р орц,6 давхар
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
                        <p>₮{pr}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
