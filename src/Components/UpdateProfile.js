import React from "react";
import nharieng01 from "../assets/images/Nha+Rieng+Image+01.jpg";
import userAvatar from "../assets/images/user.jpg";
import { LuPencilLine } from "react-icons/lu";

import { FaCamera } from "react-icons/fa";
const UpdateProfile = () => {
  return (
    <div className="w-full h-fit">
      <h1 className="w-full text-center text-2xl font-md py-10">
        CẬP NHẬT THÔNG TIN
      </h1>
      <div className="w-full">
        <div
          className="relative w-full h-[300px]"
          style={{ backgroundImage: `url(${nharieng01})` }}
        >
          <button className="absolute bottom-5 right-5 text-white text-xl flex gap-x-2 items-center px-3 py-2 bg-[rgba(0,0,0,.5)] hover:opacity-80">
            <span>Cập nhật ảnh nền</span>
            <span>
              <LuPencilLine />
            </span>
          </button>
        </div>
        <div className="relative w-full h-[400px]">
          <div className="absolute left-10 -top-[75px] h-fit flex items-center gap-x-2">
            <div
              style={{ backgroundImage: `url(${userAvatar})` }}
              className="bg-center bg-cover w-[150px] h-[150px] bg-red-300 rounded-full overflow-hidden flex flex-col justify-end"
            >
              <div className="w-full py-3 bg-[rgba(0,0,0,.5)] text-white hover:opacity-80 cursor-pointer">
                <span className="w-full flex justify-center items-center">
                  <FaCamera />
                </span>
              </div>
            </div>
          </div>
          <div className="w-3/5 h-fit mx-auto p-5 pt-10 flex flex-col gap-y-4">
            <div class="flex flex-col gap-y-1">
              <label htmlFor="username">Họ và tên</label>
              <input
                className="w-full h-[50px] outline-none border-[1px] border-solid border-slate-400 pl-3"
                type="text"
                id="username"
                name="username"
                placeholder="Tô Văn Hưởng"
              />
            </div>
            <div class="flex flex-col gap-y-1">
              <label htmlFor="address">Địa chỉ</label>
              <input
                className="w-full h-[50px] outline-none border-[1px] border-solid border-slate-400 pl-3"
                type="text"
                id="address"
                name="address"
                placeholder="Phố Trần Quốc Hoàn, Phường Dịch Vọng Hậu, Cầu Giấy, Hà Nội"
              />
            </div>
            <div class="flex flex-col gap-y-1">
              <label htmlFor="phoneNumber">Số điện thoại</label>
              <input
                className="w-full h-[50px] outline-none border-[1px] border-solid border-slate-400 pl-3"
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="0334745377"
              />
            </div>
            <div className="mt-5 flex justify-end">
            <button className="text-white bg-[#0B60B0] h-[40px] px-5 hover:opacity-80">
            Cập nhật
          </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
