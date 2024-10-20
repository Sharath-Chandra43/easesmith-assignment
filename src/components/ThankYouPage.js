import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

const ThankYouPage = () => {
  const selectedProductId = useSelector((state) => state.cart.selectedProductId);
   // Assume product data is stored elsewhere
  const products = useSelector((state) => state.cart.items); // Assume product data is in cart.items

  // Find the product object based on selectedProductId
  const selectedProduct = products.find((item) => item.id === selectedProductId);

  return (
    <>
    <Header />
    <div className='thankyou-page'>
      {selectedProduct && ( // Check if product is found
      
        <div className='thanyou-card'>
        <h1 className='thankyou-message'>
          "Thank you for your interest in this Product: {selectedProduct.name}"
        </h1>
          <img src='https://img.freepik.com/free-vector/thank-you-concept-illustration_114360-14867.jpg?w=740&t=st=1729404048~exp=1729404648~hmac=1e1147a4563a6da8d973e4cb7a26fb57754e770937da061c7634931b70dc136d' alt='thankyou' className='thankyou' />
        </div>
      )}
    </div>
    </>
  );
};

export default ThankYouPage;