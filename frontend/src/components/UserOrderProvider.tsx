import React, { createContext, useState } from "react";
type fn = {
  removeCart: (id: string) => void;
};
type CartType = {
  id: number;
  quantity: number;
};
export const UserOrderContext = createContext({});
export const UserOrderProvider = ({ children }: any) => {
  const [orderData, setOrderData] = useState<CartType[]>([]);

  const addCart = (data: any) => {
    const a = orderData.find((item: any) => item.data._id === data._id);
    if (a) {
      setOrderData(
        orderData.map((item: any) =>
          item.data._id === data._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setOrderData([...orderData, { data, quantity: 1 }]);
    }
  };

  const removeCart = (data: any) => {
    const a = orderData.find((item: any) => item.data._id === data._id);
    if (a) {
      setOrderData(orderData.filter((item: any) => item.data._id !== data._id));
    }
  };

  const decreaseCart = (data: any) => {
    const a = orderData.find((item: any) => item.data._id === data._id);
    if (a?.quantity === 1) {
      setOrderData(orderData.filter((item: any) => item.data._id !== data._id));
    } else {
      setOrderData(
        orderData.map((item: any) =>
          item.data._id === data._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <UserOrderContext.Provider
      value={{ orderData, setOrderData, addCart, removeCart, decreaseCart }}
    >
      {children}
    </UserOrderContext.Provider>
  );
};
