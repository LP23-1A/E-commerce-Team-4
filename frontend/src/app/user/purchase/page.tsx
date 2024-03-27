"use client";
import {
  Footer,
  NavbarUser,
  OrderFinish,
  PurchaseCart,
  PurchaseField,
  UserOrderContext,
} from "@/components";
import React, { useContext } from "react";

const page = () => {
  const { orderData }: any = useContext(UserOrderContext);

  return (
    <div>
      <NavbarUser />
      <div className="flex w-[1440px] m-auto">
        <PurchaseField />
        <div className="my-[200px] flex flex-col">
          <div className="flex flex-col gap-[20px]">
            {orderData &&
              orderData.map((e: any) => {
                return <PurchaseCart data={e.data} />;
              })}
          </div>
          <OrderFinish />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
