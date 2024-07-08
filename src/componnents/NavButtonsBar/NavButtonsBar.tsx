import React, { useEffect, useState } from 'react'
import './NavButtons.css'
 import { NavButtonsBarProps } from '../../types/types'
import { getProductsDependOnCategory } from '../../services/services';


// const buttons: NavButtonsBarProps  =["عبوة بلاستيكية","كيس قصدير"];


const NavButtonsBar:React.FC<NavButtonsBarProps>= ({categories}) => {
  const [filterbuttonclass, setFilterButtonClass] = useState('filterbutton');

  const handlecategory = (e) =>{
    console.log(e.target.id)
    let category=e.target.value;
    setFilterButtonClass('active-button');
    getProductsDependOnCategory(1,e.target.id)
  }


  


 return(
  <div className="ra_nav_filterbuttons">
    {categories?.map((category)=>{
    return (
    
      
            <button className={filterbuttonclass} value={category.name} id={category.id} onClick={handlecategory}>
              {category.name}
            </button>
       )
  })}
  
  </div>
  
)  
}

export default NavButtonsBar

