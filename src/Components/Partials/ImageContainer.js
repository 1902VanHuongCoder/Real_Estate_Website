// import hooks
import React, { useCallback, useContext, useState } from "react";

// import icons
import { MdZoomInMap } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";

// import contexts
import { AppContext } from "../../Context/AppContext";

// import library
import ImageZoom from "react-image-zooom";
import { Link } from "react-router-dom";

const ImageContainer = () => {
  const [currentImg, setCurrentImg] = useState(1);

  const { realEstateDetail, showImage, setShowImage } = useContext(AppContext);

  const handleChangeImage = (index) => {
    setCurrentImg(index);
  };

  const extractImageIntoArray = useCallback(() => {
    const imageList = [];
    if (realEstateDetail) {
      imageList.push(realEstateDetail.titleImageURL);
      realEstateDetail.besideImageURLs.map((item, i) => imageList.push(item));
      // console.log("Function run");
    }
    
    return imageList;
  }, [realEstateDetail]);

  const imageList = extractImageIntoArray();
  return (
    showImage &&
    (realEstateDetail ? (
      <div
        className={`fixed top-0 left-0 w-screen h-screen ${
          showImage ? "flex" : "hidden"
        } flex-col gap-y-5 justify-center items-center bg-[rgba(0,0,0,.9)] z-50`}
      >
        <div className="h-[50px] sm:h-[60px] w-[90%] sm:w-4/5 lg:w-3/5 flex  justify-between items-center">
          <p className="text-white flex items-center gap-x-2">
            <span>
              <FaLightbulb />
            </span>
            <span>Click on image to zoom</span>
          </p>
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
          {imageList.map((item, index) => {
            return (
              <div
                key={index}
                className={`-translate-x-[${
                  currentImg * 100
                }%] transition-transform duration-500 shrink-0 w-full h-full flex justify-center items-center`}
              >
                <ImageZoom
                  src={item}
                  alt="Ảnh chi tiết"
                  zoom="200"
                  className=""
                />
              </div>
            );
          })}
        </div>

        <div className=" w-[90%] sm:w-4/5 lg:w-3/5 h-fit flex gap-x-3 overflow-x-auto">
          {imageList.map((item, index) => {
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
    ) : (
      <div>
        {" "}
        Lỗi trong quá trình tải bài đăng <Link to="/">Trang chủ</Link>
      </div>
    ))
  );
};

export default ImageContainer;
