"use client";
import { AsideBar, Navbar } from "@/components";
import { Calendar, Down, Download, ExpandMore } from "@/images";
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

          <table className="w-1/2 bg-white mx-auto mt-10 rounded-xl px-24">
            <tbody className="flex flex-col gap-4 mt-4">
              <tr className="flex justify-between w-full px-16">
                <th className="flex w-[200px] items-center justify-between font-semibold ">
                  Захиалгын ID дугаар
                </th>
                <th className="w-[100px]">Захиалагч</th>
                <th className="w-[130px] pl-16">Төлбөр</th>
                <th className="w-[150px] pr-5">Огноо</th>
              </tr>
              {incomeData &&
                incomeData.map((val: any, key: any) => {
                  return (
                    <div className="flex flex-col px-12">
                      <tr className="px-6 flex justify-between" key={key}>
                        <td className="w-[200px]">#{val._id.slice(0, 10)}</td>
                        <td className="w-[200px] pl-[40px]">
                          Zoloosoko@gmail.com
                        </td>
                        <td className="w-[130px] pl-[40px]">{val.price}₮</td>
                        <td className="w-[150px] pl-[50px]">
                          {val.createdAt.slice(0, 10)}
                        </td>
                      </tr>
                      <div className="border-b bg-grey mt-2"></div>
                    </div>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default page;
