import logo from "../assets/logo.png";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import loginimg from "../assets/loginimg.jpg";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase_setup/firebase";
import RingLoader from "react-spinners/RingLoader";
import { collection, getDocs, query, where } from "firebase/firestore";
const LoginForm = () => {
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const handleLogin = async (data) => {
    setLoading(true);
    const collection_ref = collection(db, "users_account");
    const q = query(collection_ref, where("username", "==", data.email));
    const doc_refs = await getDocs(q);
    const res = [];
    doc_refs.forEach((account) => {
      res.push({
        id: account.id,
        ...account.data(),
      });
    });

    if (res[0]?.username === data.email && res[0]?.password !== data.password) {
      // toast.error("Password is wrong!");
    } else if (res[0]?.username !== data.email) {
      // toast.error("You haven't been account yet");
    } else if (
      res[0]?.username === data.email &&
      res[0]?.password === data.password
    ) {
      // toast.success("Login success");
      if (remember) {
        let accountJSON = JSON.stringify({
          username: data.email,
          password: data.password,
        });
        localStorage.setItem("loggedInAccount", accountJSON);
      }
      navigate("/", { state: res[0] });
    }
    setLoading(false);
  };
  const handleRedirectToSignIn = () => {
    navigate("/signin");
  };

  return (
    <>
      <div className="w-full min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="max-w-[1240px] w-full lg:w-10/12 min-h-screen flex lg:mt-5 lg:rounded-lg overflow-hidden shadow-lg">
          <div className="w-1/2 h-full overflow-hidden hidden xl:block">
            <img src={loginimg} alt="logoIMG" />
          </div>
          <div className="bg-[#FED3CA] w-full xl:w-1/2 flex flex-col items-center justify-center gap-y-5">
            <img src={logo} className="w-16 h-16" alt="logo" />
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-white w-[80%] rounded-lg">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login
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
                    placeholder="name@gmail.com"
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
                    })}
                  />
                  <span className="text-[red] py-1">
                    {errors.password && errors.password.message}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        onChange={(e) => setRemember(e.target.checked)}
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="http://localhost:3000/login"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  onClick={handleSubmit(handleLogin)}
                  type="submit"
                  className={`w-full text-black ${
                    loading ? "bg-white" : "bg-[#FED3CA]"
                  } hover:bg-[#fcb2a3] focus:ring-4 focus:outline-none focus:ring-[#FED3CA] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
                >
                  {loading ? <RingLoader color="#e67af3" size={38} /> : "Login"}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <span
                    onClick={handleRedirectToSignIn}
                    className="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
