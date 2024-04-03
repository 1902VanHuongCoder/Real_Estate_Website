// import hooks
import React, { useCallback, useContext, useState } from "react";

// import icons
import { GoDotFill } from "react-icons/go";
import { MdBedroomParent, MdOutlineZoomOutMap } from "react-icons/md";
import {
  FaBuilding,
  FaRulerCombined,
  FaRulerHorizontal,
} from "react-icons/fa6";
import { GiMultiDirections } from "react-icons/gi";
import { PiToiletFill } from "react-icons/pi";

//import context
import { AppContext } from "../../Context/AppContext";

//import library
import { htmlToText } from "html-to-text";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { useLocation } from "react-router-dom";

const Example = () => {
  const { setShowImage } = useContext(AppContext);

  const {state} = useLocation();

  const [[page, direction], setPage] = useState([0, 0]);

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const extractImageIntoArray = useCallback(() => {
    const images = [];
    if (state) {
      images.push(state.titleImageURL.imageURL);
      state.besideImageURLs.map((item, i) => images.push(item.imageURL));
    }

    return images;
  }, [state]);

  const images = extractImageIntoArray();

  const handleViewImages = (index) => {
    if (index < page) {
      setPage([index, -1]);
    }
    if (index > page) {
      setPage([index, 1]);
    }
    return;
  };

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div>
      <div className="flex gap-x-5 lg:flex-row flex-col">
        <div className="relative lg:basis-[70%] w-full h-[400px] overflow-hidden">
          <div className="absolute left-0 w-full       h-[50px]   bottom-5    z-40 flex justify-between px-5">
            <div
              onClick={() => {
                setShowImage(true);
              }}
              className="flex justify-center items-center rounded-md hover:opacity-80 cursor-pointer w-[50px] h-[50px] bg-[rgba(0,0,0,.7)] text-white text-2xl"
            >
              <MdOutlineZoomOutMap />
            </div>
            <div className="flex justify-center items-center rounded-md hover:opacity-80 cursor-pointer w-[50px] h-[50px] bg-[rgba(0,0,0,.7)] text-white text-xl">
              {imageIndex + 1}/{images.length}
            </div>
          </div>
          <div className="relative w-full h-full flex justify-center items-center ">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                className="absolute bg-cover bg-no-repeat bg-center w-full h-full"
                key={page}
                style={{ backgroundImage: `url("${images[imageIndex]}")` }}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              />
            </AnimatePresence>
          </div>
        </div>
        <div className="basis-[25%] w-full h-[400px] overflow-auto">
          <div className="flex flex-row sm:flex-col gap-2">
            {images.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleViewImages(index)}
                  className="hover:opacity-70 shrink-0 w-full h-[60px] sm:h-[150px] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url("${item}")` }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col">
        <div className="px-5 lg:px-0 lg:pl-5 lg:basis-[70%]">
          <div className="py-5 border-b-[1px] border-b-solid border-b-slate-200">
            <h1 className="text-2xl mb-1 font-medium">
              {state?.postTitle}
            </h1>
            <p>{state?.address}</p>
          </div>
          <div className="border-b-[1px] border-b-solid border-b-slate-200 py-5 basis-[75%] grid grid-cols-2 sm:grid-cols-3 gap-2 lg:grid-cols-4 lg:gap-x-5 justify-evenly">
            <div className="flex items-center gap-x-2">
              <span>
                <FaRulerCombined />
              </span>
              <span className="flex gap-x-1 items-center">
                <span className="opacity-60">Diện tích: </span>
                <span>
                  {state?.acreage} m<sup>2</sup>
                </span>
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <span>
                <GiMultiDirections />
              </span>
              <span className="flex gap-x-1 items-center">
                <span className="opacity-60">Hướng: </span>
                <span> {state?.direction}</span>
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <span>
                <FaBuilding />
              </span>
              <span className="flex gap-x-1 items-center">
                <span className="opacity-60">Số tầng: </span>
                <span> {state?.floors}</span>
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <span>
                <FaRulerHorizontal />
              </span>
              <span className="flex gap-x-1 items-center">
                <span className="opacity-60">Mặt tiền: </span>
                <span> {state?.facade} m</span>
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <span>
                <MdBedroomParent />
              </span>
              <span className="flex gap-x-1 items-center">
                <span className="opacity-60">Phòng ngủ: </span>
                <span> {state?.bedrooms}</span>
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <span>
                <PiToiletFill />
              </span>
              <span className="flex gap-x-1 items-center">
                <span className="opacity-60">Số toilet: </span>
                <span> {state?.toilets}</span>
              </span>
            </div>
          </div>
          <div className="py-5 border-b-[1px] border-b-solid border-b-slate-200">
            <h2 className="flex items-center gap-x-1 mb-1">
              <span>
                <GoDotFill />
              </span>
              <span>Thông tin mô tả:</span>
            </h2>
            <p className="text-justify">
              {htmlToText(state?.description)}
            </p>
          </div>
          <div className="flex gap-x-10 border-b-[1px] border-b-solid border-b-slate-200 py-5">
            <div className="flex flex-col gap-y-1 items-center">
              <span className="opacity-80">Ngày đăng</span>
              <span className="text-lg">{state?.createdAt}</span>
            </div>
            <div className="flex flex-col gap-y-1 items-center">
              <span className="opacity-80">Ngày cập nhật</span>
              <span className="text-lg">{state?.updatedAt}</span>
            </div>
            <div className="flex flex-col gap-y-1 items-center">
              <span className="opacity-80">Liên hệ công ty</span>
              <span className="text-lg">0334745377</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;
