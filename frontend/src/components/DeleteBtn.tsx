import React from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Delete } from "@/images";

export const DeleteBtn = ({ val }: any) => {
  const deleteItem = async (id: Number) => {
    try {
      const items = await axios.delete(`http://localhost:8000/products/${id}`);
      toast.success("амжилттай устгалаа.");
    } catch (error) {
      toast.error("устгах боломжгүй.");
    }
  };
  return (
    <div>
      <Toaster position="top-right" />
      <Toaster position="top-right" />
      <button className="flex" onClick={() => deleteItem(val)}>
        <Delete />
      </button>
    </div>
  );
};
