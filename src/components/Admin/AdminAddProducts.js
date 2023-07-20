import React, { useState } from "react";
import { db } from "../../firebase_setup/firebase";
import { addDoc, collection } from "firebase/firestore";
import UploadImage from "./UploadImage";
import { useForm } from "react-hook-form";
import { toast } from "https://cdn.skypack.dev/wc-toast";
const colorsobj = [
  "Blue",
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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [url, setUrl] = useState("");
  const [productColors, setProductColors] = useState([]);

  const [color, setColor] = useState("");

  const [colors, setColors] = useState(colorsobj);
  const handleChooseColorsForProduct = (e) => {
    let colorHaveAlready = productColors.find(
      (color) => e.target.value === color
    );
    if (colorHaveAlready) {
      const newColors = productColors.filter(
        (color) => color !== e.target.value
      );
      setProductColors(newColors);
    } else {
      setProductColors([...productColors, e.target.value]);
    }
  };

  const addProduct = async (data) => {
    await addDoc(collection(db, "products"), {
      stt: data.stt,
      productName: data.productName,
      productType: data.productType,
      productPrice: data.productPrice,
      imageURL: url,
      productColors: productColors,
    });
    toast.success("Add product success");
    window.location.reload(true);
  };

  const handleAddProductColor = () => {
    let colorHaveAlready = colors.find(
      (cl) => cl.toLocaleLowerCase() === color.toLocaleLowerCase()
    );
    if (color !== "" && !colorHaveAlready) {
      setColors([...colors, color]);
    } else {
      return;
    }
  };
  return (
    <div
      className="p-5 rounded-lg shadow-lg"
    >
      <div className="w-full mb-5 sm:mb-1 sm:w-[60%] sm:flex justify-between items-center mx-auto ">
        <label htmlFor="stt">1. STT</label>
        <input
          className="w-full sm:w-[206px]"
          type="number"
          placeholder="stt"
          id="stt"
          // name="stt"
          {...register("stt", {
            required: "* This field is required!",
          })}
        />
      </div>
      <div className="text-[red] py-2 w-full sm:w-[60%] text-right mx-auto">
        {errors.stt && errors.stt.message}
      </div>

      <div className="w-full mb-5 sm:mb-1 sm:w-[60%] sm:flex justify-between items-center mx-auto ">
        <label htmlFor="productName">2. Product Name</label>
        <input
          className="w-full sm:w-[206px]"
          type="text"
          placeholder="product name"
          id="productName"
          // name="productName"
          {...register("productName", {
            required: "* This field is required!",
            maxLength: {
              value: 100,
              message: "* Product name have to shorter than 100 characters",
            },
            minLength: {
              value: 8,
              message: "* Product name have to longer than 15 characters",
            },
          })}
        />
      </div>
      <div className="text-[red] py-2 w-full sm:w-[60%] text-right mx-auto">
        {errors.productName && errors.productName.message}
      </div>

      <div className="w-full mb-5 sm:mb-1 sm:w-[60%]  sm:flex justify-between items-center mx-auto ">
        <label htmlFor="productType">3. Product Category</label>
        <input
          className="w-full sm:w-[206px]"
          type="text"
          placeholder="product type"
          id="productType"
          // name="productType"
          {...register("productType", {
            required: "* This field is required!",
            maxLength: {
              value: 100,
              message: "* Product type have to shorter than 40 characters",
            },
            minLength: {
              value: 4,
              message: "* Product type have to longer than 8 characters",
            },
          })}
        />
      </div>
      <div className="text-[red] py-2 w-full sm:w-[60%] text-right mx-auto">
        {errors.productType && errors.productType.message}
      </div>

      <div className="w-full mb-1 sm:mb-1 sm:w-[60%] sm:flex justify-between items-center mx-auto ">
        <label htmlFor="productPrice">4. Product Price</label>
        <input
          className="w-full sm:w-[206px]"
          type="number"
          placeholder="product price"
          id="productPrice"
          // name="productPrice"
          {...register("productPrice", {
            required: "* This field is required!",
          })}
        />
      </div>
      <div className="text-[red] py-2 w-full sm:w-[60%] text-right mx-auto">
        {errors.productPrice && errors.productPrice.message}
      </div>

      <div>
        <h2>5. Choose colors of product</h2>
        {colors.map((color, i) => {
          return (
            <label key={i} className="mr-5" htmlFor={i + color}>
              <input
                id={i + color}
                value={color}
                type="checkbox"
                onChange={handleChooseColorsForProduct}
              />
              <span> {color}</span>
            </label>
          );
        })}
        <div className="bg-slate-100 my-5 sm:flex sm:flex-row items-center sm:gap-4 p-3 justify-center ">
          <label htmlFor="addColor">Enter the color of product</label>
          <input
            id="addColor"
            type="text"
            placeholder="Color..."
            className="w-full sm:w-[206px]"
            onChange={(e) => setColor(e.target.value)}
          />
          <button
            onClick={handleAddProductColor}
            className="mt-2 sm:mt-0 py-2 px-3 text-white bg-[blue] hover:opacity-50"
          >
            Choose
          </button>
        </div>
      </div>

      <UploadImage setUrl={setUrl} />
      <hr />
      <div className="py-5 w-full text-center">
        <button
          onClick={handleSubmit(addProduct)}
          className="mt-2 sm:mt-0 py-2 px-3 text-white bg-[blue] hover:opacity-50"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AdminAddProducts;
