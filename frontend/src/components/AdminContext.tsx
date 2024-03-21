import React, { createContext, useRef, useState } from "react";
export const AdminContext = createContext({});
const AdminContextProvider = ({ children }: any) => {
  const formDataRef = useRef({
    shopInformation: "",
    city: "",
    district: "",
    khoroo: "",
    exprience: "",
    product: "",
  });
  return (
    <AdminContext.Provider value={{ formDataRef }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
