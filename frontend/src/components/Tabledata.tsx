"use client"
import React from 'react'
import axios from 'axios'

const URL = "http://localhost:8000/products/product";

const Tabledata = () => {
    const [data, setData] = React.useState([]);
    const handler = async () => {
        try {
          const { data } = await axios.get(URL);
          const res = data.getAll ;
          setData(res);
        } catch (error) {
          console.log(error);
        }
      };
    React.useEffect(() => {
        handler();
      },[]);
            
  return (
    <>
        {
            data && data.map((el: any, index) =>{
                return (
                    <div className='flex justify-between w-[100%] px-[60px] border-b-2 border-gray-200  '>
                        <p>{index + 1}</p>
                        <div className='flex items-center w-[110px] justify-start gap-4'>
                            <img className='w-[40px] h-[40px] rounded-[50%]' src={el.images}/>
                            <p className='text-black'>{el.productName}</p>
                        </div>
                        <p>{el.sold}</p>        
                        <p>{el.price}₮</p>   
                    </div>
                )
               
            })
        }
    </>
  )
}

export default Tabledata
