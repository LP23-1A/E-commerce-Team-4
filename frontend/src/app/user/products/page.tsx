'use client'
import { Footer, NavbarUser, PathUser, ProductUserDetail } from '@/components'
import React from 'react'

const page = () => {
  return (
    <div>
      <NavbarUser /> 
      <PathUser />
      <ProductUserDetail />
      <Footer />
    </div>
  )
}

export default page
