"use client";
import Pineconelogo from "@/images/Pineconelogo";
import React, { useContext, useState } from "react";
import Applelogo from "../images/Applelogo";
import Googlelogo from "@/images/Googlelogo";
import Microsoftlogo from "@/images/Microsoftlogo";
import Arrowlogo from "@/images/Arrowlogo";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
export default function SignUppage1({ next }: any) {
  const { loginWithRedirect } = useAuth0();
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    name: "",
  });
  const handler = () => {
    if (!(data.email === "") && !(data.name === "")) {
      localStorage.setItem("userData", JSON.stringify(data));
      router.push("/adminSignupStep");
    }
  };

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
            onChange={(el) =>
              setData((prev) => ({ ...prev, email: el.target.value }))
            }
          />
        </div>
        <div>
          <p>Таны нэр</p>
          <input
            className="bg-gray-200 w-[400px] px-[8px]  rounded-[5px] h-[50px]"
            type="email"
            placeholder="Hэр"
            onChange={(el) =>
              setData((prev) => ({ ...prev, name: el.target.value }))
            }
          />
        </div>
        <button
          className="bg-black text-white w-[100%] h-[50px] rounded-[5px] flex justify-end gap-[150px] px-2 items-center hover:scale-95"
          onClick={handler}
        >
          <p>Дараах </p>
          <Arrowlogo />
        </button>
        <div className="border-t-[2px] border-b-[2px]  border-gray-200 py-[20px] flex flex-col w-[100%] gap-[20px]">
          <button
            className="bg-gray-200 h-[50px] flex justify-center items-center gap-[10px]  rounded-[5px] text-black w-[100%] hover:scale-95 "
            onClick={() => {
              loginWithRedirect(), next;
            }}
          >
            <Googlelogo />
            <p>Google-ээр нэвтрэх</p>
          </button>
          <button
            className="bg-gray-200 h-[50px] flex justify-center items-center gap-[10px]  rounded-[5px] text-black w-[100%] hover:scale-95"
            onClick={() => loginWithRedirect()}
          >
            <Microsoftlogo />
            <p>Microsoft-оор нэвтрэх</p>
          </button>
          <button
            className="bg-gray-200 h-[50px] flex justify-center items-center gap-[10px]  rounded-[5px] text-black w-[100%] hover:scale-95"
            onClick={() => loginWithRedirect()}
          >
            <Applelogo />
            <p>Apple-аар нэвтрэх</p>
          </button>
        </div>
        <button>Бүртгэлтэй юу? Нэвтрэх</button>
      </div>
    </div>
  );
}
