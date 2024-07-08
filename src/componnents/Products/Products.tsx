import React from 'react'
import './Products.css'
import product from '../../assets/images/Dahab/product1.webp'
import { FaAngleDoubleLeft } from "react-icons/fa";
const Product = () =>{
  return (
    <div className='ra-product'>
      <img src={product}/>
      <h3>زهر الرمان</h3>
      
        <button>   عرض التفاصيل <FaAngleDoubleLeft className='fa-angle-icon'/> </button>
       
     
      
    </div>
  )
 
}
const Products = () => {
  return (
    <div className='ra-products'>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
   
    
   
      
    </div>
  )
}

export default Products