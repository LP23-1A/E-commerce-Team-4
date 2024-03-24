"use client";
import { Loading } from "@/components";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
const API = "http://localhost:8000/user/auth";
const page = () => {
  const { user }: any = useAuth0();
  console.log(user?.email);

  const router = useRouter();
  const auth = async () => {
    try {
      const auth = await axios.post(API, { email: user?.email });
      if (auth && auth?.data.auth.role === "admin") {
        return router.push(`/admin/dashboard/${auth?.data.auth._id}`);
      } else if (auth && auth?.data.auth.role === "user") {
        return router.push("/dashboard");
      }
    } catch (error) {
      return router.push("/admin/signupStep");
    }
  };
  useEffect(() => {
    auth();
  }, [user?.email]);
  return (
    <div>
      <Loading />
    </div>
  );
};

export default page;
