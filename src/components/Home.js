import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase_setup/firebase";
import ShoppingCart from "./ShoppingCart";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [data, setData] = useState();
  const [shoppingCartData, setShoppingCartData] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUserName] = useState('');

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

  const handleLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    if (state) {
      setIsLogin(true);
      setUserName(state);
    }
  }, []);

  useEffect(() => {
      const loggedInAccount = JSON.parse( localStorage.getItem('loggedInAccount'));
      if(loggedInAccount){
          setIsLogin(true);
          setUserName(loggedInAccount);
      }
  }, []);
  return (
    <div>
      <div>
        Nav bar
        {isLogin && <h1>{username.username}</h1>}
        {!isLogin && (
          <button style={{ background: "blue" }} onClick={handleLogin}>
            Login
          </button> 
        )}
       {isLogin &&  <Link to='/login'><button style={{background: 'red'}}>Use another account</button></Link>}
      </div>
      <div>Banner</div>
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
      <ShoppingCart products={shoppingCartData} user={username}/>
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
