"use client";
import React, { useState } from "react";
import SignUppage1 from "@/components/SignUppage1";
import AdminContextProvider from "@/components/AdminContext";

const Home = () => {
  return (
    <AdminContextProvider>
      <SignUppage1 />
    </AdminContextProvider>
  );
};

export default Home;
