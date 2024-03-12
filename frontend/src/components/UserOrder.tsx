import Arrowlogo from "@/images/Arrowlogo";
import ExpandMore from "@/images/ExpandMore";
import Right from "@/images/Right";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const handler = () => {
    router.push("/orderDetail");
  };
  return (
    <div className="py-2">
      <tr className="flex items-center text-black">
        <td className="w-[200px] text-[14px] pl-2">#{orderNumber}</td>
        <td className="w-[250px] text-[14px] pl-24">
          <p>ZolooSoko</p>
          <p className="text-[14px] font-extralight">ZolooSoko@gmail.com</p>
        </td>
        <td className="w-[200px] text-[14px] pl-10 font-light">{date}</td>
        <td className="w-[100px] text-[14px] pl-20 font-light">{time}</td>
        <td className="w-[100px] text-[14px] pl-20 font-light">{price}</td>
        <td className="w-[200px] text-[14px] pl-24">
          <p className="px-10 py-2 flex justify-center bg-green-300 rounded-xl font-light">
            {status}
          </p>
        </td>
        <td
          className="w-[200px] text-[14px] pl-24 cursor-pointer"
          onClick={handler}
        >
          <Right />
        </td>
      </tr>
      <div className="border-b border-gray-200 mt-3"></div>
    </div>
  );
};

export default UserOrder;
