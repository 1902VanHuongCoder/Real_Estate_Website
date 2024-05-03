import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Post from "./Components/Post";
import Home from "./Home";
import Details from "./Details";
import UpdateProfile from "./Components/UpdateProfile";
import AdminDashboard from "./Components/AdminDashboard";
import Test from "./Test";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import OptionResults from "./Components/OptionResults";
import Profile from "./Components/Profile";
import Notification from "./Components/Partials/Notification";

import "./App.css";
import {
  Feedback,
  ToTop,
  NavigationBar,
  Footer,
  Sidebar,
  ImageContainer,
} from "./Components/Middle";

import { useLocation } from "react-router-dom";

// import context
import { AnimatePresence } from "framer-motion";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContext";
import Example from "./test2";
import Loading from "./Components/Partials/Loading";
import Congratulation from "./Congratulation";
import WaitingPosts from "./Components/Partials/WaitingPosts";
import AccountList from "./Components/Partials/AccountList";
import FeedbackList from "./Components/Partials/FeebacksList";
import ConfirmBox from "./Components/Partials/ConfirmBox";

//import firebase services
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./FirebaseConfig/firebase";
import AddStaff from "./Components/Partials/AddStaff";
import StaffDashboard from "./StaffDashboard";

function App() {
  const location = useLocation();
  const {
    session,
    setOpenUserBox,
    setShowSpinner,
    setPostsWasFiltered,
    setSession,
    showImage,
    setHouses,
    setLands,
  } = useContext(AppContext);

  const fetchHouseDatas = async () => {
    setShowSpinner(true);
    let initialPostWasFiltered;

    try {
      await getDocs(collection(db, "posts")).then((response) => {
        const dataResponsed = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setHouses(dataResponsed);
        initialPostWasFiltered = dataResponsed; // CHECK LATER
      });

      await getDocs(collection(db, "lands")).then((response) => {
        const dataResponsed = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setLands(dataResponsed);
        initialPostWasFiltered = initialPostWasFiltered.concat(dataResponsed);
      });

      setPostsWasFiltered(initialPostWasFiltered);
    } catch (error) {
      console.log("Error when fetching house datas");
      console.log(error);
    }
    setShowSpinner(false);
  };

  const fetchUserData = async (id) => {
    try {
      const docRef = doc(db, "user_accounts", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setSession(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error); // display error messages in console panel
    }
  };

  useEffect(() => {
    fetchHouseDatas();
    // fetchLandDatas();
    const userInfo = localStorage.getItem("userInfo"); // get user data from local storage

    if (userInfo) {
      let userId = JSON.parse(userInfo).userId; // parse JSON to Object
      // if user has logged in
      fetchUserData(userId); // fetch user datas from database
    }
  }, []);

  return (
    <div className="relative">
      <Loading />
      {showImage && <ImageContainer />}
      <ConfirmBox />
      <Congratulation />
      <div className="relative max-w-[1200px] mx-auto overflow-hidden">
        <NavigationBar />
        <Notification />
        {session && (session.role === "admin" || session.role === "staff") && (
          <AdminDashboard />
        )}
        <div onClick={() => setOpenUserBox(false)}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index path="/" element={<Home />}></Route>

              <Route path="/real+estate/signup" element={<SignUp />}></Route>

              <Route path="/real+estate/signin" element={<Login />}></Route>

              <Route
                path="/real+estate/search+result/*"
                element={<OptionResults />}
              ></Route>

              <Route path="/details" element={<Details />}></Route>

              <Route
                path="/real+estate/your+profile"
                element={<Profile />}
              ></Route>

              <Route
                path="/real+estate/update+profile"
                element={<UpdateProfile />}
              ></Route>

              <Route path="/real+estate/post" element={<Post />}></Route>

              <Route
                path="/admin/list+of+posts"
                element={<WaitingPosts />}
              ></Route>

              <Route
                path="/admin/list+of+user+accounts"
                element={<AccountList />}
              ></Route>

              <Route
                path="/admin/list+of+feedbacks"
                element={<FeedbackList />}
              ></Route>

              <Route path="/admin/add+staff" element={<AddStaff />}></Route>

              <Route
                path="/staff/dashboard"
                element={<StaffDashboard />}
              ></Route>

              {/* Beta  */}
              <Route path="/test2" element={<Example />}></Route>

              {session && <Route path="/test" element={<Test />}></Route>}
            </Routes>
          </AnimatePresence>
        </div>

        <Feedback />

        <ToTop />

        {session && session.role === "user" && <Footer />}

        <Sidebar />
      </div>
    </div>
  );
}

export default App;
