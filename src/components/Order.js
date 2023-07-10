import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase_setup/firebase";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Order = () => {
  const [transportFee, setTransportFee] = useState(10);
  const [amount, setAmount] = useState(1);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("On delivery");
  const [totalAmount, setTotalAmount] = useState();
  const [colorIsChoosed, setColorIsChoosed] = useState([]);

  console.log(deliveryMethod);

  const { state } = useLocation();
  const handleDecreAmount = () => {
    if (amount > 1) {
      setAmount((pre) => pre - 1);
    }
  };

  const handleIncreAmount = () => {
    setAmount((pre) => pre + 1);
  };

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

  useEffect(() => {
    setTotalAmount(state.productPrice * amount + transportFee);
  }, [amount, transportFee, state.productPrice]);

  const order = async () => {
    await addDoc(collection(db, "orders"), {
      productName: state.productName,
      productAmount: amount,
      totalAmount: totalAmount,
      address: address,
      phone: phone,
      productColors: colorIsChoosed,
      deliveryMethod: deliveryMethod,
    });
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
              {state.productColors.map((item, i) => {
                return (
                  <label key={i}>
                    <input
                      type="checkbox"
                      value={item}
                      onChange={handleChooseColor}
                    />
                    {item}
                  </label>
                );
              })}
            </div>
          </div>

          <div>
            <h2>Choose Payment Method</h2>
            <select onChange={(e) => setDeliveryMethod(e.target.value)}>
              <option value="On delivery">On delivery</option>
              <option value="Bank">Bank</option>
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
                value={phone}
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
          </div>

          <div>
            <h2>Total amount: </h2>
            {totalAmount}$
          </div>
          <button onClick={order}>Order</button>
        </div>
      </div>
    </>
  );
};

export default Order;
