import { AnimatePresence} from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
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

function Animate() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/details/*" element={<Details />}></Route>
        <Route path="/post" element={<Post />}></Route>
        <Route path="/admin" element={<AdminDashboard />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/optionResult" element={<OptionResults />}></Route>
        <Route path="/updateprofile" element={<UpdateProfile />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default Animate;
