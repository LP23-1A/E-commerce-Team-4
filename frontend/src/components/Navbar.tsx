import Logo from '@/images/Logo'
import Noti from '@/images/Noti'
import User from '@/images/User'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black px-12'>
      <div className='flex justify-between mx-auto h-12 items-center'>
        <div><Logo /></div>
        <div className='flex items-center gap-8'>
            <button><Noti /></button>
            <button><User /></button>
            <button className='text-white'>Username</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
