import "./App.css";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigninForm from "./components/SigninForm";
import AdminSigninForm from "./components/Admin/AdminSignin";
import AdminLogin from "./components/Admin/AdminLogin";
import Error from "./components/Error";
import Admin from "./components/Admin/Admin";
import UploadFile from "./UploadFile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/admin/signin" element={<AdminSigninForm />}></Route>
          <Route path="/admin/login" element={<AdminLogin />}></Route>
          <Route path="/signin" element={<SigninForm />}></Route>
          <Route path="/error" element={<Error />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/uploadfile" element={<UploadFile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
