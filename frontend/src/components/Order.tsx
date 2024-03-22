"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const URL = "http://localhost:8000/order";

export const Order = () => {
  const birthDay = new Date();
  const today: number = birthDay.getDate();
  const [data, setData] = useState([]);
  
const handler = async () => {
  try {
    const { data } = await axios.get(URL);
    const res = data.getAllOrder;
    setData(res);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  handler();
},[])

const oCount : any = data.filter((e:any) =>{
  return e.createdAt.slice(8, 10) == today;
});

const count = oCount.length;
  return (
    <div className="h-[170px] bg-white rounded-[10px] p-5 flex flex-col justify-between w-1/3">
       <p className="font-bold text-xl">Захиалга</p>
        <p className="text-[44px] font-bold">{count}</p>
        <p className="text-[18px]">Өнөөдөр</p>
    </div>
  )
}


