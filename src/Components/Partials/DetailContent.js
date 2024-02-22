// import hooks
import React, { useCallback, useContext, useState } from "react";

// import icons
import { GoDotFill } from "react-icons/go";
import { MdBedroomParent, MdOutlineZoomOutMap } from "react-icons/md";
import {
  FaBuilding,
  FaRulerCombined,
  FaRulerHorizontal,
} from "react-icons/fa6";
import { GiMultiDirections } from "react-icons/gi";
import { PiToiletFill } from "react-icons/pi";

//import context
import { AppContext } from "../../Context/AppContext";

//import library
import { htmlToText } from 'html-to-text';

const test = [1, 2, 3, 4, 5,6,7,8,9,10];
const DetailContent = () => {
  
  const [currentImg, setCurrentImg] = useState(0);
  const { setShowImage, realEstateDetail } = useContext(AppContext);

  const extractImageIntoArray = useCallback(() => {
    const imageList = [];
    if (realEstateDetail) {
      imageList.push(realEstateDetail.titleImageURL);
      realEstateDetail.besideImageURLs.map((item, i) => imageList.push(item));
      console.log("Function run");
    }
    
    return imageList;
  }, [realEstateDetail]);

  const imageList = extractImageIntoArray();

  console.log(realEstateDetail);

  var translate = `-translate-x-[${parseInt(currentImg * 100)}%]`;
  return (
    <div>
      {/* <div className="w-full bg-amber-500 h-[400px] flex justify-center items-center flex-col ">
        <div className="relative w-[100px] h-[100px] border-4 border-solid border-slate-800">
          <div className={`relative ${translate} w-full h-full flex`}>
            {test.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`w-full h-full bg-purple-400 shrink-0`}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex gap-x-1">
          {test.map((item, index) => {
            return (
              <button
                onClick={() => setTest1(index)}
                key={index}
                className="w-[80px] h-[60px] bg-green-400"
              >
                {item}
              </button>
            );
          })}
        </div>
      </div> */}
      <div className="flex gap-x-5 lg:flex-row flex-col">
        <div className="relative lg:basis-[70%] w-full h-[400px] overflow-hidden">
          <div className="w-full h-full flex">
            {imageList?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`relative ${translate} transition-transform duration-500 w-full h-full 
                   shrink-0 bg-cover bg-center bg-no-repeat`}
                  style={{ backgroundImage: `url("${item}")` }}
                ></div>
              );
            })}
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div
              onClick={() => {
                setShowImage(true);
              }}
              className="absolute bottom-5 left-5 flex justify-center items-center rounded-md hover:opacity-80 cursor-pointer w-[50px] h-[50px] bg-[rgba(0,0,0,.7)] text-white text-2xl"
            >
              <MdOutlineZoomOutMap />
            </div>
            <div className="absolute bottom-5 right-5 flex justify-center items-center rounded-md hover:opacity-80 cursor-pointer w-[50px] h-[50px] bg-[rgba(0,0,0,.7)] text-white text-xl">
              1/{imageList.length}
            </div>
          </div>
        </div>
        <div className="flex gap-x-3 lg:grid grid-cols-1 gap-y-5 p-2 sm:p-5 border-l-[1px] border-l-solid border-l-slate-200 basis-[25%] w-full h-[400px] overflow-x-scroll sm:overflow-x-hidden sm:overflow-y-scroll">
          {imageList.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => setCurrentImg(index)}
                className="hover:opacity-70 w-full h-[60px] sm:h-[150px] bg-red-400 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url("${item}")` }}
              ></div>
            );
          })}
        </div>
      </div>

      <div className="flex lg:flex-row flex-col">
        <div className="px-5 lg:px-0 lg:pl-5 lg:basis-[70%]">
          <div className="py-5 border-b-[1px] border-b-solid border-b-slate-200">
            <h1 className="text-2xl mb-1 font-medium">
              {realEstateDetail?.postTitle}
            </h1>
            <p>{realEstateDetail?.address}</p>
          </div>
          <div className="border-b-[1px] border-b-solid border-b-slate-200 py-5 basis-[75%] grid grid-cols-2 sm:grid-cols-3 gap-2 lg:grid-cols-4 lg:gap-x-5 justify-evenly">
            <div className="flex items-center gap-x-2">
              <span>
                <FaRulerCombined />
              </span>
              <span className="flex gap-x-1 items-center">
                <span className="opacity-60">Diện tích: </span>
                <span>
                  {realEstateDetail?.acreage} m<sup>2</sup>
                </span>
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <span>
                <GiMultiDirections />
              </span>
              <span className="flex gap-x-1 items-center">
                <span className="opacity-60">Hướng: </span>
                <span> {realEstateDetail?.direction}</span>
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <span>
                <FaBuilding />
              </span>
              <span className="flex gap-x-1 items-center">
                <span className="opacity-60">Số tầng: </span>
                <span> {realEstateDetail?.floors}</span>
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <span>
                <FaRulerHorizontal />
              </span>
              <span className="flex gap-x-1 items-center">
                <span className="opacity-60">Mặt tiền: </span>
                <span> {realEstateDetail?.facade} m</span>
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <span>
                <MdBedroomParent />
              </span>
              <span className="flex gap-x-1 items-center">
                <span className="opacity-60">Phòng ngủ: </span>
                <span> {realEstateDetail?.bedrooms}</span>
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <span>
                <PiToiletFill />
              </span>
              <span className="flex gap-x-1 items-center">
                <span className="opacity-60">Số toilet: </span>
                <span> {realEstateDetail?.toilets}</span>
              </span>
            </div>
          </div>
          <div className="py-5 border-b-[1px] border-b-solid border-b-slate-200">
            <h2 className="flex items-center gap-x-1 mb-1">
              <span>
                <GoDotFill />
              </span>
              <span>Thông tin mô tả:</span>
            </h2>
            <p className="text-justify">
            {htmlToText(realEstateDetail?.description)}
            </p>
          </div>
          <div className="flex gap-x-10 border-b-[1px] border-b-solid border-b-slate-200 py-5">
            <div className="flex flex-col gap-y-1 items-center">
              <span className="opacity-80">Ngày đăng</span>
              <span className="text-lg">{realEstateDetail?.createdAt}</span>
            </div>
            <div className="flex flex-col gap-y-1 items-center">
              <span className="opacity-80">Ngày cập nhật</span>
              <span className="text-lg">{realEstateDetail?.updatedAt}</span>
            </div>
            <div className="flex flex-col gap-y-1 items-center">
              <span className="opacity-80">Liên hệ công ty</span>
              <span className="text-lg">0334745377</span>
            </div>
          </div>
        </div>
        {/* <div className="lg:basis-[30%]">
          <div className="h-[270px] w-4/5 mx-auto mt-5 rounded-md bg-white border-[1px] border-solid border-slate-200 shadow-md py-5 px-10">
            <div className="flex flex-col items-center gap-y-1">
              <div
                className="w-[60px] rounded-full h-[60px] bg-cover bg-center"
                style={{ backgroundImage: `url("./images/user.jpg")` }}
              ></div>
              <p className="text-xl font-medium">Paul9999</p>
              <p className="opacity-80">huongb2105616@student.ctu.edu.vn</p>
            </div>
            <div className="text-xl mt-6 px-3 py-5 rounded-md bg-[#0B60B0] text-center font-bold text-white">
              0334745377
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DetailContent;
