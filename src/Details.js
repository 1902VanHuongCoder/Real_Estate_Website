import React from "react";
import { DetailContent } from "./Components/Middle";
import Transitions from "./Components/Partials/Transition";

const Details = () => {
  return (
    <Transitions>
      <div className="w-full h-fit">
        <DetailContent />
      </div>
    </Transitions>
  );
};

export default Details;
