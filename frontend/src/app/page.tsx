import AsideBar from "@/components/AsideBar";
import Navbar from "@/components/Navbar";
import SignUppage1 from "@/components/SignUppage1";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <SignUppage1 /> */}
      <AsideBar />
    </div>
  );
}
