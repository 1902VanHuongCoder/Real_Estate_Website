// import hooks
import React, { useContext, useEffect } from "react";

// import icons
import { FaLocationDot } from "react-icons/fa6";
import { FaRulerCombined, FaRulerHorizontal } from "react-icons/fa6";
import { GiMultiDirections } from "react-icons/gi";
import { FaBuilding } from "react-icons/fa";
import { MdBedroomParent } from "react-icons/md";
import { PiToiletFill } from "react-icons/pi";

//import firebase services
import { collection, getDocs } from "firebase/firestore";
import { db } from "../FirebaseConfig/firebase";
import { AppContext } from "../Context/AppContext";

//import images
import { useNavigate } from "react-router-dom";

const News = () => {
  const {
    setShowSpinner,
    setRealEstateDetail,
    postsWasFiltered,
    setPostsWasFiltered,
    setNews,
  } = useContext(AppContext);
  const navigate = useNavigate();

  const handleViewDetails = (postData) => {
    setRealEstateDetail(postData);
    navigate("/details");
    window.scrollTo(0, 0);
  };

  const fetchData = async () => {
    setShowSpinner(true);
    await getDocs(collection(db, "posts")).then((response) => {
      const dataResponsed = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNews(dataResponsed);
      setPostsWasFiltered(dataResponsed);
    });
    setShowSpinner(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="lg:basis-[70%] h-fit w-full pr-5 lg:pr-10 pt-10 sm:pt-14">
      <h2 className="text-2xl border-l-[6px] border-l-solid border-l-[#0B60B0] pl-3">
        Nhà đất nổi bật
      </h2>

      {/* News components  */}
      {postsWasFiltered?.length > 0 ? (
        postsWasFiltered?.map((item, index) => (
          <div
            key={index}
            className="w-full mt-5 border-[1px] border-solid border-slate-200 h-fit"
          >
            <div
              className="relative w-full h-[350px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url("${item.titleImageURL.imageURL}")` }}
            >
              <div
                className="absolute top-5 -left-1 w-fit h-[50px] bg-cover bg-right bg-no-repeat text-white text-lg flex pl-4 pr-6 items-center"
                style={{ backgroundImage: `url("./images/label.png")` }}
              >
                {item.price}
              </div>
            </div>
            <div className="flex flex-col gap-y-2 p-2">
              <h3 className="font-medium text-lg">{item.postTitle}</h3>
              <p className="flex items-center gap-x-1 text-base">
                <span className="text-lg text-red-600">
                  <FaLocationDot />
                </span>
                {item.address}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:grid-cols-4 lg:gap-x-5 justify-evenly">
                <div className="flex items-center gap-x-2">
                  <span>
                    <FaRulerCombined />
                  </span>
                  <span className="flex gap-x-1 items-center">
                    <span className="opacity-60">Diện tích: </span>
                    <span>
                      {item.acreage} m<sup>2</sup>
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-x-2">
                  <span>
                    <GiMultiDirections />
                  </span>
                  <span className="flex gap-x-1 items-center">
                    <span className="opacity-60">Hướng: </span>
                    <span>{item.direction}</span>
                  </span>
                </div>
                <div className="flex items-center gap-x-2">
                  <span>
                    <FaBuilding />
                  </span>
                  <span className="flex gap-x-1 items-center">
                    <span className="opacity-60">Số tầng: </span>
                    <span>{item.floors}</span>
                  </span>
                </div>
                <div className="flex items-center gap-x-2">
                  <span>
                    <FaRulerHorizontal />
                  </span>
                  <span className="flex gap-x-1 items-center">
                    <span className="opacity-60">Mặt tiền: </span>
                    <span>{item.facade} m</span>
                  </span>
                </div>
                <div className="flex items-center gap-x-2">
                  <span>
                    <MdBedroomParent />
                  </span>
                  <span className="flex gap-x-1 items-center">
                    <span className="opacity-60">Phòng ngủ: </span>
                    <span>{item.bedrooms}</span>
                  </span>
                </div>
                <div className="flex items-center gap-x-2">
                  <span>
                    <PiToiletFill />
                  </span>
                  <span className="flex gap-x-1 items-center">
                    <span className="opacity-60">Số toilet: </span>
                    <span>{item.toilets}</span>
                  </span>
                </div>
              </div>
              <div>Đã được đăng vào ngày: {item.createdAt}</div>
              <button
                onClick={() => handleViewDetails(item)}
                className="w-[100px] h-[40px] border-[2px] border-solid border-[#0B60B0] hover:bg-[#0B60B0] hover:text-white"
              >
                Chi tiết
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full border-dashed border-[2px] border-slate-500 mt-[21px] flex justify-center items-center h-[200px] text-[20px]">
          Không có dữ liệu
        </div>
      )}
    </div>
  );
};

export default News;
