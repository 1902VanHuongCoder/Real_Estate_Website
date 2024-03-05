//import hooks
import React, { useContext, useEffect, useState } from "react";

// import icons
import { GoDotFill } from "react-icons/go";
import { FaBook, FaUser } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";

// import images
import building from "../images/buiding.jpg";
// import components
import WaitingPosts from "./Partials/WaitingPosts";
import AccountList from "./Partials/AccountList";
import PostsList from "./Partials/PostsList";

// import contexts
import { AppContext } from "../Context/AppContext";

// import firebase services
import { collection, getDocs } from "firebase/firestore";
import { db } from "../FirebaseConfig/firebase";
import { useNotification } from "../Hooks/useNotification";
import { AnimatePresence } from "framer-motion";

// import libraries
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const AdminDashboard = () => {
  const {
    news,
    showCongratulation,
    setShowCongratulation,
    setShowSpinner,
    setNews,
    setPostsWasFiltered,
  } = useContext(AppContext);

  const [userAccount, setUserAccounts] = useState(null);
  const [feedbacks, setFeedbacks] = useState(null);
  const [handleShowNotification] = useNotification();
  const location = useLocation();
  if (showCongratulation) {
    setTimeout(() => {
      setShowCongratulation(false);
    }, 5000);
  }

  const fetchData = async () => {
    setShowSpinner(true);

    try {
      await getDocs(collection(db, "posts")).then((response) => {
        const dataResponsed = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setNews(dataResponsed);
        setPostsWasFiltered(dataResponsed);
      });

      await getDocs(collection(db, "user_accounts")).then((response) => {
        const dataResponsed = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUserAccounts(dataResponsed);
      });

      await getDocs(collection(db, "feedbacks")).then((response) => {
        const dataResponsed = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFeedbacks(dataResponsed);
      });
    } catch (error) {
      console.log(error);
      handleShowNotification(
        "Kết nối mạng không ổn định! Hãy thử lại sau.",
        "error"
      );
    }

    setShowSpinner(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        className="relative text-white w-full h-[400px] bg-green-300 bg-cover rounded-b-xl overflow-hidden"
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
          <ul className="flex w-[800px] h-full">
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
                Thông tin chung
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
                Danh sách bài đăng
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
                Danh sách tài khoản
              </span>
            </Link>
            <Link
              to="/admin/list+of+feedbacks"
              className="relative px-5  flex justify-center items-center "
            >
              {location.pathname === "/admin/list+of+feedbacks" && (
                <motion.span
                  key="/admin/list+of+feedbacks"
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={backgroundAnimationGeneralInfo}
                  className="absolute w-full overflow-hidden h-full bg-[#0b60b0] -z-1"
                ></motion.span>
              )}

              <span
                className={`relative z-10 ${
                  location.pathname === "/admin/list+of+feedbacks" &&
                  "text-white"
                }`}
              >
                Danh sách phản hồi
              </span>
            </Link>
          </ul>
          
        </AnimatePresence>
      </div>

      <div className="p-5 border-[1px] border-solid border-slate-200 mt-5 rounded-t-xl">
        {/* General infomations */}
        <div className="">
          <div className="flex items-center gap-x-2 text-xl">
            <span>
              <GoDotFill />
            </span>
            <span>Thông tin chung</span>
          </div>
          <div className="flex gap-2 mt-5 flex-wrap">
            <div className="w-[300px] bg-white hover:bg-[#0b60b0] hover:text-white border-[1px] border-solid border-slate-200 p-4 rounded-e-md flex gap-x-5 items-center rounded-lg">
              <span className="text-white w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#40A2D8]">
                <FaBook />
              </span>
              <span>
                <span className="text-xl font-medium">
                  {news
                    ? news.length > 9
                      ? news.length
                      : "0" + news.length
                    : 0}
                </span>{" "}
                <span> bài đăng</span>
              </span>
            </div>
            <div className="w-[300px] bg-white hover:bg-[#0b60b0] hover:text-white border-[1px] border-solid border-slate-200 p-4 rounded-e-md flex gap-x-5 items-center rounded-lg">
              <span className="text-white w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#40A2D8]">
                <FaUser />
              </span>
              <span>
                <span className="text-xl font-medium">
                  {userAccount
                    ? userAccount.length > 9
                      ? userAccount.length
                      : "0" + userAccount.length
                    : 0}
                </span>
                <span> tài khoản</span>
              </span>
            </div>
            <div className="w-[300px] bg-white hover:bg-[#0b60b0] hover:text-white border-[1px] border-solid border-slate-200 p-4 rounded-e-md flex gap-x-5 items-center rounded-lg">
              <span className="text-white w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#40A2D8]">
                <SiBookstack />
              </span>
              <span>
                <span className="text-xl font-medium">
                  {feedbacks
                    ? feedbacks.length > 9
                      ? feedbacks.length
                      : "0" + feedbacks.length
                    : 0}
                </span>
                <span> Phản hồi</span>
              </span>
            </div>
            <div>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
