import React, { useEffect, useState } from 'react'
import './GreenGold.css'
import Products from '../../componnents/Products/Products'
import Product from '../../componnents/Product/Product'
import { getColorofBrand } from '../../services/services'



const GreenGold = () => {

  const [brandcolor,setBrandcolor]=useState('');
  useEffect(()=>{
    getColorofBrand(1).then(data=>{
      console.log(data)
      setBrandcolor(data);
    })

  },[])


 
  return (
    <div className='ra-green-gold-products'>
        {/* <Product main_img='../../assets/images/Dahab/product1.webp' name='زهر الرمان'/> */}
        <Products  brand_id={1} brandColor={brandcolor}/>
    </div>
  )
}

export default GreenGold