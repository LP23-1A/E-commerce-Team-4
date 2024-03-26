"use client";
import { Footer, NavbarUser, PurchaseCart, PurchaseField } from "@/components";
import Rectangle1 from "@/images/Rectangle1";
import Rectangle2 from "@/images/Rectangle2";
import Rectangle3 from "@/images/Rectangle3";
import Rectangle4 from "@/images/Rectangle4";
import { EmptyStar } from "@/images/emptyStar";
import { FullStar } from "@/images/FullStar";
import { OrangeDot } from "@/images/OrangeDot";
import { PinkDot } from "@/images/PinkDot";
import { BlueDot } from "@/images/BlueDot";
import Heart from "@/images/Heart";
import { RightArrow } from "@/images/RightArrow";

import React from "react";
import { Empty } from "antd";

const page = () => {
  return (
    <div>
      <NavbarUser />
      <div className="w-full h-[100px] bg-[#F6F5FF]">
        <div className="flex gap-[10px] w-[1440px] mx-auto py-[38px]">
            <p>Home</p>
            <p>.</p>
            <p>Shop Left Sidebar</p>
        </div>
      </div>
      <div className="flex w-[1440px] m-auto">
        <div className="w-[1440px] mx-auto flex gap-10 my-[75px]">
            <div className="flex gap-[20px]">
                <div className="flex flex-col gap-[10px] rounded">
                    <Rectangle1/>
                    <Rectangle2/>
                    <Rectangle3/>
                </div>
                <Rectangle4/>
            </div>
            <div className="flex flex-col gap-[64px]">
              <div className="flex flex-col gap-[16px]">
                <h1 className="text-[#111C85] w-[77px] h-[44px] font-extrabold text-4xl">Sofa</h1>
                <div className="flex items-center gap-[2px]">
                  <FullStar/>
                  <FullStar/>
                  <FullStar/>
                  <FullStar/>
                  <EmptyStar/>
                  <p className="w-[23px] h-[16px] font-extrabold text-xs">(32)</p>
                </div>
                <p className="w-[137px] h-[32px] font-normal text-[32px] text-[#151875] leading-8">750’000₮</p>
                <div className="flex gap-[8px]">
                  <OrangeDot/>
                  <PinkDot/>
                  <BlueDot/>
                </div>
                <p className="w-[591.93px] h-[62px] font-normal text-lg text-[#9295AA]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
              </div>
              <button className="w-[140px]">
                <div className="float-left flex items-center gap-[20px]">
                  <p>Add to Cart</p>
                  <Heart/>
                </div>
              </button>
            </div>
        </div>
      </div>
      <div className="w-full h-[649px] bg-[#F9F8FE] mt-[24px]">
        <div className="w-[1440px] mx-auto flex flex-col gap-[40px] text-[#151875] pt-[120px]">
          <div className="flex gap-[30px]">
            <h1 className="font-extrabold text-2xl">Нэмэлт мэдээлэл</h1>
            <h1 className="font-extrabold text-2xl">Үнэлгээ</h1>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-extrabold text-2xl">Varius tempor.</h1>
            <p className="font-extrabold text-[#A9ACC6]">Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            <h1 className="font-extrabold text-2xl">More details</h1>
            <div className="flex flex-col gap-[20px]">
              <div className="flex"><RightArrow/><p className="font-extrabold text-[#A9ACC6]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></div>
              <div className="flex"><RightArrow/><p className="font-extrabold text-[#A9ACC6]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></div>
              <div className="flex"><RightArrow/><p className="font-extrabold text-[#A9ACC6]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></div>
              <div className="flex"><RightArrow/><p className="font-extrabold text-[#A9ACC6]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[456px]">
        <div className="w-[1440] mx-auto">
          <h1 className="font-extrabold text-4xl">Холбоотой бүтээгдэхүүн</h1>
          <div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
