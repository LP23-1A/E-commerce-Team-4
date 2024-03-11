'use client'
import ModalIcon from '@/images/ModalIcon'
// import React from 'react'
import React, { useState } from 'react'

const Modal = () => {
    const [ open, setOpen ] = useState(false)
    const openModal = () => {
        setOpen(!open)
    }
  return (
    <div className='flex justify-center items-center glass w-full h-full inset-0'>
        <div className='flex flex-col items-center justify-center w-64 h-44 bg-white rounded-xl p-3'>
            <div className='flex flex-col items-center justify-center w-64 h-44 bg-white rounded-xl p-3'>
                <ModalIcon />
                <p className='text-center'>Бүтээгдэхүүн амжилттай нэмэгдлээ.</p>
            </div>
        </div>
    </div>
  )
}

export default Modal
