import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const UserProfile = ({ isLogin, username, handleShowOrderHistory }) => {
  return (
    <div style={{border: '1px solid black', width: 'fit-content', height: 'fit-content'}}>
      <div>
        <FaUserAlt />{" "}
      </div>
      <div>{username}</div>

      <button onClick={handleShowOrderHistory}>Order History</button>
      {isLogin && (
        <Link to="/login">
          <button style={{ background: "red" }}>Use another account</button>
        </Link>
      )}

    </div>
  );
};

export default UserProfile;
