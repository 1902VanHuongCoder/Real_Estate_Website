import React, { useEffect, useState } from "react";
import { db } from "../../firebase_setup/firebase";
import Edit from "./AdminEdit";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import AdminAddProducts from "./AdminAddProducts";
import { useLocation, useNavigate } from "react-router-dom";
const Admin = () => {
  const { state } = useLocation();

  const [data, setData] = useState();
  const [edit, setEdit] = useState(false);
  const [productId, setProductId] = useState("");
  const [loggedin, setLoggedIn] = useState(false);

  const navigate = useNavigate();
  const handleEdit = (id) => {
    setEdit(true);
    setProductId(id);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
    window.location.reload(true);
  };

  const addData = async () => {
    await getDocs(collection(db, "products")).then((response) => {
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

  useEffect(() => {
    if (state) {
      setLoggedIn(true);
    } else {
      navigate("/admin/login");
    }
  }, []);
  return (
    loggedin && (
      <div className="relative">
        <div className="fixed w-screen h-screen bg-[rgba(0,0,0,.3)] z-10">{edit && <Edit productId={productId} />}</div>
        <div className="container bg-slate-50 min-h-screen mx-auto">
          <h1 className="w-full text-center uppercase font-medium text-xl py-2 text-[#ee4d2d]">
            Admin Dashboard
          </h1>
          <div className="w-full lg:w-[80%] lg:mx-auto bg-white rounded-lg p-3 shadow-lg">
            <h2 className="font-medium py-5 px-5"># All products</h2>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      colors
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((product, i) => {
                    return (
                      <tr
                        className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                        key={i}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {product.productName}
                        </th>
                        <td className="px-6 py-4">
                          {product.productColors.map((color, index) => {
                            return <p key={index}>{color}</p>;
                          })}
                        </td>
                        <td className="px-6 py-4">{product.productType}</td>
                        <td className="px-6 py-4">${product.productPrice}</td>
                        <td className="px-6 py-4">
                          <button
                            className="w-full bg-[blue] px-0 py-1 text-white mb-1 hover:opacity-50"
                            onClick={() => {
                              handleEdit(product.id);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="w-full bg-[red] px-0 py-1 text-white hover:opacity-50"
                            onClick={() => handleDelete(product.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <h2 className="font-medium py-5 px-5 mt-5"># Add products</h2>
            <AdminAddProducts />
          </div>
        </div>
      </div>
    )
  );
};

export default Admin;
