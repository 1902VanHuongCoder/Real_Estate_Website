import "./App.css";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigninForm from "./components/SigninForm";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/signin" element={<SigninForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
