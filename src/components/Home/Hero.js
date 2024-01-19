import React from "react";
import privateHome from "../../assets/Nha+Rieng+Image.jpg";
import { GoDotFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
const Hero = () => {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url("${privateHome}")` }}
    >
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black"></div>
      <div className="absolute top-10 left-10 text-2xl pl-5 text-white border-l-4 border-l-white border-l-solid">
        <span className="font-bold">Mới nhất</span>
      </div>
      <div className="flex flex-col pr-5 gap-y-2 text-white absolute bottom-5 sm:bottom-10 left-5 sm:left-10">
        <h1 className="text-2xl sm:text-5xl w-full">Phân lô ngõ 31 Trần Quốc Hoàn, ô tô vào nhà, 55m2, 5 tầng, 10.2 tỷ</h1>
        <p className="flex items-center text-md sm:text-xl gap-x-1"><span className="text-lg text-red-600"><FaLocationDot /></span>Ngõ 9, Phố Trần Quốc Hoàn, Phường Dịch Vọng Hậu, Cầu Giấy, Hà Nội</p>
        <div className="hidden sm:flex gap-x-5 text-md">
            <div className="flex gap-x-1 items-center">
                <span className="flex gap-x-1 items-center"><GoDotFill /> Mức giá: </span>
                <span>10,2 tỷ ~ 185,46 triệu/m<sup>2</sup></span>
            </div>
            <div className="flex gap-x-1 items-center">
                <span className="flex gap-x-1 items-center"><GoDotFill /> Diện tích: </span>
                <span>55 m<sup>2</sup> ~ 4 tầng</span>
            </div>
            <div className="flex gap-x-1 items-center">
                <span className="flex gap-x-1 items-center"><GoDotFill /> Phòng ngủ: </span>
                <span>4 phòng</span>
            </div>
        </div>
        <button className="w-[150px] h-[40px] bg-white text-[#0B60B0] font-medium mt-5">Chi tiết</button>
      </div>
    </div>
  );
};

export default Hero;
