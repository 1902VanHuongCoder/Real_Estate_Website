// import hooks
import React, { useContext, useState } from "react";
import { useNotification } from "../Hooks/useNotification";

//import Libraries
import md5 from "md5";
import { useNavigate } from "react-router-dom";

// import firebase services
import { collection, getDocs, query, where } from "firebase/firestore";
import { app, db } from "../FirebaseConfig/firebase";
import { AppContext } from "../Context/AppContext";

//import icons
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth } from "firebase/auth";

//import component
import Transitions from "./Partials/Transition";

const StaffLogin = () => {
  const [handleShowNotification] = useNotification(); //custom hook

  const [showPassword, setShowPassword] = useState(false);

  const { setSession, setShowSpinner, session, setShowCongratulation } =
    useContext(AppContext);

  const [staffUsername, setStaffUsername] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const auth = getAuth(app);

  const handleLogin = async (e) => {
    e.preventDefault();
    setShowSpinner(true);

    // handle login of user
    const userAccountRef = collection(db, "staffs"); // reference to user accounts in database
    const q = query(
      userAccountRef,
      where("staff_username", "==", staffUsername)
    ); // query whether this email had existed in database
    const result = await getDocs(q); // the query command will reuturn a document list that equal to email
    if (result.docs.length < 1) {
      // if this account has not existed, notify for user to sign up new account
      handleShowNotification(
        "Bạn chưa có tài khoản nhân viên. Hãy liên hệ với trưởng phòng nhân sự!",
        "error"
      );
      setShowSpinner(false);
    } else {
      result.docs.forEach((doc) => {
        if (doc.data().staff_password === md5(password)) {
          handleShowNotification("Đăng nhập thành công!", "success");
          const dataToStoreToLocalStorage = {
            staff_id:doc.data().staff_id,
          };

          localStorage.setItem(
            "staffInfo",
            JSON.stringify(dataToStoreToLocalStorage)
          );
          const data = { ...doc.data(), id: doc.id };
          setSession(data);
          navigate("/staff/dashboard");
        } else {
          handleShowNotification("Sai mật khẩu", "error");
          window.scrollTo(0, 0);
        }
      });
      setShowSpinner(false);
    }
  };

  return (
    <Transitions>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[400px] h-fit shadow-md p-5 border-[1px] border-solid border-slate-200 my-[50px]">
          <h1 className="py-6 text-xl uppercase text-center font-medium">
            Đăng Nhập
          </h1>

          <form
            method="POST"
            onSubmit={(e) => handleLogin(e)}
            className="flex flex-col gap-y-4"
          >
            <div className="flex flex-col gap-y-2">
              <label className="text-slate-500 pl-2" htmlFor="staff_username">
                Tên người dùng
              </label>
              <input
                className={` border-slate-400
            }text-base pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
                id="staff_username"
                name="staff_username"
                type="text"
                autoComplete="on"
                onChange={(e) => setStaffUsername(e.target.value)}
              />
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
                  className={`
              border-slate-400
            w-full text-base pl-5 h-[50px] border-[1px] border-solid rounded-none outline-none focus:border-[#0B60B0] `}
                  id="password"
                  name="password"
                  autoComplete="on"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <button
                type="submit"
                className="ml-1 text-white bg-[#0B60B0] h-[40px] px-5 w-[150px] hover:opacity-80"
              >
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transitions>
  );
};

export default StaffLogin;
