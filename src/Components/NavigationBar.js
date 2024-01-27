import React, { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import logo from "../assets/images/logo.png";
import NavItems from "./Partials/NavItems";
import { TiThMenu } from "react-icons/ti";
import { AppContext } from "../Context/AppContext";
import UserBox from "./Partials/UserBox";
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


const NavigationBar = () => {
  const { isOpen, setIsOpen, openUserBox, setOpenUserBox } =
    useContext(AppContext);
  return (
    <div className="sticky top-0 w-full px-5 md:px-10 py-5 z-[11] bg-white flex flex-col gap-y-4">
      <div className="flex justify-between items-center ">
        <div className="flex gap-x-2">
          <a href="/">
            <img src={logo} alt="logo" className="mr-3 h-6 sm:h-9" />
          </a>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            BDS Văn Hưởng
          </span>
        </div>
        <form className="hidden sm:block" action="/" method="GET">
          <input
            type="text"
            name="query"
            id="query"
            className="px-3 border-[2px] border-solid border-slate-400 focus:outline-none focus:border-2 focus:border-solid focus:border-[#0B60B0] w-[250px] h-[40px]"
          />
          <button className="ml-1 text-white bg-[#0B60B0] h-[40px] px-5 hover:opacity-80">
            Tìm kiếm
          </button>
        </form>
        <ul className="hidden lg:flex gap-x-3 text-lg">
          <li className="group relative flex gap-x-1 items-center cursor-pointer">
            Nhà đất thuê{" "}
            <span className="group-hover:rotate-180 transition-transform">
              <IoIosArrowDown />
            </span>
            <ul className="absolute hidden bg-white shadow-lg top-[30px] w-[320px] p-5 z-10 border-[1px] border-solid border-slate-200 group-hover:block">
              {rentItems.map((item, index) => {
                return <NavItems key={index} content={item} />;
              })}
            </ul>
          </li>
          <li className="relative group flex gap-x-1 items-center cursor-pointer">
            Nhà đất bán{" "}
            <span className="group-hover:rotate-180 transition-transform">
              <IoIosArrowDown />
            </span>
            <ul className="absolute hidden bg-white shadow-lg top-[30px] w-[320px] p-5 z-10 border-[1px] border-solid border-slate-200 group-hover:block">
              {saleItems.map((item, index) => {
                return <NavItems key={index} content={item} />;
              })}
            </ul>
          </li>
        </ul>
        <div className="relative flex items-center gap-x-4 md:gap-x-7">
          <button
            onClick={() => {
              setOpenUserBox(!openUserBox);
            }}
            className="w-[50px] h-[50px] flex justify-center items-center bg-[#F0EDCF] rounded-full"
          >
            <CiUser />
          </button>
          <button
            className="block lg:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <TiThMenu className="text-2xl" />
          </button>
          <UserBox />
        </div>
      </div>
      <div className="block sm:hidden">
        <form className="flex gap-x-1 justify-center" action="/" method="GET">
          <input
            type="text"
            name="query"
            id="query"
            className="px-3 border-[2px] border-solid border-slate-400 focus:outline-none focus:border-2 focus:border-solid focus:border-[#0B60B0] w-[200px] h-[40px]"
          />
          <button className="ml-1 text-white bg-[#0B60B0] h-[40px] px-5 hover:opacity-80">
            Tìm kiếm
          </button>
        </form>
      </div>
    </div>
  );
};

export default NavigationBar;
