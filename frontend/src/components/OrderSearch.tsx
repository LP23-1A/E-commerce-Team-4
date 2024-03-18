import Search from "@/images/Search";
import React, { useState } from "react";

const OrderSearch = ({ search1 }: any) => {
  const [query, setQuery] = useState("");
  const search = (e: any) => {
    return e.filter((item: any) =>
      item.productName.toLowercase().includes(query)
    );
  };
  return (
    <div className="flex py-2 px-6 bg-white gap-4 w-[360px] rounded items-center">
      <Search />
      <input
        type="text"
        placeholder="Дугаар Имэйл"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default OrderSearch;
