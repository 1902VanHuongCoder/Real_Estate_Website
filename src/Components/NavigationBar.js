// import hooks
import React, { useContext, useState } from "react";

// import icons
import { IoIosArrowDown } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { FaUser } from "react-icons/fa";

// import components
import { UserBox, NavItems } from "./Middle";

// import contexts
import { AppContext } from "../Context/AppContext";

// import datas for navigation bar
import { rentItems, saleItems } from "../datas/navdatas";
import { Link, useNavigate } from "react-router-dom";

// import images
import logo from "../images/logo.png";
const NavigationBar = () => {
  const {
    sideBarOpen,
    setSideBarOpen,
    openUserBox,
    setOpenUserBox,
  } = useContext(AppContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/real+estate/search+result/query=?${search}`, { state: search });
  };
  return (
    <div className="sticky top-0 w-full px-5 md:px-10 pb-5 sm:py-1 z-40 bg-transparent flex flex-col gap-y-4">
      <div className="flex justify-between items-center">
        {/* Logo  */}
        <Link to="/" className="flex gap-x-2 ">
          <span className="w-[100px]">
            <img src={logo} alt="logo" />
          </span>
        </Link>

        {/* Search input */}
        <form className="hidden sm:block">
          <input
            type="text"
            name="query"
            id="query"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tên tài sản..."
            className="px-3 border-[2px] rounded-md border-solid border-slate-400 focus:outline-none focus:border-2 focus:border-solid focus:border-[#0B60B0] w-[250px] h-[40px]"
          />
          <button
            type="button"
            onClick={handleSearch}
            className="ml-1 text-white rounded-md bg-[#0B60B0] h-[40px] px-5 hover:opacity-80"
          >
            Tìm kiếm
          </button>
        </form>

        {/* Nav items  */}
        <ul className="hidden lg:flex gap-x-3 text-lg">
          <li className="group relative flex gap-x-1 items-center cursor-pointer h-[40px]">
            <span className="">Nhà đất thuê</span>
            <div className="group-hover:rotate-180 transition-transform flex justify-center items-center w-[30px] h-[30px] border-[1px] border-solid border-slate-200 rounded-full">
              <span >
                <IoIosArrowDown />
              </span>
            </div>

            <ul className="absolute rounded-lg hidden bg-white shadow-lg top-[35px] w-[320px] p-5 z-10 border-[1px] border-solid border-slate-200 group-hover:block">
              {rentItems.map((item, index) => {
                return <NavItems key={index} content={item} />;
              })}
            </ul>
          </li>
          <li className="relative group flex gap-x-1 items-center cursor-pointer h-[40px]">
            <span>Nhà đất bán</span>
              <div className="group-hover:rotate-180 transition-transform flex justify-center items-center w-[30px] h-[30px] border-[1px] border-solid border-slate-200 rounded-full">
              <span >
                <IoIosArrowDown />
              </span>
            </div>
            <ul className="absolute hidden bg-white rounded-lg shadow-lg top-[35px] opacity-0 group-hover:opacity-100 w-[320px] p-5 z-10 border-[1px] border-solid border-slate-200 group-hover:block transition-all">
              {saleItems.map((item, index) => {
                return <NavItems key={index} content={item} />;
              })}
            </ul>
          </li>
        </ul>

        {/* User icons  */}

        <div className="relative flex items-center gap-x-4 md:gap-x-4">
          {localStorage.getItem("userInfo") ? (
            <button
              onClick={() => {
                setOpenUserBox(!openUserBox);
              }}
              className="w-[30px] h-[30px] flex justify-center items-center bg-white border-[2px] border-solid border-slate-400 rounded-full"
            >
              <FaUser className="text-[#0B60B0]" />
            </button>
          ) : (
            <Link to="signup" className="h-[40px] text-lg font-bold px-5 border-[#0B60B0] border-[2px] border-solid flex justify-center items-center rounded-xl">Đăng ký</Link>
          )}
          <button
            className="block lg:hidden"
            onClick={() => {
              setSideBarOpen(!sideBarOpen);
            }}
          >
            <TiThMenu className="text-2xl text-[#0B60B0]" />
          </button>
        </div>
      </div>

      {/* Search bar for mobile devices */}
      <div className="flex sm:hidden justify-center">
        <form
          onSubmit={handleSearch}
          action="/real+estate/search+result/"
          method="GET"
        >
          <input
            type="text"
            name="phoneQuery"
            id="phoneQuery"
            placeholder="Tên tài sản..."
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 border-[2px] border-solid border-slate-400 focus:outline-none focus:border-2 focus:border-solid focus:border-[#0B60B0] w-[200px] h-[40px]"
          />
          <button
            type="submit"
            className="ml-1 text-white bg-[#0B60B0] h-[40px] px-5 hover:opacity-80"
          >
            Tìm kiếm
          </button>
        </form>
      </div>

      <UserBox />
    </div>
  );
};

export default NavigationBar;

//THIS FILE WAS BEING OPENED
