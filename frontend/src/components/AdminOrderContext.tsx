import React, { ReactNode, createContext, useState } from "react";
import useSWR from "swr";
type props = {
  children: ReactNode;
};

const API = "http://localhost:8000/order";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const AdminOrderContext = createContext({});
export const AdminOrderContextProvider = ({ children }: props) => {
  const birthDay = new Date();
  const today: number = birthDay.getDate();
  const [orderData, setOrderData] = React.useState<any>([]);
  const [activeButton, setActiveButton] = useState<string | any>(today);
  const { data, error, isLoading } = useSWR(API, fetcher);

  const dayFilter = () => {
    const dayFilter = data?.getAllOrder.filter((e: any) => {
      return e.createdAt.slice(8, 10) == today;
    });
    setActiveButton(today);
    setOrderData(dayFilter);
  };

  const weekFilter = () => {
    const weekFilter = data?.getAllOrder.filter((e: any) => {
      return e.createdAt.slice(8, 10) > today - 7;
    });
    setActiveButton("week");
    setOrderData(weekFilter);
  };

  const monthFilter = (value: any) => {
    const monthFilter = data?.getAllOrder.filter((e: any) => {
      return e.createdAt.slice(5, 7) == value;
    });
    setActiveButton("month");
    setOrderData(monthFilter);
  };

  const searchFilter = (value: any) => {
    const searchFilter = data?.getAllOrder.filter((e: any) => {
      return e.orderNumber.includes(value) || e.userId?.email.includes(value);
    });
    setOrderData(searchFilter);
  };

  const statusFilter = (value: any) => {
    const statusFilter = data?.getAllOrder.filter((e: any) => {
      if (value === "Бүгд") {
        return e;
      }
      return e.status.includes(value);
    });
    setOrderData(statusFilter);
  };

  return (
    <AdminOrderContext.Provider
      value={{
        activeButton,
        orderData,
        dayFilter,
        weekFilter,
        monthFilter,
        searchFilter,
        statusFilter,
      }}
    >
      {children}
    </AdminOrderContext.Provider>
  );
};
