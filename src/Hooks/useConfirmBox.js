import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const useConfirmBox = () => {
  const { setShowConfirmBox } = useContext(AppContext);

  const display = (content, dataToDelete, typeOfCollection) => {
    setShowConfirmBox({
      show: true,
      content: content,
      dataToDelete: dataToDelete,
      typeOfCollection: typeOfCollection,
    });
  };
  return [display];
};

export default useConfirmBox;
