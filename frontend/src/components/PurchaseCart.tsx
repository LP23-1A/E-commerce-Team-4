import React, { useContext } from "react";
import { UserOrderContext } from ".";

export const PurchaseCart = ({ data }: any) => {
  console.log(data);

  return (
    <div>
      <div className="flex w-[400px] justify-between items-center ">
        <div className="flex gap-4 items-center">
          <img src={data.images[0]} className="w-[86px] h-[86px]" />
          <div className="flex flex-col ">
            <h4 className="text-[#000] font-bold text-[14px]">Үүргэвч</h4>
            <p className="text-[#A1A7C1]">Өнгө: Саарал</p>
          </div>
        </div>
        <p className="text-[#1D3178] font-bold">{data.price}</p>
      </div>
      <div className=" border-b-[2px] mt-[10px] border-[#E1E1E4]"></div>
    </div>
  );
};
