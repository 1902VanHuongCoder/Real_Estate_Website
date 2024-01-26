import React from "react";
import { FaArrowUp } from "react-icons/fa";
const ToTop = () => {
  return (
    <a
      href="#top"
      className="fixed right-10 bottom-28 w-[60px] h-[60px] border-[2px] border-solid border-[#40A2D8] text-[#40A2D8] bg-white font-medium text-xl flex justify-center items-center shadow-md rounded-full z-[19]"
    >
      <FaArrowUp />
    </a>
  );
};

export default ToTop;
