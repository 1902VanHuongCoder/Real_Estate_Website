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
    // schema to validate form datas
    postTitle: yup
      .string()
      .max(100, "Tối đa 100 ký tự")
      .min(20, "Ít nhất 20 kí tự")
      .required("Trường này được yêu cầu"),
    address: yup
      .string()
      .max(100, "Tối đa 100 ký tự")
      .min(20, "Ít nhất 20 kí tự")
      .required("Trường này được yêu cầu"),
    price: yup
      .string()
      .max(15, "Tối đa 15 ký tự")
      .min(3, "Ít nhất 3 kí tự")
      .required("Trường này được yêu cầu"),
    descriptions: yup
      .string()
      .max(1500, "Tối đa 1500 ký tự")
      .min(5, "Ít nhất 5 kí tự")
      .required("Trường này được yêu cầu"),

    acreage: yup
      .number()
      .typeError("Trường này phải là 1 số nguyên dương")
      .required("Trường này được yêu cầu"),
    facade: yup
      .number()
      .typeError("Trường này phải là 1 số nguyên dương")
      .required("Trường này được yêu cầu"),
    floors: yup
      .number()
      .typeError("Trường này phải là 1 số nguyên dương")
      .required("Trường này được yêu cầu"),
    livingrooms: yup
      .number()
      .typeError("Trường này phải là 1 số nguyên dương")
      .required("Trường này được yêu cầu"),
    bedrooms: yup
      .number()
      .typeError("Trường này phải là 1 số nguyên dương")
      .required("Trường này được yêu cầu"),
    toilets: yup
      .number()
      .typeError("Trường này phải là 1 số nguyên dương")
      .required("Trường này được yêu cầu"),
  });

  // use useForm() hook and combine with YUP library to validate form datas
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleToPost = (data) => {
    console.log(data);
  };

  return (
    <div className="w-4/5 sm:p-5 mx-auto">
      <h1 className="w-full text-center text-4xl font-md pt-10 mb-10 ">
        <span className="border-b-[5px] border-solid border-[#0B60B0] pb-2">
          ĐĂNG BÀI
        </span>
      </h1>
      <form
        id="post_form"
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
            className={` ${errors.postTitle ? "border-red-500" : "border-slate-400"} text-xl sm:text-2xl pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
            type="text"
            name="postTitle"
            id="postTitle"
            autoComplete="on"
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
            className={`${errors.address ? "border-red-500" : "border-slate-400"} text-xl pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
            type="text"
            name="address"
            id="address"
            autoComplete="on"
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
            className={`${errors.price ? "border-red-500" : "border-slate-400"} text-xl pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
            type="text"
            name="price"
            id="price"
            autoComplete="on"
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
        <div className="flex flex-col gap-y-5 sm:flex-row gap-x-5 pb-10 border-b-[1px] border-solid border-slate-200">
          <div className="text-base basis-1/2 flex flex-col gap-y-1">
            <label htmlFor="typeOfProperty" className="text-slate-500">
              Chọn loại tài sản
            </label>
            <select
              id="typeOfProperty"
              name="typeOfProperty"
              className="h-[50px] border-[1px] border-solid px-3 outline-none"
              {...register("typeOfProperty")}
            >
              <option value="apartment">Căn hộ chung cư</option>
              <option value="office">Văn phòng</option>
              <option value="private_house">Nhà riêng</option>
              <option value="villa_and_nextto">Biệt thự, liền kề</option>
              <option value="town_house">Nhà mặt phố</option>
              <option value="shop_house">Shop house, nhà phố thương mại</option>
              <option value="warehouse">Kho, nhà xưởng</option>
              <option value="boarding_house">Nhà phòng trọ</option>
              <option value="farm_and_resort">
                Trang trại, khu nghĩ dưỡng
              </option>
            </select>
          </div>
          <div className="text-base basis-1/2 flex flex-col gap-y-4">
            <div className="text-slate-500">Hình thức bài đăng</div>
            <div className="flex gap-x-5">
              <label className="flex items-center gap-x-1">
                Nhà đất cho thuê
                <input
                  type="checkbox"
                  id="post_method_reding_house"
                  name="post_method_reding_house"
                  {...register("post_method_reding_house")}
                />
              </label>
              <label className="flex items-center gap-x-1">
                Nhà đất bán
                <input
                  type="checkbox"
                  id="post_method_selling_house"
                  name="post_method_selling_house"
                  {...register("post_method_selling_house")}
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
                    className={`${errors.acreage ? "border-red-500" : "border-slate-400"} w-full text-xl pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
                    type="number"
                    name="acreage"
                    id="acreage"
                    autoComplete="on"
                    {...register("acreage")}
                  />
                  <span className="absolute h-[50px] w-[70px] flex justify-center items-center bg-slate-200 right-0 top-0 border-l-0 border-[1px] border-solid">
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
                    className={` ${errors.facade ? "border-red-500" : "border-slate-400"} w-full text-xl pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
                    type="number"
                    name="facade"
                    id="facade"
                    autoComplete="on"
                    {...register("facade")}
                  />
                  <span className="absolute h-[50px] w-[70px] flex justify-center items-center bg-slate-200 right-0 top-0 border-l-0 border-[1px] border-solid">
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
                  className={`${errors.floors ? "border-red-500" : "border-slate-400"} text-xl pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
                  type="number"
                  name="floors"
                  id="floors"
                  min={0}
                  max={300}
                  autoComplete="on"
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
                  className="h-[50px] border-[1px] border-solid px-3 outline-none"
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
                  className={`${errors.livingrooms ? "border-red-500" : "border-slate-400"} text-xl pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
                  type="number"
                  name="livingrooms"
                  id="livingrooms"
                  min={0}
                  max={300}
                  autoComplete="on"
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
                  className={`${errors.bedrooms ? "border-red-500" : "border-slate-400"} text-xl pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
                  type="number"
                  name="bedrooms"
                  id="bedrooms"
                  min={0}
                  max={300}
                  autoComplete="on"
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
                  className={`${errors.toilets ? "border-red-500" : "border-slate-400"} text-xl pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
                  type="number"
                  name="toilets"
                  id="toilets"
                  min={0}
                  max={300}
                  autoComplete="on"
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
            <label htmlFor="descriptions" className="text-slate-400">Thông tin mô tả cụ thể</label>
            <textarea
              name="descriptions"
              id="descriptions"
              {...register("descriptions")}
              className={`${errors.descriptions ? "border-red-500" : "border-slate-400"} px-2 w-full min-h-[300px] border-[1px] border-solid outline-none focus:border-[#0B60B0]`}
            ></textarea>
            {errors.descriptions && (
              <p className="flex items-center gap-x-1 text-red-500">
                <span>
                  <IoIosWarning />
                </span>
                <span>{errors.descriptions.message}</span>
              </p>
            )}
          </div>
        </div>

        <div className="w-full py-5">
          <p className="border-l-[5px] border-solid border-[#0B60B0] mb-5 text-xl pl-2">
            Chọn hình ảnh
          </p>
          <div>
            <label htmlFor="titleImage" className="text-slate-500">Chọn ảnh cho phần tiêu đề</label>
            <div className="my-5 flex flex-col justify-center items-center w-full sm:w-4/5 h-[300px] mx-auto border-[2px] border-dashed border-slate-400">
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
                {...register("titleImage")}
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
            <label htmlFor="listOfImages" className="text-slate-500">
              Chọn các hình ảnh tài sản còn lại
            </label>
            <div className="my-5 flex flex-col justify-center items-center w-full sm:w-4/5 h-[300px] mx-auto border-[2px] border-dashed border-slate-400">
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
        <div className="flex justify-end">
          <button
            type="reset"
            className="ml-1 text-white bg-red-400 h-[40px] px-5 w-[150px] hover:opacity-80 uppercase"
          >
            Reset
          </button>
          <button
            type="submit"
            className="ml-1 text-white bg-[#0B60B0] h-[40px] px-5 w-[150px] hover:opacity-80 uppercase"
          >
            Đăng bài
          </button>
        </div>
      </form>
    </div>
  );
};

export default Post;
