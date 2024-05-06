import React, { useContext, useEffect, useState } from "react";
import Diagram from "./Diagram";

// import icons
import { GoDotFill } from "react-icons/go";
import { FaBook, FaUser } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";

// import contexts
import { AppContext } from "../Context/AppContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../FirebaseConfig/firebase";

// import custome hooks
import { useNotification } from "../Hooks/useNotification";
import Transitions from "./Partials/Transition";

const GeneralInfo = () => {
  const { postsWasFiltered, setShowSpinner } = useContext(AppContext);
  const [userAccount, setUserAccounts] = useState(null);
  const [handleShowNotification] = useNotification();

  const fetchData = async () => {
    try {
      await getDocs(collection(db, "user_accounts")).then((response) => {
        const dataResponsed = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUserAccounts(dataResponsed);
      });
    } catch (error) {
      console.log(error);
      handleShowNotification(
        "Kết nối mạng không ổn định! Hãy thử lại sau.",
        "error"
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Transitions>
      <div className="flex flex-col gap-y-10">
        {/* General infomations */}
        <div className="">
          <div className="flex items-center gap-x-2 text-xl">
            <span>
              <GoDotFill />
            </span>
            <span>Thông tin chung</span>
          </div>
          <div className="flex gap-2 mt-5 flex-wrap">
            <div className="w-[300px] bg-white border-[1px] border-solid border-slate-200 p-4 rounded-e-md flex gap-x-5 items-center rounded-lg">
              <span className="text-white w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#40A2D8]">
                <FaBook />
              </span>
              <span>
                <span className="text-xl font-medium">
                  {postsWasFiltered
                    ? postsWasFiltered.length > 9
                      ? postsWasFiltered.length
                      : "0" + postsWasFiltered.length
                    : 0}
                </span>{" "}
                <span> bài đăng</span>
              </span>
            </div>
            <div className="w-[300px] bg-white border-[1px] border-solid border-slate-200 p-4 rounded-e-md flex gap-x-5 items-center rounded-lg">
              <span className="text-white w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#40A2D8]">
                <FaUser />
              </span>
              <span>
                <span className="text-xl font-medium">
                  {userAccount
                    ? userAccount.length > 9
                      ? userAccount.length
                      : "0" + userAccount.length
                    : 0}
                </span>
                <span> tài khoản</span>
              </span>
            </div>
            <div>
              <span></span>
            </div>
          </div>
        </div>
        <Diagram />
      </div>
    </Transitions>
  );
};

export default GeneralInfo;
