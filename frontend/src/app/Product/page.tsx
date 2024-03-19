"use client";
import Navbar from "@/components/Navbar";
import AsideBar from "@/components/AsideBar";
import Tab from "@/components/Tab";
import PlusIcon from "@/images/PlusIcon";
import ExpandMore from "@/images/ExpandMore";
import Category from "@/images/Category";
import Dollar from "@/images/Dollar";
import Calendar from "@/images/Calendar";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import Search from "@/images/Search";
import ProductTable from "@/components/ProductTable";
import { month } from "@/utils/Month";
import axios from "axios";
const API = "http://localhost:8000/products/product";

export default function Product() {
  
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("")
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
  console.log(filter);
  let amount:[] | any =[]
  let filterData = data?.filter((e: any) => {
    if (filter === "") {
      return e
    } else if (filter === "эмэгтэй"){
      return e.mainCate.includes(filter)
    } else if (filter === "эрэгтэй"){
      return e.mainCate.includes(filter)
    } else if (filter === "high"){
      console.log(e.price)
      amount.push(e.price)
      amount.sort((a:number, b:number) => b-a)
      return e.price === amount[0]

    }
  })

 
  // filterData = filterData.sort((a, b) => a + b)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  },[]);
  return (
    <div className=" ">
      {loading === true ? (
        <Loading />
      ) : (
        <div>
          <Navbar></Navbar>
          <div className="border-black flex m-auto">
            <AsideBar></AsideBar>
            <div className="bg-[#ECEDF0] w-full">
              <div className="flex bg-[#ECEDF0] gap-[10px] h-[56px] align-middle border-b-[1px] border-black-100">
                <Tab>Бүтээгдэхүүн</Tab>
                <Tab>Ангилал</Tab>
              </div>
              <div className="p-[24px] gap-[24px]">
                <a href="/addProduct">
                  <button className="bg-[#121316] rounded-lg w-[280px] h-[48px] ]">
                    <div className="flex gap-[4px] justify-center align-middle items-center h-[24px]">
                      <PlusIcon/>
                      <div className="text-white font-semibold text-base/[20px] tracking-[-0.3px]">
                        Бүтээгдэхүүн нэмэх
                      </div>
                    </div>
                  </button>
                </a>
                <div className="w-full h-[40px] justify-between mt-[24px] flex">
                  <div className="flex gap-[13px]">
                    {/* <button className="bg-white h-[40px] rounded-lg border-[1px]">
                      <div className="flex mx-[11px] gap-[4px]">
                        <Category />
                        <div>Ангилал</div>
                        <ExpandMore />
                      </div>
                    </button>
                    <button className="bg-white h-[40px] rounded-lg border-[1px]">
                      <div className="flex mx-[11px] gap-[4px]">
                        <Dollar />
                        <div>Үнэ</div>
                        <ExpandMore />
                      </div>
                    </button> */}
                    <select className="bg-white h-[40px] rounded-lg border-[1px]" onChange={(e) => setFilter(e.target.value)}>
                      <option value={" "} selected>Ангилал</option>
                      <option value={"эмэгтэй"}>Эмэгтэй</option>
                      <option value={"эрэгтэй"}>Эрэгтэй</option>
                    </select>
                    <select className="bg-white h-[40px] rounded-lg border-[1px] justify-center" onChange={(e) => setFilter(e.target.value)} >
                      <option value={""} selected>Үнэ</option>
                      <option value={"high"}>Highest to Lowest</option>
                      <option value={"lo2hi"}>Lowest to Highest</option>
                    </select>
                    <select className="bg-white h-[40px] rounded-lg border-[1px]">
                      <option className="flex mx-[11px] gap-[4px] w-[150px]"><Calendar/>Сараар</option>
                      {month.map((e) => {
                        return (
                          <option className="flex mx-[11px] gap-[4px] w-[150px]">{e.name}</option>
                        )
                      })}
                    </select>
                  </div>
                  <div className="flex w-[419px] h-[40px] mr-0">
                    <div className="flex items-center z-10 mr-[-35px]">
                      <Search/>
                    </div>
                    <input
                      className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                      type="text"
                      placeholder="Бүтээгдэхүүний нэр, SKU, UPC"
                    />
                  </div>
                </div>
                <ProductTable data={filterData} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
