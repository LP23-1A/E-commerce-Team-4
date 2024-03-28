"use client";
import { Trolley } from "@/images";
import Heart from "@/images/Heart";
import { useContext } from "react";
import useSWR from "swr";
import { UserOrderContext } from ".";

const API = "http://localhost:8000/products/product";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Ontsloh = () => {
  const { data, error } = useSWR(API, fetcher);
  const { addCart }: any = useContext(UserOrderContext);
  const productData = data?.getAll;

  return (
    <div className="flex flex-col justify-center items-center gap-[20px] w-[1140px] m-auto ">
      <p className="text-3xl font-bold">Онцлох бүтээгдэхүүн</p>
      <div className="flex gap-[50px] w-[1440px] justify-between">
        {productData &&
          productData.slice(0, 4).map((el: any) => {
            return (
              <div
                key={el.productId}
                className="w-1/5 h-[461px] shadow-xl rounded-4 flex flex-col   py-[20px] group"
              >
                <div className=" opacity-0 group-hover:opacity-100 flex gap-3 p-3">
                  <div
                    className="bg-grey cursor-pointer"
                    onClick={() => addCart(el._id)}
                  >
                    <Trolley />
                  </div>
                  <div>
                    <Heart />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 mt-3">
                  <img src={el.images} className="w-[216px] h-[271px]" />

                  <p className="text-[#FB2E86] text-xl ">{el.productName}</p>
                  <p className="text-[#151875] text-xl">
                    {el.price
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1'")}
                    ₮
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
