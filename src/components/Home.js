import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase_setup/firebase";

const Home = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    await getDocs(collection(db, "products")).then((response) => {
      const dataResponsed = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(dataResponsed);
      console.log(dataResponsed);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div>Nav bar</div>
      <div>Banner</div>
      <div>
        <h1>Products</h1>
        <ul>
          {data?.map((data, i) => {
              if(data.productType === 'shirt'){
                return(
                  <li key={i}>Product Name: {data.productName} | Price: {data.productPrice} |
       Type: {data.productType}
      <img src={data.imageURL} alt={data.productName} /></li>
                )
              }else{
                return null;
              }
          })}
        </ul>
      </div>
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
