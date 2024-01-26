import React, { useContext } from "react";
import userAvatar from "../../assets/images/user.jpg";
import { CiLogout, CiLogin, CiViewList, CiUser } from "react-icons/ci";
import { SlNote } from "react-icons/sl";
import { LuUserCog } from "react-icons/lu";
import {motion} from 'framer-motion';
import { AppContext } from "../../Context/AppContext";
const UserBox = () => {
    const userBoxVariants = {
        open:{
            opacity: 1,
            top: "60px",
            x: 500,
            transition: {
                duration: 0.2
            }
        },
        close:{
            top: "60px",
            x:-290,
            transition: {
                duration: 0.2
            }
        }
    }
    const {openUserBox} = useContext(AppContext);
  return (
    <motion.div animate={openUserBox ? "open" : "close"} variants={userBoxVariants} className={`absolute w-fit h-fit border-[1px] border-solid border-slate-200 bg-white z-10`}>
      <div className="flex gap-x-2 p-5 border-b-[1px] border-solid border-slate-200">
        <div
          style={{ backgroundImage: `url(${userAvatar})` }} 
          className="w-[60px] h-[60px] rounded-full bg-center bg-no-repeat bg-cover"
        ></div>
        <div className="self-end flex flex-col gap-y-1">
          <p className="text-2xl font-medium">PaulTo9999</p>
          <p className="text-md opacity-80">huongb2105616@student.ctu.edu.vn</p>
        </div>
      </div>
      <ul className="flex flex-col gap-y-1 px-5 py-5 border-b-[1px] border-solid border-slate-200">
        <li className="flex gap-x-2 text-lg items-center">
          <CiUser /> Hồ sơ của bạn
        </li>
        <li className="flex gap-x-2 text-lg items-center">
          <LuUserCog /> Cập nhật hồ sơ
        </li>
        <li className="flex gap-x-2 text-lg items-center">
          <SlNote /> Đăng tin
        </li>
        <li className="flex gap-x-2 text-lg items-center">
          <CiViewList /> Danh sách tin của bạn
        </li>
      </ul>
      <ul className="flex flex-col gap-y-1 px-5 py-5">
        <li className="flex gap-x-2 text-lg items-center">
          <CiLogout /> Đăng xuất
        </li>
        <li className="flex gap-x-2 text-lg items-center">
          <CiLogin /> Đăng nhập
        </li>
      </ul>
    </motion.div>
  );
};

export default UserBox;