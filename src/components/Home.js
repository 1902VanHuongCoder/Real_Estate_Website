import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase_setup/firebase";
import ShoppingCart from "./ShoppingCart";

const Home = () => {
  const [data, setData] = useState();
  const [shoppingCartData, setShoppingCartData] = useState([]);

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
    }else{
      alert('This product has already been shopping cart!');
    }
  };
  return (
    <div>
      <div>Nav bar</div>
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
      <ShoppingCart products={shoppingCartData} />
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
