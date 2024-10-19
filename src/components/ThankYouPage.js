import React from 'react';
import { useSelector } from 'react-redux';

const ThankYouPage = () => {
  const selectedProductId = useSelector((state) => state.cart.selectedProductId);
   // Assume product data is stored elsewhere
  const products = useSelector((state) => state.cart.items); // Assume product data is in cart.items

  // Find the product object based on selectedProductId
  const selectedProduct = products.find((item) => item.id === selectedProductId);

  return (
    <div className='thankyou-page'>
      {selectedProduct && ( // Check if product is found
        <h1 className='thankyou-message'>
          "Thank you for your interest in this Product: {selectedProduct.name}"
        </h1>
      )}
    </div>
  );
};

export default ThankYouPage;