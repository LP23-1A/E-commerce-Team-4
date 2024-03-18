import Delete from "@/images/Delete";
import Edit from "@/images/Edit";
import { useState, useEffect } from "react";
import axios from "axios";
const API = "http://localhost:8000/products/product";

export default function ProductTable() {
    const [data, setData] = useState([]);
    const getAllData = async () => {
        try {
          const get = await axios.get(API);
          const res = get.data.getAll;
          setData(res);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        getAllData();
      }, []);
    return (
        <div className="flex mt-[24px] w-full rounded-xl border-[1px] bg-white">
            <table>
            <tbody>
                <tr className="">
                <th className="w-[68px] py-[12px] px-[24px] border-b-[1px]">
                    <div className="font-semibold text-sm leading-5">‎</div>
                </th>
                <th className="w-[14vw] py-[12px] px-[24px] border-b-[1px] font-semibold text-sm leading-5">
                    Бүтээгдэхүүн
                </th>
                <th className="w-[14vw] py-[12px] px-[24px]] border-b-[1px] font-semibold text-sm leading-5">
                    Ангилал
                </th>
                <th className="w-[14vw] py-[12px] px-[24px] border-b-[1px] font-semibold text-sm leading-5">
                    Үнэ
                </th>
                <th className="w-[14vw] py-[12px] px-[24px] border-b-[1px] font-semibold text-sm leading-5">
                    Үлдэгдэл
                </th>
                <th className="w-[14vw] py-[12px] px-[24px] border-b-[1px] font-semibold text-sm leading-5">
                    Зарагдсан
                </th>
                <th className="w-[14vw] py-[12px] px-[24px] border-b-[1px] font-semibold text-sm leading-5">
                    Нэмсэн огноо
                </th>
                <th className="w-[120px] py-[12px] px-[24px] border-b-[1px]">
                    <div className="font-semibold text-sm leading-5">‎</div>
                </th>
                </tr>
            </tbody>

            {data &&
                data.map((val: any, index) => {
                return (
                    <tbody key={index}>
                    <tr >
                        <td className="w-[68px] py-[12px] px-[24px] border-b-[1px]">
                            <input type="checkbox" name="" id="" />
                        </td>
                        <td className="py-[12px] px-[24px] border-b-[1px]">
                            <div className="flex gap-[8px] align-items">
                                <img
                                src={val.images}
                                className="w-[40px] h-[40px] rounded-[50%] mt-[3px]"
                                />
                                <div className="column">
                                    <p>{val.productName}</p>{" "}
                                    <p>{val.categoryId}</p>
                                </div>
                            </div>
                        </td>
                        <td className="py-[12px] px-[24px] border-b-[1px]">
                            {val.tag}
                        </td>
                        <td className="py-[12px] px-[24px] border-b-[1px]">
                            {val.price}₮
                        </td>
                        <td className="py-[12px] px-[24px] border-b-[1px]">
                            {val.qty}
                        </td>
                        <td className="py-[12px] px-[24px] border-b-[1px]">
                            {val.sold}
                        </td>
                        <td className="py-[12px] px-[24px] border-b-[1px]">
                            <p>{val.createdAt.slice(0, 10)}</p>
                        </td>
                        <td className="w-[120px] py-[12px] px-[24px] border-b-[1px]">
                        <div className="justify-center flex gap-2">
                            <button className="flex">
                                <Delete />
                            </button>
                            <button className="flex">
                                <Edit />
                            </button>
                        </div>
                        </td>
                    </tr>
                    </tbody>
                );
                })}
            </table>
        </div>
  )
}

