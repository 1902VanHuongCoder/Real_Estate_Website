import React from "react";
import { Link } from "react-router-dom";
import pagenotfound from "../assets/pagenotfound.jpg";
const Error = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[95%] h-[95%] shadow-lg flex justify-center items-center flex-col">
        <img src={pagenotfound} alt="404" width={300} height={300} />
        <Link to="/">
          <button
            type="button"
            class="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
          >
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
