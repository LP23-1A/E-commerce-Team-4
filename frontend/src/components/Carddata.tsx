let data = [
  {
    title: "Орлого",
    count: "235'000",
    date: "Өнөөдөр",
  },
  {
    title: "Захиалга",
    count: "58",
    date: "Өнөөдөр",
  },
  {
    title: "Хэрэглэгч",
    count: "90",
    date: "Өнөөдөр",
  },
];
import React from "react";

export const Carddata = () => {
  return (
    <div className="flex justify-between w-full gap-10">
      {data.map((el) => {
        return (
          <div className="h-[170px] bg-white rounded-[10px] p-5 flex flex-col justify-between w-1/3">
            <p className="font-bold text-xl">{el.title}</p>
            <p className="text-[44px] font-bold">{el.count}</p>
            <p className="text-[18px]">{el.date}</p>
          </div>
        );
      })}
    </div>
  );
};
