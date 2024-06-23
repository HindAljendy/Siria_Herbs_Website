import React from 'react';
import './NewsLetterForm.css'; 

const NewsLetterForm: React.FC = () => {
  return (
    <>
      <div className="IB_FormContainer">
        <div className="IB_TextContainer">
          <h2>الطبيعة السورية هي قلب الطبيعة</h2>
          <p>
            اشترك معنا وتلقى أحدث أخبارنا ومنتجاتنا
            <img src="/src/assets/icons/footer/_x39__18_.svg" alt="صورة الاشتراك" className="IB_Image" />
          </p>
        </div>
        <div className="IB_InputContainer">
          <input className="IB_Input" type="email" placeholder="البريد الإلكتروني" />
          <button className="IB_Button">اشترك</button>
        </div>
            <img src="/src/assets/icons/footer/Frame 158.svg" alt="" />
      </div>
    </>
  );
};

export default NewsLetterForm;