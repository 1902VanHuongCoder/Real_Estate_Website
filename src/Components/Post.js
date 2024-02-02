// import hooks
import React from "react";

// import packages
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// import icons
import { IoIosWarning } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
const Post = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleToPost = (data) => {
    console.log(data);
  };

  return (
    <div className="w-4/5 p-5 mx-auto">
      <h1 className="w-full text-center text-4xl font-md pt-10 mb-10 ">
        <span className="border-b-[5px] border-solid border-[#0B60B0] pb-2">
          ĐĂNG BÀI
        </span>
      </h1>
      <form
        className="w-full h-fit flex flex-col gap-y-3"
        action="/"
        method="POST"
        onSubmit={handleSubmit(handleToPost)}
      >
        <p className="border-l-[5px] border-solid border-[#0B60B0] mb-5 text-xl pl-2">
          Nội dung chính
        </p>

        {/* Main Content */}
        <div className="flex flex-col gap-y-2">
          <label className="text-slate-500" htmlFor="postTitle">
            Tiêu đề bài đăng
          </label>
          <input
            className="text-2xl pl-5 h-[50px] border-[1px] border-solid border-slate-400 rounded-none outline-none focus:border-[#0B60B0] "
            type="text"
            name="postTitle"
            id="postTitle"
            {...register("postTitle")}
          />
          {errors.postTitle && (
            <p className="flex items-center gap-x-1 text-red-500">
              <span>
                <IoIosWarning />
              </span>
              <span>{errors.postTitle.message}</span>
            </p>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-slate-500" htmlFor="address">
            Địa chỉ
          </label>
          <input
            className="text-xl pl-5 h-[50px] border-[1px] border-solid border-slate-400 rounded-none outline-none focus:border-[#0B60B0] "
            type="text"
            name="address"
            id="address"
            {...register("address")}
          />
          {errors.address && (
            <p className="flex items-center gap-x-1 text-red-500">
              <span>
                <IoIosWarning />
              </span>
              <span>{errors.address.message}</span>
            </p>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-slate-500" htmlFor="price">
            Giá khởi điểm
          </label>
          <input
            className="text-xl pl-5 h-[50px] border-[1px] border-solid border-slate-400 rounded-none outline-none focus:border-[#0B60B0] "
            type="text"
            name="price"
            id="price"
            {...register("price")}
          />
          {errors.price && (
            <p className="flex items-center gap-x-1 text-red-500">
              <span>
                <IoIosWarning />
              </span>
              <span>{errors.price.message}</span>
            </p>
          )}
        </div>
        <div className="flex gap-x-5 pb-10 border-b-[1px] border-solid border-slate-200">
          <div className="text-base basis-1/2 flex flex-col gap-y-1">
            <label className="text-slate-500">Chọn loại tài sản</label>
            <select
              id="typeOfProperty"
              className="h-[50px] border-[1px] border-solid border-slate-400 px-3 outline-none"
              {...register("typeOfProperty")}
            >
              <option value="east">Căn hộ chung cư</option>
              <option value="southeast">Văn phòng</option>
              <option value="northeast">Nhà riêng</option>
              <option value="northwest">Biệt thự, liền kề</option>
              <option value="north">Nhà mặt phố</option>
              <option value="south">Shop house, nhà phố thương mại</option>
              <option value="southwest">Kho, nhà xưởng</option>
              <option value="west">Nhà phòng trọ</option>
              <option value="west">Trang trại, khu nghĩ dưỡng</option>
            </select>
          </div>
          <div className="text-base basis-1/2 flex flex-col gap-y-4">
            <div className="text-slate-500">Hình thức bài đăng</div>
            <div className="flex gap-x-5">
              <label className="flex items-center gap-x-1">
                Nhà đất cho thuê
                <input
                  type="radio"
                  id="postMethod"
                  name="postMethod"
                  {...register("postMethod")}
                />
              </label>
              <label className="flex items-center gap-x-1">
                Nhà đất bán
                <input
                  type="radio"
                  id="postMethod1"
                  name="postMethod"
                  {...register("postMethod")}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="w-full py-5 border-b-[1px] border-solid border-slate-200">
          <p className="border-l-[5px] border-solid border-[#0B60B0] mb-5 text-xl pl-2 ">
            Mô tả tài sản
          </p>
          <div className="flex w-full gap-x-5">
            <div className="basis-1/2">
              <div className="flex flex-col gap-y-2 pb-5 ">
                <label className="text-slate-500" htmlFor="acreage">
                  Diện tích
                </label>
                <div className="relative">
                  <input
                    className="w-full text-xl pl-5 h-[50px] border-[1px] border-solid border-slate-400 rounded-none outline-none focus:border-[#0B60B0] "
                    type="text"
                    name="acreage"
                    id="acreage"
                    {...register("acreage")}
                  />
                  <span className="absolute h-[50px] w-[70px] flex justify-center items-center bg-slate-200 right-0 top-0 border-l-0 border-[1px] border-solid border-slate-400">
                    m<sup>2</sup>
                  </span>
                </div>
                {errors.acreage && (
                  <p className="flex items-center gap-x-1 text-red-500">
                    <span>
                      <IoIosWarning />
                    </span>
                    <span>{errors.acreage.message}</span>
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-y-2 pb-5 ">
                <label className="text-slate-500" htmlFor="facade">
                  Diện tích mặt tiền
                </label>
                <div className="relative">
                  <input
                    className="w-full text-xl pl-5 h-[50px] border-[1px] border-solid border-slate-400 rounded-none outline-none focus:border-[#0B60B0] "
                    type="text"
                    name="facade"
                    id="facade"
                    {...register("facade")}
                  />
                  <span className="absolute h-[50px] w-[70px] flex justify-center items-center bg-slate-200 right-0 top-0 border-l-0 border-[1px] border-solid border-slate-400">
                    m<sup>2</sup>
                  </span>
                </div>
                {errors.facade && (
                  <p className="flex items-center gap-x-1 text-red-500">
                    <span>
                      <IoIosWarning />
                    </span>
                    <span>{errors.facade.message}</span>
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-y-2 pb-5 ">
                <label className="text-slate-500" htmlFor="floors">
                  Số tầng
                </label>
                <input
                  className="text-xl pl-5 h-[50px] border-[1px] border-solid border-slate-400 rounded-none outline-none focus:border-[#0B60B0] "
                  type="number"
                  name="floors"
                  id="floors"
                  min={0}
                  max={300}
                  {...register("floors")}
                />
                {errors.floors && (
                  <p className="flex items-center gap-x-1 text-red-500">
                    <span>
                      <IoIosWarning />
                    </span>
                    <span>{errors.floors.message}</span>
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-y-2 pb-5">
                <label className="text-slate-500" htmlFor="postTitle">
                  Hướng
                </label>
                <select
                  id="direction"
                  name="direction"
                  className="h-[50px] border-[1px] border-solid border-slate-400 px-3 outline-none"
                  {...register("direction")}
                >
                  <option value="east">Đông</option>
                  <option value="southeast">Đông Nam</option>
                  <option value="northeast">Đông Bắc</option>
                  <option value="northwest">Tây Bắc</option>
                  <option value="north">Bắc</option>
                  <option value="south">Nam</option>
                  <option value="southwest">Tây Nam</option>
                  <option value="west">Tây</option>
                </select>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="flex flex-col gap-y-2 pb-5 ">
                <label className="text-slate-500" htmlFor="livingrooms">
                  Số phòng khách
                </label>
                <input
                  className="text-xl pl-5 h-[50px] border-[1px] border-solid border-slate-400 rounded-none outline-none focus:border-[#0B60B0] "
                  type="number"
                  name="livingrooms"
                  id="livingrooms"
                  min={0}
                  max={300}
                  {...register("livingrooms")}
                />
                {errors.livingrooms && (
                  <p className="flex items-center gap-x-1 text-red-500">
                    <span>
                      <IoIosWarning />
                    </span>
                    <span>{errors.livingrooms.message}</span>
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-y-2 pb-5 ">
                <label className="text-slate-500" htmlFor="bedrooms">
                  Số phòng ngủ
                </label>
                <input
                  className="text-xl pl-5 h-[50px] border-[1px] border-solid border-slate-400 rounded-none outline-none focus:border-[#0B60B0] "
                  type="number"
                  name="bedrooms"
                  id="bedrooms"
                  min={0}
                  max={300}
                  {...register("bedrooms")}
                />
                {errors.bedrooms && (
                  <p className="flex items-center gap-x-1 text-red-500">
                    <span>
                      <IoIosWarning />
                    </span>
                    <span>{errors.bedrooms.message}</span>
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-y-2 pb-5 ">
                <label className="text-slate-500" htmlFor="toilets">
                  Số toilet
                </label>
                <input
                  className="text-xl pl-5 h-[50px] border-[1px] border-solid border-slate-400 rounded-none outline-none focus:border-[#0B60B0] "
                  type="number"
                  name="toilets"
                  id="toilets"
                  min={0}
                  max={300}
                  {...register("toilets")}
                />
                {errors.toilets && (
                  <p className="flex items-center gap-x-1 text-red-500">
                    <span>
                      <IoIosWarning />
                    </span>
                    <span>{errors.toilets.message}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
                <label className="text-slate-400">Thông tin mô tả cụ thể</label>
                <textarea className="px-2 w-full min-h-[300px] border-[2px] border-solid border-slate-200 outline-none focus:border-[#0B60B0]"></textarea>
          </div>
        </div>

        <div className="w-full py-5">
          <p className="border-l-[5px] border-solid border-[#0B60B0] mb-5 text-xl pl-2">
            Chọn hình ảnh
          </p>
          <div>
            <label className="text-slate-500">Chọn ảnh cho phần tiêu đề</label>
            <div className="my-5 flex flex-col justify-center items-center w-4/5 h-[300px] mx-auto border-[2px] border-dashed border-slate-400">
              <label className="flex gap-x-1" htmlFor="titleImage">
                <span>Kéo ảnh vào đây hoặc </span>
                <span className="flex gap-x-1 items-center text-[#0B60B0]">
                  <span>Tải lên</span>
                  <span className="text-xl">
                    <FaCloudUploadAlt />
                  </span>{" "}
                </span>
              </label>{" "}
              <input
                type="file"
                className="invisible"
                name="titleImage"
                id="titleImage"
                {...register("typeOfProperty")}
              />
            </div>
            {errors.titleImage && (
              <p className="flex items-center gap-x-1 text-red-500">
                <span>
                  <IoIosWarning />
                </span>
                <span>{errors.titleImage.message}</span>
              </p>
            )}
          </div>
          <div className="mt-10">
            <label className="text-slate-500">
              Chọn các hình ảnh tài sản còn lại
            </label>
            <div className="my-5 flex flex-col justify-center items-center w-4/5 h-[300px] mx-auto border-[2px] border-dashed border-slate-400">
              <label className="flex gap-x-1" htmlFor="listOfImages">
                <span>Kéo ảnh vào đây hoặc </span>
                <span className="flex gap-x-1 items-center text-[#0B60B0]">
                  <span>Tải lên</span>
                  <span className="text-xl">
                    <FaCloudUploadAlt />
                  </span>{" "}
                </span>
              </label>{" "}
              <input
                type="file"
                className="invisible"
                name="listOfImages"
                id="listOfImages"
                {...register("listOfImages")}
              />
            </div>
            {errors.listOfImages && (
              <p className="flex items-center gap-x-1 text-red-500">
                <span>
                  <IoIosWarning />
                </span>
                <span>{errors.listOfImages.message}</span>
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="self-end ml-1 text-white bg-[#0B60B0] h-[40px] px-5 w-[150px] hover:opacity-80 uppercase"
        >
          Đăng bài
        </button>
      </form>
    </div>
  );
};

export default Post;
