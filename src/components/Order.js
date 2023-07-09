import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const Order = () => {
  const [transportFee, setTransportFee] = useState(10);
  const [amount, setAmount] = useState(1);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [totalAmount, setTotalAmount] = useState();

  
  const { state } = useLocation();
  const handleDecreAmount = () => {
    if (amount > 1) {
      setAmount((pre) => pre - 1);
    }
  };

  const handleIncreAmount = () => {
    setAmount((pre) => pre + 1);
  };
  return (
    <>
      <div>
        <h1>Order</h1>
        <div
          style={{
            border: "1px solid black",
            width: "400px",
            height: "fit-content",
          }}
        >
          <img src={state.imageURL} alt={state.productName} />
          <h2>{state.productName}</h2>
          <p>Price: {state.productPrice}</p>
          <button
            style={{
              border: "1px solid black",
              width: "50px",
              height: "fit-content",
            }}
            onClick={handleDecreAmount}
          >
            -
          </button>
          <span>{amount}</span>
          <button
            style={{
              border: "1px solid black",
              width: "50px",
              height: "fit-content",
            }}
            onClick={handleIncreAmount}
          >
            +
          </button>

          <div>
            <h2>Choose your color:</h2>
            <div>
              <label>
                Yellow <input type="checkbox" />
              </label>
              <label>
                Blue <input type="checkbox" />
              </label>
              <label>
                Red <input type="checkbox" />
              </label>
            </div>
          </div>

          <div>
            <h2>Choose Payment Method</h2>
            <select>
              <option>On delivery</option>
            </select>
          </div>

          <div>
            <h2>Enter your address and phone</h2>
            <label>
              Address{" "}
              <input
                type="text"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
            <br />
            <label>
              Phone{" "}
              <input
                type="text"
                placeholder="Phone"
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
          </div>

          <div>
            <h2>Total amount: </h2>
            {state.productPrice * amount + transportFee}$
          </div>
          <button>Order</button>
        </div>
      </div>
    </>
  );
};

export default Order;
