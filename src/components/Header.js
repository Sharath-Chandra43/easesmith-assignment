import React from 'react'
import { LOGO } from '../utils/constants'
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
  return (
    <>    
    <div className='main-container'>    
        <div className='top'>
            <div className='top-alignment'>
                <p className='text'>Free Shipping on orders above 999/-</p>
                <p className='text'>Call us on: +91 98768 05120</p>
            </div>
        </div>

         {/* Nav Bar section */}

    <div className='header'>                             
        <div className='logo-container'>
            <img src={LOGO} alt='logo'  className='logo'/>
            <h1 className='logo-text'>Chaperone</h1>
        </div>
        <div>
        <ul className='nav-container'>
            <li >Home</li>
            <li>Plants & Pots</li>
            <li>Tools <IoIosArrowDown  /></li>
            <li>Our Services <IoIosArrowDown /></li>
            <li>Blog</li>
            <li>Our Story</li>
            <li>FAQS</li>
        </ul>
        </div>


        {/*My profile and Cart Section */}
        <div className='right-section'>
              <span className='profile' >
                <AiOutlineUser className='icons-size' />
                My-Profile
              </span>
              <span className='cart cart-length-update' data-cart-length="3">
            <HiOutlineShoppingCart className='icons-size'/>
                Cart
              </span>
        </div>
    </div>
    </div>
</>

  )
}

export default Header