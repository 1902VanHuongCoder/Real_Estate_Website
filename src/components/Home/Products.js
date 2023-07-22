import React from "react";
const Products = ({ data, handleAddProduct }) => {
  return (
    <div className="mt-6">
      <h1 className="mx-auto p-4 text-center uppercase text-[#ee4d2d] font-bold text-[2rem]">
        Products 
      </h1>
      <div className="w-full sm:w-[80%] h-fit bg-[#f5f5fa] mx-auto  p-5 rounded-lg">
        <h2 className="text-[1rem] sm:text-[1.5rem] text-[#ee4d2d] p-1 sm:p-4 font-bold mb-[1rem]">
          # T-Shirt & Polo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {data?.map((data, i) => {
            if (data.productType === "shirt") {
              return (
                <div
                  className="p-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[250px] hover:shadow-lg"
                  key={i}
                >
                  <div className="w-full flex justify-center items-center">
                    <div className="w-[250px] h-[200px] overflow-hidden">
                      <img
                        className="w-full h-full"
                        src={data.imageURL}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {data.productName}
                    </h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Price: {data.productPrice} $ <br />
                    </p>
                    <div className="mb-5 font-normal text-gray-700 dark:text-gray-400 flex flex-wrap gap-y-2">
                      {data.productColors.map((color, i) => {
                        return (
                          <div
                            key={i}
                            className="p-2 mr-1 rounded-[5px] bg-[#e2d6fb] gap-1"
                          >
                            {color}
                          </div>
                        );
                      })}
                    </div>
                    <div className="sm:flex justify-between block">
                      <button
                        onClick={() => handleAddProduct(data.id)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-[10px]"
                      >
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

      <div className="w-full sm:w-[80%] h-fit bg-[#f5f5fa] mx-auto  p-5 rounded-lg mt-3">
        <h2 className="text-[1rem] sm:text-[1.5rem] text-[#ee4d2d] p-1 sm:p-4 font-bold mb-[1rem]">
          # Short And Long Pants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {data?.map((data, i) => {
            if (data.productType === "pant") {
              return (
                <div
                  className="p-2  overflow-hidden max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-fit hover:shadow-lg"
                  key={i}
                >
                  <div className="w-full flex justify-center items-center">
                    <div className="w-[250px] h-[200px] overflow-hidden">
                      <img
                        className="w-full h-full"
                        src={data.imageURL}
                        alt=""
                      />
                    </div>
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
                            className="p-2 mr-1 rounded-[5px] bg-[#e2d6fb] gap-1"
                          >
                            {color}
                          </div>
                        );
                      })}
                    </div>
                    <div className="sm:flex justify-between block">
                      <button
                        onClick={() => handleAddProduct(data.id)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-[10px]"
                      >
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

      <div className="w-full sm:w-[80%] h-fit bg-[#f5f5fa] mx-auto  p-5 rounded-lg mt-3">
        <h2 className="text-[1rem] sm:text-[1.5rem] text-[#ee4d2d] p-1 sm:p-4 font-bold mb-[1rem]">
          # Hats & Others
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {data?.map((data, i) => {
            if (data.productType === "hat") {
              return (
                <div
                  className="p-2 overflow-hidden max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-fit hover:shadow-lg"
                  key={i}
                >
                  <div className="w-full flex justify-center items-center">
                    <div className="w-[250px] h-[200px] overflow-hidden">
                      <img
                        className="w-full h-full"
                        src={data.imageURL}
                        alt=""
                      />
                    </div>
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
                            className="p-2 mr-1 rounded-[5px] bg-[#e2d6fb] gap-1"
                          >
                            {color}
                          </div>
                        );
                      })}
                    </div>
                    <div className="sm:flex justify-between block">
                      <button
                        onClick={() => handleAddProduct(data.id)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-[10px]"
                      >
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
