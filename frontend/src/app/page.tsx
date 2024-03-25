"use client";
import { AdminContextProvider, SignUppage1 } from "@/components";
import Footer from "@/components/Footer";
import NavbarUser from "@/components/NavbarUser";
import PathUser from "@/components/PathUser";
import ProductUser from "@/components/ProductUser";
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
