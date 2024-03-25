import { Down } from "@/images";
import Call from "@/images/Call";
import Mail from "@/images/Mail";
import Save from "@/images/Save";
import SearchUser from "@/images/SearchUser";
import Trolley from "@/images/Trolley";
import UserNav from "@/images/UserNav";
import React from "react";

export const NavbarUser = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center text-white h-11 bg-[#7E33E0]">
        <div className="flex w-[1440px] mx-auto justify-between items-center">
          <div className="flex items-center gap-14">
            <button className="flex items-center gap-4">
              <Mail /> info@ecommerce.mn
            </button>
            <button className="flex items-center gap-4">
              <Call /> 77123456
            </button>
          </div>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-4">
              Нэвтрэх <UserNav />
            </button>
            <button className="flex items-center gap-4">
              Хадгалах <Save />
            </button>
            <button className="flex items-center gap-4">
              <Trolley />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center h-16 bg-[#ffffff]">
        <div className="flex w-[1440px] mx-auto justify-between">
          <div className="flex items-end gap-14">
            <button className="text-[#0D0E43] text-3xl font-bold">
              Ecommerce
            </button>
            <div className="flex gap-6 items-center">
              <button className="flex gap-1 items-center text-[#FB2E86]">
                Нүүр <Down />
              </button>
              <button>Ангилал</button>
            </div>
          </div>
          <div className="flex">
            <input type="text" className="border w-[226px] h-9 p-2" />
            <button className="flex justify-center items-center w-12 h-9 bg-[#FB2E86] text-white">
              <SearchUser />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
