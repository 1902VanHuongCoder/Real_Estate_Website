//import hooks
import { useContext } from "react";

//import context
import { AppContext } from "../Context/AppContext";

export const useNotification = () => {
  const { setShowNotification } = useContext(AppContext);
  const handleShowNotification = (message, type) => {
    setShowNotification({ message: message, type: type });
  };

  return [handleShowNotification];
};
