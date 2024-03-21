"use client";
import Loading from "@/components/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import useSWR from "swr";
const API = "http://localhost:8000/user";
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const page = () => {
  const { user }: any = useAuth0();
  const { data, error, isLoading } = useSWR(API, fetcher);
  const router = useRouter();
  const userData = data?.getAll;

  useEffect(() => {
    const loginUser = userData?.filter((e: any) => user?.email == e.email);
    setTimeout(() => {
      if (loginUser) {
        for (const el of loginUser) {
          if (el.email == user?.email && el.role === "admin") {
            router.push(`/adminDashboard/${el._id}`);
          } else if (el.email !== user?.email) {
            router.push("/signupStep");
          } else if (el.email == user?.email && el.role === "user") {
            router.push("/dashboard");
          }
        }
      }
    }, 1000);
  }, [user?.email]);
  return (
    <div>
      <Loading />
    </div>
  );
};

export default page;
