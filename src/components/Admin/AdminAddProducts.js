import React, { useState } from "react";
import { db } from "../../firebase_setup/firebase";
import { addDoc, collection } from "firebase/firestore";
import UploadImage from "./UploadImage";

const AdminAddProducts = () => {
  const [stt, setStt] = useState("");
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [url, setUrl] = useState("");

  console.log(url);
  const addProduct = async () => {
    await addDoc(collection(db, "products"), {
      stt: stt,
      productName: productName,
      productType: productType,
      productPrice: productPrice,
      imageURL: url,
    });
  };
  return (
    <div>
      <h1>Add products</h1>
      <label>
        STT
        <input
          type="text"
          placeholder="stt"
          id="stt"
          onChange={(e) => setStt(e.target.value)}
        />
      </label>
      <br />
      <label>
        Product Name
        <input
          type="text"
          placeholder="product name"
          id="productName"
          onChange={(e) => setProductName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Product Type
        <input
          type="text"
          placeholder="product type"
          id="productType"
          onChange={(e) => setProductType(e.target.value)}
        />
      </label>
      <br />
      <label>
        Product Price
        <input
          type="number"
          placeholder="product price"
          id="productPrice"
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </label>
      <br />
      <UploadImage setUrl={setUrl}/>
      <br />
      <button onClick={addProduct}>Sign In</button>
    </div>
  );
};

export default AdminAddProducts;
