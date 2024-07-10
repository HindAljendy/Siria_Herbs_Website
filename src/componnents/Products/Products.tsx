import React, { useEffect, useState } from 'react'
import './Products.css'
 import { ProductsProps, TProduct } from '../../types/types';
import { getBrandData, getProductsDependOnCategory } from '../../services/services';
import Product from '../Product/Product';






const Products:React.FC<ProductsProps>= ({brand_id,brandColor}) => {
  const [categories,setCategories]=useState<Array<string>>([]);
   const [products,setProducts]=useState([]);
   //const [selectedstyle,setSelectedStyle]=useState('filterbutton');
   const [activeIndex,setActiveIndex]=useState<number|null>(null);
   //const [product,setProduct]=useState();


useEffect(()=>{
    
  getBrandData(brand_id).then((brand)=>{
  setCategories(brand.categories);
    setProducts(brand.categories[0].products); 
  })
   
   
}
    ,[]);

  
  const handlecategory = (index:number) =>{
         
    setActiveIndex(index)
         

getProductsDependOnCategory(brand_id,index).then(products =>{

          setProducts(products); })
       }
 return(
<>
    <div className="ra_nav_filterbuttons">
    {categories?.map((category,index)=>{

      const buttonClass= activeIndex === index ? 'active-button' : 'filterbutton';
    return (
        
         
            <button className={buttonClass}  value={category.name} key={index}   onClick={()=> handlecategory(index)}>
              {category.name}
            </button>
       )
  })}
    </div>
    <div className='ra-products-line'/>
      

    <div className='ra-products'>
      {

      products?.map((product)=>{
        return(
        <Product main_image={product.main_image} name={product.name} color={brandColor}/>)
      })

      }
    
             
          
   
  
  </div>



  </>
  
  
)  
}

export default Products

