import React from "react";
import { Link } from "react-router-dom";

const Products = ({ data, handleAddProduct }) => {
  return (
    <div>
      <h1 className="w-[80%] mx-auto p-4 text-center uppercase text-[#ee4d2d] font-bold text-[2rem]">
        Products
      </h1>
      <div className="w-[80%] h-fit bg-[#f5f5fa] mx-auto  p-5 rounded-lg">
          <h2 className="text-[1.5rem] text-[#ee4d2d] p-4 font-bold mb-[1rem]"># T-Shirt & Polo</h2>
          <div className="flex flex-wrap gap-6 items-center justify-center">
        {data?.map((data, i) => {
          if (data.productType === "shirt") {
            return (
              <div
                className="overflow-hidden max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-fit hover:shadow-lg"
                key={i}
              >
                <div className="h-[250px] overflow-hidden">
                  <img className="w-fit h-fit" src={data.imageURL} alt="" />
                </div>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.productName}
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Price: {data.productPrice} $ <br />
                  </p>
                  <div className="mb-5 font-normal text-gray-700 dark:text-gray-400 flex flex-wrap">
                    {data.productColors.map((color, i) => {
                      return (
                        <div
                          key={i}
                          className="p-2 mr-1 rounded-[5px] bg-[#e2d6fb]"
                        >
                          {color}
                        </div>
                      );
                    })}
                  </div>
                  <div className="sm:flex justify-between block">
                   
                   <button  onClick={() => handleAddProduct(data.id)}className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-[10px]">
                      Add Shopping Cart
                      <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      </div>
    </div>
  );
};

export default Products;

// <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//  <a href="#">
//      <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
//  </a>
//  <div className="p-5">
//      <a href="#">
//          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//      </a>
//      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//      <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//          Read more
//           <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//          </svg>
//      </a>
//  </div>
// </div>

{
  /* {data?.map((data, i) => {
            return (
              <li key={i}>
                Product Name: {data.productName} | Price: {data.productPrice} |
                Type: {data.productType}
                <img
                  src={data.imageURL}
                  alt={data.productName}
                  width={100}
                  height={100}
                />
                <button
                  style={{ background: "#ee4d2d", borderRadius: "5px" }}
                  onClick={() => handleAddProduct(data.id)}
                >
                  Add product
                </button>
              </li>
            );
          })} */
}
