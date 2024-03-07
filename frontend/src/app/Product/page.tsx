"use client"
import Navbar from "@/components/Navbar";
import AsideBar from "@/components/AsideBar";
import Tab from "@/components/Tab"
import PlusIcon from "@/images/PlusIcon"
import ExpandMore from "@/images/ExpandMore";
import Category from "@/images/Category";
import Dollar from "@/images/Dollar";
import Calendar from "@/images/Calendar";
import Delete from "@/images/Delete";
import Edit from "@/images/Edit";
import { stringify } from "querystring";
import { Tiro_Bangla } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";
import { get } from "http";
const API ="http://localhost:8000/products/product"
const productid = [
  {
    image: "image",
    name: "Laptop цүнх"
  }
]
// const data = [
//   { product: "test", class: "Эмэгтэй", price: "19,000₮", stock: 76, sold: 30, added: "2024-01-10" },


//   { product: "test", class: "test", price: "test", stock: "test", sold: "test", added: "test" },
//   { product: "test", class: "test", price: "test", stock: "test", sold: "test", added: "test" },
// ]

const number = 3500

console.log(number.toLocaleString());

export default function Product() {
  const [data, setData] = useState([])
  const getAllData = async () => {
    try {
      const get = await axios.get(API)
      const res = get.data.Response
      setData(res)
      
      
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
    getAllData()
  }, [])
  console.log(data);
  
  return (
    <div className="w-[1480px] mx-[auto]">
        <Navbar></Navbar>
        <div className="border-black flex">
          <AsideBar></AsideBar>
          <div className="bg-[#ECEDF0]">
            <div className="flex bg-[#ECEDF0] w-[1218px] gap-[10px] h-[56px] align-middle border-b-[1px] border-black-100">
              <Tab>Бүтээгдэхүүн</Tab>
              <Tab>Ангилал</Tab>
            </div>
            <div className="p-[24px] gap-[24px]">
              <a href="/addProduct">
                <button className="bg-[#121316] rounded-lg w-[280px] h-[48px] ]">
                  <div className="flex gap-[4px] justify-center align-middle items-center h-[24px]">
                    <PlusIcon></PlusIcon>
                    <div className="text-white font-semibold text-base/[20px] tracking-[-0.3px]">Бүтээгдэхүүн нэмэх</div>
                  </div>
                </button>
              </a>
              <div className="w-[1170px] h-[40px] justify-between mt-[24px] flex">
                <div className="flex gap-[13px]">
                  <button className="bg-white h-[40px] rounded-lg border-[1px]">
                    <div className="flex mx-[11px] gap-[4px]">
                      <Category/>
                      <div>Ангилал</div>
                      <ExpandMore/>
                    </div>
                  </button>
                  <button className="bg-white h-[40px] rounded-lg border-[1px]">
                    <div className="flex mx-[11px] gap-[4px]">
                      <Dollar/>
                      <div>Үнэ</div>
                      <ExpandMore/>
                    </div>
                  </button>
                  <button className="bg-white h-[40px] rounded-lg border-[1px]">
                    <div className="flex mx-[11px] gap-[4px]">
                      <Calendar/>
                      <div>Сараар</div>
                      <ExpandMore/>
                    </div>
                  </button>
                </div>
                <div className="flex w-[419px] h-[40px] mr-0">
                  <div className="flex items-center z-10 mr-[-35px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.755 14.255H14.965L14.685 13.985C15.665 12.845 16.255 11.365 16.255 9.755C16.255 6.165 13.345 3.255 9.755 3.255C6.165 3.255 3.255 6.165 3.255 9.755C3.255 13.345 6.165 16.255 9.755 16.255C11.365 16.255 12.845 15.665 13.985 14.685L14.255 14.965V15.755L19.255 20.745L20.745 19.255L15.755 14.255ZM9.755 14.255C7.26501 14.255 5.255 12.245 5.255 9.755C5.255 7.26501 7.26501 5.255 9.755 5.255C12.245 5.255 14.255 7.26501 14.255 9.755C14.255 12.245 12.245 14.255 9.755 14.255Z" fill="#121316"/>
                    </svg>
                  </div>
                  <input className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                    type="text"
                    placeholder="Бүтээгдэхүүний нэр, SKU, UPC"
                  />
                </div>
              </div>
              <div className="flex mt-[24px] w-[1170px] rounded-xl border-[1px] bg-white">
                <table>
                  <tbody>
                    <tr className="">
                      <th className="w-[68px] py-[12px] px-[24px] border-b-[1px]"><div className="font-semibold text-sm">‎</div></th>
                      <th className="w-[156.8px] py-[12px] pl-0 pr-[100px] border-b-[1px]"><div className="font-semibold text-sm inline-flex">Бүтээгдэхүүн</div></th>
                      <th className="w-[214px] py-[12px] pl-0 pr-[100px] border-b-[1px]"><div className="font-semibold text-sm inline-flex">Ангилал</div></th>
                      <th className="w-[156.8px] py-[12px] pl-0 pr-[100px] border-b-[1px]"><div className="font-semibold text-sm inline-flex">Үнэ</div></th>
                      <th className="w-[156.8px] py-[12px] pl-0 pr-[100px] border-b-[1px]"><div className="font-semibold text-sm inline-flex">Үлдэгдэл</div></th>
                      <th className="w-[156.8px] py-[12px] pl-0 pr-[100px] border-b-[1px]"><div className="font-semibold text-sm inline-flex">Зарагдсан</div></th>
                      <th className="w-[156.8px] py-[12px] pl-0 pr-[100px] border-b-[1px]"><div className="font-semibold text-sm inline-flex">Нэмсэн огноо</div></th>
                      <th className="w-[104px] py-[12px] px-[24px] border-b-[1px]"><div className="font-semibold text-sm">‎</div></th>
                    </tr>
                  </tbody>
                  
                  {data.map((val:any, key) => {
                    return (
                      <tbody>
                        <tr className="" key={key}>
                          <td className="w-[68px] py-[12px] px-[24px] border-b-[1px]"><input type="checkbox" name="" id="" /></td>
                          <td className="w-[68px] py-[12px] pl-0 pr-[auto] border-b-[1px]"><div className="flex gap-[8px] align-items"><img src={val.images} className="w-[40px] h-[40px] rounded-[50%] mt-[3px]"/><div className="column"><p>{val.productName}</p> <p>{val.categoryId}</p></div></div></td>
                          <td className="w-[68px] py-[12px] pl-0 pr-[auto] border-b-[1px]">{val.tag}</td>
                          <td className="w-[68px] py-[12px] pl-0 pr-[auto] border-b-[1px]">{(val.price).toLocaleString()}₮</td>
                          <td className="w-[68px] py-[12px] pl-0 pr-[auto] border-b-[1px]">{val.qty}</td>
                          <td className="w-[68px] py-[12px] pl-0 pr-[auto] border-b-[1px]">{val.sold}</td>
                          <td className="w-[68px] py-[12px] pl-0 pr-[auto] border-b-[1px]"><p>{(val.createdAt).slice(0, 10)}</p></td>
                          <td className="w-[68px] p-[16px] border-b-[1px]"><div className="justify-center flex"><button className="flex"><Delete/></button><button className="flex"><Edit/></button></div></td>
                        </tr>
                      </tbody>
                      
                    )
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
