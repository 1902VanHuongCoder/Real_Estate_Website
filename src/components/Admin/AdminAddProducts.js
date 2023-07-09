import React, { useState } from "react";
import { db } from "../../firebase_setup/firebase";
import { addDoc, collection } from "firebase/firestore";
import UploadImage from "./UploadImage";
const colors = [
  "blue",
  "Yellow",
  "Red",
  "Milk Yellow",
  "Purple",
  "Black",
  "Brown",
  "White",
  "Light Black",
  "Green",
];
const AdminAddProducts = () => {
  const [stt, setStt] = useState("");
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [url, setUrl] = useState("");
  const [productColors, setProductColors] = useState([]);

  const handleChooseColorsForProduct = (e) => {
        let colorHaveAlready = productColors.find((color) => e.target.value === color);
        if(colorHaveAlready){
            const newColors = productColors.filter((color) => color !== e.target.value);
            setProductColors(newColors);
        }else{
          setProductColors([...productColors, e.target.value]);
        }
  };

  const addProduct = async () => {
    await addDoc(collection(db, "products"), {
      stt: stt,
      productName: productName,
      productType: productType,
      productPrice: productPrice,
      imageURL: url,
      productColors: productColors,
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
      <h2>Choose colors of product</h2>
      {colors.map((color, i) => {
        return (
          <label key={i}>
            <input
              value={color}
              type="checkbox"
              onChange={handleChooseColorsForProduct}
            />
            <span>{color}</span>
          </label>
        );
      })}
      <br />

      <UploadImage setUrl={setUrl} />
      <br />
      <button onClick={addProduct}>Sign In</button>
    </div>
  );
};

export default AdminAddProducts;
