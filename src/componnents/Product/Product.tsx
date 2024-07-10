import React from 'react'
import './Product.css'
//import product from '../../assets/images/Dahab/product1.webp'
import { FaAngleDoubleLeft } from "react-icons/fa";
import { TProduct } from '../../types/types';




const Product:React.FC<TProduct>= ({main_image,name,color}) =>{
  const mystyle={
    backgroundColor:`${color}`,
  }
 
  return (
    <div className='ra-product'>
      <img src={main_image}/>
      <h3>{name}</h3>
      
        <button style={mystyle}>   عرض التفاصيل <FaAngleDoubleLeft className='fa-angle-icon'/> </button>
       
     
      
    </div>
  )
 
}


export default Product