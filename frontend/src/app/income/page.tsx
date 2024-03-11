'use client'
import AsideBar from "@/components/AsideBar"
import Navbar from "@/components/Navbar"
import Download from "@/images/download"
import Calendar from "@/images/Calendar"
import ExpandMore from "@/images/ExpandMore"
import Delete from "@/images/Delete"
import Edit from "@/images/Edit"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
const API ="http://localhost:8000/products/product"

export default function Income(){

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

    return(
        <div>
            <Navbar></Navbar>
            <div className="flex">
                <AsideBar></AsideBar>
                <div className="bg-[#ECEDF0] w-[1440px]">
                    <div className="w-[724px] bg-white rounded-xl ml-[187px] mt-[64px]">
                        <div className="border-b-[1px] border-black-100">
                            <div className="px-[24px] py-[20px] flex gap-4">
                                <div className="w-[516px]">
                                    <p className="w-[73px] h-[28px] font-bold text-xl tracking-tighter">Орлого</p>
                                </div>
                                <button className="bg-[#1C20240A] px-[10px] py-[6px] rounded-lg">
                                    <div className="flex gap-1 align-items vertical-align">
                                        <Download></Download>
                                        <p className="font-semibold text-sm">Хуулга татах</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="gap-1 p-[24px]">
                            <div className="flex justify-between ">
                                <p className="font-bold text-3xl tracking-tighter">235,000₮</p>
                                <div className="flex gap-[8px]">
                                    <button className="rounded-lg border-1 bg-[#18BA51] px-[10px] py-[6px] ">
                                        <p className="font-semibold text-sm text-white">Өнөөдөр</p>
                                    </button>
                                    <button className="rounded-lg border-1 bg-[#18BA51] px-[10px] py-[6px] ">
                                        <p className="font-semibold text-sm text-white">7 хоног</p>
                                    </button>
                                    <button className="bg-white rounded-lg border-[1px]">
                                        <div className="flex gap-[4px]">
                                            <Calendar />
                                            <div>Сараар</div>
                                            <ExpandMore/>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex ml-[187px] mt-[24px] w-[724px] rounded-xl border-[1px] bg-white">
                        <table>
                            <tbody>
                                <tr className="">
                                <th className="w-[169px] py-[12px] px-[24px] border-b-[1px]"><div className="font-semibold text-sm inline-flex justify-start">Захиалгын ID дугаар</div></th>
                                <th className="w-[268px] py-[12px] px-[24px] border-b-[1px]"><div className="font-semibold text-sm inline-flex">Захиалагч</div></th>
                                <th className="w-[137px] py-[12px] px-[24px] border-b-[1px]"><div className="font-semibold text-sm inline-flex">Төлбөр</div></th>
                                <th className="w-[150px] py-[12px] px-[24px] border-b-[1px]"><div className="font-semibold text-sm inline-flex">Огноо</div></th>
                                </tr>
                            </tbody>
                            
                            {data.map((val:any, key: any) => {
                                return (
                                <tbody>
                                    <tr className="" key={key}>
                                    <td className="w-[68px] py-[12px] pl-0 pr-[auto] border-b-[1px]"><div className="flex gap-[8px] align-items"><img src={val.images} className="w-[40px] h-[40px] rounded-[50%] mt-[3px]"/><div className="column"><p>{val.productName}</p> <p>{val.categoryId}</p></div></div></td>
                                    <td className="w-[68px] py-[12px] pl-0 pr-[auto] border-b-[1px]">{val.tag}</td>
                                    <td className="w-[68px] py-[12px] pl-0 pr-[auto] border-b-[1px]">{(val.price).toLocaleString()}₮</td>
                                    <td className="w-[68px] py-[12px] pl-0 pr-[auto] border-b-[1px]">{val.qty}</td>
                                    </tr>
                                </tbody>
                                
                                )
                            })}
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    )
}