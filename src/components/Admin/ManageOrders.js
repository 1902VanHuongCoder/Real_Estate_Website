import "aos/dist/aos.css";
import { db } from "../../firebase_setup/firebase";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import yellowandblackstripe from "../../assets/yellowandblackstripe.jpg";
const ManageOrders = ({ showUpdateORDER_STATEModal, handleShowModal }) => {
  const [data, setData] = useState();
  const addData = async () => {
    await getDocs(collection(db, "orders")).then((response) => {
      const responsedData = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(responsedData);
    });
  };

  const handleShowUpdateOrderState = (e, orderId) => {
    if (e.target.checked) {
      showUpdateORDER_STATEModal(orderId);
    }
  };

  useEffect(() => {
    addData();
  }, []);

  return (
    <div className="sm:p-5 rounded-lg shadow-lg">
      {data?.map((order, index) => {
        return (
          <div
            className="relative sm:h-[306px] md:h-[344px] lg:h-[313px] mb-12 sm:mb-8"
            key={index}
          >
            <div className="sm:absolute sm:left-[50%] w-full sm:w-[300px] top-[-35px] sm:top-[-25px] rounded-sm sm:translate-x-[-50%] z-10 px-5 py-3 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex justify-center items-center gap-1">
              <input
                id="delivered"
                type="checkbox"
                onChange={(e) => handleShowUpdateOrderState(e, order.id)}
              />
              <label htmlFor="delivered">Update Order State</label>|
              <button
                onClick={() => handleShowModal(order.id)}
                className="bg-red-500 px-4 text-white p-1 rounded-md"
              >
                Delete
              </button>
            </div>
            <img
              className="hidden sm:block w-full h-full opacity-200"
              src={yellowandblackstripe}
              alt="yellowandblackstripe"
            />
            <div
              key={index}
              className="sm:rounded-none bg-[#f7e2e2] shadow-sm sm:shadow-none sm:bg-white sm:absolute sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] p-4 md:flex w-full sm:w-[95%] "
            >
              <div className="flex-1 sm:basis-[60%] text-slate-800 flex flex-col gap-1">
                <h1>
                  Product name: <b>{order.productName}</b>
                </h1>
                <p>
                  Product price: <b>${order.totalAmount}</b>
                </p>
                <p>
                  Amount: <b>{order.productAmount}</b>
                </p>
                <p>
                  Colors:{" "}
                  <b>
                    {order.productColors.map((color, i) => {
                      return (
                        <span
                          className="px-1 bg-white py-1 mr-2 rounded-lg"
                          key={i}
                        >
                          {color}
                        </span>
                      );
                    })}
                  </b>
                </p>
                <p>
                  Delivery method: <b>{order.deliveryMethod}</b>
                </p>
                <p>
                  Customer:<b> {order.username}</b>
                </p>
                <p>
                  Address: <b>{order.address}</b>
                </p>
                <p>
                  Phone: <b>{order.phone}</b>
                </p>
                <p>
                  Product ID:{" "}
                  <span className="bg-slate-100 px-2 py-1 rounded-sm">
                    {" "}
                    {order.productId}
                  </span>
                </p>
              </div>
              <div className="hidden w-full basis-[40%] md:flex justify-center items-center">
                <div className="w-[200px] h-[200px]">
                  <img
                    src={order.imageURL}
                    alt={order.productName}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ManageOrders;
