import React from "react";
import woman from '../../assets/woman.png'
import {BsSearch} from 'react-icons/bs'
const Banner = () => {
  return (
    <div className="flex relative w-full bg-gradient-to-r from-violet-200 to-pink-200 h-[400px]">
      <div className="lg:w-1/2 w-full flex flex-col gap-y-4 justify-center items-center h-full lg:items-start lg:pl-[10px]">
        <h1 className="sm:text-6xl font-semibold drop-shadow-xl text-[#ee4d2d]">
          The Clothes <br /> World
        </h1>
        <p className="sm:text-xl font-semibold drop-shadow-xl text-[#ee4d2d]">You can find anything here</p>
        <div className="relative w-fit">
            <button className="absolute right-[10px] top-[5px] bg-[#e4e4e5] p-2 rounded-full"><BsSearch /></button>
          <input className="outline-none rounded-lg h-10 w-[280px] border-[rgba(0,0,0,.2)]" type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="w-1/2 h-full relative lg:block hidden">
            <div className="w-[300px] h-[70px] bg-white rounded-lg shadow-lg absolute -left-[110px] top-[50px]">

            </div>
            <div className="w-[300px] h-[70px] bg-white rounded-lg shadow-lg absolute -left-[150px] top-[160px]"></div>
            <div className="w-[300px] h-[70px] bg-white rounded-lg shadow-lg absolute -left-[110px] top-[270px]"></div>
            <div className="absolute w-[550px] right-0 bottom-0"><img src={woman} alt="woman" className="w-fit h-fit"/></div>
      </div>
    </div>
  );
};

export default Banner;
