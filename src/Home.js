import {
  Hero,
  MainContent,
} from "./Components/Middle";
const Home = () => {
  return (
    <div className="relative max-w-[1200px] mx-auto overflow-hidden">
      <Hero />
      <MainContent />
    </div>
  );
};
export default Home;
