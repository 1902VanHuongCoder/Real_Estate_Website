// import hooks
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNotification } from "./Hooks/useNotification";

// import icons
import { LuSendHorizonal } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { BiSolidImageAdd } from "react-icons/bi";

//import contexts
import { AppContext } from "./Context/AppContext";
import { ChatContext } from "./Context/ChatContext";

//import firebase services
import { db, storage } from "./FirebaseConfig/firebase";
import {
  Timestamp,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

// import images
import logo from "./images/logo.png";
import user_icon from "./images/user_icon.png";

// import libraries
import { v4 as uuid } from "uuid";

const Feedback = () => {
  const { session } = useContext(AppContext);

  const { data } = useContext(ChatContext);

  const [user, setUser] = useState(null);

  const [chats, setChats] = useState([]);

  const [username, setUsername] = useState("");

  const [err, setErr] = useState(false);

  const [messages, setMessages] = useState([]);

  const [text, setText] = useState("");

  const [img, setImg] = useState(null);

  const { dispatch } = useContext(ChatContext);

  const handleSelect = async () => {
    console.log("Current user id: " + session.userId);
    console.log("user id: " + user.userId);

    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      session.userId > user.userId
        ? session.userId + user.userId
        : user.userId + session.userId;

    console.log("Compare result: " + session.userId > user.userId);

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      console.log("Outside iff");

      if (!res.exists()) {
        console.log("Inside iff");

        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        //create user chats
        await updateDoc(doc(db, "userChats", session.userId), {
          [combinedId + ".userInfo"]: {
            userId: user.userId,
            displayName: user.username,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.userId), {
          [combinedId + ".userInfo"]: {
            userId: session.userId,
            displayName: session.username,
            photoURL: session.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}
    setUser(null);
    setUsername("");
  };
  const handleSearch = async () => {
    const q = query(
      collection(db, "user_accounts"),
      where("username", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  const handleSelectChats = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: session.userId,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: session.userId,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", session.userId), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.userId), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", session.userId), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    session.userId && getChats();
  }, [session.userId]);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  const messageRef = useRef();

  useEffect(() => {
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className={`w-[800px] h-fit flex border-[1px] border-solid border-slate-200 shadow-md bg-white text-black overflow-hidden`}
    >
      <div className="basis-[35%] border-r-[1px] border-r-solid border-r-slate-200 flex flex-col items-center">
        <div className="h-[70px] w-full flex justify-center items-center mb-2">
          <img src={logo} alt="logo" className="w-[40%]" />
        </div>

        <div className="flex items-center w-full justify-center mb-5 gap-x-2">
          <input
            onKeyDown={handleKey}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="outline-none border-[2px] border-solid border-slate-200 rounded-sm p-1"
            type="text"
            placeholder="Tìm kiếm..."
          />
          <span
            onClick={handleSearch}
            className="cursor-pointer hover:text-[#40a2d8]"
          >
            <FiSearch />
          </span>
        </div>
        {err && <div className="mb-5">Không tìm thấy người dùng</div>}

        <div className="flex flex-col w-full border-[1px] border-solid border-slate-200 bg-[#40a2d8] text-white mb-5 px-5">
          {user && (
            <div
              className="flex items-center gap-x-2 p-2"
              onClick={handleSelect}
            >
              <div
                className="h-[40px] w-[40px] bg-white rounded-full bg-center bg-cover"
                style={{
                  backgroundImage: `url('${user.photoURL}')`,
                }}
              ></div>
              <p>{user.username}</p>
            </div>
          )}
        </div>

        {/* Sidebar */}

        <div className="flex flex-col">
          {Object.entries(chats)
            ?.sort((a, b) => b[1].date - a[1].date)
            .map((chat) => (
              <div
                className="flex gap-2 items-center hover:bg-slate-200 p-2 rounded-sm cursor-pointer transition-all"
                key={chat[0]}
                onClick={() => handleSelectChats(chat[1].userInfo)}
              >
                <div className="w-[40px] h-[40px] overflow-hidden rounded-full">
                  <img
                    src={
                      chat[1].userInfo.photoURL !== ""
                        ? chat[1].userInfo.photoURL
                        : user_icon
                    }
                    alt=""
                  />
                </div>

                <div>
                  <span>{chat[1].userInfo.displayName}</span>
                  <p>{chat[1].lastMessage?.text}</p>
                </div>
              </div>
            ))}
        </div>

        {/* <div className="flex flex-col items-center gap-y-1">
            <div
              className="h-[40px] w-[40px] bg-white rounded-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://cdn.lazi.vn/timthumb.php?src=storage/uploads/users/avatar/723886_1633696779.jpg&w=300&h=300')",
              }}
            ></div>
            <p className="text-sm">Nguyễn Trinh Huy</p>
          </div> */}

        {/* <div className="flex flex-col items-center gap-y-1">
            <div
              className="h-[40px] w-[40px] bg-white rounded-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://img.lovepik.com/bg/20231212/tiny-cute-cute-animal-chick_2451418_wh860.png')",
              }}
            ></div>
            <p className="text-sm">Nguyễn Hoài Đức</p>
          </div> */}

        {/* <div className="flex flex-col items-center gap-y-1">
            <div
              className="h-[40px] w-[40px] bg-white rounded-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkCu9_trJnYykSnw5aKT_GK-BjrSkkaPFdm-bT15zTzw&s')",
              }}
            ></div>
            <p className="text-sm">Lê Hữu Hoàng Anh</p>
          </div> */}
      </div>

      {/* Chat */}

      {data.chatId === "null" ? (
        <div className="basis-[65%] flex-col relative">
          <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] uppercase font-bold text-[#0B60B0] w-full text-center">
            Hãy chọn một cuộc trò chuyện
          </p>
        </div>
      ) : (
        <div className="basis-[65%] flex-col">
          <div className="h-[70px] w-full bg-[#40a2d8]">
            {/* Partner */}
            <div className="flex items-center h-full w-full px-2 gap-x-2">
              <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
                <img
                  src={
                    data.user.photoURL !== "" ? data.user.photoURL : user_icon
                  }
                  alt="user_avatar"
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-white">{data.user.displayName}</p>
            </div>
          </div>

          <div className="h-[360px] w-full bg-slate-100 overflow-y-scroll">
            {messages.length < 1 ? (
              <div className="w-full h-full flex justify-center items-center">
                <p>Hãy đặt câu hỏi cho nhân viên hỗ trợ!</p>
              </div>
            ) : (
              messages.map((m) => (
                <div
                  ref={messageRef}
                  className={`flex items-center gap-x-1 p-2 ${
                    m.senderId === session.userId && "flex-row-reverse"
                  }`}
                  key={m.id}
                >
                  <div
                    style={{
                      backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCq5S8jrNTa3IJAwMMlw06ilwZ31xP7ds61cgLF0P0-A&s")`,
                    }}
                    className="w-[50px] h-[50px] rounded-full bg-center bg-cover"
                  ></div>
                  <div className="bg-white p-2 rounded-tr-md">{m.text}</div>
                </div>
              ))
            )}
          </div>

          <div className="h-[70px] w-full flex gap-x-4 items-center px-4">
            <input
              type="text"
              placeholder="Nhập tin nhắn..."
              onChange={(e) => setText(e.target.value)}
              value={text}
              className="border-[1px] border-solid border-slate-200 w-[90%] h-[50px] p-2 outline-none rounded-md"
            />

            <label htmlFor="file">
              <span className="text-2xl text-slate-400">
                <BiSolidImageAdd />
              </span>
            </label>
            <span onClick={handleSend} className="text-2xl">
              <LuSendHorizonal />
            </span>
            <input
              type="file"
              style={{ display: "none" }}
              id="file"
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Feedback;
