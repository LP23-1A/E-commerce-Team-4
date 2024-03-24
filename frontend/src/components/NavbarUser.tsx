import { Down } from '@/images';
import Call from '@/images/Call';
import Mail from '@/images/Mail';
import Save from '@/images/Save';
import SearchUser from '@/images/SearchUser';
import Trolley from '@/images/Trolley';
import UserNav from '@/images/UserNav';
import Up from '@/images/Up';
import React, { useState } from 'react';
import HomeUser from './HomeUser';

const NavbarUser = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ input, setInput ] = useState("")
  const fetchApi = (value: string) => {
    fetch('http://localhost:8000/products/product')
      .then((response) => response.json())
      .then((json) => console.log(json))
  }
  const handleChanging = (value: string) => {
    fetchApi(value)
    setInput(value)
  }
  const dropdown = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='flex flex-col'>
      <div className='flex items-center text-white h-11 bg-[#7E33E0]'>
        <div className='flex w-[1440px] mx-auto justify-between items-center'>
          <div className='flex items-center gap-14'>
            <button className='flex items-center gap-4'><Mail /> info@ecommerce.mn</button>
            <button className='flex items-center gap-4'><Call /> 77123456</button>
          </div>
          <div className='flex items-center gap-6'>
            <button className='flex items-center gap-4'>Нэвтрэх <UserNav /></button>
            <button className='flex items-center gap-4'>Хадгалах <Save /></button>
            <button className='flex items-center gap-4'><Trolley /></button>
          </div>
        </div>
      </div>
      <div className='flex items-center h-16 bg-[#ffffff]'>
        <div className='flex w-[1440px] mx-auto justify-between items-center'>
          <div className='flex items-end gap-14'>
            <button className='text-[#0D0E43] text-3xl font-bold'>Ecommerce</button>
            <div className='flex gap-6 items-center'>
              <div className='flex flex-col inset-0 relative items-center'>
                <button className='flex gap-1 items-center text-[#FB2E86]' onClick={dropdown}>Нүүр { isOpen ? (<Up />) : (<Down />) }</button>
                { isOpen && (<HomeUser />)}
              </div>
              <button>Ангилал</button>
            </div>
          </div>
          <div className='flex'>
            <input type="text" className='border w-[226px] h-9 p-2' value={input} onChange={(e) => handleChanging(e.target.value)}/>
            <button className='flex justify-center items-center w-12 h-9 bg-[#FB2E86] text-white'><SearchUser /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarUser
