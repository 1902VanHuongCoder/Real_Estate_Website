import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import { Feedback, ToTop, NavigationBar, Footer, Sidebar, Post } from "./Components/Middle";
import Test from "./Test";
import UpdateProfile from "./Components/UpdateProfile";
import AdminDashboard from "./Components/AdminDashboard";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import OptionResults from "./Components/OptionResults";

function App() {
  return (
    <div className="relative max-w-[1200px] mx-auto overflow-hidden">
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details/*" element={<Details />}></Route>
          <Route path="/post/*" element={<Post />}></Route>
          <Route path="/updateprofile" element={<UpdateProfile />}></Route>
          <Route path="/admin" element={<AdminDashboard />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/optionResult" element={<OptionResults />}></Route>
        </Routes>
      </BrowserRouter>
      <Feedback />
      <ToTop />
      <Footer />
      <Sidebar />
    </div>
  );
}

export default App;
