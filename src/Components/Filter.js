// import hooks
import React, { useContext } from "react";

// import icons
import { GoDotFill } from "react-icons/go";
import { AppContext } from "../Context/AppContext";

const Example = () => {
  const { setPostsWasFiltered, setShowSpinner, houses, lands } =
    useContext(AppContext);

  const isInRange = (value, min, max) => {
    return value >= min && value <= max;
  };

  const handleFilterPostsBasedOnAcreage = (min, max) => {
    setShowSpinner(true);
    const news = [...houses, ...lands];
    setTimeout(() => {
      const postsWereFilteredBasedOnAcreage = [];
      news.forEach((element) => {
        if (isInRange(element.acreage, min, max)) {
          postsWereFilteredBasedOnAcreage.push(element);
        }
      });
      setPostsWasFiltered(postsWereFilteredBasedOnAcreage);
      setShowSpinner(false);
    }, 2000);
  };

  const handleShowAllOfPosts = () => {
    setShowSpinner(true);
    const news = [...houses, ...lands];
    setTimeout(() => {
      setPostsWasFiltered(news);
      setShowSpinner(false);
    }, 1500);
  };

  const handleFilterPostsBasedOnDirection = (direction) => {
    setShowSpinner(true);
    const news = [...houses, ...lands];
    setTimeout(() => {
      const postsWereFilteredBasedOnAcreage = [];
      news.forEach((element) => {
        if (direction === element.direction) {
          postsWereFilteredBasedOnAcreage.push(element);
        }
      });
      setPostsWasFiltered(postsWereFilteredBasedOnAcreage);
      setShowSpinner(false);
    }, 1500);
  };

  const handleFilterPostsBasedOnFloor = (floor) => {
    setShowSpinner(true);
    const news = [...houses, ...lands];
    setTimeout(() => {
      const postsWereFilteredBasedOnAcreage = [];
      news.forEach((element) => {
        if (floor === element.floors) {
          postsWereFilteredBasedOnAcreage.push(element);
        }

        if (floor >= 7) {
          if (element.floors >= 7) {
            postsWereFilteredBasedOnAcreage.push(element);
          }
        }
      });
      setPostsWasFiltered(postsWereFilteredBasedOnAcreage);
      setShowSpinner(false);
    }, 1500);
  };

  return (
    <div className="hidden sm:block basis-[30%] h-fit w-full pt-14">
      <h2 className="text-2xl border-l-[6px] border-l-solid border-l-[#0B60B0] pl-3">
        Tìm kiếm
      </h2>
      <div
        onClick={handleShowAllOfPosts}
        className="w-full flex items-center gap-x-1 font-medium bg-[#0B60B0] text-white h-fit mt-5 p-5 border-[1px] border-solid border-slate-200"
      >
        <span>
          <GoDotFill />
        </span>
        <button className="text-lg hover:text-xl hover:font-medium">
          Tất cả bài đăng
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
          <li
            onClick={() => handleFilterPostsBasedOnAcreage(1, 40)}
            className="cursor-pointer hover:text-xl hover:font-medium pb-2"
          >
            <span>
              Dưới 40 m<sup>2</sup>
            </span>
          </li>
          <li
            onClick={() => handleFilterPostsBasedOnAcreage(40, 80)}
            className="cursor-pointer hover:text-xl hover:font-medium pb-2"
          >
            <span>
              40 m<sup>2</sup>
            </span>
            <span>-</span>
            <span>
              80 m<sup>2</sup>
            </span>
          </li>
          <li
            onClick={() => handleFilterPostsBasedOnAcreage(81, 140)}
            className="cursor-pointer hover:text-xl hover:font-medium pb-2"
          >
            <span>
              81 m<sup>2</sup>
            </span>{" "}
            <span>-</span>{" "}
            <span>
              140 m<sup>2</sup>
            </span>
          </li>
          <li
            onClick={() => handleFilterPostsBasedOnAcreage(141, 5000)}
            className="cursor-pointer hover:text-xl hover:font-medium pb-2"
          >
            <span>
              Trên 140 m<sup>2</sup>
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
          <li
            onClick={() => handleFilterPostsBasedOnDirection("Đông")}
            className="cursor-pointer hover:text-xl hover:font-medium pb-2"
          >
            <span>Đông</span>
          </li>
          <li
            onClick={() => handleFilterPostsBasedOnDirection("Đông bắc")}
            className="cursor-pointer hover:text-xl hover:font-medium pb-2"
          >
            <span>Đông Bắc</span>
          </li>
          <li
            onClick={() => handleFilterPostsBasedOnDirection("Đông nam")}
            className="cursor-pointer hover:text-xl hover:font-medium pb-2"
          >
            <span>Đông Nam</span>
          </li>
          <li
            onClick={() => handleFilterPostsBasedOnDirection("Tây nam")}
            className="cursor-pointer hover:text-xl hover:font-medium pb-2"
          >
            <span>Tây Nam</span>
          </li>
          <li
            onClick={() => handleFilterPostsBasedOnDirection("Nam")}
            className="cursor-pointer hover:text-xl hover:font-medium pb-2"
          >
            <span>Nam</span>
          </li>
          <li
            onClick={() => handleFilterPostsBasedOnDirection("Tây bắc")}
            className="cursor-pointer hover:text-xl hover:font-medium pb-2"
          >
            <span>Tây Bắc</span>
          </li>
          <li
            onClick={() => handleFilterPostsBasedOnDirection("Bắc")}
            className="cursor-pointer hover:text-xl hover:font-medium pb-2"
          >
            <span>Bắc</span>
          </li>
          <li
            onClick={() => handleFilterPostsBasedOnDirection("Tây")}
            className="cursor-pointer hover:text-xl hover:font-medium pb-2"
          >
            <span>Tây</span>
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
          <li
            onClick={() => handleFilterPostsBasedOnFloor(1)}
            className="cursor-pointer hover:text-xl hover:font-medium pb-2"
          >
            <span>1 tầng</span>
          </li>
          <li
            onClick={() => handleFilterPostsBasedOnFloor(2)}
            className="cursor-pointer hover:text-xl hover:font-medium pb-2"
          >
            <span>2 tầng</span>
          </li>
          <li
            onClick={() => handleFilterPostsBasedOnFloor(3)}
            className="cursor-pointer hover:text-xl hover:font-medium pb-2"
          >
            <span>3 tầng</span>
          </li>
          <li
            onClick={() => handleFilterPostsBasedOnFloor(4)}
            className="cursor-pointer hover:text-xl hover:font-medium pb-2"
          >
            <span>4 tầng</span>
          </li>
          <li
            onClick={() => handleFilterPostsBasedOnFloor(5)}
            className="cursor-pointer hover:text-xl hover:font-medium pb-2"
          >
            <span>5 tầng</span>
          </li>
          <li
            onClick={() => handleFilterPostsBasedOnFloor(6)}
            className="cursor-pointer hover:text-xl hover:font-medium pb-2"
          >
            <span>6 tầng</span>
          </li>
          <li
            onClick={() => handleFilterPostsBasedOnFloor(7)}
            className="cursor-pointer hover:text-xl hover:font-medium pb-2"
          >
            <span>Nhiều hơn 6 tầng</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Example;
