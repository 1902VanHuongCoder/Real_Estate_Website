import React from "react";

const rentItems = [
  "Thuê căn hộ chung cư",
  "Thuê văn phòng",
  "Thuê nhà riêng",
  "Thuê biệt thự, liền kề",
  "Thuê nhà mặt phố",
  "Thuê shophouse, nhà phố thương mại",
  "Thuê kho nhà xưởng, đất",
  "Thuê nhà trọ phòng trọ",
];
const saleItems = [
  "Bán căn hộ chung cư",
  "Bán văn phòng",
  "Bán nhà riêng",
  "Bán biệt thự, liền kề",
  "Bán nhà mặt phố",
  "Bán shophouse, nhà phố thương mại",
  "Bán kho nhà xưởng, đất",
  "Bán nhà trọ phòng trọ",
  "Bán trang trại, khu nghĩ dưỡng",
];


const Footer = () => {
  return (
    <div className="w-full bg-[#40A2D8] h-fit mt-5 py-5 px-5 lg:px-10">
      <div className="flex flex-col gap-y-5 sm:flex-row">
        <div className="flex flex-col gap-y-5 basis-[100%] sm:basis-[30%]">
          <img className="w-[100px] sm:w-[150px] lg:w-[200px]" src="./images/logo.png" alt="logo" />
          <div className="flex flex-col gap-y-2 text-white">
            <p className="text-2xl text-[#F0EDCF]">
              Công ty TNHH MTV Bất động sản Văn Hưởng
            </p>
            <p className="italic text-md flex  gap-x-1">
              <span>Liên hệ:</span>
              <span>0334734323</span>
            </p>
          </div>
        </div>
        <div className="flex lg:flex-wrap sm:justify-center basis-[100%] sm:basis-[70%] gap-x-4 gap-y-6 justify-start text-white">
          <div>
            <p className="text-xl font-medium">Bán nhà đất</p>
            <ul className="mt-4 sm:mt-5">
              {saleItems.map((item, index) => {
                return <li className="cursor-pointer" key={index}>{item}</li>;
              })}
            </ul>
          </div>
          <div>
            <p className="text-xl font-medium">Thuê nhà đất</p>
            <ul className="mt-4 sm:mt-5">
              {rentItems.map((item, index) => {
                return <li className="cursor-pointer" key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-solid border-white w-full h-[50px] mt-5 text-center py-5">
            <span>ấp Hòa Đức - xã Hòa An huyện Phụng Hiệp - tỉnh Hậu Giang</span>
      </div>
    </div>
  );
};

export default Footer;
