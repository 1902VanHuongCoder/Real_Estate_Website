import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavbarWithDropdown from "./Home/Navbar";
import { useToast } from "rc-toastr";
import { useContext } from "react";
import { LoginContext } from "./Context/LoginContext";
const SearchResult = () => {
  const { isLogin } = useContext(LoginContext);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleBuyProduct = (id) => {
    if (isLogin) {
      const product = state.products.filter((item) => item.id === id);
      navigate("/order", {
        state: product[0],
      });
    } else {
      toast("Log in please!");
      return;
    }
  };

  return (
    <div>
      <NavbarWithDropdown />
      <div className="container bg-slate-100 mx-auto min-h-screen mt-5 rounded-lg">
        <h2 className="font-medium py-5 px-5"># Search Result</h2>
        {state.products.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 justify-items-center rounded-lg gap-3 w-[90%] bg-white mx-auto p-5">
            {state.products?.map((item, i) => {
              return (
                <div
                  key={i}
                  className="w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl"
                >
                  <div className="w-full flex justify-center items-center">
                    <div className="w-[250px] h-[250px] p-2 flex justify-center items-center">
                      <img
                        className="w-[60%] h-full"
                        src={item.imageURL}
                        alt={item.productName}
                      />
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {item.productName}
                    </h5>

                    <div>
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        ${item.productPrice}
                      </span>
                      <div className="mt-1 flex justify-between">
                        <button
                          onClick={() => handleBuyProduct(item.id)}
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          <svg
                            className="w-3.5 h-3.5 mr-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 21"
                          >
                            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                          </svg>
                          Buy now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="w-[90%] bg-white mx-auto h-[200px] border-dashed border-2 border-slate-400 flex justify-center items-center gap-1">
            <span className="text-xl">&#128580;</span>
            <p className="text-xl">
              No match result for "{state.queryContent}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
