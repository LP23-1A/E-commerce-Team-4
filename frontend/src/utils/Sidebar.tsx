import Income from "@/images/Income";
import Product from "@/images/Product";
import Settings from "@/images/Settings";
import Order from "@/images/Order";
import Board from "@/images/Board";
const id = JSON.parse(localStorage.getItem("id") as string);
export const data = [
  {
    icon: <Board />,
    name: "Хяналтын самбар",
    slug: `/adminDashboard/${id}`,
  },
  {
    icon: <Order />,
    name: "Захиалга",
    slug: "/order",
  },
  {
    icon: <Income />,
    name: "Орлого",
    slug: "/income",
  },
  {
    icon: <Product />,
    name: "Бүтээгдэхүүн",
    slug: "/Product",
  },
  {
    icon: <Settings />,
    name: "Тохиргоо",
    slug: "/settings",
  },
];
