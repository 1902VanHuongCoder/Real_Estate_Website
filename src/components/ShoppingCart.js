import React from 'react'
import { useNavigate } from 'react-router-dom'
const ShoppingCart = ({products, user}) => {
    const navigate = useNavigate();
    const handleBuyProduct = (id) => {
        const product = products.filter((item) => item.id === id);
        navigate("/order", {state: [product[0], user]});
    }
  return (
    <div style={{display: 'flex' }}>
        {products?.map((item, i) => {
            return(
                <div key={i}>
                    <img src={item.imageURL} alt={item.productName} width={100} height={100} />
                    <h2>{item.productName} </h2>
                    <button onClick={() => handleBuyProduct(item.id)}>Buy</button>
                </div>
            )
        }) }
    </div>
  )
}

export default ShoppingCart