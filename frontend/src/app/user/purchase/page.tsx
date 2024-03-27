"use client";
import {
  Footer,
  NavbarUser,
  OrderFinish,
  PurchaseCart,
  PurchaseField,
  UserOrderContext,
} from "@/components";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const page = () => {
  const { orderData }: any = useContext(UserOrderContext);
  const [data, setData] = useState<[] | any>([]);
  const handler = async () => {
    const productsData: any = [];
    let order;
    try {
      for (let i = 0; i < orderData.length; i++) {
        order = await axios.get(
          `http://localhost:8000/products/${orderData[i]._id}`
        );
        const productData = order?.data.getData;
        productsData.push({ productData });
      }
      setData([...productsData]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handler();
  }, []);
  console.log(data);

  return (
    <div>
      <NavbarUser />
      <div className="flex w-[1440px] m-auto">
        <PurchaseField />
        <div className="my-[200px] flex flex-col">
          <div className="flex flex-col gap-[20px]">
            {data &&
              data.map((e: any) => {
                return <PurchaseCart data={e.productData} />;
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
