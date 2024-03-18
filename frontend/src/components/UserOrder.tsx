import Arrowlogo from "@/images/Arrowlogo";
import ExpandMore from "@/images/ExpandMore";
import Right from "@/images/Right";
import { orderStatus } from "@/utils/OrderStatus";
import { stat } from "fs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
type props = {
  orderNumber: String;
  date: String;
  time: String;
  price: string;
  status: String;
  onclick: () => void;
};
const UserOrder: React.FC<props> = ({
  orderNumber,
  date,
  time,
  price,
  status,
  onclick,
}) => {
  const [color, setColor] = useState("");
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
          {orderStatus.map((e) => {
            return <option value={`${e.name}`}>{e.name}</option>;
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
