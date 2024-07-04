import React from 'react';
import './Qoute.css';
import qoute from '../../assets/icons/qoute.svg'



const Qoute = () => {
    return (
        <div className="na-qoute">
            <div className="na-rectangle1">
                <img src={qoute} alt="quote" className="quote-icon" />
                <h1>سورية تعمل على سد الفجوة بين الإنتاج الزراعي والتسويق بمعايير الجودة والتميز</h1>
                <h6>سيريا لمنتجات الطبيعة</h6>
            </div>
        </div>
    );
}

export default Qoute;
