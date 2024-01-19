import Banner from "./Home/Banner";
import Footer from "./Home/Footer";
import Products from "./Home/Products";
import NavbarWithDropdown from "./Home/Navbar";
import ShoppingCart from "./Home/ShoppingCart";
import { db } from "../firebase_setup/firebase";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import Loading from "./Loading";
import { useToast } from "rc-toastr";
import Feeback from "./Home/Feeback";

import { useContext } from "react";
import { LoginContext } from "./Context/LoginContext";
import { AppContext } from "./Context/AppContext";
import Navbar1 from "./Home/Navbar1";
import Sidebar from "./Home/Sidebar";
import UserBox from "./Home/UserBox";
const Home = () => {
  const { account, setAccount } = useContext(AppContext);
  const { isLogin, func } = useContext(LoginContext);

  const { toast } = useToast();
  const [data, setData] = useState();
  const [shoppingCartData, setShoppingCartData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    await getDocs(collection(db, "products")).then((response) => {
      const dataResponsed = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(dataResponsed);
    });
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleAddProduct = (id) => {
    const haveProduct = shoppingCartData.find((item) => item.id === id);
    if (!haveProduct) {
      const product = data.filter((item) => item.id === id);
      setShoppingCartData([...shoppingCartData, product[0]]);
      toast("You have just added this product into shopping cart");
    } else {
      toast("This product has already been shopping cart!");
    }
  };

  const handleRemoveProductOutOfShoppingCart = (id) => {
    const filterdData = shoppingCartData.filter((product) => product.id !== id);
    setShoppingCartData(filterdData);
  };

  useEffect(() => {
    if (!isLogin) {
      const loggedInAccount = JSON.parse(
        localStorage.getItem("loggedInAccount")
      );
      if (loggedInAccount) {
        func(true);
        setAccount(loggedInAccount);
      }
    }
  }, [isLogin]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="relative max-w-[1200px] mx-auto">
          <Navbar1 />
          <Sidebar />
          <UserBox />
          <NavbarWithDropdown />
          <Banner data={data} />
          <ShoppingCart
            products={shoppingCartData}
            handleRemoveProductOutOfShoppingCart={
              handleRemoveProductOutOfShoppingCart
            }
          />
          <Products data={data} handleAddProduct={handleAddProduct} />
          <Feeback />
          <Footer />
        </div>
      )}
    </>
  );
};
export default Home;
