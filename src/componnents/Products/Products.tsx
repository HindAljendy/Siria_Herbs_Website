import React, { useEffect, useState } from 'react'
import './Products.css'
 import { ProductsProps, TProduct } from '../../types/types';
import { getBrandData, getProductsDependOnCategory } from '../../services/services';
import Product from '../Product/Product';






const Products:React.FC<ProductsProps>= ({brand_id,brandColor}) => {
  const [categories,setCategories]=useState<Array<string>>([]);
   const [products,setProducts]=useState([]);
   const [selectedstyle,setSelectedStyle]=useState('filterbutton');
   //const [product,setProduct]=useState();


useEffect(()=>{
    
  getBrandData(brand_id).then((brand)=>{
    //console.log(brand.categories)
    setCategories(brand.categories);
   // console.log(brand.categories[0].products)
    setProducts(brand.categories[0].products); 
  })
   
   
}
    ,[]);

  
  const handlecategory = (e) =>{
            
       
    if (selectedstyle === "filterbutton") 
      {
        setSelectedStyle("active-button");

      }
        else {
          setSelectedStyle("filterbutton");
        }    

getProductsDependOnCategory(brand_id,e.target.id).then(products =>{

          setProducts(products); })
       }
 return(
<>
    <div className="ra_nav_filterbuttons">
    {categories?.map((category)=>{
    return (
        
         
            <button className={selectedstyle}  value={category.name} id={category.id} onClick={handlecategory}>
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

