"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { data } from "@/utils/Sidebar";

const AsideBar = () => {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const id = JSON.parse(localStorage.getItem("id") as string);

  const handler = (index: number) => {
    setActive(index);
  };
  console.log(active);

  if (active === 1) {
    router.push(`/order/${id}`);
  } else if (active === 2) {
    router.push(`/income/${id}`);
  } else if (active === 3) {
    router.push(`/Product/${id}`);
  }

  return (
    <div className="flex flex-col pt-4 gap-3 bg-white h-screen w-80">
      {data.map((e, index) => {
        return (
          <button
            className="flex items-center gap-6 text-xl py-2   "
            style={{ backgroundColor: index === active ? "grey" : "" }}
            onClick={() => handler(index)}
          >
            {e.icon}
            <p>{e.name}</p>
          </button>
        );
      })}
    </div>
  );
};

export default AsideBar;
