"use client";
import React, { useState } from "react";

import { AdminContextProvider, SignUppage1 } from "@/components/index";

const Home = () => {
  return (
    <AdminContextProvider>
      <SignUppage1 />
    </AdminContextProvider>
  );
};

export default Home;
