import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import MainContent from "./Components/MainContent";
import NavigationBar from "./Components/NavigationBar"
import Feedback from "./Components/Partials/Feedback";
import ToTop from "./Components/Partials/ToTop";
import Sidebar from "./Components/Sidebar";
const Home = () => {
  return (
    <div className="relative max-w-[1200px] mx-auto overflow-hidden">
      <NavigationBar />
      <Sidebar />
      <Hero />
      <MainContent />
      <Footer />
      <Feedback />
      <ToTop />
    </div>
  );
};
export default Home;
