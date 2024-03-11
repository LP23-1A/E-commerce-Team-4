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
  const [orderData, setOrderData] = useState([]);
  const { data, error, isLoading } = useSWR(API, fetcher);
  console.log(data);

  const handleStatus = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
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
          <div className="p-8 flex flex-col gap-5 font-bold">
            <div className="flex justify-between">
              <div className="flex gap-3">
                <button className="p-2 bg-green-600 text-white rounded">
                  Өнөөдөр
                </button>
                <button className="p-2 bg-white rounded">7 Хоног</button>
                <button className="flex p-2 bg-white justify-center items-center rounded gap-2">
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
            <div className="bg-white h-fit ">
              <h1 className="text-[36px] p-4">Захиалга</h1>
              <div className="bg-gray-200 py-6 w-full">
                <table>
                  <tr>
                    <th className="w-[200px]">Захиалгын ID дугаар</th>
                    <th className="w-[160px]">Захиалагч</th>
                    <th className="w-[200px]">Огноо</th>
                    <th className="w-[100px]">Цаг</th>
                    <th className="w-[100px]">Төлбөр</th>
                    <th className="w-[200px]">Статус</th>
                    <th className="w-[100px]">Дэлгэрэнгүй</th>
                  </tr>
                </table>
                {data?.getAllOrder.map((el: any) => {
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
