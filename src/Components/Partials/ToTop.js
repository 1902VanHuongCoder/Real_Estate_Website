// import hooks
import React from "react";

// import icons
import { FaArrowUp } from "react-icons/fa";

// import libraries
import { useLocation } from "react-router-dom";

const ToTop = () => {
  const location = useLocation();

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    location.pathname !== "/staff/login" && (
      <button
        onClick={handleToTop}
        className="fixed right-16 bottom-16 w-[60px] h-[60px] border-[2px] border-solid border-[#40A2D8] text-[#40A2D8] bg-white font-medium text-xl flex justify-center items-center shadow-md rounded-full z-[19]"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ToTop;
