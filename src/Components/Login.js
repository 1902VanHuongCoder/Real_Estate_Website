// import hooks
import React from "react";

// import packages
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoIosWarning } from "react-icons/io";

const Login = () => {
  const schema = yup.object().shape({
    // schema to validate form datas
    username: yup.string().min(6, "Tên phải dài hơn 6 kí tự").max(20,"Tên phải ngắn hơn 20 kí tự").required(),
    email: yup.string().email().required("Đây là trường bắt buộc"),
    password: yup.string().min(6, "Mật khẩu phải dài hơn 6 kí tự").max(12, "Mật khẩu tối đa 12 kí tự").required(),
  });

  // use useForm() hook and combine with YUP library to validate form datas
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = () => {
    // handle login of user
  };
  return (
    <div className="w-full h-fit flex justify-center items-center">
      <div className="w-[400px] h-fit shadow-md p-5 border-[1px] border-solid border-slate-200">
        <h1 className="py-6 text-xl uppercase text-center font-medium">
          Đăng Nhập
        </h1>
        <form onSubmit={handleSubmit(handleLogin)} action="/" method="POST" className="flex flex-col gap-y-4">
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
              type="email"
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
          <div className="flex justify-center mt-5">
            <button type="submit" className="ml-1 text-white bg-[#0B60B0] h-[40px] px-5 w-[150px] hover:opacity-80">
              Đăng nhập
            </button>
          </div>
          <div className="flex items-center gap-x-2 justify-center py-5">
              <span>Đăng ký bằng</span>
              <span className="w-[50px] h-[50px] rounded-full bg-slate-100 flex justify-center items-center"><img className="w-[40px] h-[40px]" src="./images/google_logo.png" alt="Google Logo"/></span>
          </div>
          <div>
            <span>Nếu bạn chưa có tài khoản! </span>
            <span className="text-[#40A2D8] underline">
              <a href="/">Đăng ký ngay</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
