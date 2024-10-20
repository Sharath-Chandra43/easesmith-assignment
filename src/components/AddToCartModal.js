import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { useNavigate } from 'react-router-dom';

const AddToCartModal = ({ product, onClose,isOpen }) => {
//  const { name, description, image, discountedPrice } = product;
  
   const navigate=useNavigate()
  const dispatch=useDispatch()
  
  const handleConfirm = () => {
   navigate('/cart')
   dispatch(addItem(product)) 
    console.log(`Adding ${product?.name} to cart`);
    onClose()
    
  };
 

  if (!isOpen) return null;

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Added to Cart</h2>
            <button onClick={onClose}>&times;</button>
          </div>
  
            <div className="modal-body">
              <img src={product?.image} alt={product?.name} className='modal-image' />
              <h3 className='modal-name'>{product?.name}</h3>
              <p className='modal-description'>{product?.description}</p>
              <p className='modal-price'>Price: {product?.discountedPrice}</p>
            </div>
            <div className="modal-footer">
              <button onClick={handleConfirm}>Confirm</button>
            </div>
        </div>
    </div>
    
</>
  );
};

export default AddToCartModal;