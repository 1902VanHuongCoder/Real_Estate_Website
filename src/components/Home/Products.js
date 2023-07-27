import React from "react";
import { useNavigate } from "react-router-dom";
const Products = ({ data, handleAddProduct }) => {
  const navigate = useNavigate();
  const handleRedirectProductDetailsPage = (id) => {
    const product = data.filter((product, i) => product.id === id);
    navigate(`/details/${id}`, {
      state: product,
    });
  };
  return (
    <div className="mt-6">
      <h1 className="text-[1.5rem] mx-auto p-4 text-center uppercase text-[#ee4d2d] font-bold sm:text-[2rem]">
        Products
      </h1>
      <div className="w-full sm:w-[95%] h-fit bg-white sm:bg-[#f5f5fa] mx-auto  p-5 rounded-lg">
        <h2 className="text-[1rem] sm:text-[1.5rem] text-[#ee4d2d] p-1 sm:p-4 font-bold mb-[1rem]">
          # T-Shirt & Polo
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-8 justify-items-center relative">
          {data?.map((data, i) => {
            if (data.productType === "shirt") {
              return (
                <div
                  className="relative p-2 pb-[36px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[170px] sm:w-[250px] hover:shadow-lg"
                  key={i}
                >
                  <div className="relative group w-full flex justify-center items-center border-solid border-[rgba(0,0,0,.2)] border rounded-lg overflow-hidden">
                    <div
                      className={`absolute w-full h-full ${
                        i % 2 === 0 ? "-translate-x-full" : "-translate-y-full"
                      }
                      ${
                        i % 2 === 0
                          ? "group-hover:translate-x-0"
                          : "group-hover:translate-y-0"
                      } bg-[rgba(0,0,0,.5)] transition-transform duration-300 flex justify-center items-center`}
                    >
                      <button
                        type="button"
                        className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400"
                        onClick={() =>
                          handleRedirectProductDetailsPage(data.id)
                        }
                      >
                        Details
                      </button>
                    </div>
                    <div className="w-[150px] h-[160px] sm:w-[250px] sm:h-[250px] overflow-hidden">
                      <img
                        className="w-full h-full"
                        src={data.imageURL}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-[1rem] sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {data.productName}
                    </h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Price: {data.productPrice} $ <br />
                    </p>
                    <div className="absolute bottom-2">
                      <button
                        onClick={() => handleAddProduct(data.id)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-[10px]"
                      >
                        <span className="hidden sm:block">
                          Add shopping cart
                        </span>
                        <span className="block sm:hidden">Add </span>
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

      <div className="w-full sm:w-[95%] h-fit bg-[#f5f5fa] mx-auto  p-5 rounded-lg mt-3">
        <h2 className="text-[1rem] sm:text-[1.5rem] text-[#ee4d2d] p-1 sm:p-4 font-bold mb-[1rem]">
          # Short And Long Pants
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {data?.map((data, i) => {
            if (data.productType === "pant") {
              return (
                <div
                  className="relative p-2 pb-[36px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[170px] sm:w-[250px] hover:shadow-lg"
                  key={i}
                >
                  <div className="relative group w-full border-solid border-[rgba(0,0,0,.2)] border rounded-lg overflow-hidden">
                    <div
                      className={`absolute w-full h-full ${
                        i % 2 === 0 ? "-translate-x-full" : "-translate-y-full"
                      }
                      ${
                        i % 2 === 0
                          ? "group-hover:translate-x-0"
                          : "group-hover:translate-y-0"
                      } bg-[rgba(0,0,0,.5)] transition-transform duration-300 flex justify-center items-center`}
                    >
                      <button
                        type="button"
                        className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400"
                        onClick={() =>
                          handleRedirectProductDetailsPage(data.id)
                        }
                      >
                        Details
                      </button>
                    </div>
                    <div className="w-[150px] h-[160px] sm:w-[250px] sm:h-[250px] flex justify-center items-center">
                      <img
                        className="w-[60%] h-full"
                        src={data.imageURL}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-[1rem] sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {data.productName}
                    </h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Price: {data.productPrice} $ <br />
                    </p>
                    <div className="absolute bottom-2">
                      <button
                        onClick={() => handleAddProduct(data.id)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-[10px]"
                      >
                        <span className="hidden sm:block">
                          Add shopping cart
                        </span>
                        <span className="block sm:hidden">Add </span>
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

      <div className="w-full sm:w-[95%] h-fit bg-[#f5f5fa] mx-auto  p-5 rounded-lg mt-3">
        <h2 className="text-[1rem] sm:text-[1.5rem] text-[#ee4d2d] p-1 sm:p-4 font-bold mb-[1rem]">
          # Hats & Others
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {data?.map((data, i) => {
            if (data.productType !== "pant" && data.productType !== "shirt") {
              return (
                <div
                  className="relative p-2 pb-[36px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[170px] sm:w-[250px] hover:shadow-lg"
                  key={i}
                >
                  <div className="relative group w-full flex justify-center items-center border-solid border-[rgba(0,0,0,.2)] border rounded-lg overflow-hidden">
                    <div
                      className={`absolute w-full h-full ${
                        i % 2 === 0 ? "-translate-x-full" : "-translate-y-full"
                      }
                      ${
                        i % 2 === 0
                          ? "group-hover:translate-x-0"
                          : "group-hover:translate-y-0"
                      } bg-[rgba(0,0,0,.5)] transition-transform duration-300 flex justify-center items-center`}
                    >
                      <button
                        type="button"
                        className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400"
                        onClick={() =>
                          handleRedirectProductDetailsPage(data.id)
                        }
                      >
                        Details
                      </button>
                    </div>
                    <div className="w-[150px] h-[160px] sm:w-[250px] sm:h-[250px] flex justify-center items-center">
                      <img
                        className="w-[70%] h-[70%]"
                        src={data.imageURL}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-[1rem] sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {data.productName}
                    </h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Price: {data.productPrice} $ <br />
                    </p>
                    <div className="absolute bottom-2">
                      <button
                        onClick={() => handleAddProduct(data.id)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-[10px]"
                      >
                        <span className="hidden sm:block">
                          Add shopping cart
                        </span>
                        <span className="block sm:hidden">Add </span>
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
