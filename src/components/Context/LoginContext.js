import { createContext, useState } from "react";

export const LoginContext = createContext(false);

export default function LoginProvider({ children }) {
  const [isLogin, setIslogin] = useState(false);
  return (
    <LoginContext.Provider value={{ isLogin: isLogin, func: setIslogin }}>
      {children}
    </LoginContext.Provider>
  );
}
