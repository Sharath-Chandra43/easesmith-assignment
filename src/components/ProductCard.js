import React, { useState } from 'react'
import { FaRegHeart } from 'react-icons/fa';
import AddToCartModal from './AddToCartModal';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product,index}) => {
  const {name,description,image,rating,totalPrice,discountedPrice,id}=product;
  const [showModal,setShowModal]=useState(false);
  const navigate = useNavigate();

  const handleAddToCart=()=>{
    setShowModal(true);
  }

  const handleCloseModal=()=>{
    setShowModal(false)
  }



  const handleViewProduct=()=>{
    navigate('/thank-you',)
  }

  return (
    <div className='proudct-container'>
      <div className='product-image-container'>
        <img src={image} alt='proudct-image' className='product-image' />
        <button className='heart-button'>
          <FaRegHeart size={22} />
        </button>
        <button className='buttons view' onClick={handleViewProduct} >
          View product
        </button>
      </div>
        <div className="product-details">
        <h2 className="name">{name}</h2>
        <p className="description">{description}</p>

       </div>
        <div className="product-ratings">
          <span className="">★</span>
          <span className="rating">{rating}</span>
        </div>

       
        <div className="product-price">
          <span className="price">₹{totalPrice}</span>
          <span className="discounted-price">₹{discountedPrice}</span>
        </div>

       
        <div className="add-to-cart">
          <button className="add-to-cart-buttons" onClick={handleAddToCart}>
            - Add to Cart +
          </button>
          <button className="but-on-rent">
            Buy on Rent
          </button>
        </div>
        {showModal &&
        (
          <AddToCartModal product={product}  key={`${product.id}`} isOpen={showModal} onConfirm={handleAddToCart} onClose={handleCloseModal} />
          )        
       }
      </div>
  
  )
}

export default ProductCard