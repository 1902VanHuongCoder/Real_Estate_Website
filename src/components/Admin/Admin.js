import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "../Modal";
import Edit from "./AdminEdit";
import ManageOrders from "./ManageOrders";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase_setup/firebase";
import AdminAddProducts from "./AdminAddProducts";
import UpdateOderState from "./AdminUpdateOrderState";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
const Admin = () => {
  const { state } = useLocation(); // Contain Admin's login infomations

  const [data, setData] = useState(); // retrieve datas from firebase
  const [edit, setEdit] = useState(false); // toggle editing product modal
  const [productId, setProductId] = useState(); // write ID of product
  const [loggedin, setLoggedIn] = useState(false);
  const [showUpdateORDER_STATEModal, setShowUpdateORDER_STATEModal] =
    useState(false);
  const [
    showAcceptingDeleting_PRODUCT_Modal,
    setShowAcceptingDeleting_PRODUCT_Modal,
  ] = useState(false);
  const [
    showAcceptingDeleting_ORDER_Modal,
    setShowAcceptingDeleting_ORDER_Modal,
  ] = useState(false);
  const [orderId, setOrderId] = useState();

  const navigate = useNavigate();

  const handleEdit = (id) => {
    setProductId(id);
    setEdit(true);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
    window.location.reload(true);
  };

  const handleCloseUpdateModal = () => {
    setEdit(false);
  };
  const handleShowUpdateORDER_STATEModal = (id) => {
    setOrderId(id);
    setShowUpdateORDER_STATEModal(true);
  };

  const handleCloseUpdateOrderStateModal = (e) => {
    e.stopPropagation();
    setShowUpdateORDER_STATEModal(false);
  };

  const handleDeleteOrder = async (id) => {
    await deleteDoc(doc(db, "orders", id));
    window.location.reload(true);
  };

  const handleCloseAcceptingDeleting_ORDER_Modal = () => {
    setShowAcceptingDeleting_ORDER_Modal(false);
  };
  const handleCloseAcceptingDeleting_PRODUCT_Modal = () => {
    setShowAcceptingDeleting_PRODUCT_Modal(false);
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

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    loggedin && (
      <div className="relative">
        <wc-toast></wc-toast>
        {edit && (
          <Edit
            productId={productId}
            handleCloseUpdateModal={handleCloseUpdateModal}
          />
        )}
        {showUpdateORDER_STATEModal && (
          <UpdateOderState
            orderId={orderId}
            handleCloseUpdateOrderStateModal={handleCloseUpdateOrderStateModal}
          />
        )}
        {showAcceptingDeleting_ORDER_Modal && (
          <Modal
            modalname="Do you want to delete?"
            handleAccept={() => handleDeleteOrder(productId)}
            handleCloseModal={handleCloseAcceptingDeleting_ORDER_Modal}
          />
        )}
        {showAcceptingDeleting_PRODUCT_Modal && (
          <Modal
            modalname="Do you want to delete?"
            handleAccept={() => handleDelete(productId)}
            handleCloseModal={handleCloseAcceptingDeleting_PRODUCT_Modal}
          />
        )}
        <div className="container bg-slate-50 min-h-screen mx-auto">
          <h1 className="w-full text-center uppercase font-medium text-xl py-2 text-[#ee4d2d]">
            Admin Dashboard
          </h1>
          <div className="w-full lg:w-[80%] lg:mx-auto bg-white rounded-lg sm:p-3 shadow-lg">
            <h2 className="font-medium py-5 px-5"># All products</h2>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      STT
                    </th>
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
                        <td className="px-6 py-4">{i + 1}</td>
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
                            onClick={() => {
                              setProductId(product.id);
                              setShowAcceptingDeleting_PRODUCT_Modal(true);
                            }}
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
            <h2 className="font-medium py-5 px-5 mt-5"># Orders</h2>
            <ManageOrders
              showUpdateORDER_STATEModal={handleShowUpdateORDER_STATEModal}
              handleShowModal={(id) => {
                setProductId(id);
                setShowAcceptingDeleting_PRODUCT_Modal(true);
              }}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Admin;
