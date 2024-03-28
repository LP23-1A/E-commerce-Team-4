"use client";
import { Loading } from "@/components";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
const API = "http://localhost:8000/user/one";

const page = () => {
  const { user }: any = useAuth0();
  const router = useRouter();

  const handler = async () => {
    try {
      const getUser = await axios.post(API, { email: user?.email });
      if (getUser && getUser?.data.getUser.role === "admin") {
        router.push(`/admin/dashboard/${getUser?.data.getUser._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handler();
  }, []);
  return (
    <div>
      <Loading />
    </div>
  );
};

export default page;
