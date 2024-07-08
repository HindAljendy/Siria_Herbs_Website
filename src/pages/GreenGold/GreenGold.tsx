import React, { useEffect, useState } from 'react'
import './GreenGold.css'
//import NavButtonsBar from '../../componnents/NavButtonsBar/NavButtonsBar'
import Products  from '../../componnents/Products/Products'
import { getCategoriesforBrand } from '../../services/services';
import NavButtonsBar from '../../componnents/NavButtonsBar/NavButtonsBar';



const GreenGold = () => {
const [categories,setCategories]=useState<Array<string>>([]);
useEffect(()=>{
  getCategoriesforBrand(1).then(data=>{
    setCategories(data);
    
  })
    },[]);
  return (
    <div className='ra-green-gold-products'>
      <NavButtonsBar categories={categories}/>
      <Products/>

    </div>
  )
}

export default GreenGold