import React from "react";
import { db } from "../../firebase_setup/firebase";
import { updateDoc, doc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
function Edit({ productId, handleCloseUpdateModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const update = async (data) => {
    await updateDoc(doc(db, "products", productId), {
      productName: data.uproductName,
      productType: data.uproductType,
      productPrice: data.uproductPrice,
    });
    // toast.success("Update product success");
    // Here will show user success notifications
    reset();
    window.location.reload(true);
  };

  return (
    <div className="fixed w-screen h-screen bg-[rgba(0,0,0,.3)] z-20 flex justify-center items-center">
      <div
        className="relative bg-white w-[250px] sm:w-[350px] h-fit rounded-lg overflow-hidden"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        <div
          onClick={handleCloseUpdateModal}
          className="absolute top-3 right-3 text-2xl text-[red]"
        >
          <IoMdCloseCircle />
        </div>
        <h1 className="py-5 w-full text-center bg-green-300 font-medium">
          Update Product
        </h1>
        <div className="w-full p-5">
          <div className="flex mb-1 flex-col sm:flex-row justify-between items-center">
            <label htmlFor="uproductName" className="hidden sm:block">
              Name
            </label>
            <input
              id="uproductName"
              // name="uproductName"
              type="text"
              placeholder="Product name"
              {...register("uproductName", {
                required: "* This field is required",
                minLength: {
                  value: 5,
                  message: "* Product name have to longer than 5 characters",
                },
                maxLength: {
                  value: 40,
                  message: "* Product name have to shorter than 40 characters",
                },
              })}
            />
          </div>
          {errors.uproductName && (
            <div className="text-[red] py-1 text-sm">
              {errors.uproductName && errors.uproductName.message}
            </div>
          )}
          <div className="flex mb-1 flex-col sm:flex-row justify-between items-center">
            <label htmlFor="uproductType" className="hidden sm:block">
              Type
            </label>
            <input
              id="uproductType"
              // name="producType"
              type="text"
              placeholder="Product type"
              {...register("uproductType", {
                required: "* This field is required",
                minLength: {
                  value: 3,
                  message: "* Product type have to longer than 3 characters",
                },
                maxLength: {
                  value: 20,
                  message: "* Product type have to shorter than 20 characters",
                },
              })}
            />
          </div>
          {errors.uproductType && (
            <div className="text-[red] py-1 text-sm">
              {errors.uproductType.message}
            </div>
          )}
          <div className="flex mb-1 flex-col sm:flex-row justify-between items-center">
            <label htmlFor="uproductPrice" className="hidden sm:block">
              Price
            </label>
            <input
              id="uproductPrice"
              // name="uproductPrice"
              type="number"
              placeholder="Product price"
              {...register("uproductPrice", {
                required: "* This field is required",
              })}
            />
          </div>
          {errors.uproductPrice && (
            <div className="text-[red] py-1 text-sm">
              {errors.uproductPrice.message}
            </div>
          )}
        </div>
        <hr />
        <div className="w-full py-4 font-medium text-center">
          <button
            className="bg-[blue] text-white py-1 px-4"
            onClick={handleSubmit(update)}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
