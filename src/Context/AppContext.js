import React, { useState } from "react";
import { createContext } from "react";
export const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUserBox, setOpenUserBox] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const userInfo = {
    isOpen: isOpen,
    setIsOpen: setIsOpen,
    openUserBox: isOpenUserBox,
    setOpenUserBox: setOpenUserBox,
    showImage: showImage,
    setShowImage: setShowImage
  };

  return <AppContext.Provider value={userInfo}>{children}</AppContext.Provider>;
};

export default AppProvider;