import React, { useEffect, useState } from 'react'
import './NavButtons.css'
 import { ProductsProps, TProduct } from '../../types/types';
import { getCategoriesforBrand, getProducts, getProductsDependOnCategory } from '../../services/services';
import Product from '../Product/Product';






const Products:React.FC<ProductsProps>= ({brand_id,brandColor}) => {
  const [categories,setCategories]=useState<Array<string>>([]);
  //const [categorydata, setCategoryData]=useState([]);
   const [products,setProducts]=useState([]);
   const [product,setProduct]=useState();


useEffect(()=>{

 
  getCategoriesforBrand(brand_id).then(data=>{
    //console.log(data)
    setCategories(data);
    })
   
    
    
  
    },[]);


  const handlecategory = (e) =>{

    getProductsDependOnCategory(brand_id,e.target.id).then(products =>{
      setProducts(products);
      products.map((item)=>{
        console.log(item)
        setProduct(item)
      })
   
 

     
    
    })

   


      

  
  }


  


 return(
  <div >
    <div className="ra_nav_filterbuttons">
    {categories?.map((category)=>{
    return (
    
      
            <button className='filterbutton'   id={category.id} onClick={handlecategory}>
              {category.name}
            </button>
       )
  })}
    </div>

    <div className='ra-products'>
      
            <Product main_image={product.main_image} name={product.name} color={brandColor}/>
            <Product main_image={product.main_image} name={product.name}/>
            <Product main_image={product.main_image} name={product.name}/>
 
     
      
   
  
  </div>



  </div>
  
  
)  
}

export default Products

