import React from 'react';

const AddToCartModal = ({ product, onClose,isOpen }) => {
  const { name, description, image, discountedPrice } = product;

  

  const handleConfirm = () => {
    // Replace with your actual logic to add the product to the cart
    console.log(`Adding ${name} to cart `);
    
  };
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add to Cart</h2>
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
  );
};

export default AddToCartModal;