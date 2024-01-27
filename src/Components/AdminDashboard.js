import React from "react";
import building from "../assets/images/buiding.jpg";
import { GoDotFill } from "react-icons/go";
import { FaBook, FaUser } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import nharieng01 from "../assets/images/Nha+Rieng+Image+01.jpg";
const AdminDashboard = () => {
  return (
    <div className="w-full h-fit">
      <div
        className="relative text-white w-full h-[400px] bg-green-300 bg-cover rounded-b-xl overflow-hidden"
        style={{ backgroundImage: `url(${building})` }}
      >
        <div className="top-0 left-0 absolute w-full h-full flex justify-center items-center flex-col gap-y-4 bg-[rgba(0,0,0,.2)]">
          <p className="text-xl">Công ty Bất Động Sản</p>
          <h1 className="text-8xl">Văn Hưởng</h1>
          <p className="text-lg italic">Uy tín - Tận tâm - Hiệu quả</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-5 w-full rounded-lg h-[60px] border-[1px] border-solid border-slate-200 overflow-hidden">
        <ul className="flex h-full">
          <li className="px-5 bg-[#0B60B0] rounded-r-full flex justify-center items-center text-white">Danh sách bài đăng</li>
          <li className="px-5 rounded-r-full flex justify-center items-center">Danh sách tài khoản</li>
          <li className="px-5 rounded-r-full flex justify-center items-center">Danh sách chờ duyệt</li>
        </ul>
      </div>

      <div className="p-5 border-[1px] border-solid border-slate-200 mt-5 rounded-t-xl">
        {/* General infomations */}
        <div className="">
          <div className="flex items-center gap-x-2 text-xl">
            <span>
              <GoDotFill />
            </span>
            <span>Thông tin chung</span>
          </div>
          <div className="flex gap-x-2 mt-5">
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

        {/* List posts that are waiting accepting -- CONTAINER */}
        <div className="mt-10">
          <div className="flex items-center gap-x-2 text-xl">
            <span>
              <GoDotFill />
            </span>
            <span>Danh sách bài đăng đang chờ duyệt</span>
          </div>

          {/* List posts that are waiting accepting */}
          <div className="flex gap-x-2 mt-5">
            <div className="w-[360px] h-[500px] bg-white rounded-t-md hover:shadow-lg transition-shadow border-[1px] border-solid border-slate-200 overflow-hidden">
              <div
                className="w-full h-[60%] bg-red-400 bg-cover bg-center"
                style={{ backgroundImage: `url(${nharieng01})` }}
              ></div>
              <div className="py-3 px-2 flex flex-col gap-y-2">
                <p className="text-xl font-medium">
                  Phân lô ngõ 31 Trần Quốc Hoàn, ô tô vào nhà, 55m2, 5 tầng,
                  10.2 tỷ
                </p>
                <div className="text-lg flex gap-x-1">
                  <span className="text-slate-500">Ngày đăng:</span>
                  <span>01/01/2023</span>
                </div>
                <div className="flex gap-x-2 mt-5 justify-end">
                  <button className="hover:opacity-80 px-5 py-3 border-[2px] border-solid border-[#0B60B0] font-medium">
                    Duyệt
                  </button>
                  <button className="hover:opacity-80 px-5 py-3 font-medium bg-red-500 text-white">
                    Không duyệt
                  </button>
                </div>
              </div>
            </div>

            <div className="w-[360px] h-[500px] bg-white rounded-t-md hover:shadow-lg transition-shadow border-[1px] border-solid border-slate-200 overflow-hidden">
              <div
                className="w-full h-[60%] bg-red-400 bg-cover bg-center"
                style={{ backgroundImage: `url(${nharieng01})` }}
              ></div>
              <div className="py-3 px-2 flex flex-col gap-y-2">
                <p className="text-xl font-medium">
                  Phân lô ngõ 31 Trần Quốc Hoàn, ô tô vào nhà, 55m2, 5 tầng,
                  10.2 tỷ
                </p>
                <div className="text-lg flex gap-x-1">
                  <span className="text-slate-500">Ngày đăng:</span>
                  <span>01/01/2023</span>
                </div>
                <div className="flex gap-x-2 mt-5 justify-end">
                  <button className="hover:opacity-80 px-5 py-3 border-[2px] border-solid border-[#0B60B0] font-medium">
                    Duyệt
                  </button>
                  <button className="hover:opacity-80 px-5 py-3 font-medium bg-red-500 text-white">
                    Không duyệt
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigate lists*/}
          <div className="w-full flex justify-center gap-x-1 mt-10">
            <button className="w-[50px] h-[50px] border-[1px] border-solid border-slate-300 bg-[#40A2D8] text-white">
              1
            </button>
            <button className="w-[50px] h-[50px] border-[1px] border-solid border-slate-300">
              2
            </button>
            <button className="w-[50px] h-[50px] border-[1px] border-solid border-slate-300">
              3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
