import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
const Feeback = () => {
  return (
    <div className="w-full sm:w-[80%] h-fit border-[rgba(0,0,0,.1)] border border-solid mx-auto  p-5 mt-5">
      <div className="w-full flex justify-start items-center gap-x-5">
        <div className="w-10 h-10 bg-slate-100 flex justify-center items-center rounded-full text-2xl">
          <BiSolidUserCircle />
        </div>
        <input
          type="text"
          id="feedback"
          className="rounded-sm h-10"
          placeholder="Comment..."
        />
        <button className="h-10 w-16 bg-blue-700 text-white rounded-sm hover:opacity-80">
          Send
        </button>
      </div>
      <div>
        <h1 className="py-5"># All comments</h1>
        <div className="w-full bg-[#f5f5fa] h-fit p-5">
          <div className="">
            <div className="flex items-center gap-x-1">
              <div className="w-8 h-8 bg-slate-100 flex justify-center items-center rounded-full text-xl">
                <BiSolidUserCircle />
              </div>
              <span className="bg-white p-1 rounded-lg">
                jackson8888@gmail.com
              </span>
            </div>
            <div className="bg-white p-4 ml-[32px] mt-1 rounded-lg w-fit">
              The shop delivered very fast
            </div>
          </div>
          <div className="mt-3 bg-red-500">
          <div className="flex items-center gap-x-1">
            <div className="w-8 h-8 bg-slate-100 flex justify-center items-center rounded-full text-xl">
              <BiSolidUserCircle />
            </div>
            <span className="bg-white p-1 rounded-lg">
              jackson8888@gmail.com
            </span>
          </div>
          <div className="bg-white p-4 ml-[32px] mt-1 rounded-lg w-fit">
            The shop delivered very fast
          </div>
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default Feeback;
