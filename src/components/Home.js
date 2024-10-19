import React from 'react'
import SimpleSlider from './SimpleSlider'
import { IoIosArrowDown } from 'react-icons/io'
import Pagination from './Pagination'
import mockData from '../utils/mockData'
import ProductCard from './ProductCard'
import Header from './Header'
import Footer from './Footer'


const Home = () => {
  return (
    <>
    <Header />   
    <div>
        <div className='search-container'>
          <img src='https://s3-alpha-sig.figma.com/img/eebd/9688/ace63522134bd2b91cd3d5fa1d0270b2?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GLrIRhMN1mdqidp9alCxTglzpBQscpbYS~fM5Bxoafssj3TlL-5e0nwC-XuctvnspAjsl0PuJnkEEKwQrm4lIsQ5UJdaDJs-cTbUPL8y2mWStlLBeDtwhpmorPyfoLGyOhi8O8A1WNjsyHpg0SXLgMyIBBiKToVDvLsbNDiSQxZifh~aKL-t-hlM0Oyiof9tr-9frE4vrH35kQneKfZ46E9iwMSb5MVs5O6BAePEAJTewJvMxUMCzc0y2SubxeKh1CWjRmpR5RSFgJNLb8Brjfwi4IkFldyk1BIR2kj2oiZgjQYJzcaX4os7f1d3MVDYJljBU3ZRBqkH4CYafWkepA' alt='search' className='search-image' />
          <input type='text' placeholder='Search plant' className='search' />
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
              <br className='break'/>
           </div>
           <div className='filter-row'>
              <h1 className='filter-texts'>Type of Plants</h1>
              <button className='fliter-texts button'> +</button> 
           </div>
           <div className='filter-row'>
              <h1 className='filter-texts'>Nursery</h1>
              <button className='fliter-texts button'> +</button>  
           </div>
           <div className='filter-row'>
              <h1 className='filter-texts'>Ideal Plants Location</h1>
              <button className='fliter-texts button'> +</button>  
           </div>
           <div className='filter-row'>
              <h1 className='filter-texts'>Indoor/ Outdoor</h1>
              <button className='fliter-texts button'> +</button>  
           </div>
           <div className='filter-row'>
              <h1 className='filter-texts'>Maintenance</h1>
              <button className='fliter-texts button'> +</button>  
           </div>
           <div className='filter-row'>
              <h1 className='filter-texts'>Plant Size</h1>
              <button className='fliter-texts button'> +</button>  
           </div>
           <div className='filter-row'>
              <h1 className='filter-texts'>Water Schedule</h1>
              <button className='fliter-texts button'> +</button>  
           </div>
           <div className='filter-row'>
              <h1 className='filter-texts'>Color</h1>
              <button className='fliter-texts button'> +</button>  
           </div>
           <div className='filter-row'>
              <h1 className='filter-texts'>Seasonal</h1>
              <button className='fliter-texts button'> +</button>  
           </div>
           <div className='filter-row'>
              <h1 className='filter-texts'>Light Efficient</h1>
              <button className='fliter-texts button'> +</button>  
           </div>
         
           
          </div>
    
        <div className="pagination-div">
           <div className='proudcts'>
              <p>300 proudcts</p>
              <button className='buttons'>Sort By <IoIosArrowDown /> </button>
           </div>
           <div className='Products-main'> 
           {mockData.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
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