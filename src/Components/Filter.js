// import hooks
import React from "react";

// import icons 
import { GoDotFill } from "react-icons/go";

const Filter = () => {
  return (
    <div className="hidden sm:block basis-[30%] h-fit w-full pt-14">
      <h2 className="text-2xl border-l-[6px] border-l-solid border-l-[#0B60B0] pl-3">
        Tìm kiếm
      </h2>
      <div className="w-full h-fit mt-5 p-5 border-[1px] border-solid border-slate-200">
        <p className="flex gap-x-1 items-center">
          <span>
            <GoDotFill />
          </span>

          <span className="text-xl font-medium">Diện tích</span>
        </p>
        <ul className="text-lg pl-5 mt-3 flex flex-col gap-y-2">
          <li className="cursor-pointer hover:text-xl pb-2 border-b-[1px] border-b-solid border-b-slate-200">
            <span>
              Dưới 40 m<sup>2</sup>
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl pb-2 border-b-[1px] border-b-solid border-b-slate-300">
            <span>
              40 m<sup>2</sup>
            </span>
            <span>-</span>
            <span>
              60 m<sup>2</sup>
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl pb-2 border-b-[1px] border-b-solid border-b-slate-300">
            <span>
              61 m<sup>2</sup>
            </span>{" "}
            <span>-</span>{" "}
            <span>
              80 m<sup>2</sup>
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl pb-2 border-b-[1px] border-b-solid border-b-slate-300">
            <span>
              81 m<sup>2</sup>
            </span>{" "}
            <span>-</span>{" "}
            <span>
              100 m<sup>2</sup>
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl pb-2 border-b-[1px] border-b-solid border-b-slate-300">
            <span>
              Trên 100 m<sup>2</sup>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-fit mt-5 p-5 border-[1px] border-solid border-slate-200">
        <p className="flex gap-x-1 items-center">
          <span>
            <GoDotFill />
          </span>
          <span className="text-xl font-medium">Hướng nhà</span>
        </p>
        <ul className="text-lg pl-5 mt-3 flex flex-col gap-y-2">
          <li className="cursor-pointer hover:text-xl pb-2 border-b-[1px] border-b-solid border-b-slate-300">
            <span>
              Đông
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl pb-2 border-b-[1px] border-b-solid border-b-slate-300">
            <span>
              Đông - Nam
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl pb-2 border-b-[1px] border-b-solid border-b-slate-300">
            <span>
              Đông - Bắc
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl pb-2 border-b-[1px] border-b-solid border-b-slate-300">
            <span>
              Nam
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl pb-2 border-b-[1px] border-b-solid border-b-slate-300">
            <span>
              Tây - Nam
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl pb-2 border-b-[1px] border-b-solid border-b-slate-300">
            <span>
              Tây
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl pb-2 border-b-[1px] border-b-solid border-b-slate-300">
            <span>
              Tây - Bắc
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl pb-2 border-b-[1px] border-b-solid border-b-slate-300">
            <span>
              Bắc
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-fit mt-5 p-5 border-[1px] border-solid border-slate-200">
        <p className="flex gap-x-1 items-center">
          <span>
            <GoDotFill />
          </span>
          <span className="text-xl font-medium">Số tầng</span>
        </p>
        <ul className="text-lg pl-5 mt-3 flex flex-col gap-y-2">
          <li className="cursor-pointer hover:text-xl pb-2 border-b-[1px] border-b-solid border-b-slate-300">
            <span>
              1 tầng
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl pb-2 border-b-[1px] border-b-solid border-b-slate-300">
            <span>
              2 tầng
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl pb-2 border-b-[1px] border-b-solid border-b-slate-300">
            <span>
              3 tầng
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl pb-2 border-b-[1px] border-b-solid border-b-slate-300">
            <span>
              4 tầng
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl pb-2 border-b-[1px] border-b-solid border-b-slate-300">
            <span>
              5 tầng
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl pb-2 border-b-[1px] border-b-solid border-b-slate-300">
            <span>
              6 tầng
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl pb-2 border-b-[1px] border-b-solid border-b-slate-300">
            <span>
              Nhiều hơn 6 tầng
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
