import React, { ReactNode, createContext, useState } from "react";
type props = {
  children: ReactNode;
};
type adminOrderContext = {
  orderStatus: (id: number) => void;
};
export type color = {
  color: String;
};
export const AdminOrderContext = createContext({} as adminOrderContext);
const AdminOrderContextProvider = ({ children }: props) => {
  const [color, setColor] = useState<color | any>("");
  return (
    <AdminOrderContext.Provider value={{ color, setColor }}>
      {children}
    </AdminOrderContext.Provider>
  );
};

export default AdminOrderContextProvider;
