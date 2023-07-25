import React, { useContext } from "react";
import { LoginContext } from "./components/Context/LoginContext";
const Test = () => {
  const { isLogin, func } = useContext(LoginContext);
  // console.log(obj);
  const handleChangeLoginState = () => {
    func(!isLogin);
  };
  return (
    <div>
      {isLogin && "true"}
      <button onClick={handleChangeLoginState}>Change State</button>
    </div>
  );
};

export default Test;
