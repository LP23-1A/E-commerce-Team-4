import { SearchProduct, Trolley } from "@/images";
import Heart from "@/images/Heart";
import React, { useContext, useState } from "react";
import useSWR from "swr";
import { UserOrderContext } from ".";

const API = "http://localhost:8000/products/product";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const New = () => {
  const { data, error } = useSWR(API, fetcher);
  const { addCart }: any = useContext(UserOrderContext);
  const productData = data?.getAll;
  return (
    <div className="flex flex-col justify-center items-center gap-[20px] w-[1440px] m-auto">
      <p className="text-3xl font-bold">Шинээр нэмэгдсэн</p>
      <div className="flex gap-[50px] justify-between w-[1440px] flex-wrap">
        {productData &&
          productData.slice(0, 8).map((el: any) => {
            return (
              <div className="w-1/5 h-[361px] shadow-xl  flex flex-col gap-[10px] py-[20px] group">
                <img src={el.images} className="w-[216px] h-[191px] mx-auto" />
                <div className="flex gap-10 items-center">
                  <div className="flex flex-col gap-3 justify-start pl-4 opacity-0 group-hover:opacity-100">
                    <div
                      className=" cursor-pointer"
                      onClick={() => addCart(el._id)}
                    >
                      <Trolley />
                    </div>
                    <div>
                      <Heart />
                    </div>
                    <div>
                      <SearchProduct />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-3 justify-center items-center">
                    <p className="text-[#FB2E86] text-xl">{el.productName}</p>
                    <div className="flex gap-1">
                      <div className="h-2 w-2 bg-yellow-500 rounded-3xl"></div>
                      <div className="h-2 w-2 bg-red-500 rounded-3xl"></div>
                      <div className="h-2 w-2 bg-blue-500 rounded-3xl"></div>
                    </div>
                    <p className="text-[#151875] text-xl">
                      {el.price
                        .toFixed(2)
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1'")}
                      ₮
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
