"use client";
import { AdminContextProvider } from "@/components";
import SignUppage1 from "@/components/SignUppage1";
import React from "react";

const Home = () => {
  return (
    <AdminContextProvider>
      <SignUppage1 />
    </AdminContextProvider>
  );
};

export default Home;