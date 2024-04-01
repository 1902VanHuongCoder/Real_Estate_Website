// import hooks
import React, { useContext, useState } from "react";
import { useNotification } from "./Hooks/useNotification";
import { useLocation } from "react-use";

// import packages
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// import icons
import { IoIosWarning } from "react-icons/io";

// import components
import Transitions from "./Components/Partials/Transition";
import UploadImage from "./Components/Partials/UploadImage";
import Editor from "./Components/Editor";

//import firebase services
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig/firebase";

// import firebase services
import { storage } from "./FirebaseConfig/firebase";
import { deleteObject, ref } from "firebase/storage";
import { deleteDoc } from "firebase/firestore";

// import contexts
import { AppContext } from "./Context/AppContext";

const Post = () => {
  const { state } = useLocation();
  const postObject = state.usr; // recieve post datas

  const { setShowSpinner } = useContext(AppContext); //render loading to notify the state of system.

  const [handleShowNotification] = useNotification(); // render a notification after the user has updated successfully

  const [value, setValue] = useState(postObject.description); // store value of descript field

  const [titleImageURL, setTitleImageURL] = useState(postObject.titleImageURL); // store url(https://...) of title image

  const [listOfImageURLs, setListOfImageURLs] = useState(
    postObject.besideImageURLs
  ); // store list of beside image urls

  const schema = yup.object().shape({
    // schema to validate form datas
    postTitle: yup
      .string()
      .max(100, "Tối đa 100 ký tự")
      .min(20, "Ít nhất 20 kí tự"),
    address: yup
      .string()
      .max(100, "Tối đa 100 ký tự")
      .min(20, "Ít nhất 20 kí tự"),
    price: yup.string().max(15, "Tối đa 15 ký tự").min(3, "Ít nhất 3 kí tự"),
    acreage: yup.number().typeError("Trường này phải là 1 số nguyên dương"),
    facade: yup.number().typeError("Trường này phải là 1 số nguyên dương"),
    floors: yup.number().typeError("Trường này phải là 1 số nguyên dương"),
    livingrooms: yup.number().typeError("Trường này phải là 1 số nguyên dương"),
    bedrooms: yup.number().typeError("Trường này phải là 1 số nguyên dương"),
    toilets: yup.number().typeError("Trường này phải là 1 số nguyên dương"),
  });

  // use useForm() hook and combine with YUP library to validate form datas
  const {
    register,
    handleSubmit,
    getFieldState,
    getValues,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleToPost = async (data) => {
    const valuesThatNeedToUpdate = {};

    const getDataFields = getValues(); // get values of all of the input fields

    Object.keys(getDataFields).forEach((key) => {
      // check which field is changed to update
      if (getFieldState(key).isDirty) {
        valuesThatNeedToUpdate[key] = getDataFields[key];
      }
    });

    if (titleImageURL !== postObject.titleImageURL) {
      // check user whether user has changed title image
      valuesThatNeedToUpdate.titleImageURL = titleImageURL;
      const desertRef = ref(storage, postObject.titleImageURL);
      
      // Delete the file
      deleteObject(desertRef)
        .then(() => {
          console.log("File was deleted successfully.");
        })
        .catch((error) => {
          console.log("Deleting file is failed.");
        });
    }



    if (listOfImageURLs.length !== postObject.besideImageURLs.length) {
      // check user whether user has changed list of beside images
      valuesThatNeedToUpdate.besideImageURLs = listOfImageURLs;

      console.log("Update beside images");

    }

    console.log( valuesThatNeedToUpdate);

    const postsRef = doc(db, "posts", postObject.id); // reference to posts of database

    try{
      updateDoc(postsRef, valuesThatNeedToUpdate); // update datas that have changed
      handleShowNotification(
        "Cập nhật bài đăng thành công",
        "success"
      );
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }catch(error){
      console.log("Update post failed!");
    }
  };

  return (
    <Transitions>
      <div className="w-4/5 sm:p-5 mx-auto">
        <h1 className="w-full text-center text-4xl font-md pt-10 mb-10 ">
          <span className="border-b-[5px] border-solid border-[#0B60B0] pb-2">
            CẬP NHẬT
          </span>
        </h1>
        <div id="post_form" className="w-full h-fit flex flex-col gap-y-3">
          <p className="border-l-[5px] border-solid border-[#0B60B0] mb-5 text-xl pl-2">
            Nội dung chính
          </p>

          {/* Main Content */}
          <div className="flex flex-col gap-y-2">
            <label className="text-slate-500" htmlFor="postTitle">
              Tiêu đề bài đăng
            </label>
            <input
              defaultValue={postObject.postTitle}
              className={` ${
                errors.postTitle ? "border-red-500" : "border-slate-400"
              } text-xl sm:text-2xl pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
              type="text"
              name="postTitle"
              id="postTitle"
              autoComplete="on"
              placeholder={postObject.postTitle}
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
              defaultValue={postObject.address}
              placeholder={postObject.address}
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
              defaultValue={postObject.price}
              placeholder={postObject.price}
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
                defaultValue={postObject.typeOfProperty}
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
                    defaultChecked={postObject.post_method_reding_house}
                  />
                </label>
                <label className="flex items-center gap-x-1">
                  Nhà đất bán
                  <input
                    type="checkbox"
                    id="post_method_selling_house"
                    name="post_method_selling_house"
                    {...register("post_method_selling_house")}
                    defaultChecked={postObject.post_method_selling_house}
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
                      defaultValue={postObject.acreage}
                      placeholder={postObject.acreage}
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
                      defaultValue={postObject.facade}
                      placeholder={postObject.facade}
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
                    defaultValue={postObject.floors}
                    placeholder={postObject.floors}
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
                    defaultValue={postObject.direction}
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
                    defaultValue={postObject.livingrooms}
                    placeholder={postObject.livingrooms}
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
                    defaultValue={postObject.bedrooms}
                    placeholder={postObject.bedrooms}
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
                    defaultValue={postObject.toilets}
                    placeholder={postObject.toilets}
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
              <Editor value={value} setValue={setValue} />
            </div>
          </div>
          <UploadImage
            setTitleImageURL={setTitleImageURL}
            setListOfImageURLs={setListOfImageURLs}
            listOfImageURLs={listOfImageURLs}
            titleImageURL={titleImageURL}
          />
          <div className="flex justify-end">
            <button
              type="reset"
              className="ml-1 text-white bg-red-400 h-[40px] px-5 w-[150px] hover:opacity-80 uppercase"
            >
              Reset
            </button>
            <button
              onClick={handleSubmit(handleToPost)}
              type="submit"
              className="ml-1 text-white bg-[#0B60B0] h-[40px] px-5 w-[150px] hover:opacity-80 uppercase"
            >
              Đăng bài
            </button>
          </div>
        </div>
      </div>
    </Transitions>
  );
};

export default Post;

// THIS COMPONENT IS BEING BLOCK
