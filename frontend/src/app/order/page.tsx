"use client";
import AsideBar from "@/components/AsideBar";
import Navbar from "@/components/Navbar";
import UserOrder from "@/components/UserOrder";
import Calendar from "@/images/Calendar";
import ExpandMore from "@/images/ExpandMore";
import Search from "@/images/Search";
import { orderStatus } from "@/utils/OrderStatus";
import React, { useState } from "react";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const API = "http://localhost:8000/order";
const page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(1);
  const { data, error, isLoading } = useSWR(API, fetcher);

  const handleStatus = (index: number) => {
    setActiveIndex(index);
  };
  let a: any = [];
  const handleButton = (index: number) => {
    setActiveButton(index);
  };

  return (
    <div>
      <Navbar />
      <div className="flex w-[1440px] m-auto">
        <AsideBar />
        <div className="bg-gray-200 w-full ">
          <div className="flex ">
            {orderStatus.map((el, index) => {
              return (
                <button
                  className="p-3 border-b"
                  style={{
                    borderBottomColor: activeIndex === index ? "#000" : "",
                    color: activeIndex === index ? "#000" : "",
                  }}
                  onClick={() => handleStatus(index)}
                >
                  {el.name}
                </button>
              );
            })}
          </div>
          <div className="p-8  flex flex-col gap-5 font-bold">
            <div className="flex justify-between">
              <div className="flex gap-3">
                <button
                  className="p-2 bg-white rounded"
                  style={{
                    backgroundColor: activeButton === 1 ? "green" : "",
                    color: activeButton === 1 ? "white" : "",
                  }}
                  value={0}
                  onClick={() => handleButton(1)}
                >
                  Өнөөдөр
                </button>
                <button
                  className="p-2 bg-white rounded"
                  value={1}
                  style={{
                    backgroundColor: activeButton === 7 ? "green" : "",
                    color: activeButton === 7 ? "white" : "",
                  }}
                  onClick={() => handleButton(7)}
                >
                  7 Хоног
                </button>
                <button
                  style={{
                    backgroundColor: activeButton === 30 ? "green" : "",
                    color: activeButton === 30 ? "white" : "",
                  }}
                  onClick={() => handleButton(30)}
                  className="flex p-2 bg-white justify-center items-center rounded gap-2"
                >
                  <Calendar />
                  <span>Сарааар</span>
                  <ExpandMore />
                </button>
              </div>
              <div className="flex py-2 px-6 bg-white gap-2 w-[360px] rounded">
                <Search />
                <input type="text" placeholder="Дугаар, Имэйл" />
              </div>
            </div>
            <div className="bg-white h-fit border rounded-xl border-gray-300 w-[1100px]">
              <h1 className="text-[36px] p-4">Захиалга</h1>
              <div className="bg-gray-200 py-6 w-full flex flex-col gap-4">
                <table>
                  <tr>
                    <th className="w-[200px]">Захиалгын ID дугаар</th>
                    <th className="w-[160px] pl-3">Захиалагч</th>
                    <th className="w-[200px] pr-6">Огноо</th>
                    <th className="w-[100px]">Цаг</th>
                    <th className="w-[100px] pl-4">Төлбөр</th>
                    <th className="w-[200px] pr-2">Статус</th>
                    <th className="pr-6">Дэлгэрэнгүй</th>
                  </tr>
                </table>
              </div>
              <div className="bg-white rounded-xl px-4 flex flex-col ">
                {data?.getAllOrder
                  .filter((e: any) => e.createdAt.slice(9, 10) >= activeButton)
                  .map((el: any) => {
                    return (
                      <UserOrder
                        key={el._id}
                        orderNumber={el.orderNumber}
                        date={el.createdAt.slice(0, 10)}
                        time={el.createdAt.slice(11, 16)}
                        status={el.status}
                        price={el.amountPaid}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
