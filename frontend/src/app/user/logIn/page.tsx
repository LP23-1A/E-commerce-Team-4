'use client'
import { Footer, NavbarUser, PathUser } from '@/components'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col w-full'>
      <NavbarUser />
      <PathUser />
      <div className='flex flex-col p-6 h-96 w-[440px] mt-40 mx-auto shadow-xl items-center justify-between'>
        <h1 className='font-bold text-3xl'>Нэвтрэх</h1>
        <div className='flex flex-col items-center justify-between gap-4 text-[#9096B2]'>
            <p>Доорх мэдээллийн оруулж нэвтэрнэ үү</p>
            <input type="text" className='w-full border p-2 rounded font-light' placeholder='Имэйл хаяг'/>
            <input type="text" className='w-full border p-2 rounded font-light' placeholder='Нууц үг'/>
            <button>Нууц үгээ мартсан</button>
            <button className='p-3 rounded text-white w-[392px] bg-[#FB2E86]'>Нэвтрэх</button>
            <button>Шинээр бүртгүүлэх</button>
        </div>
      </div>
      <button className='mb-40 mt-3 mx-auto border-b-2 w-fit text-[#9096B2]'>мерчант нэвтрэх</button>
      <Footer /> 
    </div>
  )
}

export default page
