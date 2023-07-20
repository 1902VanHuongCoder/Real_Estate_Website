import Banner from "./Home/Banner";
import Footer from "./Home/Footer";
import Products from "./Home/Products";
import NavbarWithDropdown from "./Home/Navbar";
import ShoppingCart from "./Home/ShoppingCart";
import { db } from "../firebase_setup/firebase";
import React, { useEffect, useState } from "react";
import { collection, getDocs} from "firebase/firestore";
import { useLocation} from "react-router-dom";
import { toast } from "https://cdn.skypack.dev/wc-toast";
const Home = () => {
  const { state } = useLocation();
  const [data, setData] = useState();
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
      toast.success("You have just added this product into shopping cart");
    } else {
      toast.error("This product has already been shopping cart!");
    }
  };

  const handleRemoveProductOutOfShoppingCart = (id) => {
    const filterdData = shoppingCartData.filter((product) => product.id !== id);
    setShoppingCartData(filterdData);
  };

  const handleSignOut = () => {
      setIsLogin(false);
      localStorage.removeItem('loggedInAccount');
      window.location.reload(true);
  }
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

  return (
    <div className="relative">
      <wc-toast></wc-toast>
      <NavbarWithDropdown username={username.username} isLogged={isLogin} handleSignOut={handleSignOut} />
      <Banner data={data} username={username.username} isLogged={isLogin} />
      <ShoppingCart
        products={shoppingCartData}
        user={username}
        handleRemoveProductOutOfShoppingCart={
          handleRemoveProductOutOfShoppingCart
        }
        isLogin={isLogin}
      />
      <Products data={data} handleAddProduct={handleAddProduct} />
      <Footer />
    </div>
  );
};
export default Home;
