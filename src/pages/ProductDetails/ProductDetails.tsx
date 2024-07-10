import React, { useEffect, useState } from 'react';
import productImagePlaceholder from '../../assets/images/a vie/product3.webp';
import './ProductDetails.css';
import { LuLink } from "react-icons/lu";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import NavigationLinks from '../../componnents/NavigationLinks/NavigationLinks';
import ProductSlider from '../../componnents/ProductSlider/ProductSlider';

const ProductDetails = () => {
    const [product, setProduct] = useState({
        image: productImagePlaceholder,
        title: "للتنحيف و إنقاص الوزن",
        description: "شاي أخضر سوري مع التوت البري",
        details: "خلطة طبيعية ومدعمة للتنحيف وإنقاص الوزن",
        brand: "a vie",
        id: "8",
        weight: "50 g",
        packaging: "معبأة في كيس نايلون وعلبة كرتون خاصة",
        quantity: "10",
        thumbnails: [productImagePlaceholder, productImagePlaceholder, productImagePlaceholder]
    });

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products')
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching the product data:', error));
    }, []);

    return (
        <>
        <div className="na-nav-product">
        <NavigationLinks
        navigateMain='الرئيسية'
        navigateLink=' المنتجات' navigateSubmain='a vie'
        navigateSubmain2='للتنحيف وإنقاص الوزن'
        />
    </div>

        <div className="na-product-details">
            <div className="na-product-image">
                <img src={product.image} alt={product.title} />
                <div className="na-product-thumbnails">
                    {/* {product.thumbnails.map((thumbnail, index) => (
                        <img key={index} src={thumbnail} alt={`Thumbnail ${index + 1}`} />
                    ))} */}
                </div>
            </div>

            <div className="na-product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <h5>{product.details}</h5>
                <ul>
                    <li>ماركة: <span>{product.brand}</span></li>
                    <li>رقم المنتج: <span>{product.id}</span></li>
                    <li>الوزن: <span>{product.weight}</span></li>
                    <li>التغليف: <span>{product.packaging}</span></li>
                    <li>العدد في الطرد: <span>{product.quantity}</span></li>
                </ul>
                <div className="na-contact-product">
                    <button className="na-call-button">
                        <LuLink className="na-button-product" />
                        اتصل بنا
                    </button>
                    <div className="na-share">
                        <p>للمشاركة:</p>
                        <FaSquareInstagram />
                        <BsFacebook />
                    </div>
                </div>
            </div>
        </div>
        <ProductSlider/>
        </>
    );
};

export default ProductDetails;
