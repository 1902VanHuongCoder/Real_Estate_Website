// import hooks
import React, { useContext } from "react";

// import icons
import { CiLogout, CiLogin, CiViewList, CiUser } from "react-icons/ci";
import { SlNote } from "react-icons/sl";
import { LuUserCog } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";

//import context
import { AppContext } from "../../Context/AppContext";

//import library
import { motion } from "framer-motion";

// import images
import defaultUserAvatar from "../../images/user_icon.png";
import { Link } from "react-router-dom";

//Create animation for user box when it comes and outs
const userBoxVariants = {
  open: {
    top: "80px",
    right: 0,
    transition: {
      duration: 0.2,
    },
  },
  close: {
    top: "80px",
    right: "-100%",
    transition: {
      duration: 0.2,
    },
  },
};

const UserBox = () => {
  const { openUserBox, setComponent, session } = useContext(AppContext);
  console.log(session);
  return (
    <motion.div
      variants={userBoxVariants}
      animate={openUserBox ? "open" : "close"}
      initial={false}
      className={`absolute w-[320px] h-fit border-[1px] border-solid border-slate-200 bg-white z-40 shadow-lg`}
    >
      <div className="flex gap-x-2 p-5 border-b-[1px] border-solid border-slate-200">
        <div
          style={{
            backgroundImage: `url(${
              session?.photoURL !== "" ? session?.photoURL : defaultUserAvatar
            } )`,
          }}
          className="w-[60px] h-[60px] rounded-full bg-center bg-no-repeat bg-cover border-[4px] border-solid border-slate-200"
        ></div>
        <div className="self-end flex flex-col gap-y-1">
          <p className="text-2xl font-medium">{session?.username}</p>
          <p className="text-md opacity-80">{session?.email}</p>
        </div>
      </div>

      <ul className="flex flex-col gap-y-1 px-5 py-5 border-b-[1px] border-solid border-slate-200">
        <li>
          <Link
            to="/"
            className="flex gap-x-2 text-lg items-center"
          >
            <IoHomeOutline /> Trang chủ
          </Link>
        </li>
        <li>
          <span
            className="flex gap-x-2 text-lg items-center"
            onClick={() => setComponent("profile")}
          >
            <CiUser /> Hồ sơ của bạn
          </span>
        </li>
        <li>
          <span
            className="flex gap-x-2 text-lg items-center"
            onClick={() => setComponent("update_profile")}
          >
            {" "}
            <LuUserCog /> Cập nhật hồ sơ
          </span>
        </li>
        <li>
          <span
            onClick={() => setComponent("post")}
            className="flex gap-x-2 text-lg items-center"
          >
            <SlNote /> Đăng tin
          </span>
        </li>
        <li>
          <span
            onClick={() => setComponent("profile")}
            className="flex gap-x-2 text-lg items-center"
            href="/profile"
          >
            <CiViewList /> Danh sách tin của bạn
          </span>
        </li>
      </ul>

      <ul className="flex flex-col gap-y-1 px-5 py-5">
        {session ? (
          <li className="flex gap-x-2 text-lg items-center">
            <CiLogout /> Đăng xuất
          </li>
        ) : (
          <li className="flex gap-x-2 text-lg items-center">
            <CiLogin /> Đăng nhập
          </li>
        )}
      </ul>
    </motion.div>
  );
};

export default UserBox;
