import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
function UpdateOderState({ modalname, handleCloseModal, handleAccept }) {
  return (
    <div
      onClick={handleCloseModal}
      className="fixed w-screen h-screen bg-[rgba(0,0,0,.3)] z-20 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-[250px] sm:w-[350px] h-fit rounded-lg overflow-hidden"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        <div
          onClick={handleCloseModal}
          className="absolute top-3 right-3 text-2xl text-[red]"
        >
          <IoMdCloseCircle />
        </div>
        <h1 className="py-5 w-full text-center bg-green-300 font-medium">
          {modalname}
        </h1>
        <hr />
        <div className="w-full py-4 font-medium flex justify-center gap-x-10">
          <button
            className="bg-white text-slate-800 border border-slate-800 border-solid py-1 px-4 rounded-md hover:opacity-50"
            onClick={handleCloseModal}
          >
            Cancle
          </button>
          <button
            className="bg-[blue] text-white py-1 px-4 rounded-md hover:opacity-50"
            onClick={handleAccept}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateOderState;
