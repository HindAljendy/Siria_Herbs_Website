
import React, { useEffect, useState } from 'react'
 import { Hero } from '../../componnents/Product_Hero/Hero';
import { TBrandData} from '../../types/types';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import  background from '../../assets/images/bunch-fresh-mint-female-hands 1.png'
import './Brand.css'
import { Hero } from '../../componnents/Product_Hero/Hero';
import Product from '../../componnents/Product/Product';


const BrandPage = () => {
  const {itemId}  = useParams<{ itemId: string; }>();
  const [brandData, setBrandData] = useState<TBrandData>();
   const [categories,setCategories]=useState([]);
   const [brandColor,setBrandColor]=useState('');
   const [brandName,setBrandName]=useState('');
   const [brandDescription,setBrandDescription]=useState('');
   const [products,setProducts]=useState([]);
   const [backgroundImg,setBackgroundImg]=useState('');
   const [presentation_image,setpresentation_image]=useState('');
   const [activeIndex,setActiveIndex]=useState<number|null>(null);
   



      useEffect(() => {
            axios.get('http://127.0.0.1:8000/api/brand/1/site')
            .then((response) => {
              setBrandData(response.data.data)
              setCategories(response.data.data.categories)
              setBrandColor(response.data.data.color)
              setBackgroundImg(response.data.data.background_image)
              setBrandName(response.data.data.name)
              setBrandDescription(response.data.data.description)
              setpresentation_image(response.data.data.presentation_image)
            })
            .then(() => console.table(brandData))
          
          
          },[])
           
   

    const getProductsDependOnCategory = (category: number) => {
      
      setProducts(brandData.categories[category].products)
   

     }


    const handlecategory = (index:number) =>{
         
      setActiveIndex(index)
    getProductsDependOnCategory(index)
    }

      return (
    <div className='ra-brand'>
<<<<<<< HEAD
    
           <Hero
                name={brandName}
                description={brandDescription}
                backgroundImage={background} 
                brandImage={presentation_image} 
            />
       
   
    {/*  /////////////////////////////////////////////// */}
=======
     <div>
           <Hero
                name={brandData?.name || ''}
                description={brandData?.description || ''}
                backgroundImage={brandData?.background_image || ''} 
                brandImage={brandData?.presentation_image || ''} 
            />
        </div>
>>>>>>> 776ad726134098e961b6c5a6975a35797323e245
      
      <div className="ra_nav_filterbuttons">
        {categories?.map((category,index)=>{

          const buttonClass= activeIndex === index ? 'active-button' : 'filterbutton';
        return (
            
            
                <button className={buttonClass}  value={category.name} key={index} onClick={()=> handlecategory(index)}>

                  {category.name}
                </button>
              )
            })}
      </div>

      <div className='ra-products'>

      {
       products?.map((value: string) => {
            return (
              <Product main_image={value.main_image} name={value.name} color={brandColor} />
            )
        })

}
       </div>

    </div>
  )
}

export default BrandPage




