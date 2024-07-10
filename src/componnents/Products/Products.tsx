import React, { useEffect, useState } from 'react'
import './Products.css'

import { getBrandData, getProductsDependOnCategory } from '../../services/services';
import Product from '../Product/Product';
import { ProductsProps, TProduct } from '../../types/types';





const Products: React.FC<any> = ({ brand_id, brandColor }) => {
  const [categories, setCategories] = useState<Array<string>>([]);
  const [products, setProducts] = useState<Array<string>>([]);
  const [selectedstyle, setSelectedStyle] = useState('filterbutton');
  //const [product,setProduct]=useState();


  useEffect(() => {

    getBrandData(brand_id).then((brand: any) => {
      //console.log(brand.categories)
      setCategories(brand.categories);
      // console.log(brand.categories[0].products)
      setProducts(brand.categories[0].products);
    })


  }
    , []);


  const handlecategory = (e: any) => {


    if (selectedstyle === "filterbutton") {
      setSelectedStyle("active-button");

    }
    else {
      setSelectedStyle("filterbutton");
    }

    getProductsDependOnCategory(brand_id, e.target.id).then(products => {

      setProducts(products);
    })
  }
  return (
    <>
      <div className="ra_nav_filterbuttons">
        {categories?.map((category: any) => {
          return (


            <button className={selectedstyle} value={category.name} id={category.id} onClick={handlecategory}>
              {category.name}
            </button>
          )
        })}
      </div>
      <div className='ra-products-line' />


      <div className='ra-products'>
        {

          /*  products?.map((product:TProduct , index:number)=>{  
          return(
              <Product main_image={product.main_image} name={product.name} color={brandColor}/>)
          */

          products?.map((value: string, index: number) => {
            return (
              <Product main_image={value} name={value} color={brandColor} />
            )
          })

        }

      </div>



    </>


  )
}

export default Products

