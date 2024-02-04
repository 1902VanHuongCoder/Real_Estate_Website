import React from "react";
import { GoDotFill } from "react-icons/go";

const PostsList = () => {
  return (
    <div className="p-5 border-[1px] border-solid border-slate-200 mt-5 rounded-t-xl">
      <div className="flex items-center gap-x-2 text-xl">
        <span>
          <GoDotFill />
        </span>
        <span>Danh sách bài đăng</span>
      </div>
      
      <div className="w-full mt-5 h-fit">
        {/* Search Input */}
        <div className="w-full flex justify-end items-center gap-x-1 border-b-[1px] border-b-solid border-b-slate-200 pb-10">
          <input
            className="pl-2 w-[250px] h-[40px] border-solid border-[2px] border-slate-400 outline-none focus:border-[#0B60B0]"
            type="text"
            placeholder="Tên bài đăng"
          />
          <button className="text-white h-[40px] px-3 bg-[#0B60B0]">
            Tìm kiếm
          </button>
        </div>

        {/* Properties */}
        <ul className="mt-10 flex justify-evenly items-center px-2 lg:px-5">
          <li className="basis-1/6  text-center font-medium">STT</li>
          <li className="basis-2/6  text-center font-medium">Tên bài đăng</li>
          <li className="basis-1/6  text-center font-medium">Tác giả</li>
          <li className="basis-1/6 text-center font-medium">Ngày đăng</li>
          <li className="basis-1/6 text-center font-medium">Thao tác</li>
        </ul>
        {/* Posts list */}
        <div className="mt-5 w-full flex flex-col gap-y-1">
          <ul className="flex justify-evenly items-center px-2 lg:px-5 hover:bg-slate-100 py-4 rounded-lg border-[1px] border-solid border-slate-200 shadow-sm">
            <li className="basis-1/6  text-center font-medium">1</li>
            <li className="basis-2/6  text-center font-medium">
              Phân lô ngõ 31 Trần Quốc Hoàn, ô tô vào nhà...
            </li>
            <li className="basis-1/6  text-center font-medium">Tô Văn Hưởng</li>
            <li className="basis-1/6 text-center font-medium">01/02/2024</li>
            <li className="basis-1/6 text-center font-medium cursor-pointer text-red-500">Xóa</li>
          </ul>
          <ul className="flex justify-evenly items-center px-2 lg:px-5 hover:bg-slate-100 py-4 rounded-lg border-[1px] border-solid border-slate-200 shadow-sm">
            <li className="basis-1/6  text-center font-medium">2</li>
            <li className="basis-2/6  text-center font-medium">
              Bán đất Sóc Trăng, đường Phú Lợi, khóm 6...
            </li>
            <li className="basis-1/6  text-center font-medium">Nguyễn Duy Linh</li>
            <li className="basis-1/6 text-center font-medium">01/02/2024</li>
            <li className="basis-1/6 text-center font-medium cursor-pointer text-red-500">Xóa</li>
          </ul>
          <ul className="flex justify-evenly items-center px-2 lg:px-5 hover:bg-slate-100 py-4 rounded-lg border-[1px] border-solid border-slate-200 shadow-sm">
            <li className="basis-1/6  text-center font-medium">3</li>
            <li className="basis-2/6  text-center font-medium">
              Bán đất Sóc Trăng, đường Phú Lợi, khóm 6...
            </li>
            <li className="basis-1/6  text-center font-medium">Nguyễn Duy Linh</li>
            <li className="basis-1/6 text-center font-medium">01/02/2024</li>
            <li className="basis-1/6 text-center font-medium cursor-pointer text-red-500">Xóa</li>
          </ul>
        </div>

         {/*Pagenation*/}
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
  );
};

export default PostsList;
