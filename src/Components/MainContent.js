import React from "react";
import News from "./News";
import Filter from "./Filter";
import FilterOnMobile from "./FilterOnMobile";
import Example from "../test2";

const MainContent = () => {
  return (
    <div className="sm:flex h-fit">
      <FilterOnMobile />
      <News />
      <Filter />
      {/* <Example /> */}
    </div>
  );
};

export default MainContent;
