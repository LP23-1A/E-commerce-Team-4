'use client'
import { Footer, NavbarUser, PathUser, ProductUser, ProductUserDetail } from '@/components'
import React from 'react'

const page = () => {
  return (
    <div>
      <NavbarUser /> 
      <PathUser />
      <ProductUser />
      <ProductUserDetail />
      <Footer />
    </div>
  )
}

export default page
