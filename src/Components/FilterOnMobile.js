import React from "react";

const FilterOnMobile = () => {
  return (
    <div className="block sm:hidden w-full pt-10 px-5">
      <h2 className="text-2xl border-l-[6px] border-l-solid border-l-[#0B60B0] pl-3">
        Tìm kiếm
      </h2>
      <div className="mt-5 mb-5 grid grid-cols-2 items-center gap-2 w-full h-fit">
        <select className="h-[40px] p-1 border-[1px] border-solid border-slate-200 focus:outline-none focus:border-[2px] focus:border-solid focus:border-[#0B60B0]">
          <option value="">Diện tích</option>
          <option value="<40">Dưới 40 tỷ</option>
          <option value="40-60">40 - 60 tỷ</option>
          <option value="61-80">61 - 80 tỷ</option>
          <option value="81-100">81 - 100 tỷ</option>
          <option value=">100">Tên 100 tỷ</option>
        </select>
        <select className="h-[40px] p-1 border-[1px] border-solid border-slate-200 focus:outline-none focus:border-[2px] focus:border-solid focus:border-[#0B60B0]">
          <option value="">Hướng nhà</option>
          <option value="d">Đông</option>
          <option value="d-b">Đông - Bắc</option>
          <option value="d-n">Đông - Nam</option>
          <option value="n">Nam</option>
          <option value="t-n">Tây - Nam</option>
          <option value="t">Tây</option>
          <option value="t-b">Tây - Bắc</option>
          <option value="b">Bắc</option>
        </select>
        <select className="h-[40px] p-1 border-[1px] border-solid border-slate-200 focus:outline-none focus:border-[2px] focus:border-solid focus:border-[#0B60B0]">
          <option value="">Số tầng</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
    </div>
    <button className="px-5 h-[40px] bg-[#0B60B0] text-white text-xl hover:opacity-80">Tìm kiếm</button>
    </div>
  );
};

export default FilterOnMobile;
