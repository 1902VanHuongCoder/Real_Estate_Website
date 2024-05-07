//import hooks
import React, { useContext, useEffect, useState } from "react";

// import images
import building from "./images/buiding+01.jpg";

// import contexts
import { AppContext } from "./Context/AppContext";

// import firebase services
import { collection, getDocs } from "firebase/firestore";
import { db } from "./FirebaseConfig/firebase";

// import libraries
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// import custome hooks
import { useNotification } from "./Hooks/useNotification";

const StaffDashboard = () => {
  const {
    showCongratulation,
    setShowCongratulation,
    setShowSpinner,
    setNews,
    setPostsWasFiltered,
  } = useContext(AppContext);

  const [handleShowNotification] = useNotification();
  const location = useLocation();
  if (showCongratulation) {
    setTimeout(() => {
      setShowCongratulation(false);
    }, 5000);
  }

  const backgroundAnimationGeneralInfo = {
    enter: {
      top: 0,
      left: "-100%",
      transition: {
        duration: 0.5,
      },
    },
    center: {
      top: 0,
      left: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      top: 0,
      left: "100%",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="w-full h-fit mb-5">
      <div
        className="relative text-white w-full h-[400px] bg-center bg-cover rounded-b-xl overflow-hidden"
        style={{ backgroundImage: `url("${building}")` }}
      >
        <div className="top-0 left-0 absolute w-full h-full flex justify-center items-center flex-col gap-y-4 bg-[rgba(0,0,0,.4)]">
          <p className="text-xl">Công ty Bất Động Sản</p>
          <h1 className="text-8xl text-center">Văn Hưởng</h1>
          <p className="text-lg italic">Uy tín - Tận tâm - Hiệu quả</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="relative mt-5 w-full overflow-x-scroll sm:overflow-hidden rounded-lg h-[60px] border-[1px] border-solid border-slate-200">
        <AnimatePresence mode="wait">
          <ul className="flex w-full h-full text-lg">
            <Link
              to="/staff/list+posts+of+staff"
              className="relative px-5  flex justify-center items-center "
            >
              {location.pathname === "/staff/list+posts+of+staff" && (
                <motion.span
                  key="/staff/list+posts+of+staff"
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={backgroundAnimationGeneralInfo}
                  className="absolute w-full overflow-hidden h-full bg-[#0b60b0] -z-1"
                ></motion.span>
              )}

              <span
                className={`relative z-10 ${
                  location.pathname === "/staff/list+posts+of+staff" &&
                  "text-white"
                }`}
              >
                Danh sách bài đăng
              </span>
            </Link>

            <Link
              to="/real+estate/post"
              className="relative px-5  flex justify-center items-center "
            >
              {location.pathname === "/real+estate/post" && (
                <motion.span
                  key="/real+estate/post"
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={backgroundAnimationGeneralInfo}
                  className="absolute w-full overflow-hidden h-full bg-[#0b60b0] -z-1"
                ></motion.span>
              )}
              <span
                className={`relative z-10 ${
                  location.pathname === "/real+estate/post" && "text-white"
                }`}
              >
                Thêm tài sản
              </span>
            </Link>

            <Link
              to="/chat"
              className="relative px-5  flex justify-center items-center "
            >
              {location.pathname === "/chat" && (
                <motion.span
                  key="/chat"
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={backgroundAnimationGeneralInfo}
                  className="absolute w-full overflow-hidden h-full bg-[#0b60b0] -z-1"
                ></motion.span>
              )}

              <span
                className={`relative z-10 ${
                  location.pathname === "/chat" && "text-white"
                }`}
              >
                Hỗ trợ khách hàng
              </span>
            </Link>

            <Link
              to="/real+estate/update+profile"
              className="relative px-5  flex justify-center items-center "
            >
              {location.pathname === "/real+estate/update+profile" && (
                <motion.span
                  key="/real+estate/update+profile"
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={backgroundAnimationGeneralInfo}
                  className="absolute w-full overflow-hidden h-full bg-[#0b60b0] -z-1"
                ></motion.span>
              )}

              <span
                className={`relative z-10 ${
                  location.pathname === "/real+estate/update+profile" &&
                  "text-white"
                }`}
              >
                Cập nhật hồ sơ cá nhân
              </span>
            </Link>
          </ul>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StaffDashboard;
