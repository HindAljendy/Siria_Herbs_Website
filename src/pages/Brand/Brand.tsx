import React, { useEffect, useState } from 'react'
import { TBrandData} from '../../types/types';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Product from '../../componnents/Product/Product';
import './Brand.css'


const Brand = () => {
  const {itemId}  = useParams<{ itemId: string; }>();
  const [brandData, setBrandData] = useState<TBrandData>();
 // const [productDepentOnCategory, setProductDepentOnCategory] = useState<TProductData[] | undefined >([]);
   const [categories,setCategories]=useState([]);
   const [brandColor,setBrandColor]=useState('');
   const [products,setProducts]=useState([]);
   const [activeIndex,setActiveIndex]=useState<number|null>(null);
   



      useEffect(() => {
            axios.get('http://127.0.0.1:8000/api/brand/1/site')
            .then((response) => {
              setBrandData(response.data.data)
              setCategories(response.data.data.categories)
              setBrandColor(response.data.data.color)
               //console.log((response.data.data.color))

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

        {/* <div className='MA_hero' style={{ backgroundImage: `url(${img1})` }}>
                <div className='box'>
                    <div className='image'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='text'>
                        <h2>صحتك دهَب</h2>
                        <p>
                        ذهب أخضر السوري يمثل  كافة النباتات والأعشاب الطبيعية السورية من البادية والجبل والساحل وغوطة الشام وسهل حوران.
                        تشكيلة واسعة من المنتجات الطبيعية بالنكهة السورية الخاصة.
                        جمعت بعناية ومحبة بأيدي وخبرات سورية.
                        </p>
                    </div>
                </div>
        </div> */}
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

{/*  /////////////////////////////////////////////// */}
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

export default Brand
