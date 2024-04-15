//import hooks
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// import icons
import { IoIosWarning } from "react-icons/io";

//import library
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../FirebaseConfig/firebase";
import md5 from "md5";

//import custom hooks
import { useNotification } from "../../Hooks/useNotification";

//import contexts
import { AppContext } from "../../Context/AppContext";

const AddStaff = () => {
  const { setShowSpinner } = useContext(AppContext); // create loading animation when adding new property

  const [handleShowNotification] = useNotification(); // notify the state of adding property

  const schema = yup.object().shape({
    // schema to validate form datas
    staff_name: yup.string().required("Trường này được yêu cầu"),
    staff_username: yup.string().required("Trường này được yêu cầu"),
    address: yup
      .string()
      .max(100, "Tối đa 100 ký tự")
      .min(20, "Ít nhất 20 kí tự")
      .required("Trường này được yêu cầu"),
    position: yup.string().required("Trường này được yêu cầu"),
    dateOfBirth: yup.string().required("Trường này được yêu cầu"),
    staff_password: yup
      .string()
      .min(6, "Mật khẩu phải lớn hơn 6 ký tự.")
      .max(20, "Mật khẩu phải ngắn hơn 20 ký tự.")
      .required("Trường này được yêu cầu"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleAddStaff = async (data) => {
    setShowSpinner(true);
    const date = new Date();
    const staff_datas = {
      staff_id: uuidv4(),
      staff_name: data.staff_name,
      staff_username: data.staff_username,
      staff_address: data.address,
      staff_dateOfBirth: data.dateOfBirth,
      staff_position: data.position,
      staff_password: md5(data.staff_password),
      createdAt:
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
      updatedAt:
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
    };

    try {
      await addDoc(collection(db, "staffs"), staff_datas);
      handleShowNotification("Thêm nhân viên thành công.", "success");
    } catch (error) {
      console.log(error);
      handleShowNotification("Thêm nhân viên thất bại. Hãy thử lại!", "error");
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setShowSpinner(false);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <form className="w-[500px] h-fit" onSubmit={handleSubmit(handleAddStaff)}>
        <h1 className="w-full text-center text-4xl font-md pt-10 mb-10 ">
          <span className="border-b-[5px] border-solid border-[#0B60B0] pb-2">
            THÊM NHÂN VIÊN
          </span>
        </h1>

        <div className=" w-[500px] h-fit p-5 border-slate-200 border-[1px] border-solid shadow-lg mb-10">
          <div className="flex flex-col gap-y-2 mb-5">
            <label className="text-slate-500" htmlFor="staff_name">
              Tên nhân viên
            </label>
            <input
              className={` 
                border-slate-400
              text-xl pl-5 h-[50px] w-full border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
              type="text"
              name="staff_name"
              id="staff_name"
              autoComplete="on"
              {...register("staff_name")}
            />
            {errors.staff_name && (
              <p className="flex items-center gap-x-1 text-red-500">
                <span>
                  <IoIosWarning />
                </span>
                <span>{errors.staff_name.message}</span>
              </p>
            )}
          </div>

          <div className="flex flex-col gap-y-2 mb-5">
            <label className="text-slate-500" htmlFor="staff_username">
              Tên người dùng
            </label>
            <input
              className={` 
                border-slate-400
              text-xl pl-5 h-[50px] w-full border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
              type="text"
              name="staff_username"
              id="staff_username"
              autoComplete="on"
              {...register("staff_username")}
            />
            {errors.staff_username && (
              <p className="flex items-center gap-x-1 text-red-500">
                <span>
                  <IoIosWarning />
                </span>
                <span>{errors.staff_username.message}</span>
              </p>
            )}
          </div>

          <div className="flex flex-col gap-y-2 mb-5">
            <label className="text-slate-500" htmlFor="staff_password">
              Mật khẩu
            </label>
            <input
              className={` 
                border-slate-400
              text-xl pl-5 h-[50px] w-full border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
              type="password"
              name="staff_password"
              id="staff_password"
              autoComplete="on"
              {...register("staff_password")}
            />
            {errors.staff_password && (
              <p className="flex items-center gap-x-1 text-red-500">
                <span>
                  <IoIosWarning />
                </span>
                <span>{errors.staff_password.message}</span>
              </p>
            )}
          </div>

          <div className="flex flex-col gap-y-2 mb-5">
            <label className="text-slate-500" htmlFor="address">
              Địa chỉ
            </label>
            <input
              className={` 
                border-slate-400
              text-xl pl-5 h-[50px] w-full border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
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

          <div className="flex flex-col gap-y-2 mb-5">
            <label className="text-slate-500" htmlFor="dateOfBirth">
              Ngày sinh
            </label>
            <input
              className={` 
                border-slate-400
              text-xl pl-5 h-[50px] w-full border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              autoComplete="on"
              {...register("dateOfBirth")}
            />
            {errors.dateOfBirth && (
              <p className="flex items-center gap-x-1 text-red-500">
                <span>
                  <IoIosWarning />
                </span>
                <span>{errors.dateOfBirth.message}</span>
              </p>
            )}
          </div>

          <div className="flex flex-col gap-y-2 mb-5">
            <label className="text-slate-500" htmlFor="position">
              Chức vụ
            </label>
            <input
              className={` 
                border-slate-400
              text-xl pl-5 h-[50px] w-full border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
              type="text"
              name="position"
              id="position"
              autoComplete="on"
              {...register("position")}
            />
            {errors.position && (
              <p className="flex items-center gap-x-1 text-red-500">
                <span>
                  <IoIosWarning />
                </span>
                <span>{errors.position.message}</span>
              </p>
            )}
          </div>

          <div className="flex justify-center items-center mt-10 mb-3">
            <button
              type="submit"
              className="ml-1 text-white bg-[#0B60B0] h-[40px] px-5 w-[200px] hover:opacity-80 uppercase"
            >
              Thêm nhân viên
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStaff;
