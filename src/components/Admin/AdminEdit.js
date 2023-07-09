import React, { useEffect, useState } from "react";
import { db } from "../../firebase_setup/firebase";
import { updateDoc, doc } from "firebase/firestore";

function Edit({ productId }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  const update = async () => {
    await updateDoc(doc(db, "products", productId), {
      productName: name,
      productType: type,
      productPrice: price,
    });
  };

  return (
    <div>
      <label>
        Name:{" "}
        <input
          type="text"
          placeholder="product name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Type:{" "}
        <input
          type="text"
          placeholder="product type"
          onChange={(e) => setType(e.target.value)}
        />
      </label>
      <label>
        Price:{" "}
        <input
          type="text"
          placeholder="product price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <button onClick={update}>Update</button>
    </div>
  );
}

export default Edit;
