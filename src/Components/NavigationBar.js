// import hooks
import React, { useContext } from "react";

// import icons 
import { IoIosArrowDown } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { TiThMenu } from "react-icons/ti";

// import components
import {UserBox, NavItems} from './Middle';

// import contexts
import { AppContext } from "../Context/AppContext";

// import datas for navigation bar
import {rentItems, saleItems} from '../datas/navdatas';

const NavigationBar = () => {
  const { sideBarOpen, setSideBarOpen, openUserBox, setOpenUserBox, setComponent } = useContext(AppContext);
  return (
    <div className="sticky top-0 w-full px-5 md:px-10 py-5 z-40 bg-white flex flex-col gap-y-4">
      <div className="flex justify-between items-center">
        
        {/* Logo  */}
        <div className="flex gap-x-2">
          <span onClick={() => setComponent("home")}>
            <img src="./images/logo.png" alt="logo" className="mr-3 h-6 sm:h-9" />
          </span>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            BDS Văn Hưởng
          </span>
        </div>

        {/* Search input */}
        <form className="hidden sm:block" action="/" method="GET">
          <input
            type="text"
            name="query"
            id="query"
            placeholder="Tên tài sản..."
            className="px-3 border-[2px] border-solid border-slate-400 focus:outline-none focus:border-2 focus:border-solid focus:border-[#0B60B0] w-[250px] h-[40px]"
          />
          <button type="submit" className="ml-1 text-white bg-[#0B60B0] h-[40px] px-5 hover:opacity-80">
            Tìm kiếm
          </button>
        </form>

        {/* Nav items  */}
        <ul className="hidden lg:flex gap-x-3 text-lg">
          <li className="group relative flex gap-x-1 items-center cursor-pointer">
            <span className="self-end">Nhà đất thuê</span>
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
            <span>Nhà đất bán</span>
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

        {/* User icons  */}
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
              setSideBarOpen(!sideBarOpen);
            }}
          >
            <TiThMenu className="text-2xl" />
          </button>
        </div>

      </div>

      {/* Search bar for mobile devices */}
      <div className="block sm:hidden">
        <form className="flex gap-x-1 justify-center" action="/" method="GET">
          <input
            type="text"
            name="query"
            id="query"
            placeholder="Tên tài sản..."
            className="px-3 border-[2px] border-solid border-slate-400 focus:outline-none focus:border-2 focus:border-solid focus:border-[#0B60B0] w-[200px] h-[40px]"
          />
          <button type="submit" className="ml-1 text-white bg-[#0B60B0] h-[40px] px-5 hover:opacity-80">
            Tìm kiếm
          </button>
        </form>
      </div>
      
      <UserBox />
    </div>
  );
};

export default NavigationBar;
