"use client";
import { AdminContextProvider, SignUppage1 } from "@/components";
import Footer from "@/components/Footer";
import NavbarUser from "@/components/NavbarUser";
import React from "react";

const Home = () => {
  return (
    // <AdminContextProvider>
    //   <SignUppage1 />
    // </AdminContextProvider>
    <div>
      <NavbarUser />
      <Footer />
    </div>
  );
};

export default Home;
