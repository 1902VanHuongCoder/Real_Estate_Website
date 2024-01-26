import React, { useContext, useState } from "react";
import { MdOutlineZoomIn } from "react-icons/md";
import { MdOutlineZoomOut } from "react-icons/md";
import { MdZoomInMap } from "react-icons/md";
import nhaRieng01 from "../../assets/images/Nha+Rieng+Image+02.jpg";
import nhaRieng02 from "../../assets/images/Nha+Rieng+Image+03.jpg";
import nhaRieng03 from "../../assets/images/Nha+Rieng+Image+04.jpg";
import nhaRieng04 from "../../assets/images/Nha+Rieng+Image+05.jpg";
import { AppContext } from "../../Context/AppContext";
const images = [nhaRieng01, nhaRieng02, nhaRieng03, nhaRieng04];
const ImageContainer = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const { showImage, setShowImage } = useContext(AppContext);
  const handleChangeImage = (index) => {
    setCurrentImg(index);
    console.log(currentImg);
  };
  
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen ${
        showImage ? "flex" : "hidden"
      } flex-col gap-y-5 justify-center items-center bg-[rgba(0,0,0,.9)] z-20`}
    >
      <div className="h-[50px] sm:h-[60px] w-[90%] sm:w-4/5 lg:w-3/5 flex gap-x-2 justify-end items-center">
        <button className="hover:opacity-80 text-white  w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-md bg-[rgba(255,255,255,.2)] flex justify-center items-center text-2xl">
          <MdOutlineZoomIn />
        </button>
        <button className="hover:opacity-80 text-white  w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-md bg-[rgba(255,255,255,.2)] flex justify-center items-center text-2xl">
          <MdOutlineZoomOut />
        </button>
        <button
          onClick={() => {
            setShowImage(false);
          }}
          className="hover:opacity-80 text-white w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-md bg-[rgba(255,255,255,.2)] flex justify-center items-center text-2xl"
        >
          <MdZoomInMap />
        </button>
      </div>
      <div className="relative  w-[90%] sm:w-4/5 lg:w-3/5 h-3/5 flex overflow-hidden">
        {images.map((item, index) => {
          return (
            <div
              key={index}
              className={`-translate-x-[${currentImg * 100}%] transition-transform duration-500 relative shrink-0 w-full h-full bg-cover bg-center bg-no-repeat`}
              style={{ backgroundImage: `url("${item}")` }}
            ></div>
          );
        })}
      </div>
      <div className=" w-[90%] sm:w-4/5 lg:w-3/5 h-fit flex gap-x-3 overflow-x-auto">
        {images.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => handleChangeImage(index)}
              className="shrink-0 cursor-pointer border-[2px] border-solid border-white hover:opacity-70 h-[70px] w-[100px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url("${item}")` }}
            ></div>
          );
        })}
        ;
      </div>
    </div>
  );
};

export default ImageContainer;
