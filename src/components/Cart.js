import React from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <div>
      <Header />
      {cartItems.length !== 0 ? ( // Use !== 0 for empty array check
        <div className='cart-container'>
          <div className='cart cart-card'>
            <p className='cart-text'>Your Cart</p>
            <hr className="horizontal" />
            <h2 className='congrats-text'>Congratulations Order Placed!</h2>
            <img src='https://s3-alpha-sig.figma.com/img/da30/c60d/14d6293522911d4a2548b9b1cf65a33a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZgKKIrx1v2QUz4fX2mBvb3nPC3aOp2RcHYU7~TgXtlP4G4lDYmL0xuOY7DKJKdhum-USfGEqnBwhWQZ1nqspzsS8tmvwwkqXSHQoA7p3jz5L1sVJfMMbHBBLleqQpbQbNwTLtaEuEnYK5~sLf~p-nuYM8RLyt5KvfMwFOgM~UylWTzJOSmInN47VMWplVhiGENFa3Bl8MtN6A6cosEVsCZF~oosEu4IYdGCxnl69-nex04r6gR3ZoReAVb4ND0084qLGAwKXwNRfJPlT8MlEC1s2CZJArhC6Tw3CKWGQ2wz0Fr9y6xQlBLFXrKTrbMaXcgJps09Yvxi9EZ4zPgKRqg' alt='cart' />
            <p className='chaperone-service-message'>Thank you for choosing Chaperone services.
              We will soon get in touch with you!</p>
            <button className='buttons' onClick={handleContinueShopping}>Continue Shopping</button>
          </div>
        </div>
      ) : (
        <div className='cart-empty cart-card'>
          <h1 className='empty-message'>Your cart Is Empty</h1>
        </div>
      )}
    </div>
  );
};