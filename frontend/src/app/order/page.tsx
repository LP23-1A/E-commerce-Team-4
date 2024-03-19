"use client";
import AsideBar from "@/components/AsideBar";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import Search from "@/images/Search";
import { month } from "@/utils/Month";
import { orderStatus } from "@/utils/OrderStatus";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import AdminOrderTable from "@/components/AdminOrderTable";
import AdminOrderContextProvider from "@/components/AdminOrderContext";
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

  const handleStatus = (index: number) => {
    setActiveIndex(orderStatus[0 + index].name);
    handleButton(-1);
  };

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
    }
  });

  const handleButton = (index: number) => {
    setActiveButton(index);
  };
  const handler = (id: number) => {
    router.push("/orderDetail");
    localStorage.setItem("orderId", JSON.stringify({ id }));
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <AdminOrderContextProvider>
      {loading === true ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <div className="flex w-full m-auto">
            <AsideBar />
            <div className="bg-gray-200 w-full ">
              <div className="flex ">
                {orderStatus.map((el, index) => {
                  return (
                    <button
                      className="p-3 border-b"
                      style={{
                        borderBottomColor:
                          activeIndex === el.name ? "#000" : "",
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
                      style={{
                        backgroundColor: activeButton === 30 ? "green" : "",
                        color: activeButton === 30 ? "white" : "",
                      }}
                      className="flex p-2 bg-white justify-center items-center rounded gap-2"
                    >
                      <option>Сараар</option>
                      {month.map((e, ind) => {
                        return (
                          <option
                            onClick={() => handleButton(ind + 1)}
                            key={ind}
                          >
                            {e.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="flex py-2 px-6 bg-white gap-4 w-[360px] rounded items-center">
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
      )}
    </AdminOrderContextProvider>
  );
};
export default page;
