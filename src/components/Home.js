import ShoppingCart from "./ShoppingCart";
import { db } from "../firebase_setup/firebase";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";
import UserProfile from "./UserProfile";
import NavbarWithDropdown from "./Home/Navbar";
import Banner from "./Home/Banner";
const Home = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [data, setData] = useState();
  const [showOrderHistory, setShowOrderHistory] = useState(false);
  const [orderHistory, setOrderHistory] = useState([]);
  const [shoppingCartData, setShoppingCartData] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUserName] = useState("");

  const fetchData = async () => {
    await getDocs(collection(db, "products")).then((response) => {
      const dataResponsed = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(dataResponsed);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleAddProduct = (id) => {
    const haveProduct = shoppingCartData.find((item) => item.id === id);
    if (!haveProduct) {
      const product = data.filter((item) => item.id === id);
      setShoppingCartData([...shoppingCartData, product[0]]);
    } else {
      alert("This product has already been shopping cart!");
    }
  };

  const handleRemoveProductOutOfShoppingCart = (id) => {
    const filterdData = shoppingCartData.filter((product) => product.id !== id);
    setShoppingCartData(filterdData);
  };

  useEffect(() => {
    if (state) {
      setIsLogin(true);
      setUserName(state);
    }
  }, []);

  useEffect(() => {
    const loggedInAccount = JSON.parse(localStorage.getItem("loggedInAccount"));
    if (loggedInAccount) {
      setIsLogin(true);
      setUserName(loggedInAccount);
    }
  }, []);

  //Retrieve user's order history from database ===>
  const getOrderedHistory = async () => {
    const collection_ref = collection(db, "orders");
    const q = query(collection_ref, where("username", "==", username.username));
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

  const handleShowOrderHistory = () => {
    getOrderedHistory();
    setShowOrderHistory(!showOrderHistory);
  };
  //<====

  return (
    <div>
      <NavbarWithDropdown username={username.username} isLogged={isLogin}/>
      <Banner />
      <div>
        <h1>Products</h1>
        <ul style={{ display: "flex" }}>
          {data?.map((data, i) => {
            return (
              <li key={i}>
                Product Name: {data.productName} | Price: {data.productPrice} |
                Type: {data.productType}
                <img
                  src={data.imageURL}
                  alt={data.productName}
                  width={100}
                  height={100}
                />
                <button
                  style={{ background: "#ee4d2d", borderRadius: "5px" }}
                  onClick={() => handleAddProduct(data.id)}
                >
                  Add product
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <h1>Shopping Cart</h1>
      <ShoppingCart
        products={shoppingCartData}
        user={username}
        handleRemoveProductOutOfShoppingCart={
          handleRemoveProductOutOfShoppingCart
        }
      />
      <UserProfile
        username={username.username}
        isLogin={isLogin}
        handleShowOrderHistory={handleShowOrderHistory}
      />
      {showOrderHistory ? <div style={{border: '1px solid black'}}>
          {orderHistory.map((order, i) => {
            return(
              <div key={i}>
                <h2>{order.productName}</h2>
                <img src={order.imageURL} alt={order.productName}  width={100} height={100}/>
                <p>Total amount: {order.totalAmount}</p>
                <p>Amount: {order.productAmount}</p>
                <p>Delivery: {order.deliveryMethod}</p>
              </div>
            )
          })}
      </div> : <div></div>}
    </div>
  );
};
// {
//   return (
//     <li key={i}>
//       Product Name: {data.productName} | Price: {data.productPrice} |
//       Type: {data.productType}
//       <img src={data.imageURL} alt={data.productName} />
//     </li>
//   );
// }
export default Home;

