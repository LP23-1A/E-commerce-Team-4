import React from "react";
import UserOrder from "./UserOrder";

const AdminOrderTable = ({ filterData, handler }: any) => {
  return (
    <div>
      <div className="bg-white h-fit border rounded-xl border-gray-300 w-full">
        <h1 className="text-[36px] p-4">Захиалга</h1>
        <div className="bg-gray-200 py-6 w-full flex px-6">
          <table className="w-full flex   justify-between  ">
            <tbody className="w-full flex flex-col justify-between">
              <tr className="w-full flex justify-between">
                <th className="w-[300px] flex justify-start">
                  Захиалгын ID дугаар
                </th>
                <th className="w-[200px]">Захиалагч</th>
                <th className="w-[200px]">Огноо</th>
                <th className="w-[200px]">Цаг</th>
                <th className="w-[200px]">Төлбөр</th>
                <th className="w-[200px]">Статус</th>
                <th className="w-[200px]">Дэлгэрэнгүй</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="px-6">
          {filterData &&
            filterData?.map((el: any) => {
              return (
                <div className="w-full">
                  <UserOrder
                    key={el._id}
                    orderNumber={el.orderNumber}
                    date={el.createdAt.slice(0, 10)}
                    time={el.createdAt.slice(11, 16)}
                    status={el.status}
                    price={el.amountPaid}
                    onclick={() => handler(el._id)}
                  />
                  <div className="border-b bg-gray-200 w-full"></div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AdminOrderTable;
