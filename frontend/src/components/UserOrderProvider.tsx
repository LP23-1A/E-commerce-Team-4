import React, { createContext, useRef, useState } from "react";
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
    const a: any = orderData.find((item: any) => item._id === _id);
    if (a) {
      setOrderData(
        orderData.map((item: any) =>
          item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      console.log("k");
    } else {
      setOrderData([...orderData, { _id, quantity: 1 }]);
    }
    console.log(_id);
  };
  console.log(orderData);

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
  console.log(orderData);

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
