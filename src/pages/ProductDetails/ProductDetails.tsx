import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import productImagePlaceholder from '../../assets/images/a vie/product3.webp';
import './ProductDetails.css';
import { LuLink } from "react-icons/lu";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import NavigationLinks from '../../componnents/NavigationLinks/NavigationLinks';
import ProductSlider from '../../componnents/ProductSlider/ProductSlider';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({
        main_image: productImagePlaceholder,
        name: "للتنحيف و إنقاص الوزن",
        subname1: "شاي أخضر سوري مع التوت البري",
        product_description: "خلطة طبيعية ومدعمة للتنحيف وإنقاص الوزن",
        brand_id: "a vie",
        code_number: "8",
        weight: "50 g",
        packaging_description: "معبأة في كيس نايلون وعلبة كرتون خاصة",
        count_each_package: "10",
        additional_image: [productImagePlaceholder, productImagePlaceholder, productImagePlaceholder],
        description_component:  " يسبه الليمون(سيمبوبوجون، سيترانوسstapt dc) أوراق التوت البري  ",
        subname2: " خلطة طبيعية تساعد في التنحيف وإنقاص الوزن  تفيد في اظطرابات الجهاز الهضمي تساعد في التنحيف وإنقاص الوزن تفيد في حرق شحوم البدانة",
        category_id: "أعشاب طبية متوسطية غنية بالمكونات النشطةز يتم جمعها بعناية من جبال الساحل السوريز وتجفيفها في الظل وتعقيمها وفق أحدث التقنيات تحت إشراف الصيادلة. يتم اختيار الجنس والرائحة والأجزاء الطبية المطابقة لدستور الأدوية العلمي avie herbs",
    });
    const [activeSection, setActiveSection] = useState('components');

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/products/${productId}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error('Error fetching the product data:', error));
    }, [productId]);

    return (
        <>
            <div className="na-nav-product">
                <NavigationLinks
                    navigateMain='الرئيسية'
                    navigateLink=' المنتجات' navigateSubmain='a vie'
                    navigateSubmain2='للتنحيف و إنقاص الوزن'
                />
            </div>

            <div className="na-product-details">
                <div className="na-product-image">
                    <img src={product.main_image} alt={product.name} />
                    <div className="na-product-thumbnails">
                        {product.additional_image.map((thumbnail, index) => (
                            <img key={index} src={thumbnail} alt={`Thumbnail ${index + 1}`} />
                        ))}
                    </div>


                <div className="na-product-info">
                    <h1>{product.name}</h1>
                    <p>{product.subname1}</p>
                    <h5>{product.product_description}</h5>
                    <ul>
                        <li>ماركة: <span>{product.brand_id}</span></li>
                        <li>رقم المنتج: <span>{product.code_number}</span></li>
                        <li>الوزن: <span>{product.weight}</span></li>
                        <li>التغليف: <span>{product.packaging_description}</span></li>
                        <li>العدد في الطرد: <span>{product.count_each_package}</span></li>
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


            <div className="na-tabs">
                <span
                    onClick={() => setActiveSection('components')}
                    className={activeSection === 'components' ? 'active' : ''}
                >
                    المكونات
                </span>
                <span
                    onClick={() => setActiveSection('description')}
                    className={activeSection === 'description' ? 'active' : ''}
                >
                    الوصف
                </span>
                <span
                    onClick={() => setActiveSection('brand')}
                    className={activeSection === 'brand' ? 'active' : ''}
                >
                    العلامة التجارية
                </span>
            </div>

            <div className="na-tab-content">
                {activeSection === 'components' && (
                    <div>
                        {product.description_component}
                    </div>
                )}
                {activeSection === 'description' && (
                    <div>
                        {product.subname2}
                    </div>
                )}
                {activeSection === 'brand' && (
                    <div>
                        {product.category_id}
                    </div>
                )}
            </div>

        </>
    );
};

export default ProductDetails;
