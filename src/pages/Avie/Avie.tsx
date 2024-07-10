import React, { useEffect, useState } from 'react'

import { getBrandData } from '../../services/services';
import Products from '../Products/Products';


const Avie = () => {
   
  const [brandcolor,setBrandcolor]=useState('');
  const [brandId,setBrandId]=useState();
  useEffect(()=>{
    getBrandData(2).then((brand)=>{
      console.log(brand)
        setBrandcolor(brand.color)
        setBrandId(brand.id)
    })

},[])

 

 
  return (
    <div className='ra-green-gold-products'>
        <Products  brand_id={brandId} brandColor={brandcolor}/>
    </div>
  )


      },[]);
  

}

export default Avie