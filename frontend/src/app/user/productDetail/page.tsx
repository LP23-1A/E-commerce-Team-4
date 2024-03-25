"use client";
import { Footer, NavbarUser, PurchaseCart, PurchaseField } from "@/components";
import Rectangle1 from "@/images/Rectangle1";
import Rectangle2 from "@/images/Rectangle2";
import Rectangle3 from "@/images/Rectangle3";
import Rectangle4 from "@/images/Rectangle4";

import React from "react";

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
            <div>
                <h1>Sofa</h1>
                <div>* * * * * (32)</div>
                <p>750,000$</p>
                <div>. . .</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                <button>
                    <div>Add to Cart</div>
                </button>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
