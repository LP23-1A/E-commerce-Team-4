'use client'
import { Footer, NavbarUser, PathUser } from '@/components'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col w-full'>
      <NavbarUser />
      <PathUser />
      <div className='flex flex-col p-6 h-fit w-[440px] my-40 mx-auto shadow-xl items-center gap-5'>
        <h1 className='font-bold text-3xl'>Бүртгүүлэх</h1>
        <div className='flex flex-col items-center justify-between gap-4 text-[#9096B2]'>
            <p>Доорх мэдээллийг бөглөнө үү</p>
            <input type="text" className='w-full border p-2 rounded font-light' placeholder='Имэйл хаяг'/>
            <input type="text" className='w-full border p-2 rounded font-light' placeholder='Нууц үг'/>
            <input type="text" className='w-full border p-2 rounded font-light' placeholder='Нууц үг давтах'/>
            <button>Нууц үгээ мартсан</button>
            <button className='p-3 rounded text-white w-[392px] bg-[#FB2E86]'>Бүртгүүлэх</button>
            <button>Шинээр бүртгүүлэх</button>
        </div>
      </div>
      <Footer /> 
    </div>
  )
}

export default page
