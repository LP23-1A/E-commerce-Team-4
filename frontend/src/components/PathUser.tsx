import { log } from 'console'
import React from 'react'

export const PathUser = () => {
  const path = window.location.pathname
  console.log("path:", path);
  
  
  if ( path === '/user/gridProduct' || '/user/shopList' || '/user/shopLeftSidebar' ) {
    const value = '. Электрон бараа'
    console.log('value:', value);
  } else if ( path === '/user/saved' ) {
    const valuee = '. Хадгалах'
    console.log('valuee:', valuee);
  } else if ( path === '/user/shopCart' ) {
    const valueee = '. Сагс'
    console.log('valueee:', valueee);
  } else if ( path === '/user/orderComplete' ) {
    const valueeee = '. Амжилттай'
    console.log('valueeee:', valueeee);
  } else if ( path === '/user/saveList') {
    const valueeeee = '. Амжилттай'
    console.log('valueeeee:', valueeeee);
  }
  
  
  return (
    <div className='h-20 bg-[#F6F5ff] w-full'>
      <div className='flex justify-between mx-auto w-[1440px] items-center h-full'>
        <div className='flex gap-2 items-center'>
          <h1>Home</h1>
          <p className='text-[#FB2E86]'>{path}</p>
        </div>
      </div>
    </div>
  )
}