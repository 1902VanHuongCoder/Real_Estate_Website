//import hooks and official imports
import React from "react";

//import video
import backgroundVideo from '../Videos/backgroundVideo01.mp4';
const Hero = () => {
  return (
    <div
      className="relative w-full h-fit bg-cover bg-center bg-no-repeat">
      <div className="absolute w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-y-2 items-center text-white z-10">
          <h1 className="text-5xl sm:text-8xl mb-3">Văn Hưởng Bất Động Sản</h1>
          <p className="text-sm sm:text-xl italic">Chuyên gia môi giới nhà đất</p>
          <p className="text-lg sm:text-2xl italic"><span>Uy tín - Tận tâm - Chất lượng</span></p>
      </div>
      <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,.3)]"></div>
      <video autoPlay loop  muted className="w-full h-full">
        <source src={backgroundVideo} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default Hero;

// THIS FILE WAS BEING BLOCKED