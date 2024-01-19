import React, { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import NavItems from "./NavItems";
import { TiThMenu } from "react-icons/ti";
import { AppContext } from "../Context/AppContext";

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

const resortItems = ["Cao ốc văn phòng", "Khu đô thị mới", "Khu phức hợp"];

const Navbar1 = () => {
  const {isOpen, setIsOpen} = useContext(AppContext);
  return (
    <div className="sticky top-0 w-full px-5 md:px-10 py-5 flex justify-between items-center z-[11] bg-white">
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
          className="focus:border-2 focus:border-solid focus:border-[#0B60B0] w-[250px] h-[40px]"
        />
        <button className="ml-1 text-white bg-[#0B60B0] h-[40px] px-5 hover:opacity-80">
          Search
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
        <li className="relative group flex gap-x-1 items-center cursor-pointer">
          Dự án{" "}
          <span className="group-hover:rotate-180 transition-transform">
            <IoIosArrowDown />
          </span>
          <ul className="absolute hidden bg-white shadow-lg top-[30px] w-[280px] p-5 z-10 border-[1px] border-solid border-slate-200 group-hover:block">
            {resortItems.map((item, index) => {
              return <NavItems key={index} content={item} />;
            })}
          </ul>
        </li>
        <li className="flex gap-x-1 items-center">Tin tức</li>
      </ul>
      <div className="flex items-center gap-x-4 md:gap-x-7">
        <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#F0EDCF] rounded-full">
          <CiUser />
        </div>
        <button className="block lg:hidden" onClick={() => {setIsOpen(!isOpen)}}>
          <TiThMenu className="text-2xl"/>
        </button>
      </div>
    </div>
  );
};

export default Navbar1;
