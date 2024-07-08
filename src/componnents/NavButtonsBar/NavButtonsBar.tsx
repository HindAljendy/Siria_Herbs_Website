import React, { useEffect, useState } from 'react'
import './NavButtons.css'
 import { NavButtonsBarProps } from '../../types/types'


// const buttons: NavButtonsBarProps  =["عبوة بلاستيكية","كيس قصدير"];


const NavButtonsBar:React.FC<NavButtonsBarProps>= ({categories}) => {
// useEffect(()=>{
//   categories.map((category)=>{console.log(category.name)})
// },[])

 return(
  <div className="ra_nav_filterbuttons">
    {categories?.map((category,index)=>{
    return (
    
      
            <button className="filterbutton" value="plastic" key={index}>
              {category.name}
            </button>
       )
  })}
  
  </div>
  
)  
}

export default NavButtonsBar

