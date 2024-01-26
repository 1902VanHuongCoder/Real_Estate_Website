import React from "react";
import NavigationBar from "./Components/NavigationBar";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Feedback from "./Components/Partials/Feedback";
import ToTop from "./Components/Partials/ToTop";
import DetailContent from "./Components/Partials/DetailContent";
import ImageContainer from "./Components/Partials/ImageContainer";

const Details = () => {
  return (
    <div className="relative max-w-[1200px] mx-auto overflow-hidden">
      <NavigationBar />
      <Sidebar />
      <DetailContent />
      <Footer />
      <Feedback />
      <ToTop />
      <ImageContainer />
    </div>
  );
};

export default Details;
