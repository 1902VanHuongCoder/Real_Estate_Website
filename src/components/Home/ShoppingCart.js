import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
const ShoppingCart = ({
  products,
  user,
  handleRemoveProductOutOfShoppingCart,
  isLogin
}) => {
  const navigate = useNavigate();
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const handleBuyProduct = (id) => {
    const product = products.filter((item) => item.id === id);
    navigate("/order", { state: [product[0], user, isLogin] });
  };
  return (
    <div className="bg-[#4b4949] py-6 px-4">
      <div className="flex justify-start items-center gap-2">
        {" "}
        <FaShoppingBag className="text-[#ee4d2d]" />{" "}
        <h1 className="text-white">| Shopping Cart</h1>
        <button
          onClick={() => setShowShoppingCart(!showShoppingCart)}
          type="button"
          className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
        >
          {showShoppingCart ? 'Hidden' : 'Show'} Shopping Cart
        </button>
      </div>
      {showShoppingCart &&
        (products.length > 0 ? (
          <div className="grid grid-cols-4 p-4 gap-3">
            {products?.map((item, i) => {
              return (
                <div
                  key={i}
                  className="w-fit max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="w-full flex justify-center items-center">
                    <div className="w-[250px] h-[200px] overflow-hidden">
                      <img
                        className="w-full h-full"
                        src={item.imageURL}
                        alt=""
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
                        <button
                          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                          onClick={() =>
                            handleRemoveProductOutOfShoppingCart(item.id)
                          }
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex gap-2 justify-center items-center h-12 border-2 border-white border-dashed w-[80%] mx-auto mt-3 text-white">
            <BsFillEmojiLaughingFill />
            <h1>You haven't bought anything!</h1>
          </div>
        ))}
    </div>
  );
};

export default ShoppingCart;
