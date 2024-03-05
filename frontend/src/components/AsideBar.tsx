import Income from '@/images/Income'
import Product from '@/images/Product'
import Settings from '@/images/Settings'
import Order from '@/images/Order'
import React from 'react'
import Board from '@/images/Board'

const AsideBar = () => {
  return (
    <div className='flex flex-col p-2 gap-3 bg-white h-screen w-80'>
      <button className='flex items-center gap-6 text-xl pl-5 pt-5'><Board />Хяналтын самбар</button>
      <button className='flex items-center gap-6 text-xl pl-5 pt-5'><Order />Захиалга</button>
      <button className='flex items-center gap-6 text-xl pl-5 pt-5'><Income />Орлого</button>
      <button className='flex items-center gap-6 text-xl pl-5 pt-5'><Product />Бүтээгдэхүүн</button>
      <button className='flex items-center gap-6 text-xl pl-5 pt-5'><Settings />Тохиргоо</button>
    </div>
  )
}

export default AsideBar
