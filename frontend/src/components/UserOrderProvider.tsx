import React, { createContext, useRef, useState } from "react";
import toast from "react-hot-toast";
type fn = {
  removeCart: (id: string) => void;
};
type CartType = {
  id: number;
  quantity: number;
};

export const UserOrderContext = createContext({});
export const UserOrderProvider = ({ children }: any) => {
  const [orderData, setOrderData] = useState<CartType[] | any>([]);

  const userEmail = JSON.parse(localStorage.getItem("userEmail") as string);
  const formDataRef = useRef({
    orderNumber: "",
    phoneNumber: "",
    coupon: "",
    description: "",
    address: "",
    city: "",
    apartment: "",
    firstName: "",
    lastName: "",
  });

  const addCart = (_id: string) => {
    if (userEmail) {
      const a: any = orderData.find((item: any) => item._id === _id);
      if (a) {
        setOrderData(
          orderData.map((item: any) =>
            item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      } else {
        setOrderData([...orderData, { _id, quantity: 1 }]);
      }
    } else {
      toast.error("Та нэвтэрнэ үү.");
    }
  };

  const removeCart = (_id: any) => {
    const a = orderData.find((item: any) => item._id === _id);
    if (a) {
      setOrderData(orderData.filter((item: any) => item._id !== _id));
    }
  };

  const decreaseCart = (_id: string) => {
    const a = orderData.find((item: any) => item._id === _id);
    if (a?.quantity === 1) {
      setOrderData(orderData.filter((item: any) => item._id !== _id));
    } else {
      setOrderData(
        orderData.map((item: any) =>
          item._id === _id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  return (
    <UserOrderContext.Provider
      value={{
        orderData,
        setOrderData,
        addCart,
        removeCart,
        decreaseCart,
        formDataRef,
      }}
    >
      {children}
    </UserOrderContext.Provider>
  );
};
