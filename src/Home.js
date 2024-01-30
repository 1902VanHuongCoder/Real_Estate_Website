import {
  NavigationBar,
  Sidebar,
  Hero,
  MainContent,
  Footer,
  Feedback,
  ToTop,
} from "./Components/Middle";
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
