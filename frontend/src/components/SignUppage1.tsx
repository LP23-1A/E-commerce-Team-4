"use client";
import Logo from "@/images/Logo";
import Pineconelogo from "@/images/Pineconelogo";
import React, { useContext } from "react";
import Applelogo from "../images/Applelogo";
import Googlelogo from "@/images/Googlelogo";
import Microsoftlogo from "@/images/Microsoftlogo";
import Arrowlogo from "@/images/Arrowlogo";
import { AdminContext } from "@/app/adminSignupStep/page";

export default function SignUppage1({ skip }: any) {
  const { data, setData }: any = useContext(AdminContext);
  console.log(data);

  return (
    <div className="flex flex-col justify-center items-center gap-[100px] py-[30px] px-[30px]">
      <div className="flex justify-start items-start text-start w-[100%]">
        <Pineconelogo />
      </div>
      <div className="border-gray-200 rounded-[10px] border-2 flex flex-col justify-center items-center w-[450px] py-[22px] px-[22px] gap-[20px] ">
        <p className="text-[30px] font-bold">Бүртгүүлэх</p>
        <div>
          <p>Таны имэйл</p>
          <input
            className="bg-gray-200 w-[400px] px-[8px] rounded-[5px] h-[50px]"
            type="email"
            placeholder="имэйл"
          />
        </div>
        <div>
          <p>Таны нэр</p>
          <input
            className="bg-gray-200 w-[400px] px-[8px]  rounded-[5px] h-[50px]"
            type="email"
            placeholder="Hэр"
            // onChange={(el) =>
            //   setData((prev) => ({ ...prev, khoroo: el.target.value }))
            // }
          />
        </div>
        <button
          onClick={skip}
          className="bg-black text-white w-[100%] h-[50px] rounded-[5px] flex justify-end gap-[150px] px-2 items-center"
        >
          <p>Дараах </p>
          <Arrowlogo />
        </button>
        <div className="border-t-[2px] border-b-[2px]  border-gray-200 py-[20px] flex flex-col w-[100%] gap-[20px]">
          <button className="bg-gray-200 h-[50px] flex justify-center items-center gap-[10px]  rounded-[5px] text-black w-[100%]">
            <Googlelogo />
            <p>Google-ээр нэвтрэх</p>
          </button>
          <button className="bg-gray-200 h-[50px] flex justify-center items-center gap-[10px]  rounded-[5px] text-black w-[100%]">
            <Microsoftlogo />
            <p>Microsoft-оор нэвтрэх</p>
          </button>
          <button className="bg-gray-200 h-[50px] flex justify-center items-center gap-[10px]  rounded-[5px] text-black w-[100%]">
            <Applelogo />
            <p>Apple-аар нэвтрэх</p>
          </button>
        </div>
        <button>Бүртгэлтэй юу? Нэвтрэх</button>
      </div>
    </div>
  );
}
