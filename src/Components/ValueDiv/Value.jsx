import React from "react";
import logo0 from "../../assets/bebo.png"
import logo2 from "../../assets/facebook.png"
import logo3 from "../../assets/logo-triangular.png"


const Value = () => {

    return(
        <div className="mb-[4rem] mt-[6rem]">
            <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[560px] block">The value that holds us true and to account</h1>
            <div className="grip flex gap-[19rem] grid-cols-3 items-center">

                <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
                    <div className="flex items-center gap-3">
                        <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                            <img src={logo0} alt="" className="w-[70%]" />
                        </div>

                        <span className="font-semibold text-textColor text-[18px]">
                            Simplicity
                        </span>
                    </div>
                    <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
                        Things being made beautiful simple are at the heart of everything we do.
                    </p>
                </div>

                <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
                    <div className="flex items-center gap-3">
                        <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                            <img src={logo2} alt="" className="w-[70%]" />
                        </div>

                        <span className="font-semibold text-textColor text-[18px]">
                            Simplicity
                        </span>
                    </div>
                    <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
                        Things being made beautiful simple are at ht eheart of everything we do.
                    </p>
                </div>

                <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
                    <div className="flex items-center gap-3">
                        <div className="imgDiv p-[1px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                            <img src={logo3} alt="" className="w-[70%]" />
                        </div>

                        <span className="font-semibold text-textColor text-[18px]">
                            Simplicity
                        </span>
                    </div>
                    <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
                        Things being made beautiful simple are at ht eheart of everything we do.
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default Value