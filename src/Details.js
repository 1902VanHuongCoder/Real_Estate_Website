import React from "react";
import { DetailContent, ImageContainer } from "./Components/Middle";
import Transitions from "./Transition";

const Details = () => {
  return (
    <Transitions>
      <div className="w-full h-fit">
        <DetailContent />
        <ImageContainer />
      </div>
    </Transitions>
  );
};

export default Details;
