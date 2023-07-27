import React, { useContext, useState } from "react";
import NavbarWithDropdown from "./Home/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { LoginContext } from "./Context/LoginContext";
import { useToast } from "rc-toastr";
const ProductDetails = () => {
  const [showMore, setShowMore] = useState(false);
  const {isLogin} = useContext(LoginContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const {toast} = useToast();
  const handleBuyProduct = () => {
    if(isLogin){
      navigate("/order", { state: state[0] });
    }else{
      toast("Log in please!");
      return;
    }
  };
  return (
    <div className="relative">
      <NavbarWithDropdown />
      <div className="w-[95%] min-h-screen bg-white mx-auto grid grid-cols-1 gap-y-5 lg:grid-cols-4">
        <div className="w-full">
          <div className="w-full flex justify-center">
            <img
              className="w-[60%] lg:w-full"
              src={state[0].imageURL}
              alt="product"
            />
          </div>
        </div>
        <div className="col-span-2 px-5">
          <h1 className="text-[28px] text-[#6d6d6d]">{state[0].productName}</h1>
          <div className="flex gap-x-3 py-3">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-yellow-300 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                4.95 out of 5
              </p>
            </div>
            <span className="text-[#0069ff]">26,028 ratings </span>
            <span className="text-[#6d6d6d]"> |</span>
            <span className="text-[#0069ff]"> 33 answered questions </span>
          </div>
          <hr />
          <div className="text-[24px] py-2">
            <sup>$</sup>
            {state[0].productPrice}
          </div>
          <div>
            <p>Color: </p>
            <div className="my-3">
              {state[0].productColors.map((color, i) => {
                return (
                  <span
                    key={i}
                    className="mr-2 px-3 py-2 rounded-sm border border-solid border-[rgba(0,0,0,.5)]"
                  >
                    {color}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="mt-[30px]">
            <p>Details: </p>
            <div
              className={`px-4 mb-[60px] relative ${
                showMore ? "h-full" : "h-[200px] overflow-hidden"
              } transition-[height] duration-100`}
            >
              <div
                onClick={() => {
                  setShowMore(!showMore);
                }}
                className={`absolute w-full bg-gradient-to-t from-sky-100  h-[60px] ${
                  showMore ? "bottom-[-60px]" : "bottom-0"
                } cursor-pointer`}
              >
                {showMore ? (
                  <div className="h-full flex justify-center items-center gap-x-1">
                    <span>Less</span>
                    <span>
                      <AiOutlineArrowUp />
                    </span>
                  </div>
                ) : (
                  <div className="h-full flex justify-center items-center gap-x-1">
                    <span>More </span>
                    <span>
                      <AiOutlineArrowDown />
                    </span>
                  </div>
                )}
              </div>
              {state[0].details.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </div>
          </div>
        </div>
        <div>
          <div className="p-2 border border-solid border-[rgba(0,0,0,.3)] rounded-lg mb-5 lg:mb-0">
            <h1 className="text-[24px]">
              <sup>$</sup>
              {state[0].productPrice}
            </h1>
            <div className="py-3">
              No Import Fees Deposit & $27.05 Shipping to Vietnam
            </div>
            <div className="py-1">
              Delivery <b>Monday, August 28</b>
            </div>
            <div className="flex items-center gap-x-1">
              <FaLocationDot className="text-red-500" />{" "}
              <span className="text-[#0069ff]">Delivery to Vietnam</span>
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                onClick={handleBuyProduct}
                className="w-[80%] my-2 bg-[#ffd814] py-1 rounded-sm hover:opacity-50"
              >
                Buy Now
              </button>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Payment</span>
                <span className="text-[#0069ff] basis-2/3">
                  Secure transaction
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Ships from</span>
                <span className="basis-2/3">Amazon.com</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Sold by</span>
                <span className="basis-2/3">Amazon.com</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-sm">Return</span>
                <span className="text-[#0069ff] basis-2/3">
                  Eligible for Return, Refund or Replacement within 30 days of
                  receipt
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-sm">Packaging</span>
                <span className="text-[#0069ff] basis-2/3">
                  Shows what's inside
                </span>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
