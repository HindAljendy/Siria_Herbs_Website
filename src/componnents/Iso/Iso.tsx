import React from 'react';
import './Iso.css';
import isoimg from '../../assets/images/home/iso.webp'; 
import Isosection from '../../componnents/Isosection/Isosection';
import Icon from '../../assets/icons/butn.svg';



const Iso = () => {
    return(
        <div className="na-iso">
            <div className="na-title">
                <h3>شهادة الآيزو 9001</h3>
                <div className="na-green-line"></div>
            </div>
            <div className="na-iso-container">
                <img src={isoimg} alt="Logo" className="na-iso-image"/>
                <p>شهادة الآيزو لتصنيع وبيع منتجات الأعشاب الطبية الطبيعية ومنتجات العسل تتضمن عدة نقاط</p>
                <div className="na-icons">
                    <div className="na-icons-part1">
                        <Isosection title="الجودة والأمان" />
                        <Isosection title="الارتقاء بالصحة والعافية" />
                        <Isosection title="الاستدامة" />
                    </div>
                    <div className="na-icons-part2">
                        <Isosection title="الشفافية والمسؤولية" />
                        <Isosection title="الامتثال للمعايير" />
                    </div>
                </div>
                <button className="na-read-more-button">
                    <span>اقرأ المزيد</span>
                    <img src={Icon} alt="Arrow" className="na-button-icon" />
                </button>
                
                </div>
        </div>
    )
}

export default Iso;
