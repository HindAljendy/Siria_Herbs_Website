import React, { useEffect, useState } from 'react'
import './GreenGold.css'
import Products from '../../componnents/Products/Products'

import { getBrandData } from '../../services/services'


const GreenGold = () => {

  const [brandcolor,setBrandcolor]=useState('');
  useEffect(()=>{
    getBrandData(1).then((brand)=>{
        setBrandcolor(brand.color)
    })
},[])

 

 
  return (
    <div className='ra-green-gold-products'>
        <Products  brand_id={1} brandColor={brandcolor}/>
    </div>
  )
}

export default GreenGold