import React, { useState } from "react";
import { createContext } from "react";
export const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const userInfo = {
    account: user,
    setAccount: setUser,
    isOpen: isOpen,
    setIsOpen: setIsOpen,
  };

  return <AppContext.Provider value={userInfo}>{children}</AppContext.Provider>;
};

export default AppProvider;
