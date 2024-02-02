// import hooks
import React, { useContext, useState } from "react";

// import icons
import { MdZoomInMap } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";

// import contexts
import { AppContext } from "../../Context/AppContext";

// import library
import ImageZoom from "react-image-zooom";
const images = [
  "./images/Nha+Rieng+Image+02.jpg",
  "./images/Nha+Rieng+Image+03.jpg",
  "./images/Nha+Rieng+Image+04.jpg",
  "./images/Nha+Rieng+Image+05.jpg",
];
const ImageContainer = () => {
  const [currentImg, setCurrentImg] = useState(1);
  const { showImage, setShowImage } = useContext(AppContext);
  const handleChangeImage = (index) => {
    setCurrentImg(index);
  };
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen ${
        showImage ? "flex" : "hidden"
      } flex-col gap-y-5 justify-center items-center bg-[rgba(0,0,0,.9)] z-50`}
    >
      <div className="h-[50px] sm:h-[60px] w-[90%] sm:w-4/5 lg:w-3/5 flex  justify-between items-center">
        <p className="text-white flex items-center gap-x-2"><span><FaLightbulb /></span><span>Click on image to zoom</span></p>
        <button
          onClick={() => {
            setShowImage(false);
          }}
          className="hover:opacity-80 text-white w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-md bg-[rgba(255,255,255,.2)] flex justify-center items-center text-2xl"
        >
          <MdZoomInMap />
        </button>
      </div>
      <div className="relative w-[90%] sm:w-4/5 lg:w-3/5 h-3/5 flex overflow-hidden">
        {images.map((item, index) => {
          return (
            <div
              key={index}
              className={`-translate-x-[${currentImg * 100}%] transition-transform duration-500 shrink-0 w-full h-full flex justify-center items-center`}
            >
                <ImageZoom src={item} alt="It's up to you" zoom="200" className=""/>
            </div>
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
