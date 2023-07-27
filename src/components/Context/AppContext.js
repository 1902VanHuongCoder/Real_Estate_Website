import React, { useState } from "react";
import { createContext } from "react";
export const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const userInfo = { account: user, setAccount: setUser };

  return <AppContext.Provider value={userInfo}>{children}</AppContext.Provider>;
};

export default AppProvider;
