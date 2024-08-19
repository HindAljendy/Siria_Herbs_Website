import React, { useEffect, useState } from 'react'
import { Hero } from '../../componnents/Product_Hero/Hero';
import { TBrandData, TCategoryData, TProductData } from '../../types/types';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Brand.css'
import Product from '../../componnents/Product/Product';
import { ColorContext, ColorProvider } from '../../Contexts/ColorContext';
import { Navbar } from 'react-bootstrap';


const BrandPage = () => {

  const { id } = useParams<{ id: string; }>();
  const [brandData, setBrandData] = useState<TBrandData>();
  const [categories, setCategories] = useState([]);
  const [brandDescription, setBrandDescription] = useState('');
  const [products, setProducts] = useState<TProductData[]>([]);
  const [background_image, setBackground_image] = useState('');
  const [mainImg, setmainImg] = useState('');
  const [presentation_image, setpresentation_image] = useState('');
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const { setBrandColor } = React.useContext(ColorContext);
  const { brandColor } = React.useContext(ColorContext);




  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/brand/${id}/site`)
      .then((response) => {
        setBrandData(response.data.data)
        setCategories(response.data.data.categories)
        setBrandColor(response.data.data.color)
        setBackground_image(response.data.data.background_image)
        setBrandDescription(response.data.data.description)
        setpresentation_image(response.data.data.presentation_image)
        setmainImg(response.data.data.main_image)



        setActiveIndex(0)
        getProductsDependOnCategory(0)


      })
      .then(() => console.table(brandData))


  }, [id])


  useEffect(() => {
    if (brandData && brandData.categories.length > 0) {
      getProductsDependOnCategory(0);
    }
  }, [brandData]);



  const getProductsDependOnCategory = (category: number) => {
    if (brandData && brandData.categories[category]) {
      setProducts(brandData.categories[category].products);
    }
  }


  const handlecategory = (index: number) => {

    setActiveIndex(index)
    getProductsDependOnCategory(index)
  }

  return (
    <>
      <div>
        <ColorProvider>
          <Navbar />
        </ColorProvider>
      </div>



      <Hero
        description={brandDescription}
        background_image={background_image}
        presentation_image={presentation_image}
        brandImage={mainImg}
      />
      <div className='ra-brand'>

        <div className="ra_nav_filterbuttons">
          {categories?.map((category: TCategoryData, index) => {

            const buttonClass = activeIndex === index ? 'active-button' : 'filterbutton';
            return (


              <button className={buttonClass} value={category.name} key={index} onClick={() => handlecategory(index)}>

                {category.name}
              </button>
            )
          })}
        </div>

        <div className='ra-products'>
          {
            products.map((product) => {
              return (
                <Product additional_image={product.additional_image} name={product.name} color={brandColor} />
              )
            })
          }
        </div>


      </div>
    </>
  )
}

export default BrandPage




