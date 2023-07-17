import React, { useEffect, useState } from "react";
import { db } from "../../firebase_setup/firebase";
import Edit from "./AdminEdit";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import AdminAddProducts from "./AdminAddProducts";
import { useLocation, useNavigate } from "react-router-dom";
const Admin = () => {
  const {state} = useLocation();

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
    if(state){
      setLoggedIn(true);
    }else{
      navigate('/admin/login');
    }
  },[]);
  return (
    loggedin && ( <div>
      <div>
        <h1>Products List</h1>
        <table>
          <thead>
            <tr>
              <td>STT</td>
              <td>Product Name</td>
              <td>Type</td>
              <td>Price</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {data?.map((product, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{product.productName}</td>
                  <td>{product.productType}</td>
                  <td>{product.productPrice}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleEdit(product.id);
                      }}
                    >
                      Edit
                    </button>{" "}
                    |{" "}
                    <button onClick={() => handleDelete(product.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <AdminAddProducts />
      </div>
      <div>{edit && <Edit productId={productId} />}</div>
    </div>)
  );
};

export default Admin;
