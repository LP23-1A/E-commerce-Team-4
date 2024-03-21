import React, { ReactNode, createContext, useEffect, useState } from "react";
import useSWR from "swr";
type props = {
  children: ReactNode;
};

type FilterType = {
  dayFilter: (e: string) => void;
};

type OrderType = {
  createdAt: string;
};

const API = "http://localhost:8000/order";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const AdminOrderContext = createContext({} as FilterType);
export const AdminOrderContextProvider = ({ children }: props) => {
  const [orderData, setOrderData] = React.useState<any>([]);
  const { data, error, isLoading } = useSWR(API, fetcher);
  const birthDay = new Date();
  const today: number = birthDay.getDate();

  const dayFilter = () => {
    const dayFilter = data?.getAllOrder.filter((e: any) => {
      return e.createdAt.slice(8, 10) == today;
    });

    setOrderData(dayFilter);

    console.log(dayFilter, orderData);
  };
  console.log(data?.getAllOrder);

  return (
    <AdminOrderContext.Provider value={{ orderData, dayFilter }}>
      {children}
    </AdminOrderContext.Provider>
  );
};
