import AsideBar from '@/components/AsideBar'
import Carddata from '@/components/Carddata'
import Example from '@/components/Chart'
import Navbar from '@/components/Navbar'
import Tabledata from '@/components/Tabledata'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex'>
            <AsideBar/>
            <div className='w-[100%] h-[100vh] flex flex-col gap-[24px] bg-gray-200 py-[40px] px-[40px]'>
                <div className='flex justify-between'>
                  <Carddata/>
                </div>
                <div className='flex justify-between gap-[40px]'>
                    <div className='w-[100%]  bg-white rounded-[10px] px-[40px] flex flex-col py-[40px] gap-[30px]'>
                        <h1 className='text-xl font-bold'>Шилдэг бүтээгдэхүүн</h1>
                        <div className='flex w-[100%] justify-around bg-gray-200 h-[50px] items-center'>
                            <p>№</p>
                            <p>бүтээгдэхүүн</p>
                            <p>Зарагдсан</p>
                            <p>Үнэ</p>
                        </div>
                        <Tabledata/>
                    </div>
                    <div className='flex flex-col gap-[40px] '>
                        <div className='w-[100%] h-[369px] bg-white rounded-[10px] py-[24px]'>
                        <Example/>
                        </div>
                        <div className='w-[665px] h-[363px] bg-white rounded-[10px] px-[24px] py-[24px] flex flex-col gap-[24px]'>
                           <div>
                                <p className='text-xl font-bold'>Идэвхтэй бүс нутаг</p>
                           </div>
                           <div className='w-[100%] flex flex-col gap-[24px]'>
                                <div className='flex gap-2 justify-between'>
                                    <p>Ulaanbator</p>
                                    <input type="range" className='w-[400px] text-black' />
                                    <p>70%</p>
                                </div>
                                <div className='flex gap-2 justify-between'>
                                    <p>Ulaanbator</p>
                                    <input type="range" className='w-[400px]' />
                                    <p>70%</p>
                                </div>
                                <div className='flex gap-2 justify-between'>
                                    <p>Ulaanbator</p>
                                    <input type="range" className='w-[400px]' />
                                    <p>70%</p>
                                </div>
                                <div className='flex gap-2 justify-between'>
                                    <p>Ulaanbator</p>
                                    <input type="range" className='w-[400px]' />
                                    <p>70%</p>
                                </div>
                               
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
