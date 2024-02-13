// import components
import { Hero, MainContent } from "./Components/Middle";
import Transitions from "./Transition";

const Home = () => {
  return (
    <Transitions >
      <div className="relative max-w-[1200px] mx-auto overflow-hidden">
        <Hero />
        <MainContent />
      </div>
    </Transitions>
  );
};
export default Home;
