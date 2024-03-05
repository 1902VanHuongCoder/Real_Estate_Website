// import hooks
import React, { useContext, useEffect, useState } from "react";

//import icons
import { GoDotFill } from "react-icons/go";

//import contexts
import { AppContext } from "../../Context/AppContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FirebaseConfig/firebase";
import { useNotification } from "../../Hooks/useNotification";

const AccountList = () => {
  const { news} = useContext(AppContext);
  const [userAccounts, setUserAccounts] = useState(null);
  const [handleShowNotification] = useNotification();
  const [currentPage, setCurrentPage] = useState(1);
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

  const listOfPostsWereDevided = [];
  for (let i = currentPage * 6 - 6; i < currentPage * 6; i++) {
    if (i >= news.length) {
      break;
    }
    listOfPostsWereDevided.push(news[i]);
  }

  const buttonsArray = [];
  for (let j = 1; j <= Math.ceil(news.length / 6); j++) {
    buttonsArray.push(j);
  }

  return (
    <div className="p-5 border-[1px] border-solid border-slate-200 mt-5 rounded-t-xl">
      <div className="flex items-center gap-x-2 text-xl">
        <span>
          <GoDotFill />
        </span>
        <span>Danh sách tài khoản người dùng</span>
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

        <div className="w-[350px] overflow-x-scroll sm:overflow-auto sm:w-full">
          {/* Properties */}
          <ul className="min-w-[760px] mt-10 flex justify-evenly items-center px-2 lg:px-5">
            <li className="basis-1/6  text-center font-medium">STT</li>
            <li className="basis-1/6  text-center font-medium">
              Tên người dùng
            </li>
            <li className="basis-1/6  text-center font-medium">
              Số điện thoại
            </li>
            <li className="basis-2/6 text-center font-medium">Địa chỉ</li>
            <li className="basis-1/6 text-center font-medium">Thao tác</li>
          </ul>
          {/* Posts list */}
          <div className="min-w-[760px] mt-5 w-full flex flex-col gap-y-1">
            {userAccounts ? (
              userAccounts.map(
                (element, index) =>
                  element.role !== "admin" && (
                    <ul className="flex justify-evenly items-center px-2 lg:px-5 hover:bg-slate-100 py-4 rounded-lg border-[1px] border-solid border-slate-200 shadow-sm">
                      <li className="basis-1/6  text-center font-medium">
                        {index + 1}
                      </li>
                      <li className="basis-1/6  text-center font-medium">
                        {element.email}
                      </li>
                      <li className="basis-1/6  text-center font-medium">
                        {element.phoneNumber !== ""
                          ? element.phoneNumber
                          : "Chưa cập nhật"}
                      </li>
                      <li className="basis-2/6 text-center font-medium">
                        {element.address !== ""
                          ? element.address
                          : "Chưa cập nhật"}
                      </li>
                      <li className="basis-1/6 text-center font-medium cursor-pointer text-red-500">
                        Xóa
                      </li>
                    </ul>
                  )
              )
            ) : (
              <div>Không có dữ liệu tài khoản người dùng</div>
            )}
          </div>
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

export default AccountList;
