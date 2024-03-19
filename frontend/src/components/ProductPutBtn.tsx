import React from 'react'
import axios from 'axios';
import Edit from "@/images/Edit";
import { useRouter } from "next/navigation";

const ProductPutBtn = ({ val }: any) => {
  const router = useRouter()
  const editProductPage = (_id: Number) => {
    localStorage.setItem("putProduct", JSON.stringify(_id))
    router.push(`/editProduct?productId=${_id}`)
  }
  return (
    <div>
        <button className="flex" onClick={() => editProductPage(val)}>
            <Edit />
        </button>
    </div>
  )
}

export default ProductPutBtn
