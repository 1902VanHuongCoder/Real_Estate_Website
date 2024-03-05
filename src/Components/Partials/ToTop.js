// import hooks
import React from "react";

// import icons 
import { FaArrowUp } from "react-icons/fa";
const ToTop = () => {
  const handleToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  }
  return (
    <button
      onClick={handleToTop}
      className="fixed right-10 bottom-28 w-[60px] h-[60px] border-[2px] border-solid border-[#40A2D8] text-[#40A2D8] bg-white font-medium text-xl flex justify-center items-center shadow-md rounded-full z-[19]"
    >
      <FaArrowUp />
    </button>
  );
};

export default ToTop;
