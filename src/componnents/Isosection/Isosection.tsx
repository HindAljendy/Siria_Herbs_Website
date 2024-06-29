import React from 'react';
import './Isosection.css';
import isoicon from '../../assets/icons/leaf.svg'; 

interface IsosectionProps {
    title: string;
}

const Isosection: React.FC<IsosectionProps> = ({ title }) => {
    return (
        <div className="na-isosection">
            <img src={isoicon} alt="Logo" />
            <h3>{title}</h3>
        </div>
    );
}

export default Isosection;
