import Right from "@/images/Right";
import { orderStatus } from "@/utils/OrderStatus";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AdminOrderContext } from "./AdminOrderContext";
type props = {
  orderNumber: String;
  date: String;
  time: String;
  price: string;
  status: String;
  onclick: () => void;
  handleOrderStatus: (id: number) => void;
};
const UserOrder: React.FC<props> = ({
  orderNumber,
  date,
  time,
  price,
  status,
  onclick,
  handleOrderStatus,
}) => {
  const { color, setColor }: any = useContext(AdminOrderContext);
  useEffect(() => {
    handleOrderStatus;
  });

  return (
    <tr className=" w-full flex justify-between items-center bg-white">
      <td className="w-[300px]">#{orderNumber}</td>
      <td className="w-[200px] pl-[60px]">
        <p>ZolooSoko</p>
        <p className="text-[14px] text-gray font-light">Zoloo@gmail.com</p>
      </td>
      <td className="w-[200px] pl-[75px] text-gray font-light">{date}</td>
      <td className="w-[200px] pl-[84px] text-gray font-light">{time}</td>
      <td className="w-[200px] pl-[72px] text-gray font-light">{price}</td>
      <td className="w-[200px] pl-[70px] text-gray font-light">
        <select
          name=""
          id=""
          className="py-1 px-2 rounded-xl"
          onChange={(e) => setColor(e.target.value)}
          style={{
            backgroundColor:
              color === "Хүргэгдсэн"
                ? "green"
                : "" || color === "Хүргэлтэнд гарсан"
                ? "blue"
                : "" || color === "Шинэ захиалга"
                ? "white"
                : "" || color === "Бэлтгэгдэж байна"
                ? "gray"
                : "" || color === "Цуцлагдсан"
                ? "red"
                : "",
          }}
        >
          <option value={`${status}`}>{status}</option>
          {orderStatus.map((e, index) => {
            return (
              <option key={index} value={`${e.name}`}>
                {e.name}
              </option>
            );
          })}
        </select>
      </td>
      <td
        className="w-[200px] text-[14px] pl-[85px]  cursor-pointer"
        onClick={onclick}
      >
        <Right />
      </td>
    </tr>
  );
};

export default UserOrder;
