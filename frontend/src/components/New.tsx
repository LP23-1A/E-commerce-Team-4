import React from 'react'
import useSWR from "swr";

const API = "http://localhost:8000/products/product";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const New = () => {
  const { data, error} = useSWR(API, fetcher);
  const productData = data?.getAll;
  return (
    <div className='flex flex-col justify-center items-center gap-[20px] w-[1440px] m-auto'>
      <p className='text-3xl font-bold'>Шинээр нэмэгдсэн</p>
      <div className='flex gap-[50px] justify-between w-[1440px] flex-wrap'>
       {
        productData && productData.slice(0, 8).map((el:any) =>{
          return(
            <div className="w-1/5 h-[361px] shadow-xl  flex flex-col justify-between items-center gap-[10px] py-[20px]">
                  <img src={el.images} className="w-[216px] h-[191px]"/>
                  <div className='flex flex-col justify-center items-center gap-[5px]'>
                    <p className="text-[#FB2E86] text-xl">{el.productName}</p>
                    <div className='flex gap-1'>
                      <div className='h-2 w-2 bg-yellow-500 rounded-3xl'></div>
                      <div className='h-2 w-2 bg-red-500 rounded-3xl'></div>
                      <div className='h-2 w-2 bg-blue-500 rounded-3xl'></div>
                    </div>
                    <p className="text-[#151875] text-xl">{el.price}</p>
                  </div>
              </div>
          )
        })
       }
      </div>
    </div>
  )
}


