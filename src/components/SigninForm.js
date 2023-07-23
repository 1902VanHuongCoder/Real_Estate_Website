import logo from "../assets/logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import signinimg from "../assets/signinimg.jpg";
import { db } from "../firebase_setup/firebase";
import { useToast } from "rc-toastr";
import RingLoader from "react-spinners/RingLoader";
import { collection, addDoc, getDocs, where, query } from "firebase/firestore";
const SigninForm = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const addUserAccount = async (username, password) => {
    await addDoc(collection(db, "users_account"), {
      username: username,
      password: password,
      role: "user"
    });
  };

  const handleSignin = async (data) => {
    setLoading(true);
    if (data.password === data.confirmpassword) {
      const collection_ref = collection(db, "users_account");
      const q = query(collection_ref, where("username", "==", data.email));
      const doc_ref = await getDocs(q);

      const res = [];
      doc_ref.forEach((order) => {
        res.push({
          ...order.data(),
        });
      });

      if (res.length > 0) {
        toast("Sign in fail! This account has already signed in");
      } else {
        addUserAccount(data.email, data.password);
        toast("Sign in success");
        reset();
      }
    } else {
      toast("Password and confirm password are invalid");
    }
    setLoading(false);
  };
  return (
    <div className="w-full min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="max-w-[1240px] w-full lg:w-10/12 min-h-screen flex lg:mt-5 lg:rounded-lg overflow-hidden shadow-lg">
        <div className="bg-[#FED3CA] w-full xl:w-1/2 flex flex-col items-center justify-center gap-y-5">
          <img src={logo} className="w-16 h-16" alt="logo" />
          <div className="sm:w-[450px] p-6 space-y-4 md:space-y-6 sm:p-8 bg-white w-[90%] rounded-lg">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign Up
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  {...register("email", {
                    required: "* This field is required!",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "* Email invalid",
                    },
                  })}
                />
                <span className="text-[red] py-1">
                  {errors.email && errors.email.message}
                </span>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("password", {
                    required: "* This field is required!",
                    maxLength: {
                      value: 15,
                      message: "* Password have to shorter than 15 characters",
                    },
                    minLength: {
                      value: 8,
                      message: "* Password have to longer than 8 characters",
                    },
                  })}
                />
                <span className="text-[red] py-1">
                  {errors.password && errors.password.message}
                </span>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("confirmpassword", {
                    required: "* This field is required!",
                  })}
                />
                <span className="text-[red] py-1">
                  {errors.confirmpassword && errors.confirmpassword.message}
                </span>
              </div>
              <button
                onClick={handleSubmit(handleSignin)}
                type="submit"
                className="w-full text-black bg-[#FED3CA] hover:bg-[#fcb2a3] focus:ring-4 focus:outline-none focus:ring-[#FED3CA] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {loading ? <RingLoader color="#e67af3" size={38} /> : "Sign Up"}
              </button>
            </form>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              If you have an account{" "}
              <Link to="/login">
                <span className="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full overflow-hidden hidden xl:block">
          <img src={signinimg} alt="logoIMG" />
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
