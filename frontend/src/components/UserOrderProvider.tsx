import React, { createContext, useState } from "react";

export const UserOrderContext = createContext({});
export const UserOrderProvider = ({ children }: any) => {
  const [data, setData] = useState([]);
  const orderData: [] = [];
  return (
    <UserOrderContext.Provider value={{ orderData, data, setData }}>
      {children}
    </UserOrderContext.Provider>
  );
};
