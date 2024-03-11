import Arrowlogo from "@/images/Arrowlogo";
import React from "react";
type props = {
  orderNumber: String;
  date: String;
  time: String;
  price: string;
  status: String;
};
const UserOrder: React.FC<props> = ({
  orderNumber,
  date,
  time,
  price,
  status,
}) => {
  return (
    <div>
      <tr>
        <td className="w-[200px] text-[14px]">{orderNumber}</td>
        <td className="w-[250px] text-[14px]">
          <p>ZolooSoko</p>
          <p>ZolooSoko@gmail.com</p>
        </td>
        <td className="w-[100px] text-[14px]">{date}</td>
        <td className="w-[100px] text-[14px]">{time}</td>
        <td className="w-[100px] text-[14px]">{price}</td>
        <td className="w-[200px] text-[14px] ">
          <p>{status}</p>
        </td>
        <td className="w-[200px] text-[14px]">
          <Arrowlogo />
        </td>
      </tr>
      <div className="border-b border-black"></div>
    </div>
  );
};

export default UserOrder;
