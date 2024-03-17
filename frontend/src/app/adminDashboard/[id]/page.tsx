"use client";
import AsideBar from "@/components/AsideBar";
import Carddata from "@/components/Carddata";
import Example from "@/components/Chart";
import DashboardEmpty from "@/components/EmptyDashboard";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
const URL = "http://localhost:8000/products/product";

const page = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const handler = async () => {
    try {
      const { data } = await axios.get(URL);
      const res = data.getAll;
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    handler();
  }, []);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {data.length === 0 ? (
        <DashboardEmpty />
      ) : (
        <div>
          <Navbar />
          <div className="flex m-auto">
            <AsideBar />
            <div className=" h-[100vh] flex flex-col gap-[24px] bg-gray-200 py-[40px] px-[40px] w-full">
              <div className="flex justify-between">
                <Carddata />
              </div>
              <div className="flex justify-between gap-[40px]">
                <div className="w-1/2 bg-white rounded-[10px] px-[40px] flex flex-col py-[40px] gap-[30px]">
                  <h1 className="text-xl font-bold">Шилдэг бүтээгдэхүүн</h1>
                  <div className="flex w-[100%] justify-around bg-gray-200 h-[50px] items-center">
                    <p>№</p>
                    <p>бүтээгдэхүүн</p>
                    <p>Зарагдсан</p>
                    <p>Үнэ</p>
                  </div>
                  <div>
                    {data &&
                      data.map((el: any, index) => {
                        return (
                          <div className="flex justify-between w-[100%] px-[60px] border-b-2 border-gray-200  ">
                            <p>{index + 1}</p>
                            <div className="flex items-center w-[110px] justify-start gap-4">
                              <img
                                className="w-[40px] h-[40px] rounded-[50%]"
                                src={el.images}
                              />
                              <p className="text-black">{el.productName}</p>
                            </div>
                            <p>{el.sold}</p>
                            <p>{el.price}₮</p>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="flex flex-col gap-[40px] w-1/2">
                  <div className="w-full h-[369px] bg-white rounded-[10px] py-[24px]">
                    <Example />
                  </div>
                  <div className="w-full h-[363px] bg-white rounded-[10px] px-[24px] py-[24px] flex flex-col gap-[24px]">
                    <div>
                      <p className="text-xl font-bold">Идэвхтэй бүс нутаг</p>
                    </div>
                    <div className="w-[100%] flex flex-col gap-[24px]">
                      <div className="flex gap-2 justify-between">
                        <p>Ulaanbator</p>
                        <input type="range" className="w-[400px] text-black" />
                        <p>70%</p>
                      </div>
                      <div className="flex gap-2 justify-between">
                        <p>Ulaanbator</p>
                        <input type="range" className="w-[400px]" />
                        <p>70%</p>
                      </div>
                      <div className="flex gap-2 justify-between">
                        <p>Ulaanbator</p>
                        <input type="range" className="w-[400px]" />
                        <p>70%</p>
                      </div>
                      <div className="flex gap-2 justify-between">
                        <p>Ulaanbator</p>
                        <input type="range" className="w-[400px]" />
                        <p>70%</p>
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
