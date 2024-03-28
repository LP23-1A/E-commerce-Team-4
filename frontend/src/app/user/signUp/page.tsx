'use client'
import { Footer, NavbarUser, PathUser } from '@/components'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'
import axios from 'axios'
import Password from 'antd/es/input/Password'

const page = () => {
  const router = useRouter()
  const [ error, setError ] = useState('')
  const formDataRef = useRef({
    email: "",
    password:  "",
    rePassword: ""
  });
  const handleRef = (field: string, value: string | number) => {
    formDataRef.current = { ...formDataRef.current, [field]: value}
  }
  const handleValidation = () => {
    console.log("Validation function called");
    if ( formDataRef.current.password !== formDataRef.current.rePassword ) {
      setError('Passwords do not match.')
      return false
    } else {
      setError('')
      true
    }
  }
  const signUp = async () => {
    console.log(formDataRef.current);
    if (!handleValidation()) {
      return
    } 
    try {
      const res = await axios.post('http://localhost:8000/user', formDataRef.current)
      console.log(res);
      router.push('/user/dashboard')
    } catch (error) {
    }
  }
  const logIn = () => {
    router.push('/user/logIn')
  }
  return (
    <div className='flex flex-col w-full'>
      <NavbarUser />
      <PathUser />
      <div className='flex flex-col p-6 h-fit w-[440px] my-40 mx-auto shadow-xl items-center gap-5'>
        <h1 className='font-bold text-3xl'>Бүртгүүлэх</h1>
        <div className='flex flex-col items-center justify-between gap-4 text-[#9096B2]'>
            <p>Доорх мэдээллийг бөглөнө үү</p>
            <input type="text" className='w-full border p-2 rounded font-light' placeholder='Имэйл хаяг' onChange={(e) => handleRef('email', e.target.value)}/>
            <input type="text" className='w-full border p-2 rounded font-light' placeholder='Нууц үг' onChange={(e) => handleRef('password', e.target.value)}/>
            <input type="text" className='w-full border p-2 rounded font-light' placeholder='Нууц үг давтах' onChange={(e) => handleRef('rePassword', e.target.value)}/>
            <button>Нууц үгээ мартсан</button>
            <button className='p-3 rounded text-white w-[392px] bg-[#FB2E86]' onClick={signUp}>Бүртгүүлэх</button>
            <button onClick={logIn}>Нэвтрэх хэсэг</button>
        </div>
      </div>
      <Footer /> 
    </div>
  )
}

export default page