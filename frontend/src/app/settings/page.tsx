"use client"
import AsideBar from '@/components/AsideBar'
import Loading from '@/components/Loading'
import Navbar from '@/components/Navbar'
import Check from '@/images/Check'
import { log } from 'console'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'



const page = () => {
    
    const [check , setCheck] = useState(false);
    const [shop , setShop] = useState("")
    const [checkpor, setCheckpor] = useState(false)
    const [loading, setLoading] = useState(false);
 
    const handler = () => {
        if (shop !== "") {
        setCheck(true)
            
        }
    }
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });

    const router = useRouter();  
    const handleAddProduct = () => {
        router.push('/addProduct');
      };
      console.log(check);
      
  return (
    <div>
        {loading === true ? (
            <Loading/>
        ) :  <div><Navbar/>
        <div className='flex w-[1440px] m-auto'>
            <AsideBar/>
            <div className='bg-gray-200 w-[100%] h-[100vh]  flex justify-center py-[100px]'>
                <div className='w-[729px] flex flex-col py-[20px] px-[20px] h-[304px] bg-white rounded-[10px] gap-[20px]'>
                    <p className='text-xl font-bold'>Дэлгүүрийн профайл үүсгэх</p>
                    <div className='flex flex-col justify-center items-center gap-[20px]'>
                        <div className='flex justify-between px-[20px] w-[676px] h-[60px] rounded-[10px] border-gray-300 border-2 items-center'>
                        
                        <div className='flex gap-8'>
                        {check === true ? 
                        <p className='flex justify-center items-center'><Check/></p> : <input type="checkbox"/>}
                                <p>Дэлгүүрийн төрлөө оруулна уу</p>
                            </div>
                            <a href="#my_modal_8" className=" border-2 border-gray-300 px-[10px] rounded-[8px] py-[5px]">Дэлгүүрийн төрөл</a>
                            <div className="modal" role="dialog" id="my_modal_8">
                            <div className="modal-box w-[551px] h-[341px] px-[25px] py-[25px] flex flex-col justify-between">
                                <div className='flex flex-col gap-[30px]'>
                                    <h3 className="font-bold text-lg">Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?</h3>
                                    <div className='flex flex-col gap-[5px] '>
                                        <div className='flex bg-gray-200 py-[10px] px-[10px] rounded-[8px] '>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.755 14.255H14.965L14.685 13.985C15.665 12.845 16.255 11.365 16.255 9.755C16.255 6.165 13.345 3.255 9.755 3.255C6.165 3.255 3.255 6.165 3.255 9.755C3.255 13.345 6.165 16.255 9.755 16.255C11.365 16.255 12.845 15.665 13.985 14.685L14.255 14.965V15.755L19.255 20.745L20.745 19.255L15.755 14.255ZM9.755 14.255C7.26501 14.255 5.255 12.245 5.255 9.755C5.255 7.26501 7.26501 5.255 9.755 5.255C12.245 5.255 14.255 7.26501 14.255 9.755C14.255 12.245 12.245 14.255 9.755 14.255Z" fill="#121316"/>
                                            </svg>
                                            <input onChange={(e) => setShop(e.target.value)} type="text" placeholder='Дэргүүрийн төрлөө оруулна уу.' className='w-[100%] bg-gray-200' />
                                        </div>
                                        <p className='text-gray-400'>Жич: Та үүнийг хүссэн үедээ өөрчилж болно.</p>
                                    </div>
                                </div>
                                <div className="modal-action">
                                    <a href="#" className="btn bg-white text-black hover:text-black">Цуцлах</a>
                                    <a href='#' className='btn  text-white hover:text-black ' style={{backgroundColor:shop === "" ? "" : "black"}}  onClick={handler}> Хадгалах</a>
                                </div>
                            </div>
                            </div>
                        </div>                       
                        <div className='flex justify-between px-[20px] w-[676px] h-[60px] rounded-[10px] border-gray-300 border-2 items-center'>
                            <div className='flex gap-8'>
                            {checkpor === true ? 
                        <p className='flex justify-center items-center'><Check/></p> :<input type="checkbox"/> }
                                
                                <p>Эхний бүтээгдэхүүнээ нэмнэ үү</p>
                            </div>
                            <button onClick={handleAddProduct} className='border-2 border-gray-300 px-[10px] rounded-[8px] py-[5px]'>Бүтээгдэхүүн нэмэх</button>                        
                        </div>                       
                        <div className='flex justify-between px-[20px] w-[676px] h-[60px] rounded-[10px] border-gray-300 border-2 items-center'>
                            <div className='flex gap-8'>
                                <input type="checkbox"/>
                                <p>Хүргэлтийг тохируулна уу</p>
                            </div>
                            <button className='border-2 border-gray-300 px-[10px] rounded-[8px] py-[5px]'>Хүргэлт тохируулах</button>
                        </div>                       
                    </div>
                </div>
            </div>
        </div></div>}
        
    </div>
  )
}

export default page
