import React from "react";
import { RingLoader } from "react-spinners";
const Loading = ({ loading }) => {
  const override = {
    display: "block",
  };
  return (
    <div className="w-screen h-screen bg-white fixed z-100 top-0 left-0 flex justify-center items-center">
      <RingLoader
        color="#e67af3"
        size={38}
        css={override}
        aria-label="Loading Spinner"
        data-testid="loader"
        loading={loading}
      />
    </div>
  );
};

export default Loading;
