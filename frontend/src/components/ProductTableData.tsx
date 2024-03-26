import React from "react";
import { DeleteBtn, ProductPutBtn } from ".";

export const ProductTableData = ({ data }: any) => {
  return (
    <tbody>
      <tr>
        <td className="w-[68px] py-[12px] px-[24px] border-b-[1px]">
          <input type="checkbox" name="" id="" />
        </td>
        <td className="w-[260px] py-[12px] pl-0 pr-[auto] border-b-[1px]">
          <div className="flex gap-[8px] align-items">
            <img
              src={data.images}
              className="w-[40px] h-[40px] rounded-[50%] mt-[3px]"
            />
            <div className="column">
              <p>{data.productName}</p> <p>{data.categoryId}</p>
            </div>
          </div>
        </td>
        <td className="w-[240px] py-[12px] pl-0 pr-[auto] border-b-[1px]">
          {data.tag}
        </td>
        <td className="w-[200px] py-[12px] pl-0 pr-[auto] border-b-[1px]">
          {data.price}₮
        </td>
        <td className="w-[200px] py-[12px] pl-0 pr-[auto] border-b-[1px]">
          {data.productCode}
        </td>
        <td className="w-[200px] py-[12px] pl-0 pr-[auto] border-b-[1px]">
          {data.sold}
        </td>
        <td className="w-[200px] py-[12px] pl-0 pr-[auto] border-b-[1px]">
          <p>{data.createdAt.slice(0, 10)}</p>
        </td>
        <td className="w-[200px] p-[16px] border-b-[1px]">
          <div className="justify-center flex gap-2">
            <DeleteBtn val={data._id} />
            <ProductPutBtn val={data._id} />
          </div>
        </td>
      </tr>
    </tbody>
  );
};
