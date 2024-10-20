import React from 'react'
import SimpleSlider from './SimpleSlider'
import { IoIosArrowDown } from 'react-icons/io'
import Pagination from './Pagination'
import Header from './Header'
import Footer from './Footer'


const Home = () => {
  return (
    <>
    <Header />   
    <div>
    <div className="search-container">
       <input type="text" placeholder="   Search plants" className="search-input" />
       <img src="https://s3-alpha-sig.figma.com/img/eebd/9688/ace63522134bd2b91cd3d5fa1d0270b2?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GLrIRhMN1mdqidp9alCxTglzpBQscpbYS~fM5Bxoafssj3TlL-5e0nwC-XuctvnspAjsl0PuJnkEEKwQrm4lIsQ5UJdaDJs-cTbUPL8y2mWStlLBeDtwhpmorPyfoLGyOhi8O8A1WNjsyHpg0SXLgMyIBBiKToVDvLsbNDiSQxZifh~aKL-t-hlM0Oyiof9tr-9frE4vrH35kQneKfZ46E9iwMSb5MVs5O6BAePEAJTewJvMxUMCzc0y2SubxeKh1CWjRmpR5RSFgJNLb8Brjfwi4IkFldyk1BIR2kj2oiZgjQYJzcaX4os7f1d3MVDYJljBU3ZRBqkH4CYafWkepA" alt="Search" className="search-icon-left" />
       <img src="https://s3-alpha-sig.figma.com/img/3a30/d80e/594c268f203b8704f61985100fae62d6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECIAJtsSLBVXgl2YF31TxKtq5s0LuX-WtEAzq6FqsAwtmZqiS-DsBkPIwI7mmd0ENoIRLeFKfIjRs5lPiIOarypWJhPEpdI2MHEdJkN1xO7rPxfi6Fivh6LStPxif7cKgwH6k8~PerjWx0Mh5He89Sd3dhBBzSoVHJbRu3RrNjEiGdnLBB7zqjdkw-G736mL7wI656dFi0pWcNGgWTzpC8Gx8DZC4Xf34jdHqhDOfR4kbBMTDGR6JUiDdCwChwHow27J6anCaHgCGyxB2hSvt1vhj2sGVI2cstk7qHKKBVKVoJwELI3jKy9S17QquNjtZWTSwgOnlOFdC1vmzV3X6w" alt="Plant" className="search-icon-right" />
   </div>


        <div className='plants-plots-container'>
          <div className='plants-plots'>
            <button className='buttons '>Plants</button>
            <button className='buttons plots '>Plots</button>
        </div>
        <p className='plants-pots-description'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
        </div>

        <div className='nursery-container'>
          <h1 className='nursery-text'>Nursery</h1>
          <div className='slider-container'>
           <SimpleSlider />
           </div>
        </div>

      <div className='filter-and-Products-pagination-container'>
          <div className="filter-div ">
            <div className='filter-row'>
              <h1 className='filter-texts'>Filter</h1>
              <button className='fliter-texts button'> Clear All</button>
           </div>
           <hr className="horizontal" />
           <div className='filter-row'>
              <h1 className='filter-texts'>Type of Plants</h1>
              <button className='fliter-texts button'> +</button> 
           </div>
           <hr className="horizontal" />
           <div className='filter-row'>
              <h1 className='filter-texts'>Nursery</h1>
              <button className='fliter-texts button'> +</button> 
           </div>
           <hr className="horizontal" />
           <div className='filter-row'>
              <h1 className='filter-texts'>Ideal Plants Location</h1>
              <button className='fliter-texts button'> +</button>  
           </div>
           <hr className="horizontal" />
           <div className='filter-row'>
              <h1 className='filter-texts'>Indoor/ Outdoor</h1>
              <button className='fliter-texts button'> +</button>  
           </div>
           <hr className="horizontal" />
           <div className='filter-row'>
              <h1 className='filter-texts'>Maintenance</h1>
              <button className='fliter-texts button'> +</button>  
           </div>
           <hr className="horizontal" />
           <div className='filter-row'>
              <h1 className='filter-texts'>Plant Size</h1>
              <button className='fliter-texts button'> +</button>  
           </div>
           <hr className="horizontal" />
           <div className='filter-row'>
              <h1 className='filter-texts'>Water Schedule</h1>
              <button className='fliter-texts button'> +</button>  
           </div>
           <hr className="horizontal" />
           <div className='filter-row'>
              <h1 className='filter-texts'>Color</h1>
              <button className='fliter-texts button'> +</button>  
           </div>
           <hr className="horizontal" />
           <div className='filter-row'>
              <h1 className='filter-texts'>Seasonal</h1>
              <button className='fliter-texts button'> +</button>  
           </div>
           <hr className="horizontal" />
           <div className='filter-row'>
              <h1 className='filter-texts'>Light Efficient</h1>
              <button className='fliter-texts button'> +</button>  
           </div>
           <hr className="horizontal" />
         
           
          </div>
    
        <div className="pagination-div">
           <div className='proudcts'>
              <p>300 proudcts</p>
              <button className='buttons'>Sort By <IoIosArrowDown /> </button>
          
            </div>
            <div>
               <Pagination />
            </div>
            <div>      
           </div>
        </div>

        

        </div>
        <Footer /> 
        </div>
</>
  )
}

export default Home