import React, { useEffect, useState } from 'react'
import { getBrandData } from '../../services/services'

import Products from '../../componnents/Products/Products';
import { TBrand } from '../../types/types';


const Brand :React.FC<any>= ({brandId,brand_color}) => {
    
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
