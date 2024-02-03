// import hooks
import React, { useState } from "react";
// import icons
import { LuMessageSquare } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";

// import motion library
import { motion } from "framer-motion";
const Feedback = () => {
  const feedbackVariants = {
    open: {
      height: "400px",
      width: "300px",
      transition: {
        duration: 0.3,
      },
    },
    close: {
      height: 0,
      width: 0,
      padding: 0,
      border: "0px solid rgba(255,255,255,1)",
      transition: {
        duration: 0.3,
      },
    },
  };
  const [expandFeedbackBox, setExpandFeedbackBox] = useState(false);
  return (
    <div className="fixed right-10 bottom-10 w-[60px] h-[60px] bg-[#40A2D8] text-white font-medium text-xl flex justify-center items-center shadow-md rounded-full z-20">
      <button className="w-full h-full flex justify-center items-center"  onClick={() => setExpandFeedbackBox(!expandFeedbackBox)} >
        <LuMessageSquare />
      </button>
      <motion.div
        variants={feedbackVariants}
        animate={expandFeedbackBox ? "open" : "close"}
        className={`absolute -left-[250px] sm:-left-[300px] -top-[400px] border-[1px] border-solid border-slate-200 shadow-md bg-white text-black p-5 overflow-hidden`}
      >
        <p className="flex">
          <span className="basis-[35%] opacity-80">
            <VscFeedback />
          </span>
          <span className="basis-[65%]">Phản hồi</span>
        </p>
        <form className="mt-5" action="/" method="POST">
          <label htmlFor="feedback" className="text-base">Nhập nội dung phản hồi của bạn</label>
          <textarea
            id="feedback"
            name="feedback"
            maxLength={2000}
            className="border-[1px] border-solid border-slate-300 focus:outline-none focus:border-[#0B60B0] w-full h-[200px] text-base font-normal mt-5 p-2"
          ></textarea>
          <div className="flex justify-between mt-5">
            <button
              type="submit"
              className="hover:opacity-80 font-normal bg-[#0B60B0] text-white px-4 text-base py-1"
            >
              Gửi
            </button>
            <button
              type="button"
              onClick={() => setExpandFeedbackBox(!expandFeedbackBox)}
              className="hover:opacity-80 font-normal border-[1px] border-solid border-red-500 text-red-600 px-4 text-base py-1"
            >
              Hủy
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Feedback;
