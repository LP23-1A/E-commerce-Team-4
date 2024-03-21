"use client";
import useSWR from "swr";

import { month } from "@/utils/Month";
import { orderStatus } from "@/utils/OrderStatus";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Search } from "@/images";
import {
  AdminOrderContextProvider,
  AdminOrderTable,
  AsideBar,
  Navbar,
} from "@/components";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const API = "http://localhost:8000/order";

const page = () => {
  const birthDay = new Date();
  const today: number = birthDay.getDate();
  const [activeIndex, setActiveIndex] = useState(orderStatus[0].name);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [activeButton, setActiveButton] = useState<string | any>(today);
  const { data, error, isLoading } = useSWR(API, fetcher);
  const router = useRouter();
  let filterData = data?.getAllOrder.filter((e: any) => {
    if (activeButton == today) {
      return e.createdAt.slice(8, 10) == activeButton;
    } else if (activeButton == today - 7) {
      return e.createdAt.slice(8, 10) > activeButton;
    } else if (activeButton == -1) {
      if (activeIndex === "Бүгд") {
        return e;
      }
      return e.status.includes(activeIndex);
    } else if (activeButton == -2) {
      return e.orderNumber.includes(query) || e.userId?.email.includes(query);
    } else if (activeButton == -3) {
      return e.createdAt.slice(5, 7) == query;
    }
  });

  const handleButton = (index: number) => {
    setActiveButton(index);
  };

  const handler = (id: number) => {
    router.push("/admin/order/orderDetail");
    localStorage.setItem("orderId", JSON.stringify({ id }));
  };

  const handleStatus = (index: number) => {
    setActiveIndex(orderStatus[0 + index].name);
    handleButton(-1);
  };

  return (
    <AdminOrderContextProvider>
      <div>
        <Navbar />
        <div className="flex w-full m-auto">
          <AsideBar />
          <div className="bg-gray-200 w-full ">
            <div className="flex ">
              {orderStatus.map((el, index) => {
                return (
                  <button
                    key={index}
                    className="p-3 border-b"
                    style={{
                      borderBottomColor: activeIndex === el.name ? "#000" : "",
                      color: activeIndex === el.name ? "#000" : "",
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
                  <button
                    className="p-2 bg-white rounded"
                    style={{
                      backgroundColor: activeButton === today ? "green" : "",
                      color: activeButton === today ? "white" : "",
                    }}
                    value={0}
                    onClick={() => handleButton(today)}
                  >
                    Өнөөдөр
                  </button>
                  <button
                    className="p-2 bg-white rounded"
                    value={1}
                    style={{
                      backgroundColor:
                        activeButton === today - 7 ? "green" : "",
                      color: activeButton === today - 7 ? "white" : "",
                    }}
                    onClick={() => handleButton(today - 7)}
                  >
                    7 Хоног
                  </button>
                  <select
                    onChange={(e) => setQuery(e.target.value)}
                    onClick={() => handleButton(-3)}
                    style={{
                      backgroundColor: activeButton === -3 ? "green" : "",
                      color: activeButton === -3 ? "white" : "",
                    }}
                    className="flex p-2 bg-white justify-center items-center rounded gap-2"
                  >
                    <option>Сараар</option>
                    {month.map((e, index) => {
                      return (
                        <option key={index} value={e.value}>
                          {e.label}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div
                  className="flex py-2 px-6 bg-white gap-4 w-[360px] rounded items-center"
                  onClick={() => handleButton(-2)}
                >
                  <Search />
                  <input
                    type="text"
                    placeholder="Дугаар Имэйл"
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
              </div>
              <AdminOrderTable filterData={filterData} handler={handler} />
            </div>
          </div>
        </div>
      </div>
    </AdminOrderContextProvider>
  );
};
export default page;
