'use client'
import { Footer, NavbarUser, PathUser, ProductUser, ProductUserDetail } from '@/components'
import { Star } from '@/images'
import React from 'react'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const page = () => {
    const { data, error } = useSWR('http://localhost:8000/products/product', fetcher)

    if (error) return <div>Error fetching</div>
    if (!data) return <div>Loading...</div>

    return (
    <div>
        <NavbarUser />
        <PathUser />
        <ProductUser />
        <div className='flex gap-24 w-[1440px] mx-auto'>
          <div className='flex flex-col h-fit w-[300px] gap-20'>
            <div className='flex flex-col gap-4'>
              <h1 className='border-b-2 text-2xl font-bold border-black text-[#151875] w-32'>Үнэлгээ</h1>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id=""  className='bg-yellow-400 h-5 w-5'/>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
                <p>(243)</p>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id=""  className='bg-yellow-400 h-5 w-5'/>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
                <p>(243)</p>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id=""  className='bg-yellow-400 h-5 w-5'/>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
                <p>(243)</p>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id=""  className='bg-yellow-400 h-5 w-5'/>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
                <p>(243)</p>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <h1 className='border-b-2 text-2xl font-bold border-black text-[#151875] w-32'>Ангилал</h1>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id=""  className='bg-yellow-400 h-5 w-5'/>
                <p>Prestashop</p>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id=""  className='bg-yellow-400 h-5 w-5'/>
                <p>Magento</p>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id=""  className='bg-yellow-400 h-5 w-5'/>
                <p>Bigcommerce</p>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id=""  className='bg-yellow-400 h-5 w-5'/>
                <p>OsCommerce</p>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id=""  className='bg-yellow-400 h-5 w-5'/>
                <p>3D Cart</p>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id=""  className='bg-yellow-400 h-5 w-5'/>
                <p>Bags</p>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id=""  className='bg-yellow-400 h-5 w-5'/>
                <p>Watches</p>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <h1 className='border-b-2 text-2xl font-bold border-black text-[#151875] w-32'>Үнэ</h1>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id=""  className='bg-yellow-400 h-5 w-5'/>
                <p>₮0.00 - ₮150.00</p>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id=""  className='bg-yellow-400 h-5 w-5'/>
                <p>₮150.00 - ₮350.00</p>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id=""  className='bg-yellow-400 h-5 w-5'/>
                <p>₮150.00 - ₮504.00</p>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" id=""  className='bg-yellow-400 h-5 w-5'/>
                <p>₮450.00 +</p>
              </div>
              <input type="text" placeholder='$10.00 - 20000$' className='rounded border-gray-500 p-2 outline-none border'/>
            </div>
          </div>
          <ProductUserDetail />
        </div>
        <Footer />
    </div>
  )
}

export default page