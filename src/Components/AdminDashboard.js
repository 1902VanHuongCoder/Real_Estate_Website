//import hooks
import React, { useContext, useEffect, useState } from "react";

// import images
import building from "../images/buiding.jpg";

// import contexts
import { AppContext } from "../Context/AppContext";

// import firebase services
import { collection, getDocs } from "firebase/firestore";
import { db } from "../FirebaseConfig/firebase";

// import libraries
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// import custome hooks
import { useNotification } from "../Hooks/useNotification";

const AdminDashboard = () => {
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

  // const fetchData = async () => {
  //   setShowSpinner(true);

  //   try {
  //     await getDocs(collection(db, "posts")).then((response) => {
  //       const dataResponsed = response.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));
  //       setNews(dataResponsed);
  //       setPostsWasFiltered(dataResponsed);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     handleShowNotification(
  //       "Kết nối mạng không ổn định! Hãy thử lại sau.",
  //       "error"
  //     );
  //   }

  //   setShowSpinner(false);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

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
        className="relative text-white w-full h-[400px] bg-cover rounded-b-xl overflow-hidden"
        style={{ backgroundImage: `url("${building}")` }}
      >
        <div className="top-0 left-0 absolute w-full h-full flex justify-center items-center flex-col gap-y-4 bg-[rgba(0,0,0,.2)]">
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
              to="/admin"
              className="relative px-5  flex justify-center items-center "
            >
              {location.pathname === "/admin" && (
                <motion.span
                  key="/admin"
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={backgroundAnimationGeneralInfo}
                  className="absolute w-full overflow-hidden h-full bg-[#0b60b0] -z-1"
                ></motion.span>
              )}

              <span
                className={`relative z-10 ${
                  location.pathname === "/admin" && "text-white"
                }`}
              >
                Tổng Quan
              </span>
            </Link>
            <Link
              to="/admin/list+of+posts"
              className="relative px-5  flex justify-center items-center "
            >
              {location.pathname === "/admin/list+of+posts" && (
                <motion.span
                  key="/admin/list+of+posts"
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={backgroundAnimationGeneralInfo}
                  className="absolute w-full overflow-hidden h-full bg-[#0b60b0] -z-1"
                ></motion.span>
              )}
              <span
                className={`relative z-10 ${
                  location.pathname === "/admin/list+of+posts" && "text-white"
                }`}
              >
                Danh Sách Tài Sản
              </span>
            </Link>
            <Link
              to="/admin/list+of+user+accounts"
              className="relative px-5  flex justify-center items-center "
            >
              {location.pathname === "/admin/list+of+user+accounts" && (
                <motion.span
                  key="/admin/list+of+user+accounts"
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={backgroundAnimationGeneralInfo}
                  className="absolute w-full overflow-hidden h-full bg-[#0b60b0] -z-1"
                ></motion.span>
              )}

              <span
                className={`relative z-10 ${
                  location.pathname === "/admin/list+of+user+accounts" &&
                  "text-white"
                }`}
              >
                Danh Sách Tài Khoản
              </span>
            </Link>
            <Link
              to="/admin/add+staff"
              className="relative px-5  flex justify-center items-center "
            >
              {location.pathname === "/admin/add+staff" && (
                <motion.span
                  key="/admin/add+staff"
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={backgroundAnimationGeneralInfo}
                  className="absolute w-full overflow-hidden h-full bg-[#0b60b0] -z-1"
                ></motion.span>
              )}

              <span
                className={`relative z-10 ${
                  location.pathname === "/admin/add+staff" && "text-white"
                }`}
              >
                Thêm Nhân Viên
              </span>
            </Link>
          </ul>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminDashboard;
