import React, { useEffect, useState } from 'react'
import { getBrandData } from '../../services/services'
import { TBrand } from '../../types/types'
import Products from '../Products/Products'

const Brand :React.FC<TBrand>= ({brandId,brand_color}) => {
    
    const [brandcolor,setBrandColor]=useState('');
    const  [bbrandId,setBrandId]=useState();
    useEffect(()=>{

      setBrandId(brandId);
      setBrandColor(brand_color)
    },[])


  return (
    <div className='ra-brand-products'>
      <Products  brand_id={bbrandId} brandColor={brandcolor}/>
    </div>
  )
}

export default Brand
