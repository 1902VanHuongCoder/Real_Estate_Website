// import hooks
import React, { useContext } from "react";

// import icons
import { GoDotFill } from "react-icons/go";
import { AppContext } from "../Context/AppContext";

const Filter = () => {
  const { postsWasFiltered, setPostsWasFiltered, setShowSpinner } = useContext(AppContext);
  const isInRange = (value, min, max) => {
    return value >= min && value <= max;
  };
  const handleFilterPosts = (min, max) => {
    setShowSpinner(true);
    setTimeout(() => {
      const postsWereFilteredBasedOnAcreage = [];
      postsWasFiltered.forEach((element) => {
        if (isInRange(element.acreage, min, max)) {
            postsWereFilteredBasedOnAcreage.push(element);
        }
      });
      setPostsWasFiltered(postsWereFilteredBasedOnAcreage);
      setShowSpinner(false);
    }, 2000);
    
  };
  return (
    <div className="hidden sm:block basis-[30%] h-fit w-full pt-14">
      <h2 className="text-2xl border-l-[6px] border-l-solid border-l-[#0B60B0] pl-3">
        Tìm kiếm
      </h2>
      <div className="w-full h-fit mt-5 p-5 border-[1px] border-solid border-slate-200">
        <button className="text-lg pl-4 hover:text-xl hover:font-medium">
          Tất cả
        </button>
      </div>
      <div className="w-full h-fit mt-5 p-5 border-[1px] border-solid border-slate-200">
        <p className="flex gap-x-1 items-center">
          <span>
            <GoDotFill />
          </span>

          <span className="text-xl font-medium">Diện tích</span>
        </p>
        <ul className="text-lg pl-5 mt-3 flex flex-col gap-y-2">
          <li onClick={() => handleFilterPosts(1, 40)} className="cursor-pointer hover:text-xl hover:font-medium pb-2">
            <span>
              Dưới 40 m<sup>2</sup>
            </span>
          </li>
          <li onClick={() => handleFilterPosts(40, 80)} className="cursor-pointer hover:text-xl hover:font-medium pb-2">
            <span>
              40 m<sup>2</sup>
            </span>
            <span>-</span>
            <span>
              80 m<sup>2</sup>
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl hover:font-medium pb-2">
            <span>
              81 m<sup>2</sup>
            </span>{" "}
            <span>-</span>{" "}
            <span>
              100 m<sup>2</sup>
            </span>
          </li>
          <li className="cursor-pointer hover:text-xl hover:font-medium pb-2">
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
          <li className="cursor-pointer hover:text-xl hover:font-medium pb-2">
            <span>Đông</span>
          </li>
          <li className="cursor-pointer hover:text-xl hover:font-medium pb-2">
            <span>Đông - Nam</span>
          </li>
          <li className="cursor-pointer hover:text-xl hover:font-medium pb-2">
            <span>Đông - Bắc</span>
          </li>
          <li className="cursor-pointer hover:text-xl hover:font-medium pb-2">
            <span>Nam</span>
          </li>
          <li className="cursor-pointer hover:text-xl hover:font-medium pb-2">
            <span>Tây - Nam</span>
          </li>
          <li className="cursor-pointer hover:text-xl hover:font-medium pb-2">
            <span>Tây</span>
          </li>
          <li className="cursor-pointer hover:text-xl hover:font-medium pb-2">
            <span>Tây - Bắc</span>
          </li>
          <li className="cursor-pointer hover:text-xl hover:font-medium pb-2">
            <span>Bắc</span>
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
          <li className="cursor-pointer hover:text-xl hover:font-medium pb-2">
            <span>1 tầng</span>
          </li>
          <li className="cursor-pointer hover:text-xl hover:font-medium pb-2">
            <span>2 tầng</span>
          </li>
          <li className="cursor-pointer hover:text-xl hover:font-medium pb-2">
            <span>3 tầng</span>
          </li>
          <li className="cursor-pointer hover:text-xl hover:font-medium pb-2">
            <span>4 tầng</span>
          </li>
          <li className="cursor-pointer hover:text-xl hover:font-medium pb-2">
            <span>5 tầng</span>
          </li>
          <li className="cursor-pointer hover:text-xl hover:font-medium pb-2">
            <span>6 tầng</span>
          </li>
          <li className="cursor-pointer hover:text-xl hover:font-medium pb-2">
            <span>Nhiều hơn 6 tầng</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
