import Footer from "./Home/Footer";
import { FcShipped } from "react-icons/fc";
import { useLocation } from "react-router-dom";
import NavbarWithDropdown from "./Home/Navbar";
import { db } from "../firebase_setup/firebase";
import React, { useState, useEffect } from "react";
import { AiOutlineCheckCircle, AiFillShopping } from "react-icons/ai";
import { collection, getDocs, query, where } from "firebase/firestore";
import { BsFillBox2Fill, BsFillEmojiLaughingFill } from "react-icons/bs";
import Loading from "./Loading";
const OrderHistory = () => {
  const { state } = useLocation();
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  //Retrieve user's order history from database ===>
  const getOrderedHistory = async () => {
    setLoading(true);
    const collection_ref = collection(db, "orders");
    const q = query(collection_ref, where("username", "==", state.username));
    const doc_ref = await getDocs(q);

    const res = [];
    doc_ref.forEach((order) => {
      res.push({
        ...order.data(),
      });
    });

    if (res.length > 0) {
      setOrderHistory(res);
    } else {
      setOrderHistory([]);
    }
    setLoading(false);
  };
  useEffect(() => {
    getOrderedHistory();
  }, []);
  //<====
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="relative min-h-screen">
            <NavbarWithDropdown
              username={state.username}
              isLogged={state.isLogged}
            />
            <div className="mt-6 w-10/12 bg-slate-100 mx-auto rounded large p-3 h-fit mb-7">
              <h1 className="py-4 px-10 font-medium text-[#ee4d2d] text-2xl">
                Order history
              </h1>
              {orderHistory.length > 0 ? (
                orderHistory?.map((order, i) => {
                  return (
                    <div key={i} className="bg-white rounded-lg mb-4 p-3">
                      <h1 className="flex items-center gap-1 font-medium">
                        <span className="text-[#ee4d2d] text-xl">
                          <AiFillShopping />
                        </span>
                        <span>Order {i + 1}</span>
                      </h1>
                      <div className="flex justify-start items-center">
                        <h2 className="font-medium py-5 px-5">
                          # Product Name
                        </h2>
                        <p className="text-xl">{order.productName}</p>
                      </div>
                      <h2 className="font-medium py-5 px-5"># Product Image</h2>
                      <div className="w-full flex justify-center items-center">
                        <img
                          src={order.imageURL}
                          alt={order.productName}
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="flex justify-start items-center">
                        <h2 className="font-medium py-5 px-5">
                          # Amount of products
                        </h2>
                        <p>{order.productAmount}</p>
                      </div>
                      <div className="flex justify-start items-center">
                        <h2 className="font-medium py-5 px-5">
                          # Product Color
                        </h2>
                        <p>
                          {order.productColors.map((color, index) => {
                            return (
                              <span
                                className="px-2 bg-[#cb90f3] py-2 rounded-lg font-normal"
                                key={index}
                              >
                                {color}
                              </span>
                            );
                          })}
                        </p>
                      </div>
                      <div className="flex justify-start items-center">
                        <h2 className="font-medium py-5 px-5">
                          # Customer's address
                        </h2>
                        <p>{order.address}</p>
                      </div>
                      <div className="flex justify-start items-center">
                        <h2 className="font-medium py-5 px-5"># Product ID</h2>
                        <p className="px-2 bg-slate-200 rounded-sm">
                          {order.productId}
                        </p>
                      </div>

                      <h2 className="font-medium py-5 px-5"># Order State</h2>
                      <ol className="items-center sm:flex sm:flex-wrap px-4 gap-y-4">
                        {order.deliveryState.map((state, i) => {
                          return (
                            <li className="relative mb-6 sm:mb-0" key={i}>
                              <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                  {i === 0 && <BsFillBox2Fill />}
                                  {i > 0 && state.state !== "Delivered" && (
                                    <FcShipped />
                                  )}
                                  {state.state === "Delivered" && (
                                    <AiOutlineCheckCircle className="text-green-400" />
                                  )}
                                </div>
                                {i + 1 !== order.deliveryState.length && (
                                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                )}
                              </div>
                              <div className="mt-3 sm:pr-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                  {state.state}
                                </h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                  Released on {state.date}
                                </time>
                              </div>
                            </li>
                          );
                        })}
                      </ol>

                      <div className="flex justify-start items-center">
                        <h2 className="font-semibold py-5 px-5 text-[#ee4d2d] text-2xl">
                          # Total
                        </h2>
                        <p className="text-2xl">${order.totalAmount}</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="flex gap-2 justify-center items-center h-[40vh] border-2 border-[#7c7474] border-dashed w-[80%] mx-auto mt-3 text-[#ee4d2d] mb-5">
                  <BsFillEmojiLaughingFill />
                  <h1>You haven't bought anything!</h1>
                </div>
              )}
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default OrderHistory;
