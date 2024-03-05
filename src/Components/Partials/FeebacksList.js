// import hooks
import React, { useContext, useEffect, useState } from "react";

//import icons
import { GoDotFill } from "react-icons/go";

//import contexts
import { AppContext } from "../../Context/AppContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FirebaseConfig/firebase";
import { useNotification } from "../../Hooks/useNotification";

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState(null);
  const [handleShowNotification] = useNotification();
  const [currentPage, setCurrentPage] = useState(1);
  const fetchData = async () => {
    try {
      await getDocs(collection(db, "feedbacks")).then((response) => {
        const dataResponsed = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFeedbacks(dataResponsed);
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
  const buttonsArray = [];
  const listOfFeedbacsWereDevided = [];
  if (feedbacks) {
    for (let i = currentPage * 6 - 6; i < currentPage * 6; i++) {
      if (i >= feedbacks.length) {
        break;
      }
      listOfFeedbacsWereDevided.push(feedbacks[i]);
    }

    for (let j = 1; j <= Math.ceil(feedbacks.length / 6); j++) {
      buttonsArray.push(j);
    }
  }
  return (
    <div className="p-5 border-[1px] border-solid border-slate-200 mt-5 mb-5 rounded-t-xl">
      <div className="flex items-center gap-x-2 text-xl">
        <span>
          <GoDotFill />
        </span>
        <span>Danh sách phản hồi từ người dùng</span>
      </div>

      <div className="w-full mt-5 h-fit">
        {/* Search Input */}
        {/* <div className="w-full flex justify-end items-center gap-x-1 border-b-[1px] border-b-solid border-b-slate-200 pb-10">
          <input
            className="pl-2 w-[200px] sm:w-[250px] h-[40px] border-solid border-[2px] border-slate-400 outline-none focus:border-[#0B60B0]"
            type="text"
            placeholder="Tên bài đăng"
          />
          <button className="text-white h-[40px] px-3 bg-[#0B60B0]">
            Tìm kiếm
          </button>
        </div> */}

        <div className="grid grid-cols-4 gap-2">
          {feedbacks ? (
            listOfFeedbacsWereDevided.map((element, index) => <div className="relative flex flex-col justify-between h-fit border-[1px] border-solid border-slate-300 hover:shadow-lg rounded-md">
              <span className="absolute top-3 left-3 flex justify-center items-center w-[50px] h-[50px] rounded-full text-black border-[1px] border-solid border-[#40A2D8] font-bold">{index + 1}</span>
              <div className="mt-[80px] px-[12px] w-full text-xl">{element.content}</div>
              <button className="bg-red-500 px-3 py-3 text-white w-fit self-end font-bold mr-3 mb-3 mt-[30px] rounded-md">Xóa phản hồi</button> 
            </div>)
          ) : (
            <div>Hiện tại chưa có phản hồi.</div>
          )}
        </div>

        {/*Pagenation*/}
        <div className="w-full flex justify-center gap-x-1 mt-10">
          {buttonsArray?.map((button, index) => (
            <button
              onClick={() => setCurrentPage(button)}
              key={index}
              className="w-[50px] h-[50px] border-[1px] border-solid border-slate-300 bg-[#40A2D8] text-white"
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackList;
