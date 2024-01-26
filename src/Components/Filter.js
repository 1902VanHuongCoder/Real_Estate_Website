import React from "react";
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
          <li className="cursor-pointer hover:text-xl">
            <span>
              Dưới 40 m<sup>2</sup>
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl">
            <span>
              40 m<sup>2</sup>
            </span>{" "}
            <span>-</span>{" "}
            <span>
              60 m<sup>2</sup>
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl">
            <span>
              61 m<sup>2</sup>
            </span>{" "}
            <span>-</span>{" "}
            <span>
              80 m<sup>2</sup>
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl">
            <span>
              81 m<sup>2</sup>
            </span>{" "}
            <span>-</span>{" "}
            <span>
              100 m<sup>2</sup>
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl">
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
          <li className="cursor-pointer hover:text-xl">
            <span>
              Đông
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl">
            <span>
              Đông - Nam
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl">
            <span>
              Đông - Bắc
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl">
            <span>
              Nam
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl">
            <span>
              Tây - Nam
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl">
            <span>
              Tây
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl">
            <span>
              Tây - Bắc
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl">
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
          <li className="cursor-pointer hover:text-xl">
            <span>
              1 tầng
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl">
            <span>
              2 tầng
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl">
            <span>
              3 tầng
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl">
            <span>
              4 tầng
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl">
            <span>
              5 tầng
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl">
            <span>
              6 tầng
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl">
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
