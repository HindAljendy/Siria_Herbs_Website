// ValueItem.tsx
import React from 'react';
import './ValueItem.css';

interface ValueItemProps {
    icon: string;
    title: string;
    description: string;
    className: string;
}

const ValueItem: React.FC<ValueItemProps> = ({ icon, title, description, className }) => {
    return (
        <div className={className}>
            <img src={icon} alt={title} className={className.includes('reverse') ? 'AB_icon-left' : 'AB_icon-right'} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ValueItem;
