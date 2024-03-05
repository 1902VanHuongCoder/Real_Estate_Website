import React, { useCallback, useContext, useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { AppContext } from "../../Context/AppContext";

const WaitingPosts = () => {
  const { news } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);

  const listOfPostsWereDevided = [];
  for (let i = currentPage * 6 - 6; i < currentPage * 6; i++) {
    if (i >= news.length) {
      break;
    }
    listOfPostsWereDevided.push(news[i]);
  }

  const buttonsArray = [];
  for (let j = 1; j <= Math.ceil(news.length / 6); j++) {
    buttonsArray.push(j);
  }

  return (
    <div className="p-5 border-[1px] border-solid border-slate-200 mt-5 mb-5 rounded-t-xl">
      <div className="flex items-center gap-x-2 text-xl">
        <span>
          <GoDotFill />
        </span>
        <span>Danh sách bài đăng của công ty</span>
      </div>

      <div className="w-full mt-5 h-fit">
        {/* Search Input */}
        {/* <div className="w-full flex justify-end items-center gap-x-1 border-b-[1px] border-b-solid border-b-slate-200 pb-10">
          <input
            className="pl-2 w-[200px] sm:w-[250px] h-[40px] border-solid border-[2px] border-slate-400 outline-none focus:border-[#0B60B0]"
            type="text"
            placeholder="Tên bài đăng"
          />
          <button className="text-white h-[40px] px-3 bg-[#0B60B0]">
            Tìm kiếm
          </button>
        </div> */}

        {/* List posts that are waiting accepting */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-10">
          {news.length > 0 ? (
            listOfPostsWereDevided?.map((element, index) => (
              <div
                key={index}
                className="flex flex-col justify-between w-[320px] sm:w-[360px] h-[550px] sm:h-[500px] bg-white rounded-t-md hover:shadow-lg transition-shadow border-[1px] border-solid border-slate-200 overflow-hidden"
              >
                <div className="h-[80%] w-full">
                  <div
                    className="w-full h-[60%] bg-cover bg-center"
                    style={{
                      backgroundImage: `url("${element.titleImageURL}")`,
                    }}
                  ></div>
                  <div className="py-3 px-2 flex flex-col gap-y-2">
                    <p className="text-xl font-medium">{element.postTitle}</p>
                    <div className="text-lg flex gap-x-1">
                      <span className="text-slate-500">Ngày đăng:</span>
                      <span>{element.createdAt}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-2 mr-5 mb-5 justify-end">
                  <button className="hover:opacity-80 px-5 py-3 border-[2px] border-solid border-[#0B60B0] font-medium">
                    Cập nhật
                  </button>
                  <button className="hover:opacity-80 px-5 py-3 font-medium bg-red-500 text-white">
                    Xóa
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>Không có dữ liệu bài đăng</div>
          )}
        </div>

        {/*Pagenation*/}
        <div className="w-full flex justify-center gap-x-1 mt-10">
          {buttonsArray?.map((button, index) => (
            <button
              onClick={() => setCurrentPage(button)}
              key={index}
              className="w-[50px] h-[50px] border-[1px] border-solid border-slate-300 bg-[#40A2D8] text-white"
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WaitingPosts;
