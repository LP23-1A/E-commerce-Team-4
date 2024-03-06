import React, { createContext, useState } from "react";
export const AdminContext = createContext({});
const AdminContextProvider = ({ children }: any) => {
  const [data, setData] = useState({
    email: "",
    name: "",
    shopInformation: "",
    city: "",
    district: "",
    khoroo: "",
    exprience: "",
    product: "",
  });

  return (
    <AdminContext.Provider value={{ data, setData }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
