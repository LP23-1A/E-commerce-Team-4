import React, { useContext } from "react";
import { UserOrderContext } from ".";

export const ShopCart = ({ data, quantity }: any) => {
  const { removeCart, addCart, decreaseCart }: any =
    useContext(UserOrderContext);

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex items-center ">
        <div className="w-[300px] flex gap-2 items-center">
          <div className=" relative">
            <img
              src={data.images[0].src}
              className="w-[83px] h-[83px] relative rounded"
            />
            <p
              className="absolute top-[0px] right-[0px] w-[20px] h-[20px] bg-black text-white rounded-3xl flex items-center justify-center font-bold pb-[2px] cursor-pointer"
              onClick={() => removeCart(data)}
            >
              x
            </p>
          </div>
          <div className="flex flex-col gap-0">
            <p className="text-neutral-950 font-bold">Электрон цаг</p>
            <p style={{ color: "A1A8E1" }}>Өнгө: өнгөлөг</p>
          </div>
        </div>
        <div className="w-[240px]">
          <p className="text-[#1D3178] text-[14px]">{data.price}₮</p>
        </div>
        <div className="w-[250px]">
          <div className="bg-gray-200 flex w-[90px] h-[25px] justify-between px-3 items-center">
            <p
              className="flex justify-center items-center cursor-pointer"
              onClick={() => decreaseCart(data)}
            >
              -
            </p>
            <p className="bg-white px-2 cursor-pointer">{quantity}</p>
            <p onClick={() => addCart(data)}>+</p>
          </div>
        </div>
        <div className="w-fit">
          <p className="text-[#1D3178] text-[14px]">{data.price}₮</p>
        </div>
      </div>
      <div className=" border-b-[2px] border-gray-200 w-[860px]"></div>
    </div>
  );
};
