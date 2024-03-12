import Working from "@/images/Working"
import ToLeft from "@/images/ToLeft"
import Navbar from "@/components/Navbar"
import AsideBar from "@/components/AsideBar"
 
const DashboardEmpty = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="flex justify-center">
            <AsideBar></AsideBar>
            <div className="bg-[#ECEDF0] h-[auto] w-[1218px] px-[auto]">
                <div className="w-[821px] h-[290px] rounded-2xl drop-shadow-2xl absolute mt-[367px] ml-[140px] z-10 bg-white flex">
                    <div className="ml-[0.75px] ml-[30.46px] w-[359.56px]"><Working/></div>
                    <div className="mt-[87.25px] ml-[25px] w-[349px]">
                        <div>
                            <h1 className="font-semibold text-lg text-center tracking-tighter">Харуулах сүүлийн үеийн мэдээлэл алга</h1>
                            <p className="font-normal text-sm text-center tracking-tighter">Та мэдээлэл харахын тулд  мэдээллээ тохируулж дуусгана уу.</p>
                        </div>
                        <button className="bg-[#121316] rounded-lg mx-[55px] mt-[25px]">
                            <div className="flex py-[5px] px-[10px]">
                                <p className="text-white ">Тохиргоог үргэлжлүүлэх</p>
                                <div className="rotate-180 text-white"><ToLeft></ToLeft></div>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="justify-center ml-[24px]">
                    <div className="flex gap-[24px] w-[1170x] mt-[82px] ">
                        <div className="w-[374px] h-[136px] bg-white rounded-xl"></div>
                        <div className="w-[374px] h-[136px] bg-white rounded-xl"></div>
                        <div className="w-[374px] h-[136px] bg-white rounded-xl"></div>
                    </div>
                    <div className="flex gap-[24px] w-[1170px] mt-[32px]">
                        <div className="w-[581px] h-[706px] bg-white rounded-xl"></div>
                        <div className="flex flex-col gap-[24px]">
                            <div className="w-[565px] h-[349px] bg-white rounded-xl"></div>
                            <div className="w-[565px] h-[333px] bg-white rounded-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
  )
}
 
export default DashboardEmpty