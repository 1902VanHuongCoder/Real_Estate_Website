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
} from "./Components/Middle";

import { useLocation } from "react-router-dom";

// import context
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import { AnimatePresence } from "framer-motion";
import Test1 from "./Test1";
import Veryfy from "./VeryfyEmail";
import LoginTest from "./LoginTTest";

function App() {
  const { showNotification, component } = useContext(AppContext);
  const location = useLocation();
  return (
    <div className="relative max-w-[1200px] mx-auto overflow-hidden">
      <NavigationBar />
      {/* <AnimatePresence mode="wait">
        {component === "home" && <Home />}
        {component === "profile" && <Profile />}
        {component === "update_profile" && <UpdateProfile />}
        {component === "post" && <Post />}
      </AnimatePresence> */}
      <Notification />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index path="/" element={<Home />}></Route>
            <Route path="/details/*" element={<Details />}></Route>
            <Route path="/post" element={<Post />}></Route>
            <Route path="/admin" element={<AdminDashboard />}></Route>
            <Route path="/test" element={<Test />}></Route>
            <Route path="/login1" element={<LoginTest />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/optionResult" element={<OptionResults />}></Route>
            <Route path="/updateprofile" element={<UpdateProfile />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/test1" element={<Test1 />}></Route>
            <Route path="/test2" element={<Veryfy />}></Route>
          </Routes>
        </AnimatePresence>
  
      <Feedback />
      <ToTop />
      <Footer />
      <Sidebar />
    </div>
  );
}

export default App;
