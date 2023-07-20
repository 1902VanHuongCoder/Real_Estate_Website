import React, { useEffect, useState } from "react";
import { db } from "../../firebase_setup/firebase";
import { collection, getDocs } from "firebase/firestore";
import "aos/dist/aos.css";
const ManageOrders = () => {
  const [data, setData] = useState();
  const addData = async () => {
    await getDocs(collection(db, "orders")).then((response) => {
      const responsedData = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(responsedData);
    });
  };

  useEffect(() => {
    addData();
  }, []);

  return <div className="p-5 rounded-lg shadow-lg">
    {data?.map((order, index) => {
        return(
            <div key={index} className="p-4 md:flex mb-4 hover:shadow-lg bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400 rounded-lg transition-shadow duration-150">
                <div className="flex-1 sm:basis-[60%] text-slate-800 flex flex-col gap-1">
                    <h1>Product name: <b>{order.productName}</b></h1>
                    <p>Product price: <b>${order.totalAmount}</b></p>
                    <p>Amount: <b>{order.productAmount}</b></p>
                    <p>Colors: <b>{order.productColors.map((color, i) => {
                        return(
                            <span className="px-1 bg-white py-1 mr-2 rounded-lg" key={i}>{color}</span>
                        )
                    })}</b></p>
                    <p>Delivery method: <b>{order.deliveryMethod}</b></p>
                    <p>Customer:<b> {order.username}</b></p>
                    <p>Address: <b>{order.address}</b></p>
                    <p>Phone:  <b>{order.phone}</b></p>
                    <p>Product ID: <span className="bg-slate-100 px-2 py-1 rounded-sm"> {order.productId}</span></p>
                </div>
                <div className="hidden w-full basis-[40%] md:flex justify-center items-center">
                        <div className="w-[200px] h-[200px]">
                        <img src={order.imageURL} alt={order.productName} className="w-full h-full"/>
                        </div>
                </div>
            </div>
        )
    })}
  </div>;
};

export default ManageOrders;
