import './Hero.css'
import React from 'react'

interface HeroProps {
  name: string;
  description: string;
  backgroundImage: string;
  brandImage: string; 
}

export const Hero: React.FC<HeroProps> = ({ name, description, backgroundImage,brandImage  }) => {

  const mystyle={
    backgroundImage: `${backgroundImage}` ,
  }

  
  return (

   
    <div className='MA_hero' style={mystyle}>

  return (
    
      <div className='box'>
        <div className='image'>
          <img src={brandImage } alt="" />
        </div>
        <div className='text'>
          <h2><b>{name}</b></h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

