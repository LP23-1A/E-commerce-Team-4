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

const Carddata = () => {
  return (
    <div className="flex justify-between w-full">
      {data.map((el) => {
        return (
          <div className="w-[350px] h-[170px] bg-white rounded-[10px] px-[20px] py-[20x] flex flex-col justify-around">
            <p className="font-bold text-xl">{el.title}</p>
            <p className="text-[44px] font-bold">{el.count}</p>
            <p className="text-[18px]">{el.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Carddata;
