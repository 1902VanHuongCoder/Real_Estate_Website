import React from "react";

const Post = () => {
  return (
    <div className="w-4/5 p-5 mx-auto">
      <h1 className="w-full text-center text-2xl font-md">ĐĂNG BÀI</h1>
      <form className="w-full h-fit" action="/" method="POST">
        <div className="flex flex-col gap-y-2">
          <label className="text-2xl text-slate-400" htmlFor="postTitle">
            Tiêu đề bài đăng
          </label>
          <input
            className="text-2xl pl-5 h-[50px] border-[1px] border-solid border-slate-400 rounded-lg outline-none focus:border-[#0B60B0] "
            type="text"
            name="postTitle"
            id="postTitle"
          />
        </div>
        <div className="flex flex-col gap-y-2 pb-5 border-b-[1px] border-solid border-slate-200">
          <label className="text-xl text-slate-400" htmlFor="postTitle">
            Địa chỉ
          </label>
          <input
            className="text-xl pl-5 h-[50px] border-[1px] border-solid border-slate-400 rounded-lg outline-none focus:border-[#0B60B0] "
            type="text"
            name="postTitle"
            id="postTitle"
          />
        </div>
        <div className="flex flex-col gap-y-2 pb-5 border-b-[1px] border-solid border-slate-200">
          <label className="text-xl text-slate-400" htmlFor="postTitle">
            Giá khởi điểm
          </label>
          <input
            className="text-xl pl-5 h-[50px] border-[1px] border-solid border-slate-400 rounded-lg outline-none focus:border-[#0B60B0] "
            type="text"
            name="postTitle"
            id="postTitle"
          />
        </div>
        <div className="w-full">
          <p>Mô tả tài sản</p>
          <div className="flex w-full gap-x-5">
            <div className="basis-1/2">
              <div className="flex flex-col gap-y-2 pb-5 ">
                <label className="text-xl text-slate-400" htmlFor="postTitle">
                  Diện tích
                </label>
                <input
                  className="text-xl pl-5 h-[50px] border-[1px] border-solid border-slate-400 rounded-lg outline-none focus:border-[#0B60B0] "
                  type="text"
                  name="postTitle"
                  id="postTitle"
                />
              </div>
              <div className="flex flex-col gap-y-2 pb-5 ">
                <label className="text-xl text-slate-400" htmlFor="postTitle">
                  Mặt tiền
                </label>
                <input
                  className="text-xl pl-5 h-[50px] border-[1px] border-solid border-slate-400 rounded-lg outline-none focus:border-[#0B60B0] "
                  type="text"
                  name="postTitle"
                  id="postTitle"
                />
              </div>
              <div className="flex flex-col gap-y-2 pb-5 ">
                <label className="text-xl text-slate-400" htmlFor="postTitle">
                  Số tầng
                </label>
                <input
                  className="text-xl pl-5 h-[50px] border-[1px] border-solid border-slate-400 rounded-lg outline-none focus:border-[#0B60B0] "
                  type="text"
                  name="postTitle"
                  id="postTitle"
                />
              </div>
              <div className="flex flex-col gap-y-2 pb-5">
                <label className="text-xl text-slate-400" htmlFor="postTitle">
                  Số toilet
                </label>
                <input
                  className="text-xl pl-5 h-[50px] border-[1px] border-solid border-slate-400 rounded-lg outline-none focus:border-[#0B60B0] "
                  type="text"
                  name="postTitle"
                  id="postTitle"
                />
              </div>
              <div className="flex flex-col gap-y-2 pb-5 ">
                <label className="text-xl text-slate-400" htmlFor="postTitle">
                  Hướng nhà
                </label>
                <select>
                  <option>Đông</option>
                  <option>Đông Nam</option>
                  <option>Đông Bắc</option>
                  <option>Tây Bắc</option>
                  <option>Bắc</option>
                  <option>Nam</option>
                  <option>Tây Nam</option>
                  <option>Tây</option>
                </select>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="flex flex-col gap-y-2 pb-5 ">
                <label className="text-xl text-slate-400" htmlFor="postTitle">
                  Số phòng khách
                </label>
                <input
                  className="text-xl pl-5 h-[50px] border-[1px] border-solid border-slate-400 rounded-lg outline-none focus:border-[#0B60B0] "
                  type="text"
                  name="postTitle"
                  id="postTitle"
                />
              </div>
              <div className="flex flex-col gap-y-2 pb-5 ">
                <label className="text-xl text-slate-400" htmlFor="postTitle">
                  Số phòng ngủ
                </label>
                <input
                  className="text-xl pl-5 h-[50px] border-[1px] border-solid border-slate-400 rounded-lg outline-none focus:border-[#0B60B0] "
                  type="text"
                  name="postTitle"
                  id="postTitle"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>Hình ảnh</p>
          <p>Chọn hình ảnh tiêu đề</p>
          <div>
              <input type="file" />
          </div>
          <p>Chọn các ảnh của tài sản</p>
          <div>
              Kéo các ảnh vào đây hoặc <input type="file" />
          </div>
        </div>
        <button>Đăng bài</button>
      </form>
    </div>
  );
};

export default Post;
