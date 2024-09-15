import { di1, di2, di3, di4 } from "../assets";
import Sidebar from "./Sidebar";

function Dashboard() {
    return (
        <div className="">
            <div className="lg:px-16 lg:py-7 py-4 md:px-8 px-4 w-full flex justify-between md:gap-10 gap-6 md:flex-row flex-col">
                <Sidebar />
                <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 xxs:grid-cols-4 grid-cols-2 2xl:gap-16 sm:gap-8 gap-4 h-fit">
                    <div className="xl:p-4 md:p-2 p-1.5 rounded-xl border border-[#bcbcbc] flex-col justify-center items-center xl:gap-3 md:gap-2 gap-1 inline-flex ">
                        <img className="xl:w-20 md:w-[55px] sm:w-[48px] w-[30px] xl:h-20 md:h-[55px] sm:h-[48px] h-[30px] relative" src={di1} alt="Dashboard Icon" />
                        <div className="text-center text-[#0f0f0f] xl:text-xl md:text-[13px] text-[8px] font-normal font-['Inter']">Assets Supported</div>
                        <div className="text-center text-[#0f0f0f] xl:text-[40px] md:text-[24px] xs:text-[18px] text-[14px] font-bold font-['Inter']">4</div>
                    </div>
                    <div className="xl:p-4 md:p-2 p-1.5 rounded-xl border border-[#bcbcbc] flex-col justify-center items-center xl:gap-3 md:gap-2 gap-1 inline-flex ">
                        <img className="xl:w-20 md:w-[55px] sm:w-[48px] w-[30px] xl:h-20 md:h-[55px] sm:h-[48px] h-[30px] relative" src={di2} alt="Dashboard Icon" />
                        <div className="text-center text-[#0f0f0f] xl:text-xl md:text-[13px] text-[8px] font-normal font-['Inter']">Total Volume</div>
                        <div className="text-center text-[#0f0f0f] xl:text-[40px] md:text-[24px] xs:text-[18px] text-[14px] font-bold font-['Inter']">$79,556</div>
                    </div>
                    <div className="xl:p-4 md:p-2 p-1.5 rounded-xl border border-[#bcbcbc] flex-col justify-center items-center xl:gap-3 md:gap-2 gap-1 inline-flex ">
                        <img className="xl:w-20 md:w-[55px] sm:w-[48px] w-[30px] xl:h-20 md:h-[55px] sm:h-[48px] h-[30px] relative" src={di3} alt="Dashboard Icon" />
                        <div className="text-center text-[#0f0f0f] xl:text-xl md:text-[13px] text-[8px] font-normal font-['Inter']">RB PRICE</div>
                        <div className="text-center text-[#0f0f0f] xl:text-[40px] md:text-[24px] xs:text-[18px] text-[14px] font-bold font-['Inter']">$0.009</div>
                    </div>
                    <div className="xl:p-4 md:p-2 p-1.5 rounded-xl border border-[#bcbcbc] flex-col justify-center items-center xl:gap-3 md:gap-2 gap-1 inline-flex ">
                        <img className="xl:w-20 md:w-[55px] sm:w-[48px] w-[30px] xl:h-20 md:h-[55px] sm:h-[48px] h-[30px] relative" src={di4} alt="Dashboard Icon" />
                        <div className="text-center text-[#0f0f0f] xl:text-xl md:text-[13px] text-[8px] font-normal font-['Inter']">BTC Fee Rate</div>
                        <div className="text-center text-[#0f0f0f] xl:text-[40px] md:text-[24px] xs:text-[18px] text-[14px] font-bold font-['Inter']">4</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;