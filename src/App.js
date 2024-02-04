import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import { Feedback, ToTop, NavigationBar, Footer, Sidebar, Post } from "./Components/Middle";
import Test from "./Test";

function App() {
  return (
    <div className="relative max-w-[1200px] mx-auto overflow-hidden">
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details/*" element={<Details />}></Route>
          <Route path="/post/*" element={<Post />}></Route>
          <Route path="/test" element={<Test />}></Route>
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
