//import hooks
import React from "react";

// import icons
import { GoDotFill } from "react-icons/go";
import { FaBook, FaUser } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";

import WaitingPosts from "./Partials/WaitingPosts";
import AccountList from "./Partials/AccountList";
import PostsList from "./Partials/PostsList";
const AdminDashboard = () => {
  return (
    <div className="w-full h-fit">
      <div
        className="relative text-white w-full h-[400px] bg-green-300 bg-cover rounded-b-xl overflow-hidden"
        style={{ backgroundImage: `url("./images/buiding.jpg")` }}
      >
        <div className="top-0 left-0 absolute w-full h-full flex justify-center items-center flex-col gap-y-4 bg-[rgba(0,0,0,.2)]">
          <p className="text-xl">Công ty Bất Động Sản</p>
          <h1 className="text-8xl text-center">Văn Hưởng</h1>
          <p className="text-lg italic">Uy tín - Tận tâm - Hiệu quả</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-5 w-full overflow-x-scroll sm:overflow-hidden rounded-lg h-[60px] border-[1px] border-solid border-slate-200">
        <ul className="flex w-[800px] h-full"> 
          <li className="px-5 bg-[#0B60B0] rounded-r-full flex justify-center items-center text-white">
            Thông tin chung
          </li>
          <li className="px-5 flex justify-center items-center text-black">
            Danh sách bài đăng
          </li>
          <li className="px-5 rounded-r-full flex justify-center items-center">
            Danh sách tài khoản
          </li>
          <li className="px-5  rounded-r-full flex justify-center items-center">
            Danh sách chờ duyệt
          </li>
        </ul>
      </div>

      <WaitingPosts />

      <AccountList />

      <PostsList />

      <div className="p-5 border-[1px] border-solid border-slate-200 mt-5 rounded-t-xl">
        {/* General infomations */}
        <div className="">
          <div className="flex items-center gap-x-2 text-xl">
            <span>
              <GoDotFill />
            </span>
            <span>Thông tin chung</span>
          </div>
          <div className="flex gap-2 mt-5 flex-wrap">
            <div className="w-[300px] bg-white border-[1px] border-solid border-slate-200 p-4 rounded-e-md flex gap-x-5 items-center rounded-lg">
              <span className="text-white w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#40A2D8]">
                <FaBook />
              </span>
              <span>
                <span className="text-xl font-medium">123</span>{" "}
                <span> bài đăng</span>
              </span>
            </div>
            <div className="w-[300px] bg-white border-[1px] border-solid border-slate-200 p-4 rounded-e-md flex gap-x-5 items-center rounded-lg">
              <span className="text-white w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#40A2D8]">
                <FaUser />
              </span>
              <span>
                <span className="text-xl font-medium">123</span>
                <span> tài khoản</span>
              </span>
            </div>
            <div className="w-[300px] bg-white border-[1px] border-solid border-slate-200 p-4 rounded-e-md flex gap-x-5 items-center rounded-lg">
              <span className="text-white w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#40A2D8]">
                <SiBookstack />
              </span>
              <span>
                <span className="text-xl font-medium">123</span>
                <span> bài chờ duyệt</span>
              </span>
            </div>
            <div>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
