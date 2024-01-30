// import hooks
import React, { useContext, useState } from "react";

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
const images = [
  "./images/Nha+Rieng+Image+02.jpg",
  "./images/Nha+Rieng+Image+03.jpg",
  "./images/Nha+Rieng+Image+04.jpg",
  "./images/Nha+Rieng+Image+05.jpg",
];

const DetailContent = () => {

  const [currentImg, setCurrentImg] = useState(0);

  const { setShowImage } = useContext(AppContext);

  return (
    <div>
      
      <div className="flex gap-x-5 lg:flex-row flex-col">
        <div className="relative lg:basis-[70%] w-full h-[400px] overflow-hidden">
          <div className="w-full h-full flex">
            {images.map((item, index) => {
              return (
                <div
                key={index}
                  className={`relative -translate-x-[${
                    currentImg * 100
                  }%] transition-transform duration-500 w-full h-full 
                   shrink-0 bg-cover bg-center bg-no-repeat`}
                  style={{ backgroundImage: `url("${item}")` }}
                ></div>
              );
            })}
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div
              onClick={() => {
                setShowImage(true);
              }}
              className="absolute bottom-5 left-5 flex justify-center items-center rounded-md hover:opacity-80 cursor-pointer w-[50px] h-[50px] bg-[rgba(0,0,0,.7)] text-white text-2xl"
            >
              <MdOutlineZoomOutMap />
            </div>
            <div className="absolute bottom-5 right-5 flex justify-center items-center rounded-md hover:opacity-80 cursor-pointer w-[50px] h-[50px] bg-[rgba(0,0,0,.7)] text-white text-xl">
              1/{images.length}
            </div>
          </div>
        </div>
        <div className="flex gap-x-3 lg:grid grid-cols-1 gap-y-5 p-2 sm:p-5 border-l-[1px] border-l-solid border-l-slate-200 basis-[25%] w-full h-[400px] overflow-x-scroll sm:overflow-x-hidden sm:overflow-y-scroll">
          {images.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => setCurrentImg(index)}
                className="hover:opacity-70 w-full h-[60px] sm:h-[150px] bg-red-400 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url("${item}")` }}
              ></div>
            );
          })}
        </div>
      </div>

      <div className="flex lg:flex-row flex-col">
        <div className="px-5 lg:px-0 lg:pl-5 lg:basis-[70%]">
          <div className="py-5 border-b-[1px] border-b-solid border-b-slate-200">
            <h1 className="text-2xl mb-1 font-medium">
              BÁN NHÀ CHÍNH CHỦ TRẦN QUỐC HOÀN, CẦU GIẤY
            </h1>
            <p>Phố Trần Quốc Hoàn, Phường Dịch Vọng Hậu, Cầu Giấy, Hà Nội</p>
          </div>
          <div className="border-b-[1px] border-b-solid border-b-slate-200 py-5 basis-[75%] grid grid-cols-2 sm:grid-cols-3 gap-2 lg:grid-cols-4 lg:gap-x-5 justify-evenly">
            <div className="flex items-center gap-x-2">
              <span>
                <FaRulerCombined />
              </span>
              <span className="flex gap-x-1 items-center">
                <span className="opacity-60">Diện tích: </span>
                <span>
                  54 m<sup>2</sup>
                </span>
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <span>
                <GiMultiDirections />
              </span>
              <span className="flex gap-x-1 items-center">
                <span className="opacity-60">Hướng: </span>
                <span>Tây</span>
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <span>
                <FaBuilding />
              </span>
              <span className="flex gap-x-1 items-center">
                <span className="opacity-60">Số tầng: </span>
                <span>7</span>
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <span>
                <FaRulerHorizontal />
              </span>
              <span className="flex gap-x-1 items-center">
                <span className="opacity-60">Mặt tiền: </span>
                <span>4m</span>
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <span>
                <MdBedroomParent />
              </span>
              <span className="flex gap-x-1 items-center">
                <span className="opacity-60">Phòng ngủ: </span>
                <span>4</span>
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <span>
                <PiToiletFill />
              </span>
              <span className="flex gap-x-1 items-center">
                <span className="opacity-60">Số toilet: </span>
                <span>6</span>
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
              - Nhận nhà mới 100% vào ở hoặc cho thuê ngay (Giá cho thuê 2PN 30
              - 35tr/tháng, 3PN 40 - 45tr/tháng). Pháp lý sổ hồng sở hữu lâu
              dài.
              <br />
              - Tặng gói full nội thất từ A - Z cao cấp 500 triệu - 1 tỷ. (Bao
              gồm: Tivi, tủ lạnh, máy lạnh, máy giặt, bếp, lò vi sóng, tranh
              treo tường, sofa, giường đệm ga gối, tủ quần áo +... Chuẩn tiện
              ích bàn giao của khách sạn tiêu chuẩn 4*.
              <br />
              - Tiện ích dự án: Hồ bơi, gym, BBQ, khu dạ tiệc bên hồ bơi, bể
              sục, khu vui chơi trẻ em, phòng dạ tiệc, phòng đa năng, phòng làm
              việc, phòng sinh hoạt cộng đồng, sân vườn Zen, Vườn đại sảnh...
              Ngoài ra Chủ Đầu Tư còn rất nhiều căn ở các vị trí đẹp giá tốt.
              Anh chị gọi hoặc nhắn tin sẽ có sản phẩm phù hợp.
              <br /> Liên hệ xem nhà và tư vấn chọn căn 0903 670 ***zalo,
              viber).
              <br /> Quản lý 100% giỏ hàng căn hộ mua bán cho thuê. Nhân viên
              kinh nghiệm nắm chắc Pháp lý và ngân hàng để hỗ trợ tốt cho quý
              anh chị khách hàng. Trân trọng cảm ơn!
            </p>
          </div>
          <div className="flex gap-x-10 border-b-[1px] border-b-solid border-b-slate-200 py-5">
            <div className="flex flex-col gap-y-1 items-center">
              <span className="opacity-80">Ngày đăng</span>
              <span className="text-lg">01/01/2023</span>
            </div>
            <div className="flex flex-col gap-y-1 items-center">
              <span className="opacity-80">Ngày hết hạn</span>
              <span className="text-lg">01/01/2024</span>
            </div>
            <div className="flex flex-col gap-y-1 items-center">
              <span className="opacity-80">Mã bảng tin</span>
              <span className="text-lg">0879223</span>
            </div>
          </div>
        </div>
        <div className="lg:basis-[30%]">
          <div className="h-[270px] w-4/5 mx-auto mt-5 rounded-md bg-white border-[1px] border-solid border-slate-200 shadow-md py-5 px-10">
            <div className="flex flex-col items-center gap-y-1">
              <div
                className="w-[60px] rounded-full h-[60px] bg-cover bg-center"
                style={{ backgroundImage: `url("./images/user.jpg")` }}
              ></div>
              <p className="text-xl font-medium">Paul9999</p>
              <p className="opacity-80">huongb2105616@student.ctu.edu.vn</p>
            </div>
            <div className="text-xl mt-6 px-3 py-5 rounded-md bg-[#0B60B0] text-center font-bold text-white">
              0334745377
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
