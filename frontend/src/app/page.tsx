"use client";
import { AdminContextProvider, SignUppage1 } from "@/components";
import React, { useState } from "react";

const Home = () => {
  return (
    <AdminContextProvider>
      <SignUppage1 />
    </AdminContextProvider>
  );
};

export default Home;
