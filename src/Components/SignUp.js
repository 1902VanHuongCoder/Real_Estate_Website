// import hooks
import React, { useContext, useState } from "react";
import { useNotification } from "../Hooks/useNotification";
// import packages
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoIosWarning } from "react-icons/io";

// import icons
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

// import firebase services
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { db, app } from "../FirebaseConfig/firebase";

import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";

//import context
import { AppContext } from "../Context/AppContext";

//import library
import md5 from "md5";
import { Link, useNavigate } from "react-router-dom";
import Transitions from "./Partials/Transition";

//import images
import flagIcon from "../images/vn_flag_icon.png";
import googleIcon from "../images/google_logo.png";
// import component
const SignUp = () => {
  const auth = getAuth(app);

  const { setSession, setShowSpinner, setShowCongratulation } =
    useContext(AppContext);

  const [handleShowNotification] = useNotification(); //custom hook

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object().shape({
    // schema to validate form datas
    username: yup
      .string()
      .min(6, "Tên phải dài hơn 6 kí tự")
      .max(20, "Tên phải ngắn hơn 20 kí tự")
      .required(),
    email: yup
      .string()
      .email("Địa chỉ email không hợp lệ")
      .required("Đây là trường bắt buộc"),
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

  // handle sign-up with the form datas
  const handleSignUp = async (data) => {
    // handle sign-up of user
    let flag = false;
    const date = new Date();
    if (
      data.password !== "" &&
      md5(data.password) === md5(data.confirm_password) // encrypte password with md5 library to increase security for sensitive datas
    ) {
      flag = true;
    }

    if (flag) {
      setShowSpinner(true);
      let state = true; // flag to check whether saving datas to firestore is success
      try {
        const res = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );

        console.log(res.user);

        sendEmailVerification(res.user);

        const dataToStore = {
          userId: res.user.uid,
          username: data.username,
          email: data.email,
          phoneNumber: data.phoneNumber,
          password: md5(data.password),
          create_at:
            date.getDay() +
            "/" +
            date.getMonth() +
            1 +
            "/" +
            date.getFullYear(),
          update_at:
            date.getDay() +
            "/" +
            date.getMonth() +
            1 +
            "/" +
            date.getFullYear(),
          role: "user",
          photoURL: "",
          address: "",
          backgroundURL: "",
        };

        await setDoc(doc(db, "user_accounts", res.user.uid), dataToStore);

        await setDoc(doc(db, "userChats", res.user.uid), {});
      } catch (error) {
        state = false;
      }

      if (state) {
        handleShowNotification(
          "Đăng ký tài khoản thành công! Truy cập email để xác minh tài khoản.",
          "success"
        );
        navigate("/real+estate/signin");
      } else {
        handleShowNotification(
          "Đăng ký tài khoản không thành công. Hãy thử lại!",
          "error"
        );
      }
    } else {
      // handle errors when there are problems
      handleShowNotification(
        "Xác nhận mật khẩu không chính xác. Kiểm tra lại xác nhận mật khẩu của bạn",
        "error"
      );
    }
    window.scrollTo(0, 0);
    setShowSpinner(false);
  };

  // handle sign-up with Google Provider through Firebase SDK - can't use this feature because it has some problems with Chrome browser
  const handleSignUpWithGoogle = async () => {
    const date = new Date();
    const auth = getAuth(app);
    var flag = false;
    var userEmail = "";
    const provider = new GoogleAuthProvider(); // use Google provider to authenticate user.
    try {
      const res = await signInWithPopup(auth, provider); // render popup to authenticate with Google
      userEmail = res.user.email;
      const dataToStore = {
        userId: res.user.uid,
        username: res.user.displayName,
        email: res.user.email,
        phoneNumber: "",
        password: res.user.uid,
        create_at:
          date.getDay() + "/" + date.getMonth() + 1 + "/" + date.getFullYear(),
        update_at:
          date.getDay() + "/" + date.getMonth() + 1 + "/" + date.getFullYear(),
        role: "user",
        photoURL: res.user.photoURL,
        address: "",
        backgroundURL: "",
      };

      // check whether user had existed
      const userAccountRef = collection(db, "user_accounts");
      const q = query(userAccountRef, where("email", "==", res.user.email));
      const queryResult = await getDocs(q);

      if (queryResult.docs.length < 1) {
        await setDoc(doc(db, "user_accounts", res.user.uid), dataToStore);
        await setDoc(doc(db, "userChats", res.user.uid), {});
        handleShowNotification("Đăng ký tài khoản thành công!", "success");
        flag = true;
      } else {
        handleShowNotification(
          "Email này đã được sử dụng! Vui lòng sử dụng 1 email khác.",
          "error"
        );
      }
    } catch (error) {
      const errorMessage = error.message;
      handleShowNotification(
        "Kết nối mạng không ổn định. Vui lòng thử lại",
        "error"
      );
      console.log(errorMessage);
    }

    if (flag) {
      const userAccountRef = collection(db, "user_accounts"); // reference to user accounts in database
      const q = query(userAccountRef, where("email", "==", userEmail)); // query whether this email had existed in database
      const result = await getDocs(q); // the query command will reuturn a document list that equal to email
      result.docs.forEach((doc) => {
        const dataToStoreToLocalStorage = {
          userId: doc.id,
        };
        localStorage.setItem(
          "userInfo",
          JSON.stringify(dataToStoreToLocalStorage)
        );
        const data = { ...doc.data(), id: doc.id };
        setSession(data);
        setShowCongratulation(true);
      });
      navigate("/");
    }
  };
  return (
    <Transitions>
      <div className="w-full h-fit flex justify-center items-center">
        <div className="w-[400px] h-fit shadow-md p-5 border-[1px] border-solid border-slate-200 my-[50px]">
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
              <label className="text-slate-500 pl-2" htmlFor="username">
                Tên đăng nhập
              </label>
              <input
                className={`${
                  errors.username ? "border-red-500" : "border-slate-400"
                } text-base pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
                id="username"
                name="username"
                type="text"
                autoComplete="on"
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
              <label className="text-slate-500 pl-2" htmlFor="email">
                Địa chỉ email
              </label>
              <input
                className={`${
                  errors.email ? "border-red-500" : "border-slate-400"
                } text-base pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
                id="email"
                name="email"
                type="email"
                autoComplete="on"
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
              <label className="text-slate-500 pl-2" htmlFor="phoneNumber">
                Số điện thoại
              </label>
              <div className="relative w-full h-fit">
                <span className="absolute -left-[1px] -top-[1px] w-[100px] h-[52px] flex items-center gap-x-1 pl-2 bg-slate-200">
                  <span className="w-[40px] h-[30px] bg-cover bg-center">
                    <img
                      className="w-full h-full"
                      src={flagIcon}
                      alt="vn_flag_icon"
                    />
                  </span>
                  <span className="font-semibold">+84</span>
                </span>
                <input
                  className={`${
                    errors.phoneNumber ? "border-red-500" : "border-slate-400"
                  } w-full text-base pl-28 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  autoComplete="on"
                  {...register("phoneNumber")}
                />
              </div>

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
              <label className="text-slate-500 pl-2" htmlFor="password">
                Mật khẩu
              </label>
              <div className="relative">
                <span
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="absolute right-0 top-0 h-[50px] flex justify-center items-center w-[40px] text-slate-500 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                <input
                  className={`${
                    errors.password ? "border-red-500" : "border-slate-400"
                  } w-full text-base pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="on"
                  {...register("password")}
                />
              </div>
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
              <label className="text-slate-500 pl-2" htmlFor="password">
                Xác nhận mật khẩu
              </label>
              <div className="relative">
                <span
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="absolute right-0 top-0 h-[50px] flex justify-center items-center w-[40px] text-slate-500 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                <input
                  className={`${
                    errors.confirm_password
                      ? "border-red-500"
                      : "border-slate-400"
                  } w-full text-base pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
                  id="confirm_password"
                  name="confirm_password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="on"
                  {...register("confirm_password")}
                />
              </div>

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
            <div
              onClick={handleSignUpWithGoogle}
              className="cursor-pointer flex items-center gap-x-2 justify-center py-5"
            >
              <span>Đăng ký bằng</span>
              <span className="w-[50px] h-[50px] rounded-full bg-slate-100 flex justify-center items-center">
                <img
                  className="w-[40px] h-[40px]"
                  src={googleIcon}
                  alt="Google Logo"
                />
              </span>
            </div>
            <div className="flex gap-x-1 items-center justify-center pb-6">
              <span>Nếu bạn đã có tài khoản! </span>
              <span className="text-[#40A2D8] underline">
                <Link to="/real+estate/signin">Đăng nhập</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </Transitions>
  );
};

export default SignUp;

// THIS FILE IS BEING BLOCKED
