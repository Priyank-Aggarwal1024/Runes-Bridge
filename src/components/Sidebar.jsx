import { Link, useLocation } from "react-router-dom";
import { arroww, handd, handw, sidea } from "../assets";

function Sidebar() {
    const { pathname } = useLocation();
    return (
        <div className="flex md:flex-col items-center md:w-[unset] w-full">
            <Link to={"/deposit"} className={`w-[255px] max-w-full md:h-14 md:pr-10 xxs:pr-2 xxs:pl-4 pr-1.5 pl-1.5 md:py-4 py-1.5 rounded-xl justify-between items-center gap-6 hidden md:inline-flex ${pathname == "/deposit" ? "bg-[#5A585A] text-white" : "bg-white text-[#0f0f0f]"}`}>
                <div className="h-6 justify-start items-center gap-2 flex">
                    {pathname == "/deposit" ? <img src={handw} alt="Hand Wallet" /> : <img src={handd} alt="Hand Deposit" className="w-6 h-6 relative" />}
                    <div className="text-sm font-medium font-['Inter'] leading-tight">Deposite Cyprto</div>
                </div>
                <div className="md:block hidden">{pathname == "/deposit" ? <img src={arroww} alt="Arrow White" /> : <img src={sidea} alt="Side arrow" className="w-6 h-6 relative origin-top-left" />}
                </div>
            </Link>
            <Link to={"/withdraw"} className={`w-[255px] max-w-full md:h-14 md:pr-10 xxs:pr-2 xxs:pl-4 pr-1.5 pl-1.5 md:py-4 py-1.5 rounded-xl justify-between items-center gap-6 inline-flex ${pathname == "/withdraw" ? "bg-[#5A585A] text-white" : "bg-white text-[#0f0f0f]"}`}>
                <div className="h-6 justify-start items-center gap-2 flex">
                    {pathname == "/withdraw" ? <img src={handw} alt="Hand Wallet" /> : <img src={handd} alt="Hand Deposit" className="w-6 h-6 relative" />}
                    <div className="text-sm font-medium font-['Inter'] leading-tight"><span className="md:block hidden">Withdraw Cyprto</span><span className="md:hidden">Bridge</span></div>
                </div>
                <div className="md:block hidden">{pathname == "/withdraw" ? <img src={arroww} alt="Arrow White" /> : <img src={sidea} alt="Side arrow" className="w-6 h-6 relative origin-top-left" />}
                </div>
            </Link>
            <Link to={"/airdrop"} className={`w-[255px] max-w-full md:h-14 md:pr-10 xxs:pr-2 xxs:pl-4 pr-1.5 pl-1.5 md:py-4 py-1.5 rounded-xl justify-between items-center gap-6 inline-flex ${pathname == "/airdrop" ? "bg-[#5A585A] text-white" : "bg-white text-[#0f0f0f]"}`}>
                <div className="h-6 justify-start items-center gap-2 flex">
                    {pathname == "/airdrop" ? <img src={handw} alt="Hand Wallet" /> : <img src={handd} alt="Hand Deposit" className="w-6 h-6 relative" />}
                    <div className="text-sm font-medium font-['Inter'] leading-tight">Airdrop</div>
                </div>
                <div className="md:block hidden">{pathname == "/airdrop" ? <img src={arroww} alt="Arrow White" /> : <img src={sidea} alt="Side arrow" className="w-6 h-6 relative origin-top-left" />}
                </div>
            </Link>
            <Link to={"/history"} className={`w-[255px] max-w-full md:h-14 md:pr-10 xxs:pr-2 xxs:pl-4 pr-1.5 pl-1.5 md:py-4 py-1.5 rounded-xl justify-between items-center gap-6 inline-flex ${pathname == "/history" ? "bg-[#5A585A] text-white" : "bg-white text-[#0f0f0f]"}`}>
                <div className="h-6 justify-start items-center gap-2 flex">
                    {pathname == "/history" ? <img src={handw} alt="Hand Wallet" /> : <img src={handd} alt="Hand Deposit" className="w-6 h-6 relative" />}
                    <div className="text-sm font-medium font-['Inter'] leading-tight">Cyprto Histroy</div>
                </div>
                <div className="md:block hidden">{pathname == "/history" ? <img src={arroww} alt="Arrow White" /> : <img src={sidea} alt="Side arrow" className="w-6 h-6 relative origin-top-left" />}
                </div>
            </Link>
        </div>
    );
}

export default Sidebar;