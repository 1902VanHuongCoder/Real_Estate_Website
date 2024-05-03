// import hooks
import React, { useContext, useState } from "react";
import { useNotification } from "../../Hooks/useNotification";

// import icons
import { LuMessageSquare } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";
import { LuSendHorizonal } from "react-icons/lu";

// import motion library
import { motion } from "framer-motion";

//import contexts
import { AppContext } from "../../Context/AppContext";

//import firebase services
import { db } from "../../FirebaseConfig/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useCallback } from "react";

// import images
import logo from "../../images/logo.png";

const Feedback = () => {
  const feedbackVariants = {
    open: {
      height: "500px",
      width: "500px",
      transition: {
        duration: 0.3,
      },
    },
    close: {
      height: 0,
      width: 0,
      border: "0px solid rgba(255,255,255,1)",
      transition: {
        duration: 0.3,
      },
    },
  };
  const [expandFeedbackBox, setExpandFeedbackBox] = useState(false);
  const [handleShowNotification] = useNotification();
  const [content, setContent] = useState("");
  const { session } = useContext(AppContext);

  const handleFeedBacks = async (e) => {
    e.preventDefault();
    if (content !== "") {
      const date = new Date();
      const dataToStore = {
        content: content,
        createdAt:
          date.getDay() + "/" + date.getMonth() + 1 + "/" + date.getFullYear(),
        username: session.username,
      };

      try {
        await addDoc(collection(db, "feedbacks"), dataToStore);
        setExpandFeedbackBox(false);
        handleShowNotification("Phản hồi thành công", "success");
      } catch (error) {
        console.log(error);
        handleShowNotification(
          "Đăng bài thất bại. Kiểm tra lại thông tin bài đăng.",
          "error"
        );
      }
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    session &&
    session.role !== "admin" && (
      <div className="fixed right-10 bottom-10 w-[60px] h-[60px] bg-[#40A2D8] text-white font-medium text-xl flex justify-center items-center shadow-md rounded-full z-20">
        <button
          className="w-full h-full flex justify-center items-center"
          onClick={() => setExpandFeedbackBox(!expandFeedbackBox)}
        >
          <LuMessageSquare />
        </button>
        <motion.div
          variants={feedbackVariants}
          animate={expandFeedbackBox ? "open" : "close"}
          initial={false}
          style={{ transformOrigin: "right bottom" }}
          className={`absolute flex flex-row -left-[450px] sm:-left-[520px] -top-[500px] border-[1px] border-solid border-slate-200 shadow-md bg-white text-black overflow-hidden`}
        >
          <div className="basis-1/5 border-r-[1px] border-r-solid border-r-slate-200 flex flex-col items-center">
            <div className="h-[70px] w-full flex justify-center items-center mb-2">
              <img src={logo} alt="logo" className="w-[70%] h-[70%]" />
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <div className="flex justify-center items-center">
                <div
                  className="h-[40px] w-[40px] bg-white rounded-full bg-center bg-cover"
                  style={{
                    backgroundImage:
                      "url('https://cdn.lazi.vn/timthumb.php?src=storage/uploads/users/avatar/723886_1633696779.jpg&w=300&h=300')",
                  }}
                ></div>
                <p>Trinh Huy</p>
              </div>

              <div
                className="h-[40px] w-[40px] bg-white rounded-full bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url('https://img.lovepik.com/bg/20231212/tiny-cute-cute-animal-chick_2451418_wh860.png')",
                }}
              ></div>
            </div>
          </div>

          <div className="basis-4/5 flex-col">
            <div className="h-[70px] w-full bg-[#40a2d8]">
              <div className="flex items-center h-full w-full px-2 gap-x-2">
                <div
                  className="h-[40px] w-[40px] bg-white rounded-full bg-center bg-cover"
                  style={{
                    backgroundImage:
                      "url('https://i.pinimg.com/236x/dc/d8/7c/dcd87c0ff92154422320536b41cb4b21.jpg')",
                  }}
                ></div>
                <p className="text-white">Tô Văn Hưởng</p>
              </div>
            </div>
            <div className="h-[360px] w-full bg-slate-100 overflow-y-scroll"></div>
            <div className="h-[70px] w-full flex gap-x-2 items-center px-4">
              <input
                type="text"
                placeholder="Nhập tin nhắn..."
                className="border-[1px] border-solid border-slate-200 w-[90%] h-[50px] p-2 outline-none rounded-md"
              />
              <span className="text-2xl">
                {" "}
                <LuSendHorizonal />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    )
  );
};

export default Feedback;
