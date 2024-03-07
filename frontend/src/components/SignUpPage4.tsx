import React, { useContext } from "react";
import Pineconelogo from "@/images/Pineconelogo";
import ToLeft from "@/images/ToLeft";
import { AdminContext } from "./AdminContext";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
const BASE_URL = "http://localhost:8000/admin";
const SignUppage4 = ({ back }: any) => {
  const { data, setData }: any = useContext(AdminContext);
  const router = useRouter();
  const userData = JSON.parse(localStorage.getItem("userData") as string);
  const { user }: any = useAuth0();
  console.log(userData);

  const createAdmin = async () => {
    try {
      const createAdmin = await axios.post(BASE_URL, {
        email: userData.email | user.email,
        name: userData.name | user.nickname,
        shopInformation: data.shopInformation,
        city: data.city,
        district: data.district,
        khoroo: data.khoroo,
        exprience: data.exprience,
        product: data.product,
      });
      console.log("created", data, createAdmin);
      localStorage.removeItem("userData");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  {
  }
  console.log(JSON.stringify(user));

  return (
    <div className="flex flex-col justify-center items-center gap-[100px] py-[30px] px-[30px]">
      <div className="flex justify-start items-start text-start w-[100%]">
        <Pineconelogo />
      </div>
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
            className=" p-3 rounded-lg text-white"
            style={{
              backgroundColor:
                data.exprience === "" || data.product === "" ? "gray" : "black",
            }}
            onClick={createAdmin}
          >
            Дараах
          </button>
        </div>
      </div>
    </div>
  );
};
export default SignUppage4;
