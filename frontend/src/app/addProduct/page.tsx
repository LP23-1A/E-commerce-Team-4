import AsideBar from '@/components/AsideBar'
import Navbar from '@/components/Navbar'
import Plus from '@/images/Plus'
import ToLeft from '@/images/ToLeft'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col mx-auto'>
      <Navbar />
      <div className='flex flex-col mx-auto w-[1440px]'>
        <div className='flex w-[1440px] mx-auto'>
            <AsideBar />
            <div className='bg-[#FEFEFE] h-14 w-full'>
                <div className='flex gap-10 items-center'>
                    <button className='flex h-14 w-14 items-center justify-center'><ToLeft /></button>
                    <h1 className='text-xl'>Бүтээгдэхүүн нэмэх</h1>
                </div>
                <div className='flex bg-[#F0F0F0] w-full h-screen p-9 flex-col'>
                    <div className='flex w-full h-screen justify-between'>
                        <div className='flex flex-col gap-5'>
                            <div className='w-[540px] bg-white rounded-xl p-6 gap-2 flex flex-col'>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-semibold'>Бүтээгдэхүүн нэр</h1>
                                    <input type="text" className='border w-full p-3 rounded-lg' placeholder='Нэр'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-semibold'>Нэмэлт мэдээлэл</h1>
                                    <input type="text" className='border w-full p-3 rounded-lg h-16' placeholder='Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-semibold'>Барааны код</h1>
                                    <input type="text" className='border w-full p-3 rounded-lg' placeholder='#12345678'/>                     
                                </div>
                            </div>
                            <div className='w-[540px] h-52 bg-white rounded-xl p-6 gap-2 flex flex-col'>
                                <h1 className='font-semibold text-xl'>Бүтээгдэхүүн зураг</h1>
                            </div>
                            <div className='w-[540px] h-[163px] bg-white rounded-xl p-6 gap-2 flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-semibold'>Үндсэн үнэ</h1>
                                    <input type="text" placeholder='Үндсэн үнэ' className='border p-2 rounded-lg w-[230px]'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-semibold'>Үлдэгдэл тоо ширхэг</h1>
                                    <input type="text" placeholder='Үлдэгдэл тоо ширхэг' className='border p-2 rounded-lg w-[230px]'/>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='w-[540px] bg-white rounded-xl p-6 gap-2 flex flex-col'>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-semibold text-lg'>Бүтээгдэхүүн нэр</h1>
                                    <input type="text" className='border w-full p-3 rounded-lg h-16' placeholder='Сонгох'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-semibold text-lg'>Нэмэлт мэдээлэл</h1>
                                    <input type="text" className='border w-full p-3 rounded-lg h-16' placeholder='Сонгох'/>
                                </div>
                            </div>
                            <div className='w-[540px] bg-white rounded-xl p-6 gap-4 flex flex-col'>
                                <h1 className='text-xl font-semibold'>Төрөл</h1>
                                <div className='flex gap-7 items-center'>
                                    <p>Өнгө</p>
                                    <button className='h-10 w-10 rounded-[50%] bg-gray-200 flex justify-center items-center'><Plus /></button>
                                </div>
                                <div className='flex gap-7 items-center'>
                                    <p>Хэмжээ</p>
                                    <button className='h-10 w-10 rounded-[50%] bg-gray-200 flex justify-center items-center'><Plus /></button>
                                </div>
                                <button className='border p-3 px-5 w-fit rounded-md font-semibold'>Төрөл нэмэх</button>
                            </div>
                            <div className='w-[540px] bg-white rounded-xl p-6 gap-2 flex flex-col'>
                                <h1 className='font-semibold text-lg'>Таг</h1>
                                <input type="text" className='border w-full p-3 rounded-lg h-16' placeholder='Таг нэмэх...'/>
                                <p className='text-gray-600'>Санал болгох: Гутал, Цүнх, Эмэгтэй</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5 items-start justify-end'>
                        <button className='border p-3 px-5 text-black bg-white rounded-lg'>Ноорог</button>
                        <button className='border p-3 px-5 text-white bg-black rounded-lg'>Нийтлэх</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
