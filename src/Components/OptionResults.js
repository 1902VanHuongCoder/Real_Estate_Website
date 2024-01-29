import React from "react";
import {
  FaBuilding,
  FaLocationDot,
  FaPhone,
  FaRulerCombined,
  FaRulerHorizontal,
} from "react-icons/fa6";
import { GiMultiDirections } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { PiToiletFill } from "react-icons/pi";
import Home2 from "../assets/images/Home+Image+2.jpg";
import label from "../assets/images/label.png";
import user from "../assets/images/user.jpg";
const OptionResults = () => {
  return (
    <div className="w-full h-fit p-5">
      <h1 className="pl-4 text-xl font-medium uppercase border-l-[5px] border-l-solid border-l-[#0B60B0]">
        Thuê căn hộ chung cư
      </h1>
      <div className="w-full mt-5 grid grid-cols-2 gap-5">
        <div className="w-full mt-5 border-[1px] border-solid border-slate-200 h-fit">
          <div
            className="relative w-full h-[350px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${Home2}")` }}
          >
            <div
              className="absolute top-5 -left-1 w-fit h-[50px] bg-cover bg-right bg-no-repeat text-white text-lg flex pl-4 pr-6 items-center"
              style={{ backgroundImage: `url("${label}")` }}
            >
              10,9 tỷ
            </div>
            <div className="absolute right-5 bottom-5 sm:top-5 flex gap-x-5 text-[#40A2D8]">
              <div className="flex items-center gap-x-2 bg-white rounded-md h-[50px] px-2">
                <span>0334745377</span>
                <span>
                  <FaPhone />
                </span>
              </div>
              <div className="relative flex justify-start items-center bg-transparent lg:bg-white h-[50px]  lg:px-2 lg:pr-16 rounded-md">
                <p className="text-xl hidden lg:block">Nguyễn Văn Tám</p>
                <div
                  className="lg:absolute lg:-top-1 lg:-right-3 border-[2px] border-solid border-white w-[60px] h-[60px] bg-cover bg-center bg-no-repeat rounded-full"
                  style={{ backgroundImage: `url("${user}")` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 p-2">
            <h3 className="font-medium text-lg">
              TÒA NHÀ 7 TẦNG CHUNG CƯ MINI CẦU GIẤY, THANG MÁY, GẦN PHỐ, DÒNG
              TIỀN TỐT; DT70M2; 7T; MT4M; GIÁ 10.9 TỶ; LH. MR BẮC: 0971877631.
            </h3>
            <p className="flex items-center gap-x-1 text-base">
              <span className="text-lg text-red-600">
                <FaLocationDot />
              </span>
              Cầu Giấy, Quan Hoa, Cầu Giấy, Phường Quan Hoa, Quận Cầu Giấy, Hà
              Nội
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:grid-cols-4 lg:gap-x-5 justify-evenly">
              <div className="flex items-center gap-x-2">
                <span>
                  <FaRulerCombined />
                </span>
                <span className="flex gap-x-1 items-center">
                  <span className="opacity-60">Diện tích: </span>
                  <span>
                    54 m<sup>2</sup>
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <span>
                  <GiMultiDirections />
                </span>
                <span className="flex gap-x-1 items-center">
                  <span className="opacity-60">Hướng: </span>
                  <span>Tây</span>
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <span>
                  <FaBuilding />
                </span>
                <span className="flex gap-x-1 items-center">
                  <span className="opacity-60">Số tầng: </span>
                  <span>7</span>
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <span>
                  <FaRulerHorizontal />
                </span>
                <span className="flex gap-x-1 items-center">
                  <span className="opacity-60">Mặt tiền: </span>
                  <span>4m</span>
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <span>
                  <MdBedroomParent />
                </span>
                <span className="flex gap-x-1 items-center">
                  <span className="opacity-60">Phòng ngủ: </span>
                  <span>4</span>
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <span>
                  <PiToiletFill />
                </span>
                <span className="flex gap-x-1 items-center">
                  <span className="opacity-60">Số toilet: </span>
                  <span>6</span>
                </span>
              </div>
            </div>
            <div>Đã được đăng vào ngày: 01/02/2024</div>
            <button className="w-[100px] h-[40px] border-[2px] border-solid border-[#0B60B0] hover:bg-[#0B60B0] hover:text-white">
              Chi tiết
            </button>
          </div>
        </div>
        <div className="w-full mt-5 border-[1px] border-solid border-slate-200 h-fit">
          <div
            className="relative w-full h-[350px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${Home2}")` }}
          >
            <div
              className="absolute top-5 -left-1 w-fit h-[50px] bg-cover bg-right bg-no-repeat text-white text-lg flex pl-4 pr-6 items-center"
              style={{ backgroundImage: `url("${label}")` }}
            >
              10,9 tỷ
            </div>
            <div className="absolute right-5 bottom-5 sm:top-5 flex gap-x-5 text-[#40A2D8]">
              <div className="flex items-center gap-x-2 bg-white rounded-md h-[50px] px-2">
                <span>0334745377</span>
                <span>
                  <FaPhone />
                </span>
              </div>
              <div className="relative flex justify-start items-center bg-transparent lg:bg-white h-[50px]  lg:px-2 lg:pr-16 rounded-md">
                <p className="text-xl hidden lg:block">Nguyễn Văn Tám</p>
                <div
                  className="lg:absolute lg:-top-1 lg:-right-3 border-[2px] border-solid border-white w-[60px] h-[60px] bg-cover bg-center bg-no-repeat rounded-full"
                  style={{ backgroundImage: `url("${user}")` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 p-2">
            <h3 className="font-medium text-lg">
              TÒA NHÀ 7 TẦNG CHUNG CƯ MINI CẦU GIẤY, THANG MÁY, GẦN PHỐ, DÒNG
              TIỀN TỐT; DT70M2; 7T; MT4M; GIÁ 10.9 TỶ; LH. MR BẮC: 0971877631.
            </h3>
            <p className="flex items-center gap-x-1 text-base">
              <span className="text-lg text-red-600">
                <FaLocationDot />
              </span>
              Cầu Giấy, Quan Hoa, Cầu Giấy, Phường Quan Hoa, Quận Cầu Giấy, Hà
              Nội
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:grid-cols-4 lg:gap-x-5 justify-evenly">
              <div className="flex items-center gap-x-2">
                <span>
                  <FaRulerCombined />
                </span>
                <span className="flex gap-x-1 items-center">
                  <span className="opacity-60">Diện tích: </span>
                  <span>
                    54 m<sup>2</sup>
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <span>
                  <GiMultiDirections />
                </span>
                <span className="flex gap-x-1 items-center">
                  <span className="opacity-60">Hướng: </span>
                  <span>Tây</span>
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <span>
                  <FaBuilding />
                </span>
                <span className="flex gap-x-1 items-center">
                  <span className="opacity-60">Số tầng: </span>
                  <span>7</span>
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <span>
                  <FaRulerHorizontal />
                </span>
                <span className="flex gap-x-1 items-center">
                  <span className="opacity-60">Mặt tiền: </span>
                  <span>4m</span>
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <span>
                  <MdBedroomParent />
                </span>
                <span className="flex gap-x-1 items-center">
                  <span className="opacity-60">Phòng ngủ: </span>
                  <span>4</span>
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <span>
                  <PiToiletFill />
                </span>
                <span className="flex gap-x-1 items-center">
                  <span className="opacity-60">Số toilet: </span>
                  <span>6</span>
                </span>
              </div>
            </div>
            <div>Đã được đăng vào ngày: 01/02/2024</div>
            <button className="w-[100px] h-[40px] border-[2px] border-solid border-[#0B60B0] hover:bg-[#0B60B0] hover:text-white">
              Chi tiết
            </button>
          </div>
        </div>
        <div className="w-full mt-5 border-[1px] border-solid border-slate-200 h-fit">
          <div
            className="relative w-full h-[350px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${Home2}")` }}
          >
            <div
              className="absolute top-5 -left-1 w-fit h-[50px] bg-cover bg-right bg-no-repeat text-white text-lg flex pl-4 pr-6 items-center"
              style={{ backgroundImage: `url("${label}")` }}
            >
              10,9 tỷ
            </div>
            <div className="absolute right-5 bottom-5 sm:top-5 flex gap-x-5 text-[#40A2D8]">
              <div className="flex items-center gap-x-2 bg-white rounded-md h-[50px] px-2">
                <span>0334745377</span>
                <span>
                  <FaPhone />
                </span>
              </div>
              <div className="relative flex justify-start items-center bg-transparent lg:bg-white h-[50px]  lg:px-2 lg:pr-16 rounded-md">
                <p className="text-xl hidden lg:block">Nguyễn Văn Tám</p>
                <div
                  className="lg:absolute lg:-top-1 lg:-right-3 border-[2px] border-solid border-white w-[60px] h-[60px] bg-cover bg-center bg-no-repeat rounded-full"
                  style={{ backgroundImage: `url("${user}")` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 p-2">
            <h3 className="font-medium text-lg">
              TÒA NHÀ 7 TẦNG CHUNG CƯ MINI CẦU GIẤY, THANG MÁY, GẦN PHỐ, DÒNG
              TIỀN TỐT; DT70M2; 7T; MT4M; GIÁ 10.9 TỶ; LH. MR BẮC: 0971877631.
            </h3>
            <p className="flex items-center gap-x-1 text-base">
              <span className="text-lg text-red-600">
                <FaLocationDot />
              </span>
              Cầu Giấy, Quan Hoa, Cầu Giấy, Phường Quan Hoa, Quận Cầu Giấy, Hà
              Nội
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:grid-cols-4 lg:gap-x-5 justify-evenly">
              <div className="flex items-center gap-x-2">
                <span>
                  <FaRulerCombined />
                </span>
                <span className="flex gap-x-1 items-center">
                  <span className="opacity-60">Diện tích: </span>
                  <span>
                    54 m<sup>2</sup>
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <span>
                  <GiMultiDirections />
                </span>
                <span className="flex gap-x-1 items-center">
                  <span className="opacity-60">Hướng: </span>
                  <span>Tây</span>
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <span>
                  <FaBuilding />
                </span>
                <span className="flex gap-x-1 items-center">
                  <span className="opacity-60">Số tầng: </span>
                  <span>7</span>
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <span>
                  <FaRulerHorizontal />
                </span>
                <span className="flex gap-x-1 items-center">
                  <span className="opacity-60">Mặt tiền: </span>
                  <span>4m</span>
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <span>
                  <MdBedroomParent />
                </span>
                <span className="flex gap-x-1 items-center">
                  <span className="opacity-60">Phòng ngủ: </span>
                  <span>4</span>
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <span>
                  <PiToiletFill />
                </span>
                <span className="flex gap-x-1 items-center">
                  <span className="opacity-60">Số toilet: </span>
                  <span>6</span>
                </span>
              </div>
            </div>
            <div>Đã được đăng vào ngày: 01/02/2024</div>
            <button className="w-[100px] h-[40px] border-[2px] border-solid border-[#0B60B0] hover:bg-[#0B60B0] hover:text-white">
              Chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionResults;
