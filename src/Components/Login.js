import React from "react";

const Login= () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[400px] h-fit shadow-md p-5 border-[1px] border-solid border-slate-200">
        <h1 className="py-6 text-xl uppercase text-center font-medium">
          Đăng Nhập
        </h1>
        <form action="/" method="POST" className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <label className="text-slate-500" htmlFor="username">
              Tên đăng nhập
            </label>
            <input
              className="text-base pl-5 h-[50px] border-[1px] border-solid border-slate-400 rounded-none outline-none focus:border-[#0B60B0] "
              id="username"
              name="username"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-slate-500" htmlFor="email">
              Địa chỉ email
            </label>
            <input
              className="text-base pl-5 h-[50px] border-[1px] border-solid border-slate-400 rounded-none outline-none focus:border-[#0B60B0] "
              id="email"
              name="email"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-slate-500" htmlFor="password">
              Mật khẩu
            </label>
            <input
              className="text-base pl-5 h-[50px] border-[1px] border-solid border-slate-400 rounded-none outline-none focus:border-[#0B60B0] "
              id="password"
              name="password"
              type="password"
            />
          </div>
          <div className="flex justify-center mt-5">
            <button className="ml-1 text-white bg-[#0B60B0] h-[40px] px-5 w-[150px] hover:opacity-80">
              Đăng nhập
            </button>
          </div>
          <div>
            <span>Nếu bạn chưa có tài khoản! </span>
            <span className="text-[#40A2D8] underline"><a href="/">Đăng ký ngay</a></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
