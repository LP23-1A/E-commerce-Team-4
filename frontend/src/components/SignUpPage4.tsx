import React, { useContext, useState } from "react";
import Pineconelogo from "@/images/Pineconelogo";
import ToLeft from "@/images/ToLeft";
import { AdminContext } from "./AdminContext";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
const BASE_URL = "http://localhost:8000/admin";
const SignUppage4 = ({ back }: any) => {
  const { data, setData }: any = useContext(AdminContext);
  const [error, setError] = useState("");
  const router = useRouter();
  const userData = JSON.parse(localStorage.getItem("userData") as string);
  const { user }: any = useAuth0();
  console.log(user);

  const createUser = async () => {
    try {
      const createUser = await axios.post(BASE_URL, {
        email: user?.email ?? userData?.email,
        name: user?.nickname ?? userData?.name,
        shopInformation: data.shopInformation,
        city: data.city,
        district: data.district,
        khoroo: data.khoroo,
        exprience: data.exprience,
        product: data.product,
      });
      console.log(createUser);

      if (createUser) {
        if (data.exprience !== "" && data.product !== "") {
          localStorage.removeItem("userData");
          localStorage.setItem(
            "id",
            JSON.stringify(createUser.data.createAdmin._id) as string
          );
          router.push(`/dashboard/${createUser.data.createAdmin._id}`);
        }
      }
    } catch (error) {
      setError("not unique email");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-[100px] py-[30px] px-[30px]">
      <div className="flex justify-start items-start text-start w-[100%]">
        <Pineconelogo />
      </div>
      {error && (
        <div className="border px-6 py-1 bg-red-600 text-white rounded-xl flex gap-2 items-center">
          <p className="border w-6 h-6 flex justify-center items-center  rounded-3xl bg-red-800">
            x
          </p>
          <p>not unique email</p>
        </div>
      )}

      <ul className="steps w-[900px]">
        <li className="step step-neutral">Дэлгүүрийн нэр</li>
        <li className="step step-neutral">Бүс нутаг</li>
        <li className="step step-neutral">Нэмэлт мэдээлэл</li>
      </ul>
      <div className="flex flex-col gap-12 w-96">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl">Жоохон танилцъя</h1>
          <p>Энэ мэдээллийг дэлгүүрийн тохиргоонд туслах зорилгоор ашиглана</p>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">
              Та борлуулалт хийж байсан туршлагатай юу?
            </h1>
            <input
              type="text"
              placeholder="Та борлуулалт хийж байсан туршлагатай юу?"
              className="p-3 border rounded-lg w-full"
              onChange={(el) =>
                setData((prev: {}) => ({ ...prev, exprience: el.target.value }))
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">
              Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?
            </h1>
            <input
              type="text"
              placeholder="Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?"
              className="p-3 border rounded-lg w-full"
              onChange={(el) =>
                setData((prev: {}) => ({ ...prev, product: el.target.value }))
              }
            />
          </div>
        </div>
        <div className="flex justify-between">
          <button
            className="flex justify-center items-center h-10 w-10 bg-gray-100 rounded-[50%]"
            onClick={back}
          >
            <ToLeft />
          </button>
          <button
            className=" p-3 rounded-lg text-white hover:scale-90"
            style={{
              backgroundColor:
                data.exprience === "" || data.product === "" ? "gray" : "black",
            }}
            onClick={createUser}
          >
            Дараах
          </button>
        </div>
      </div>
    </div>
  );
};
export default SignUppage4;
