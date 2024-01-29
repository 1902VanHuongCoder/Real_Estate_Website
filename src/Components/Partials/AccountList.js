import React from 'react'
import { GoDotFill } from 'react-icons/go'

const AccountList = () => {
  return (
    <div className="p-5 border-[1px] border-solid border-slate-200 mt-5 rounded-t-xl">
      <div className="flex items-center gap-x-2 text-xl">
        <span>
          <GoDotFill />
        </span>
        <span>Danh sách tài khoản người dùng</span>
      </div>
      
      <div className="w-full mt-5 h-fit">
        {/* Search Input */}
        <div className="w-full flex justify-end items-center gap-x-1 border-b-[1px] border-b-solid border-b-slate-200 pb-10">
          <input
            className="pl-2 w-[250px] h-[40px] border-solid border-[2px] border-slate-400 outline-none focus:border-[#0B60B0]"
            type="text"
            placeholder="Tên người dùng"
          />
          <button className="text-white h-[40px] px-3 bg-[#0B60B0]">
            Tìm kiếm
          </button>
        </div>

        {/* Properties */}
        <ul className="mt-10 flex justify-evenly items-center px-5">
          <li className="basis-1/6  text-center font-medium">STT</li>
          <li className="basis-1/6  text-center font-medium">Tên người dùng</li>
          <li className="basis-1/6  text-center font-medium">Số điện thoại</li>
          <li className="basis-2/6 text-center font-medium">Địa chỉ</li>
          <li className="basis-1/6 text-center font-medium">Thao tác</li>
        </ul>
        {/* Posts list */}
        <div className="mt-5 w-full flex flex-col gap-y-1">
          <ul className="flex justify-evenly items-center px-5 hover:bg-slate-100 py-4 rounded-lg border-[1px] border-solid border-slate-200 shadow-sm">
            <li className="basis-1/6  text-center font-medium">1</li>
            <li className="basis-1/6  text-center font-medium">
              tovanhuong007
            </li>
            <li className="basis-1/6  text-center font-medium">0334745377</li>
            <li className="basis-2/6 text-center font-medium">
                ấp Mương Khai - xã Mỹ Hương - Mỹ Tú - Sóc Trăng
            </li>
            <li className="basis-1/6 text-center font-medium cursor-pointer text-red-500">Xóa</li>
          </ul>
          <ul className="flex justify-evenly items-center px-5 hover:bg-slate-100 py-4 rounded-lg border-[1px] border-solid border-slate-200 shadow-sm">
            <li className="basis-1/6  text-center font-medium">2</li>
            <li className="basis-1/6  text-center font-medium">
              nguyenvantam23
            </li>
            <li className="basis-1/6  text-center font-medium">094203001257</li>
            <li className="basis-2/6 text-center font-medium">ấp Tân Hưng, huyện Phụng Hiệp, tỉnh Hậu Giang</li>
            <li className="basis-1/6 text-center font-medium cursor-pointer text-red-500">Xóa</li>
          </ul>
          <ul className="flex justify-evenly items-center px-5 hover:bg-slate-100 py-4 rounded-lg border-[1px] border-solid border-slate-200 shadow-sm">
            <li className="basis-1/6  text-center font-medium">3</li>
            <li className="basis-1/6  text-center font-medium">
              nhamvantan009
            </li>
            <li className="basis-1/6  text-center font-medium">0122323443</li>
            <li className="basis-2/6 text-center font-medium">Hòa Đức, Hòa An, Phụng Hiệp, Hậu Giang</li>
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
  )
}

export default AccountList