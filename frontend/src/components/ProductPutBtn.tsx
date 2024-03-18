import React from 'react'
import axios from 'axios';
import Edit from "@/images/Edit";
import { useRouter } from "next/navigation";

const ProductPutBtn = ({ val }: any) => {
    const updateItem = async (id: Number) => {
        try {
          const items = await axios.put(`http://localhost:8000/products/${id}`)

        } catch (error) {
          console.log(error);
        }
    }
  return (
    <div>
        <button className="flex" onClick={() => updateItem(val._id)}>
            <Edit />
        </button>
    </div>
  )
}

export default ProductPutBtn
