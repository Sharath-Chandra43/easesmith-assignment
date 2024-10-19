import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { useNavigate } from 'react-router-dom';

const AddToCartModal = ({ product, onClose,isOpen }) => {
  const { name, description, image, discountedPrice } = product;
  
  const selectedProductId = useSelector((state) => state.cart.selectedProductId);
  // Assume product data is stored elsewhere
 const products = useSelector((state) => state.cart.items); // Assume product data is in cart.items

 // Find the product object based on selectedProductId
 const shouldShowModal = products.find((item) => item.id === selectedProductId);
  
   const dispatch=useDispatch();

   const navigate=useNavigate();

  const handleConfirm = () => {
   navigate('/cart')
   dispatch(addItem(product)) 
    console.log(`Adding ${name} to cart`);
    
  };
 

  if (!shouldShowModal) return null;

  return (
    <>
  
    {shouldShowModal && ( // Check if product is found
      <div className="modal"style={{ display: selectedProductId ? 'block' : 'none' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>Added to Cart</h2>
            <button onClick={onClose}>&times;</button>
          </div>
  
            <div className="modal-body">
              <img src={image} alt={name} />
              <h3>{name}</h3>
              <p>{description}</p>
              <p>Price: {discountedPrice}</p>
            </div>
            <div className="modal-footer">
              <button onClick={handleConfirm}>Confirm</button>
            </div>
        </div>
    </div>
    )}
</>
  );
};

export default AddToCartModal;