import React, { useEffect, useState } from 'react'
import NavButtonsBar from '../../componnents/Products/Products';
import { getCategoriesforBrand } from '../../services/services';

const Avie = () => {
  const [categories,setCategories]=useState<Array<string>>([]);
  const [products,setProducts]=useState({});
  useEffect(()=>{
    getCategoriesforBrand(2).then(data=>{
      setCategories(data);
      
    })
      },[]);
  
   
    return (
      <div className='ra-green-gold-products'>
        <NavButtonsBar categories={categories}/>
        
  
      </div>)
}

export default Avie