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
  console.log(user);
  console.log();

  useEffect(() => {
    userData?.filter((e: any) => {
      if (e.email === user?.email && e.role === "admin") {
        router.push(`/adminDashboard/${e._id}`);
      } else if (e.email === user?.email && e.role === "user") {
        router.push("/dashboard");
      } else if (e.email !== user?.email) {
        router.push("/signupStep");
      }
    });
  }, [user?.email]);
  return (
    <div>
      <Loading />
    </div>
  );
};

export default page;
