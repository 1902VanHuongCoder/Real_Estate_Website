// import hooks
import React from "react";

// import packages
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoIosWarning } from "react-icons/io";

const SignUp = () => {
  const schema = yup.object().shape({
    // schema to validate form datas
    username: yup
      .string()
      .min(6, "Tên phải dài hơn 6 kí tự")
      .max(20, "Tên phải ngắn hơn 20 kí tự")
      .required(),
    email: yup.string().email().required("Đây là trường bắt buộc"),
    phoneNumber: yup
      .string()
      .min(3, "Số điện thoại phải lớn hơn 2 số")
      .max(11, "Số điện thoại phải nhỏ hơn 12 số")
      .required(),
    password: yup
      .string()
      .min(6, "Mật khẩu phải dài hơn 6 kí tự")
      .max(12, "Mật khẩu tối đa 12 kí tự")
      .required(),
    confirm_password: yup.string().required("Đây là trường bắt buộc"),
  });

  // use useForm() hook and combine with YUP library to validate form datas
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignUp = () => {
    // handle login of user
  };
  return (
    <div className="w-full h-fit flex justify-center items-center">
      <div className="w-[400px] h-fit shadow-md p-5 border-[1px] border-solid border-slate-200">
        <h1 className="py-6 text-xl uppercase text-center font-medium">
          Đăng ký
        </h1>
        <form
          onSubmit={handleSubmit(handleSignUp)}
          action="/"
          method="POST"
          className="flex flex-col gap-y-4"
        >
          <div className="flex flex-col gap-y-2">
            <label className="text-slate-500" htmlFor="username">
              Tên đăng nhập
            </label>
            <input
              className={`${
                errors.username ? "border-red-500" : "border-slate-400"
              } text-base pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
              id="username"
              name="username"
              type="text"
              {...register("username")}
            />
            {errors.username && (
              <p className="flex items-center gap-x-1 text-red-500">
                <span>
                  <IoIosWarning />
                </span>
                <span>{errors.username.message}</span>
              </p>
            )}
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-slate-500" htmlFor="email">
              Địa chỉ email
            </label>
            <input
              className={`${
                errors.email ? "border-red-500" : "border-slate-400"
              } text-base pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
              id="email"
              name="email"
              type="text"
              {...register("email")}
            />
            {errors.email && (
              <p className="flex items-center gap-x-1 text-red-500">
                <span>
                  <IoIosWarning />
                </span>
                <span>{errors.email.message}</span>
              </p>
            )}
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-slate-500" htmlFor="phoneNumber">
              Số điện thoại
            </label>
            <input
              className={`${
                errors.phoneNumber ? "border-red-500" : "border-slate-400"
              } text-base pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <p className="flex items-center gap-x-1 text-red-500">
                <span>
                  <IoIosWarning />
                </span>
                <span>{errors.phoneNumber.message}</span>
              </p>
            )}
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-slate-500" htmlFor="password">
              Mật khẩu
            </label>
            <input
              className={`${
                errors.password ? "border-red-500" : "border-slate-400"
              } text-base pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
              id="password"
              name="password"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="flex items-center gap-x-1 text-red-500">
                <span>
                  <IoIosWarning />
                </span>
                <span>{errors.password.message}</span>
              </p>
            )}
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-slate-500" htmlFor="password">
              Xác nhận mật khẩu
            </label>
            <input
              className={`${
                errors.confirm_password ? "border-red-500" : "border-slate-400"
              } text-base pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
              id="confirm_password"
              name="confirm_password"
              type="password"
              {...register("confirm_password")}
            />
            {errors.confirm_password && (
              <p className="flex items-center gap-x-1 text-red-500">
                <span>
                  <IoIosWarning />
                </span>
                <span>{errors.confirm_password.message}</span>
              </p>
            )}
          </div>
          <div className="flex justify-center mt-5">
            <button
              type="submit"
              className="ml-1 text-white bg-[#0B60B0] h-[40px] px-5 w-[150px] hover:opacity-80"
            >
              Đăng ký
            </button>
          </div>
          <div>
            <span>Nếu bạn đã có tài khoản! </span>
            <span className="text-[#40A2D8] underline">
              <a href="/">Đăng nhập</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
