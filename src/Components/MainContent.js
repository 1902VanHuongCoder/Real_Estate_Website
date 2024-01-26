import React from "react";
import News from "./News";
import Filter from "./Filter";
import FilterOnMobile from "./FilterOnMobile";

const MainContent = () => {
  return (
    <div className="sm:flex h-fit">
      <FilterOnMobile />
      <News />
      <Filter />
    </div>
  );
};

export default MainContent;
