"use client";
import {
  AdminContextProvider,
  Footer,
  NavbarUser,
  PathUser,
  ProductUser,
  SignUppage1,
} from "@/components";
import React from "react";

const Home = () => {
  return (
    // <AdminContextProvider>
    //   <SignUppage1 />
    // </AdminContextProvider>
    <div>
      <NavbarUser />
      <PathUser />
      <ProductUser />
      <Footer />
    </div>
  );
};

export default Home;
