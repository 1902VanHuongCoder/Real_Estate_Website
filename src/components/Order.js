import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase_setup/firebase";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const Order = () => {
  const { state } = useLocation();
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState(1);
  const [address, setAddress] = useState("");
  const [totalAmount, setTotalAmount] = useState();
  const [orderHistory, setOrderHistory] = useState([]);
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

  //Retrieve user's order history from database ===>
  const getOrderedHistory = async () => {
    const collection_ref = collection(db, "orders");
    const q = query(collection_ref, where("username", "==", state[1].username));
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
  };
  useEffect(() => {
    getOrderedHistory();
  }, []);
  //<====

  // When user hit submit, will set these datas to database (firestore - firebase) ===>
  const order = async () => {
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
  };
  // <===

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
          <img src={state[0].imageURL} alt={state[0].productName} />
          <h2>{state[0].productName}</h2>
          <p>Price: {state[0].productPrice}</p>
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
              {state[0].productColors.map((item, i) => {
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

        <div>
          <h1>Order history</h1>
          {orderHistory.length > 0 ? (
            orderHistory?.map((order, i) => {
              return (
                <div key={i}>
                  <h1>{order.productName}</h1>
                  <img src={order.imageURL} alt={order.productName} />
                  <p>Amount: {order.productAmount}</p>
                  <p>
                    Colors:{" "}
                    {order.productColors.map((color, index) => {
                      return <span key={index}>{color}</span>;
                    })}
                  </p>
                  <h2>Total amount: {order.totalAmount} $</h2>
                </div>
              );
            })
          ) : (
            <h1> You haven't bought anything!</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Order;
