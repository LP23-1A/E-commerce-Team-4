'use client'
import AsideBar from '@/components/AsideBar'
import Navbar from '@/components/Navbar'
import Img from '@/images/Img'
import Plus from '@/images/Plus'
import ToLeft from '@/images/ToLeft'
import React, { useState } from 'react'
import axios from 'axios'
const page = () => {
    const [ input, setInput ] = useState({
        productName: '',
        categoryId: '',
        price: '',
        qty: '',
        thumbnails: '',
        description: '',
        tag: '',
        residual: '',
        mainCate: '',
        subCate: '',
    });

    const createProduct = async () => {
        try {
            const res = await axios.post('http://localhost:8000/products/product', { ...input })
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='flex flex-col mx-auto'>
      <Navbar />
      <div className='flex flex-col mx-auto w-[1440px]'>
        <div className='flex w-[1440px] mx-auto'>
            <AsideBar />
            <div className='bg-[#FEFEFE] h-14 w-full'>
                <div className='flex gap-10 items-center'>
                    <a href='/Product'>
                        <button className='flex h-14 w-14 items-center justify-center'><ToLeft /></button>
                    </a>
                    <h1 className='text-xl'>Бүтээгдэхүүн нэмэх</h1>
                </div>
                <div className='flex bg-[#F0F0F0] w-full h-screen p-9 flex-col'>
                    <div className='flex w-full h-fit justify-between'>
                        <div className='flex flex-col gap-5'>
                            <div className='w-[540px] bg-white rounded-xl p-6 gap-2 flex flex-col'>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-semibold'>Бүтээгдэхүүн нэр</h1>
                                    <input type="text" className='border w-full p-3 rounded-lg' placeholder='Нэр' onChange={(e) => setInput((prev) => ({ ...prev, productName: e.target.value }))}/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-semibold'>Нэмэлт мэдээлэл</h1>
                                    <input type="text" className='border w-full p-3 rounded-lg h-fit' placeholder='Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар' onChange={(e) => setInput((prev) => ({ ...prev, description: e.target.value }))}/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-semibold'>Барааны код</h1>
                                    <input type="text" className='border w-full p-3 rounded-lg' placeholder='#12345678' onChange={(e) => setInput((prev) => ({ ...prev, qty: e.target.value }))}/>                     
                                </div>
                            </div>
                            <div className='w-[540px] h-52 bg-white rounded-xl p-6 gap-2 flex flex-col'>
                                <h1 className='font-semibold text-xl'>Бүтээгдэхүүн зураг</h1>
                                <div className='flex gap-6 justify-start items-center h-full'>
                                    <div className='flex justify-center items-center h-[124px] w-[124px] border border-dashed rounded-xl'><Img /></div>
                                    <div className='flex justify-center items-center h-[124px] w-[124px] border border-dashed rounded-xl'><Img /></div>
                                    <div className='flex justify-center items-center h-[124px] w-[124px] border border-dashed rounded-xl'><Img /></div>
                                    <button className='h-10 w-10 rounded-[50%] bg-gray-200 flex justify-center items-center left-3'><Plus /></button>
                                </div>
                            </div>
                            <div className='w-[540px] h-[163px] bg-white rounded-xl p-6 gap-2 flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-semibold'>Үндсэн үнэ</h1>
                                    <input type="text" placeholder='Үндсэн үнэ' className='border p-2 rounded-lg w-[230px]' onChange={(e) => setInput((prev) => ({ ...prev, price: e.target.value }))}/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-semibold'>Үлдэгдэл тоо ширхэг</h1>
                                    <input type="text" placeholder='Үлдэгдэл тоо ширхэг' className='border p-2 rounded-lg w-[230px]' onChange={(e) => setInput((prev) => ({ ...prev, residual: e.target.value }))}/>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='w-[540px] bg-white rounded-xl p-6 gap-2 flex flex-col'>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-semibold text-lg'>Ерөнхий ангилал</h1>
                                    <input type="text" className='border w-full p-3 rounded-lg h-16' placeholder='Сонгох' onChange={(e) => setInput((prev) => ({ ...prev, mainCate: e.target.value }))}/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-semibold text-lg'>Дэд ангилал</h1>
                                    <input type="text" className='border w-full p-3 rounded-lg h-16' placeholder='Сонгох' onChange={(e) => setInput((prev) => ({ ...prev, subCate: e.target.value }))}/>
                                </div>
                            </div>
                            <div className='w-[540px] bg-white rounded-xl p-6 gap-4 flex flex-col'>
                                <h1 className='text-xl font-semibold'>Төрөл</h1>
                                <div className='flex gap-7 items-center'>
                                    <p>Өнгө</p>
                                    <div className='h-10 w-10 rounded-[50%] bg-black'></div>
                                    <div className='h-10 w-10 rounded-[50%] bg-red-700'></div>
                                    <div className='h-10 w-10 rounded-[50%] bg-purple-700'></div>
                                    <button className='h-10 w-10 rounded-[50%] bg-gray-200 flex justify-center items-center'><Plus /></button>
                                </div>
                                <div className='flex gap-7 items-center'>
                                    <p>Хэмжээ</p>
                                    <div className='h-10 w-10 rounded-[50%] bg-gray-200 flex items-center justify-center'>M</div>
                                    <div className='h-10 w-10 rounded-[50%] bg-gray-200 flex items-center justify-center'>L</div>
                                    <div className='h-10 w-10 rounded-[50%] bg-gray-200 flex items-center justify-center'>XL</div>
                                    <div className='h-10 w-10 rounded-[50%] bg-gray-200 flex items-center justify-center'>2XL</div>
                                    <div className='h-10 w-10 rounded-[50%] bg-gray-200 flex items-center justify-center'>3XL</div>
                                    <button className='h-10 w-10 rounded-[50%] bg-gray-200 flex justify-center items-center'><Plus /></button>
                                </div>
                                <button className='border p-3 px-5 w-fit rounded-md font-semibold'>Төрөл нэмэх</button>
                            </div>
                            <div className='w-[540px] bg-white rounded-xl p-6 gap-2 flex flex-col'>
                                <h1 className='font-semibold text-lg'>Таг</h1>
                                <input type="text" className='border w-full p-3 rounded-lg h-16' placeholder='Таг нэмэх...' onChange={(e) => setInput((prev) => ({ ...prev, tag: e.target.value }))}/>
                                <p className='text-gray-600'>Санал болгох: Гутал, Цүнх, Эмэгтэй</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5 items-start justify-end mt-3'>
                        <button className='border p-3 px-5 text-black bg-white rounded-lg'>Ноорог</button>
                        <button className='border p-3 px-5 text-white bg-black rounded-lg' onClick={createProduct}>Нийтлэх</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page