import React from "react";
import axios from "axios";
import { Delete } from "@/images";

export const DeleteBtn = ({ val }: any) => {
  const deleteItem = async (id: Number) => {
    try {
      const items = await axios.delete(`http://localhost:8000/products/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button className="flex" onClick={() => deleteItem(val)}>
        <Delete />
      </button>
    </div>
  );
};
