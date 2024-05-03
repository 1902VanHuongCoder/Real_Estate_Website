import React, { useContext } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { AppContext } from "./Context/AppContext";

const Congratulation = () => {
  const { width, height } = useWindowSize();
  const { showCongratulation } = useContext(AppContext);
  return (
    showCongratulation && (
      <div className="fixed top-0 left-0 w-full h-full z-50">
        <Confetti width={width} height={height} />
      </div>
    )
  );
};

export default Congratulation;
