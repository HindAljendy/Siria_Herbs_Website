

// // OurValues.
// // OurValues.tsx
// import React, { useEffect, useState } from 'react';
// import './OurValues.css';
// import Line from '../../assets/images/home/Line.svg';
// import value from '../../assets/images/home/value.webp';
// import ValueItem from '../ValueItem/ValueItem';

// interface Value {
//     id: number;
//     icon: string;
//     title: string;
//     description: string;
// }

// const OurValues: React.FC = () => {
//     const [values, setValues] = useState<Value[]>([]);

//     useEffect(() => {
//         fetch('http://127.0.0.1:8000/api/evaluations')
//             .then(response => response.json())
//             .then(data => setValues(data.data))
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     return (
//         <div className="AB_values-section">
//             <div className="AB_tree-image">
//                 <img src={value} alt="Tree" />
//             </div>
//             <div className="AB_values-text">
//                 <h2>قيمنا</h2>
//                 <img src={Line} alt="Line" className="AB_line-image" />
//                 {values.map((value, index) => (
//                     <ValueItem
//                         key={value.id}
//                         icon={value.icon}
//                         title={value.title}
//                         description={value.description}
//                         className={index % 2 === 0 ? 'AB_value-item' : 'AB_value-item reverse'}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default OurValues;
import React, { useEffect, useState } from 'react';
import './OurValues.css';
import Line from '../../assets/images/home/Line.svg';
import value from '../../assets/images/home/value.webp';
import ValueItem from '../ValueItem/ValueItem';

interface Value {
    id: number;
    icon: string;
    title: string;
    description: string;
}

const OurValues: React.FC = () => {
    const [values, setValues] = useState<Value[]>([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/evaluations')
            .then(response => response.json())
            .then(data => setValues(data.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="AB_values-section">
            <div className="AB_tree-image">
                <img src={value} alt="Tree" />
            </div>
            <div className="AB_values-text">
                <h2>قيمنا</h2>
                <img src={Line} alt="Line" className="AB_line-image" />
                {values.map((value, index) => (
                    <ValueItem
                        key={value.id}
                        icon={value.icon}
                        title={value.title}
                        description={value.description}
                        className={index % 2 === 0 ? 'AB_value-item' : 'AB_value-item reverse'}
                    />
                ))}
            </div>
        </div>
    );
};

export default OurValues;
