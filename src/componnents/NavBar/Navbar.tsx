import React from 'react'
import './NavBar/Navbar.css'
import arrowIcon from '../assets/icons/arrow.svg'
import searchIcon from '../assets/icons/serach Icon.svg'
import logo from '../assets/images/home/nav_logo.webp'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='ra_subnav'>
        

      </nav>
      <nav className='ra_nav'>
        <div className='nav_logo'>
          <img src={logo} alt="Sirian herbs logo"/>
        </div>
        <div className="nav_items">
        <div className='nav_links'>
          <Link to='/'>
            <li>الرئيسية</li>
          </Link>

          <Link to='/' className='dropdown'>
         
           <li>منتجاتنا</li>
           <img src={arrowIcon} alt='arrow icon'/>


            
          </Link>

          <Link to='/'>
           <li>من نحن</li>
          </Link>
          <Link to='/'>
            <li>تواصل معنا</li>
          </Link>
        </div>
        <div className="nav_search">
          <img src={searchIcon}/>
        </div>
        </div>

      
      
       
      </nav>
 
      
    </div>
  )
}

export default Navbar
