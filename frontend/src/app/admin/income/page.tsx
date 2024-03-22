"use client";
import { AsideBar, Navbar } from "@/components";
import { Calendar, Down, ExpandMore } from "@/images";
import useSWR from "swr";

const API = "http://localhost:8000/products/product";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const page = () => {
  const { data, error, isLoading } = useSWR(API, fetcher);
  const incomeData = data?.getAll;

  return (
    <div>
      <Navbar />
      <div className="flex m-auto">
        <AsideBar />
        <div className="bg-[#ECEDF0] w-full py-10 px-10">
          <div className=" bg-white rounded-xl m-auto w-1/2">
            <div className="border-b-[1px] border-black-100">
              <div className="px-[24px] py-[20px] flex gap-4 justify-between">
                <div className="w-fit">
                  <p className="w-[73px] h-[28px] font-bold text-xl tracking-tighter">
                    Орлого
                  </p>
                </div>
                <button className="bg-[#1C20240A] px-[10px] py-[6px] rounded-lg">
                  <div className="flex gap-1 align-items vertical-align">
                    <Down />
                    <p className="font-semibold text-sm">Хуулга татах</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="gap-1 p-[24px]">
              <div className="flex justify-between ">
                <p className="font-bold text-3xl tracking-tighter">235,000₮</p>
                <div className="flex gap-[8px]">
                  <button className="rounded-lg border-1 bg-[#18BA51] px-[10px] py-[6px] ">
                    <p className="font-semibold text-sm text-white">Өнөөдөр</p>
                  </button>
                  <button className="rounded-lg border-1 bg-[#18BA51] px-[10px] py-[6px] ">
                    <p className="font-semibold text-sm text-white">7 хоног</p>
                  </button>
                  <button className="bg-white rounded-lg border-[1px]">
                    <div className="flex gap-[4px]">
                      <Calendar />
                      <div>Сараар</div>
                      <ExpandMore />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mx-auto mt-[24px] w-1/2 rounded-xl border-[1px] bg-white h-fit flex-col">
            <div className="flex justify-between w-full text-gray-600 text-lg border-b h-10 mb-5 p-4 pb-10">
              <p className="pl-4">Захиалгийн ID дугаар</p>
              <p>Захиалагч</p>
              <p>Төлбөр</p>
              <p className="pr-10">Огноо</p>
            </div>
            <div className="flex flex-col gap-5 pb-5">
              {incomeData &&
                incomeData.map((val: any, index: any) => {
                  return (
                    <div className="flex justify-between border-b" key={index}>
                      <p className="text-center pl-24">#{val.productCode}</p>
                      <p className="text-center pl-36">{val.tag}</p>
                      <p className="text-center pl-20">{val.price}₮</p>
                      <p className="text-center pr-10">
                        {val.createdAt.slice(0, 10)}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
