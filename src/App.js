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
import Test1 from "./Test1";
import Veryfy from "./VeryfyEmail";
import LoginTest from "./LoginTTest";
import UploadImage from "./Components/Partials/UploadImage";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContext";
import Example from "./test2";
import Loading from "./Components/Partials/Loading";
import Congratulation from "./Congratulation";
import WaitingPosts from "./Components/Partials/WaitingPosts";
import AccountList from "./Components/Partials/AccountList";
import FeedbackList from "./Components/Partials/FeebacksList";
import ConfirmBox from "./Components/Partials/ConfirmBox";
function App() {
  const location = useLocation();
  const { session, component, realEstateDetail } = useContext(AppContext);
  // console.log(session);
  return (
    <div className="relative">
      <Loading />
      <ImageContainer />
      <ConfirmBox />
      <Congratulation />
      <div className="relative max-w-[1200px] mx-auto overflow-hidden">
        <NavigationBar />
        <Notification />
        {session && session.role === "admin" && <AdminDashboard />}
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

            {/* <Route path="/admin/list+of+feedbacks" element={<AccountList />}></Route> */}

            <Route path="/test2" element={<Example />}></Route>

            {/* <Route path="/details/*" element={<Details />}></Route>
            <Route path="/uploadimage" element={<UploadImage/>}></Route>
            <Route path="/admin" element={<AdminDashboard />}></Route>
            <Route path="/test" element={<Test />}></Route>
            <Route path="/login1" element={<LoginTest />}></Route>
            <Route path="/optionResult" element={<OptionResults />}></Route>
            <Route path="/updateprofile" element={<UpdateProfile />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/test1" element={<Test1 />}></Route>
            <Route path="/test2" element={<Veryfy />}></Route> */}
          </Routes>
        </AnimatePresence>

        <Feedback />
        <ToTop />
        {session && session.role === "user" && <Footer />}
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
