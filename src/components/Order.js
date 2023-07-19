import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase_setup/firebase";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NavbarWithDropdown from "./Home/Navbar";

import { toast } from "https://cdn.skypack.dev/wc-toast";
const Order = () => {
  const { state } = useLocation();
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState(1);
  const [address, setAddress] = useState("");
  const [totalAmount, setTotalAmount] = useState();
  const [transportFee, setTransportFee] = useState(10);
  const [colorIsChoosed, setColorIsChoosed] = useState([]);
  const [deliveryMethod, setDeliveryMethod] = useState("On delivery");

  // Choose amount of products ==> //
  const handleDecreAmount = () => {
    if (amount > 1) {
      setAmount((pre) => pre - 1);
    }
  };
  const handleIncreAmount = () => {
    setAmount((pre) => pre + 1);
  };

  // <===

  // Choose colors of products ===> //
  const handleChooseColor = (e) => {
    let color = colorIsChoosed.find((color) => color === e.target.value);
    if (color) {
      const remainingColors = colorIsChoosed.filter(
        (color) => color !== e.target.value
      );
      setColorIsChoosed(remainingColors);
    } else {
      setColorIsChoosed([...colorIsChoosed, e.target.value]);
    }
  };
  //<===

  // Calculate total money automatically ==>
  useEffect(() => {
    setTotalAmount(state[0].productPrice * amount + transportFee);
  }, [amount, transportFee, state]);
  //<===

  // When user hit submit, will set these datas to database (firestore - firebase) ===>
  const order = async () => {
    if (address === "" || phone === "" || colorIsChoosed.length < 0) {
      toast.error("Order isn't success! Check your order");
    } else {
      await addDoc(collection(db, "orders"), {
        phone: phone,
        address: address,
        productId: uuidv4(),
        productAmount: amount,
        totalAmount: totalAmount,
        username: state[1].username,
        imageURL: state[0].imageURL,
        productColors: colorIsChoosed,
        deliveryMethod: deliveryMethod,
        productName: state[0].productName,
      });
      toast.success("Order success");
    }
  };
  // <===

  return (
    <>
      <wc-toast></wc-toast>
      <NavbarWithDropdown username={state[1].username} isLogged={state[2]} />
      <div className="w-10/12 bg-slate-100 mx-auto rounded large">
        <h1 className="py-4 px-10 font-medium text-[#ee4d2d] text-2xl">
          Order
        </h1>
        <div className="w-[90%] bg-white mx-auto rounded-lg">
          <h2 className="font-medium py-5 px-5"># Product Image</h2>
          <div className="w-full flex justify-center items-center">
            <img
              src={state[0].imageURL}
              alt={state[0].productName}
              width={200}
              height={200}
            />
          </div>
          <div className="flex justify-start items-center">
            <h2 className="font-medium py-5 px-5"># Product Name</h2>
            <p>{state[0].productName}</p>
          </div>
          <div className="flex justify-start items-center">
            <h2 className="font-medium py-5 px-5"># Product Price</h2>
            <p>${state[0].productPrice}</p>
          </div>
          <div className="flex justify-start items-center">
            <h2 className="font-medium py-5 px-5"># Amount of products</h2>
            <div>
              <button
                className="w-[2.5rem] h-fit border border-solid border-gray-400"
                onClick={handleDecreAmount}
              >
                -
              </button>
              <span className="px-4">{amount}</span>
              <button
                className="w-[2.5rem] h-fit border border-solid border-gray-400"
                onClick={handleIncreAmount}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex justify-start items-center">
            <h2 className="font-medium py-5 px-5"># Choose Color </h2>
            <div className="flex items-center justify-center gap-4">
              {state[0].productColors.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex justify-center items-center gap-1"
                  >
                    <input
                      type="checkbox"
                      value={item}
                      onChange={handleChooseColor}
                    />
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-start items-center">
            <h2 className="font-medium py-5 px-5"># Choose Delivery Method</h2>
            <select onChange={(e) => setDeliveryMethod(e.target.value)}>
              <option value="On delivery">On delivery</option>
              <option value="Bank">Bank</option>
            </select>
          </div>

          <div className="mb-4">
            <h2 className="font-medium py-5 px-5">
              # Enter your address and phone
            </h2>
            <div className="w-fit mx-auto bg-neutral-200 p-4">
              <div className="flex gap-2 items-center justify-between">
                <label className="">Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <br />
              <div className="flex gap-2 items-center justify-between">
                <label>Phone</label>
                <input
                  type="text"
                  value={phone}
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center p-2">
            <div className="flex justify-start items-center">
              <h2 className="font-semibold py-5 px-5 text-[#ee4d2d] text-2xl">
                # Total
              </h2>
              <p className="text-2xl">${totalAmount}</p>
            </div>
            <button
              onClick={order}
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
    </>
  );
};

export default Order;
