import { menu } from '@/utils/Menu'
import React from 'react'

const HomeUser = () => {
  return (
    <div className='flex flex-col gap-1 py-2 bg-white absolute top-5 rounded-lg'>
        { menu && menu.map((val: any, index: any) => {
            return (
                <div key={index} className='p-2 px-7 hover:bg-gray-100'>
                    {val.name}
                </div>
            )
        })}
    </div>
  )
}
7
export default HomeUser
