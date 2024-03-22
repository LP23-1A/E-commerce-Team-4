"use client";
import {
  AsideBar,
  DashboardEmpty,
  Navbar,
  Amountpaid,
  Order,
  User,
  Chart,
  Chartreg,
} from "@/components";
import useSWR from "swr";

const API = "http://localhost:8000/products/product";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const page = () => {
  const { data, error, isLoading } = useSWR(API, fetcher);
  const productData = data?.getAll;
  return (
    <div>
      {!data ? (
        <DashboardEmpty />
      ) : (
        <div>
          <Navbar />
          <div className="flex m-auto">
            <AsideBar />
            <div className=" h-[100vh] flex flex-col gap-[24px] bg-gray-200 py-[40px] px-[40px] w-full">
              <div className="flex justify-between gap-[24px]">
                <Amountpaid />
                <Order />
                <User />
              </div>
              <div className="flex justify-between gap-[40px]">
                <div className="w-1/2 bg-white rounded-[10px] px-[40px] flex flex-col py-[40px] gap-[30px]">
                  <h1 className="text-xl font-bold">Шилдэг бүтээгдэхүүн</h1>
                  <div className="flex w-[100%] justify-around bg-gray-200 h-[50px] items-center">
                    <p>№</p>
                    <p>бүтээгдэхүүн</p>
                    <p>Зарагдсан</p>
                    <p>Үнэ</p>
                  </div>
                  <div>
                    {productData &&
                      productData?.map((el: any, index: number) => {
                        return (
                          <div
                            className="flex justify-between w-[100%] px-[70px] border-b-2 border-gray-200"
                            key={index}
                          >
                            <p>{index + 1}</p>
                            <div className="flex items-center w-[150px] justify-start gap-4">
                              <img
                                className="w-[40px] h-[40px] rounded-[50%]"
                                src={el.images}
                              />
                              <p className="text-black">{el.productName}</p>
                            </div>
                            <p>{el.sold}</p>
                            <p>{el.price}₮</p>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="flex flex-col gap-[40px]  w-1/2">
                  <div className="w-full h-1/2  rounded-[10px] px-[24px] ">
                    <Chart />
                  </div>
                  <div className="w-full h-1/2 px-[24px]  rounded-[10px] flex flex-col ">
                    <Chartreg />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
