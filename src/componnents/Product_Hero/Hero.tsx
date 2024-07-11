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








// import './Hero.css'
// import img1 from '../../assets/images/bunch-fresh-mint-female-hands 1.png'
// import img2 from '../../assets/images/Group.png'
// import React from 'react'
// export const Hero = () => {
//   return (
//     <div className='MA_hero' style={{ backgroundImage: `url(${img1})` }}>
//         <div className='box'>
//             <div className='image'>
//                 <img src={img2} alt="" />
//             </div>
//             <div className='text'>
//                 <h2><b>صحتك دهَب</b></h2>
//                 <p>
                // ذهب أخضر السوري يمثل  كافة النباتات والأعشاب الطبيعية السورية من البادية والجبل والساحل وغوطة الشام وسهل حوران.
                // تشكيلة واسعة من المنتجات الطبيعية بالنكهة السورية الخاصة.
                // جمعت بعناية ومحبة بأيدي وخبرات سورية.
//                 </p>
//             </div>
//         </div>
//     </div>
//   )
// }