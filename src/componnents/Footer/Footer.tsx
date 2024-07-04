import React from 'react';
import './Footer.css';
import footerLogo from '../../assets/images/footer_logo.svg';
import phone from '../../assets/icons/footer/phone-call-01.svg';
import msg from '../../assets/icons/footer/_x39__18_.svg';
import Focalx from './../../assets/icons/footer/Focal x.svg'

const Footer = () => {

    return (
        <>
            <div className="na-footer">
                <div className="na-container">
                    <div className="na-sec1">
                        <img src={footerLogo} alt="Footer Logo" />
                        <div className='NA_Footer_paragraph'>
                            <p > تأسست شركة سيريا عام 2021، لتكون فصلاً سورياً جديداً في قصة عطاء الأرض والإنسان. من قلب جبال الساحل   السوري، كلمتنا الأولى كُتبت . </p>
                        </div>
                    </div>
                    <div className='NA_Small_Sections'>
                        <div className="na-sec2">
                            <span className='MA_title'>روابط</span>
                            <span className='MA_paragraph'> الشهادات</span>
                            <span className='MA_paragraph'> السياسة</span>
                        </div>


                        <div className="na-sec3">
                            <span className='MA_title'>العلامات التجارية</span>
                            <span className='MA_paragraph'> ذهب أخضر</span>
                            <span className='MA_paragraph'> مليكة</span>
                            <span className='MA_paragraph'> a vie </span>
                            <span className='MA_paragraph'> اوغارو</span>
                        </div>


                        <div className="na-sec4">
                            <span className='MA_title'> التواصل</span>
                            <div className="na-contact-item">
                                <div className="na-icon-container">
                                    <img src={phone} alt="phone" />
                                </div>
                                <span className='MA_paragraph'>2020 41 963+</span>
                            </div>
                            <div className="na-contact-item">

                                <div className="na-icon-container">
                                    <img src={msg} alt="msg" />
                                </div>
                                <a className='MA_paragraph'>info@siriaherbs.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="na-line"></div>
                <div className="na-footer-bottom">
                    <div className='NA_Flex_footer_bottom'>
                        <img src={Focalx} alt="Focalx" />
                        <span>Siria Herbs 2023 © All Rights Reserved | Designed and Developed by </span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Footer;