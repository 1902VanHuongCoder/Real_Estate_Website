import React from "react";
import { Link } from "react-router-dom";
import { RiErrorWarningLine } from "react-icons/ri";
const Error = () => {
  return (
    <div>
      <h1>404</h1>
      <h1>
        {" "}
        <span>
          <RiErrorWarningLine />
        </span>{" "}
        Page's Not Found
      </h1>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Error;
