import React from "react";
// import icons
import { GoDotFill } from "react-icons/go";

// import images
import temp_diagram from "../images/So+Do+Tam+Thoi.jpg";

const Diagram = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-x-2 text-xl mb-2">
        <span>
          <GoDotFill />
        </span>
        <span>Bản đồ</span>
      </div>
      <div className="h-[700px] border-[1px] border-solid border-slate-200 rounded-md p-4">
        <img src={temp_diagram} alt="diagram" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Diagram;
