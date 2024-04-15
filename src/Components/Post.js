// import hooks
import React, { useContext, useState } from "react";
import { useNotification } from "../Hooks/useNotification";

// import packages
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// import icons
import { IoIosWarning } from "react-icons/io";

// import components
import Transitions from "./Partials/Transition";
import UploadImage from "./Partials/UploadImage";
import Editor from "./Editor";

//import firebase services
import { addDoc, collection } from "firebase/firestore";
import { db } from "../FirebaseConfig/firebase";
import { AppContext } from "../Context/AppContext";

//import library
import { v4 as uuidv4 } from "uuid";

const Post = () => {
  const { setShowSpinner } = useContext(AppContext); // create loading animation when adding new property

  const [handleShowNotification] = useNotification(); // notify the state of adding property

  const [value, setValueEditor] = useState(""); // value of Description Editor

  const [titleImageURL, setTitleImageURL] = useState(null); // store url of title image

  const [listOfImageURLs, setListOfImageURLs] = useState([]); // list of images

  const [methodWithProperty, setMethodWithProperty] = useState({
    renting: true,
    saling: false,
  }); // renting or saling

  const [isHouse, setIsHouse] = useState(true); // the property that need to add is home

  const [isGround, setIsGround] = useState(false); // the property that need to add is ground

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

  const handleToPost = async (data) => {
    const date = new Date();
    setShowSpinner(true);
    if (titleImageURL) {
      if (value !== "" || value !== "<p><br></p>") {
        let houseDatas;
        let groundDatas;

        if (isHouse) {
          houseDatas = {
            // general infomations
            propertyId: uuidv4(),
            title: data.postTitle,
            address: data.address,
            price: data.price,
            typeOfHouse: data.typeOfProperty,
            renting: methodWithProperty.renting,
            saling: methodWithProperty.saling,

            // details infos
            acreage: data.acreage,
            facade: data.facade,
            floors: data.floors,
            livingrooms: data.livingrooms,
            bedrooms: data.bedrooms,
            toilets: data.toilets,
            direction: data.direction,
            description: value,
            titleImageURL: titleImageURL,
            besideImageURLs: listOfImageURLs,

            createdAt:
              date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear(),
            updatedAt:
              date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear(),
          };
        } else {
          console.log("Running....");
          groundDatas = {
            // general infomations
            propertyId: uuidv4(),
            title: data.postTitle,
            address: data.address,
            price: data.price,
            renting: methodWithProperty.renting,
            saling: methodWithProperty.saling,

            // details infos
            acreage: data.acreage,
            direction: data.direction,
            description: value,
            titleImageURL: titleImageURL,
            besideImageURLs: listOfImageURLs,

            createdAt:
              date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear(),
            updatedAt:
              date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear(),
          };
        }

        try {
          await addDoc(
            collection(db, isHouse ? "houses" : "lands"),
            isHouse ? houseDatas : groundDatas
          );
          handleShowNotification("Thêm tài sản thành công.", "success");
        } catch (error) {
          console.log(error);
          handleShowNotification(
            "Thêm tài sản thất bại. Hãy thử lại!",
            "error"
          );
        }
      } else {
        handleShowNotification(
          "Bạn phải nhập thông tin mô tả cho bất động sản.",
          "error"
        );
      }
    } else {
      handleShowNotification("Bạn chưa chọn ảnh tiêu đề bài đăng.", "error");
    }
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
    setShowSpinner(false);
  };

  console.log("Is home: " + isHouse);
  console.log("Is ground: " + isGround);

  return (
    <Transitions>
      <div className="w-4/5 sm:p-5 mx-auto">
        <h1 className="w-full text-center text-4xl font-md pt-10 mb-10 ">
          <span className="border-b-[5px] border-solid border-[#0B60B0] pb-2">
            THÊM TÀI SẢN
          </span>
        </h1>
        <p className="border-l-[5px] border-solid border-[#0B60B0] mb-5 text-xl pl-2">
          Chọn loại tài sản
        </p>
        <div className="flex justify-between gap-x-2 mb-5">
          <label
            htmlFor="home"
            className={`w-1/2 ${
              isHouse ? "bg-green-200" : "bg-slate-200"
            }  h-[60px] rounded-md flex flex-row gap-x-2 items-center p-4`}
          >
            <input
              checked={isHouse}
              onChange={(e) => {
                setIsHouse(e.target.checked);
                setIsGround(!e.target.checked);
              }}
              name="home"
              id="home"
              type="checkbox"
            />{" "}
            <span>Nhà</span>
          </label>

          <label
            htmlFor="ground"
            className={`w-1/2 ${
              isGround ? "bg-green-200" : "bg-slate-200"
            }  h-[60px] rounded-md flex flex-row gap-x-2 items-center p-4`}
          >
            <input
              checked={isGround}
              onChange={(e) => {
                setIsGround(e.target.checked);
                setIsHouse(!e.target.checked);
              }}
              type="checkbox"
              name="ground"
              id="ground"
            />{" "}
            <span>Đất</span>
          </label>
        </div>
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
          <div className="flex flex-col gap-y-5 sm:flex-row gap-x-5 pb-10 border-b-[1px] border-solid border-slate-200">
            {isHouse && (
              <div className="text-base basis-1/3 flex flex-col gap-y-1 ">
                <label htmlFor="typeOfProperty" className="text-slate-500">
                  Chọn loại tài sản
                </label>
                <select
                  id="typeOfProperty"
                  name="typeOfProperty"
                  className="h-[50px] border-[1px] border-solid px-3 outline-none"
                  {...register("typeOfProperty")}
                >
                  <option value="căn hộ chung cư">Căn hộ chung cư</option>
                  <option value="văn phòng">Văn phòng</option>
                  <option value="nhà riêng">Nhà riêng</option>
                  <option value="biệt thự và liền kề">Biệt thự, liền kề</option>
                  <option value="nhà mặt phố">Nhà mặt phố</option>
                  <option value="shop house và nhà phố thương mại">
                    Shop house, nhà phố thương mại
                  </option>
                  <option value="warehouse">Kho, nhà xưởng</option>
                  <option value="boarding_house">Nhà phòng trọ</option>
                  <option value="farm_and_resort">
                    Trang trại, khu nghĩ dưỡng
                  </option>
                </select>
              </div>
            )}
            <div className="text-base basis-1/3 flex flex-col gap-y-4 ">
              <div className="text-slate-500">Hình thức</div>
              <div className="flex gap-x-5">
                <label className="flex items-center gap-x-1">
                  Cho thuê
                  <input
                    checked={methodWithProperty.renting}
                    type="checkbox"
                    name="renting"
                    onChange={(e) => {
                      setMethodWithProperty({
                        saling: !e.target.checked,
                        renting: e.target.checked,
                      });
                    }}
                  />
                </label>
                <label className="flex items-center gap-x-1">
                  Bán
                  <input
                    checked={methodWithProperty.saling}
                    type="checkbox"
                    name="saling"
                    onChange={(e) => {
                      setMethodWithProperty({
                        renting: !e.target.checked,
                        saling: e.target.checked,
                      });
                    }}
                  />
                </label>
              </div>
            </div>

            <div
              className={`${
                isGround ? "basis-2/3" : "basis-1/3"
              } flex flex-col gap-y-2 pb-5`}
            >
              <label className="text-slate-500" htmlFor="price">
                Giá tài sản
              </label>
              <div className="relative">
                <input
                  className={`${
                    errors.price ? "border-red-500" : "border-slate-400"
                  } w-full text-xl pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
                  type="text"
                  name="price"
                  id="price"
                  autoComplete="on"
                  {...register("price")}
                />
                {methodWithProperty.renting === true && (
                  <span className="absolute h-[50px] w-[70px] flex justify-center items-center bg-slate-200 right-0 top-0 border-l-0 border-[1px] border-solid">
                    /tháng
                  </span>
                )}
              </div>
              {errors.price && (
                <p className="flex items-center gap-x-1 text-red-500">
                  <span>
                    <IoIosWarning />
                  </span>
                  <span>{errors.price.message}</span>
                </p>
              )}
            </div>
          </div>
          <div className="w-full py-5 border-b-[1px] border-solid border-slate-200">
            <p className="border-l-[5px] border-solid border-[#0B60B0] mb-5 text-xl pl-2 ">
              Mô tả tài sản
            </p>
            <div className="flex w-full gap-x-5">
              <div className={`${isGround ? "basis-[100%]" : "basis-1/2"}`}>
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
                {isHouse && (
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
                        defaultValue={0}
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
                )}
                {isHouse && (
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
                      defaultValue={0}
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
                )}
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
                    <option value="Đông">Đông</option>
                    <option value="Đông nam">Đông Nam</option>
                    <option value="Đông bắc">Đông Bắc</option>
                    <option value="Tây bắc">Tây Bắc</option>
                    <option value="Bắc">Bắc</option>
                    <option value="Nam">Nam</option>
                    <option value="Tây nam">Tây Nam</option>
                    <option value="Tây">Tây</option>
                  </select>
                </div>
              </div>
              {isHouse && (
                <div className="basis-1/2">
                  <div className="flex flex-col gap-y-2 pb-5 ">
                    <label className="text-slate-500" htmlFor="livingrooms">
                      Số phòng khách
                    </label>
                    <input
                      className={`${
                        errors.livingrooms
                          ? "border-red-500"
                          : "border-slate-400"
                      } text-xl pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
                      type="number"
                      name="livingrooms"
                      id="livingrooms"
                      min={0}
                      max={300}
                      autoComplete="on"
                      defaultValue={0}
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
                      defaultValue={0}
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
                      defaultValue={0}
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
              )}
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-slate-400">Thông tin mô tả cụ thể</p>
              <Editor value={value} setValueEditor={setValueEditor} />
            </div>
          </div>
          <UploadImage
            setTitleImageURL={setTitleImageURL}
            setListOfImageURLs={setListOfImageURLs}
            listOfImageURLs={listOfImageURLs}
          />
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

// THIS COMPONENT IS BEING BLOCK
