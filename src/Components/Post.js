// import hooks
import React, { useState } from "react";

// import packages
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// import icons
import { IoIosWarning } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import Transitions from "../Transition";

const Post = () => {
  const [value, setValue] = useState(""); // value of Description Editor

  const [titleImage, setTitleImage] = useState(null); // store url of title image

  const [listOfImages, setListOfImages] = useState([]); // list of images

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
    if (value === "<p><br></p>") {
      return;
    }
    console.log(value);
    console.log(data);
  };

  // handle to store local path of image to render for users
  const handleUploadTitleImage = (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    setTitleImage(url);
  };

  // handle to store multiple local path of images to render for users
  const handleUploadMultipleImages = (evnt) => {
    const selectedFiles = Array.from(evnt.target.files);
    setListOfImages((prevImages) => [
      ...prevImages,
      ...selectedFiles.map((file) => URL.createObjectURL(file)),
    ]);
  };

  // handle to remove list of selected images
  const handleRemoveImage = (url) => {
    const urlArray = listOfImages.filter((item) => item !== url);
    setListOfImages(urlArray);
  };
  return (
    <Transitions>
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
              className={` ${
                errors.postTitle ? "border-red-500" : "border-slate-400"
              } text-xl sm:text-2xl pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
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
              className={`${
                errors.address ? "border-red-500" : "border-slate-400"
              } text-xl pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
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
              className={`${
                errors.price ? "border-red-500" : "border-slate-400"
              } text-xl pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
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
                <option value="shop_house">
                  Shop house, nhà phố thương mại
                </option>
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
                      className={`${
                        errors.acreage ? "border-red-500" : "border-slate-400"
                      } w-full text-xl pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
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
                      className={` ${
                        errors.facade ? "border-red-500" : "border-slate-400"
                      } w-full text-xl pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
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
                    className={`${
                      errors.floors ? "border-red-500" : "border-slate-400"
                    } text-xl pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
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
                    className={`${
                      errors.livingrooms ? "border-red-500" : "border-slate-400"
                    } text-xl pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
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
                    className={`${
                      errors.bedrooms ? "border-red-500" : "border-slate-400"
                    } text-xl pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
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
                    className={`${
                      errors.toilets ? "border-red-500" : "border-slate-400"
                    } text-xl pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
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
              <p className="text-slate-400">Thông tin mô tả cụ thể</p>
              <ReactQuill
                className={`${
                  errors.descriptions ? "border-red-500" : "border-slate-400"
                } w-full min-h-[300px] border-[1px] border-solid outline-none focus:border-[#0B60B0]`}
                theme="snow"
                value={value}
                onChange={setValue}
              />
              {value === "<p><br></p>" && (
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
              <label htmlFor="titleImage" className="text-slate-500">
                Chọn ảnh cho phần tiêu đề
              </label>
              <div className="relative flex p-5 my-5 justify-center items-center w-full sm:w-4/5 min-h-[300px] mx-auto border-[2px] border-dashed border-slate-400">
                {titleImage && (
                  <img
                    src={titleImage}
                    alt="test"
                    className="w-[300px] h-auto"
                  />
                )}
                <div className="absolute bottom-0 right-0 px-4 py-2 bg-[rgba(0,0,0,.5)]">
                  <label className="flex gap-x-1" htmlFor="titleImage">
                    <span className="flex gap-x-1 items-center text-white cursor-pointer hover:opacity-80">
                      <span>Tải lên</span>
                      <span className="text-xl">
                        <FaCloudUploadAlt />
                      </span>{" "}
                    </span>
                  </label>{" "}
                  <input
                    type="file"
                    className="hidden"
                    name="titleImage"
                    id="titleImage"
                    onChange={handleUploadTitleImage}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-5 sm:flex-row justify-between items-center">
                <button
                  type="submit"
                  className="ml-1 text-white bg-[#0B60B0] h-[40px] px-5 hover:opacity-80 uppercase"
                >
                  Xác nhận ảnh chủ đề
                </button>
                <div className="relative h-[30px] w-[300px] shadow-inner border-[4px] flex justify-center items-center border-slate-200 border-solid overflow-hidden">
                  <span className="absolute w-full h-full flex justify-center items-center font-bold z-10">
                    50%
                  </span>
                  <div
                    className="absolute -translate-x-1/2 transition-transform border-r-[2px] border-r-slate-400 border-r-solid bg-[rgb(11,96,176)] bg-[linear-gradient(50deg,_rgba(11,96,176,1)_16%,_rgba(255,255,255,1)_16%,_rgba(255,255,255,1)_30%,_rgba(11,96,176,1)_30%,_rgba(11,96,176,1)_44%,_rgba(255,255,255,1)_44%,_rgba(255,255,255,1)_58%,_rgba(11,96,176,1)_58%,_rgba(11,96,176,1)_72%,_rgba(255,255,255,1)_72%,_rgba(255,255,255,1)_85%,_rgba(10,95,175,1)_85%,_rgba(11,96,176,1)_96%,_rgba(255,255,255,1)_96%)]
 w-full h-full -z-1"
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <label htmlFor="listOfImages" className="text-slate-500">
                Chọn các hình ảnh tài sản còn lại
              </label>
              <div className="relative p-5 my-5 flex flex-col gap-y-3 justify-center items-center w-full sm:w-4/5 min-h-[300px] mx-auto border-[2px] border-dashed border-slate-400">
                <div className="flex flex-wrap w-full justify-center gap-2">
                  {listOfImages?.map((url, index) => {
                    return (
                      <div
                        key={index}
                        className="relative w-[200px] h-auto shrink-0 grow-0 "
                      >
                        <img
                          src={url}
                          className="w-full h-auto border-[4px] border-solid boder-slate-400"
                          alt="test"
                        />
                        <button
                          onClick={() => {
                            handleRemoveImage(url);
                          }}
                          className="absolute -right-[5px] -top-[10px] w-[20px] h-[20px] bg-red-500 text-white rounded-full text-sm"
                        >
                          X
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="absolute bottom-0 right-0 px-4 py-2 bg-[rgba(0,0,0,.5)]">
                  <label className="flex gap-x-1" htmlFor="listOfImages">
                    <span className="flex gap-x-1 items-center text-white">
                      <span>Tải lên</span>
                      <span className="text-xl">
                        <FaCloudUploadAlt />
                      </span>{" "}
                    </span>
                  </label>{" "}
                  <input
                    type="file"
                    className="hidden"
                    name="listOfImages"
                    id="listOfImages"
                    multiple
                    onChange={handleUploadMultipleImages}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-5 sm:flex-row justify-between items-center">
                <button
                  type="submit"
                  className="ml-1 text-white bg-[#0B60B0] h-[40px] px-5 hover:opacity-80 uppercase"
                >
                  Xác nhận ảnh chủ đề
                </button>
                <div className="relative h-[30px] w-[300px] shadow-inner border-[4px] flex justify-center items-center border-slate-200 border-solid overflow-hidden">
                  <span className="absolute w-full h-full flex justify-center items-center font-bold z-10">
                    50%
                  </span>
                  <div
                    className="absolute -translate-x-1/2 transition-transform border-r-[2px] border-r-slate-400 border-r-solid bg-[rgb(11,96,176)] bg-[linear-gradient(50deg,_rgba(11,96,176,1)_16%,_rgba(255,255,255,1)_16%,_rgba(255,255,255,1)_30%,_rgba(11,96,176,1)_30%,_rgba(11,96,176,1)_44%,_rgba(255,255,255,1)_44%,_rgba(255,255,255,1)_58%,_rgba(11,96,176,1)_58%,_rgba(11,96,176,1)_72%,_rgba(255,255,255,1)_72%,_rgba(255,255,255,1)_85%,_rgba(10,95,175,1)_85%,_rgba(11,96,176,1)_96%,_rgba(255,255,255,1)_96%)]
 w-full h-full -z-1"
                  ></div>
                </div>
              </div>
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
    </Transitions>
  );
};

export default Post;
