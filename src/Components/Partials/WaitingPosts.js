import React from 'react'
import { GoDotFill } from 'react-icons/go'
import nharieng01 from "../../assets/images/Nha+Rieng+Image+01.jpg";
const WaitingPosts = () => {
  return (
    <div className="p-5 border-[1px] border-solid border-slate-200 mt-5 rounded-t-xl">
      <div className="flex items-center gap-x-2 text-xl">
        <span>
          <GoDotFill />
        </span>
        <span>Danh sách bài đăng đang chờ duyệt</span>
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

         {/* List posts that are waiting accepting */}
         <div className="flex gap-x-2 mt-10">
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
  )
}

export default WaitingPosts