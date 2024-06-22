import React from 'react';
import './Footer.css';
import footerLogo from '../../assets/images/footer_logo.svg'; 
import phone from '../../assets/icons/footer/phone-call-01.svg';
import msg from '../../assets/icons/footer/_x39__18_.svg';


const Footer = () => {
return (
    <div className="na-footer">

        <div className="na-container">

            <div className="na-sec1">
                <img src={footerLogo} alt="Footer Logo" />
                <p>تأسست شركة سيريا عام 2021، لتكون فصلاً سورياً جديداً في قصة عطاء الأرض والإنسان. من قلب جبال الساحل   السوري، كلمتنا الأولى كُتبت </p>
            </div>

            <div className="na-sec2">
                <h4>روابط</h4>
                <p> الشهادات</p>
                <p> السياسة</p>
            </div>


            <div className="na-sec3">
            <h4>العلامات التجارية</h4>
                <p> ذهب أخضر</p>
                <p> مليكة</p>
                <p> a vie </p>
                <p> اوغارو</p>


            </div>


            <div className="na-sec4">
            <h4> التواصل</h4>
            <div className="na-contact-item">
            <div className="na-icon-container">
            <img src={phone} alt="phone" />
            </div>
            <p>2020 41 963+</p>
        </div>
        <div className="na-contact-item">

        <div className="na-icon-container">
            <img src={msg} alt="msg" />
            </div>
        <p>info@siriaherbs.com</p>
        </div>
            </div>
            </div>

        <div className="na-line"></div>
            <div className="na-footer-bottom">
        <p>Siria Herbs 2023 © All Rights Reserved | Designed and Developed by focalX</p>
    </div>
    
    </div>
);
}
export default Footer;