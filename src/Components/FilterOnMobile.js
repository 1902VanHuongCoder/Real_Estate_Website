// import hooks
import React, { useContext } from "react";

// import icons
import { AppContext } from "../Context/AppContext";
const FilterOnMobile = () => {
  const { setPostsWasFiltered, setShowSpinner, news } = useContext(AppContext);

  const isInRange = (value, min, max) => {
    return value >= min && value <= max;
  };

  const handleFilterPostsBasedOnAcreage = (value) => {
    setShowSpinner(true);
    const rangeOfValues = value.split("-");
    let min = parseInt(rangeOfValues[0]);
    let max = parseInt(rangeOfValues[1]);

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
    setTimeout(() => {
      setPostsWasFiltered(news);
      setShowSpinner(false);
    }, 1500);
  };

  const handleFilterPostsBasedOnDirection = (direction) => {
    setShowSpinner(true);
    setTimeout(() => {
      const postsWereFilteredBasedOnAcreage = [];
      news.forEach((element) => {
        if (direction.toLowerCase() === element.direction.toLowerCase()) {
          postsWereFilteredBasedOnAcreage.push(element);
        }
      });
      setPostsWasFiltered(postsWereFilteredBasedOnAcreage);
      setShowSpinner(false);
    }, 1500);
  };

  const handleFilterPostsBasedOnFloor = (floor) => {
    setShowSpinner(true);
    let fl = parseInt(floor);
    setTimeout(() => {
      const postsWereFilteredBasedOnAcreage = [];
      news.forEach((element) => {
        if (fl === element.floors) {
          postsWereFilteredBasedOnAcreage.push(element);
        }

        if (fl >= 7) {
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
    <div className="block sm:hidden w-full pt-10 px-5">
      <h2 className="text-2xl border-l-[6px] border-l-solid border-l-[#0B60B0] pl-3">
        Tìm kiếm
      </h2>
      <div className="mt-5 mb-5 grid grid-cols-2 items-center gap-2 w-full h-fit">
        <select
          onChange={(e) => handleFilterPostsBasedOnAcreage(e.target.value)}
          className="h-[40px] p-1 border-[1px] border-solid border-slate-200 focus:outline-none focus:border-[2px] focus:border-solid focus:border-[#0B60B0]"
        >
          <option value="">Diện tích</option>
          <option value="1-40">Dưới 40 m2</option>
          <option value="40-80">40 - 80 m2</option>
          <option value="81-140">81 - 140 m2</option>
          <option value="141-5000">Từ 140 m2</option>
        </select>
        <select
          onChange={(e) => handleFilterPostsBasedOnDirection(e.target.value)}
          className="h-[40px] p-1 border-[1px] border-solid border-slate-200 focus:outline-none focus:border-[2px] focus:border-solid focus:border-[#0B60B0]"
        >
          <option value="">Hướng nhà</option>
          <option value="Đông">Đông</option>
          <option value="Đông bắc">Đông - Bắc</option>
          <option value="Đông nam">Đông - Nam</option>
          <option value="nam">Nam</option>
          <option value="Tây nam">Tây - Nam</option>
          <option value="Tây">Tây</option>
          <option value="Tây bắc">Tây - Bắc</option>
          <option value="Bắc">Bắc</option>
        </select>
        <select
          onChange={(e) => handleFilterPostsBasedOnFloor(e.target.value)}
          className="h-[40px] p-1 border-[1px] border-solid border-slate-200 focus:outline-none focus:border-[2px] focus:border-solid focus:border-[#0B60B0]"
        >
          <option value="">Số tầng</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>Trên 6 tầng</option>
        </select>
      </div>
      <button
        onClick={handleShowAllOfPosts}
        className="px-5 h-[40px] bg-[#0B60B0] text-white text-xl hover:opacity-80"
      >
        Tất cả bài đăng
      </button>
    </div>
  );
};

export default FilterOnMobile;
