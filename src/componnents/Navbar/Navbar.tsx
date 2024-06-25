import React, { useState } from 'react';
import './Navbar.css';
import nav_logo from '../../assets/images/home/nav_logo.webp';
import nav_search from '../../assets/images/home/Icon.svg';
import facebook from '../../assets/icons/facebook.svg';
import insta from '../../assets/icons/insta.svg';
import call from '../../assets/icons/call.svg';
import mail from '../../assets/icons/mail.svg';
import w_facebook from '../../assets/icons/w_facebook.svg';
import w_insta from '../../assets/icons/w-insta.svg';
import w_call from '../../assets/icons/w_call.svg';
import w_mail from '../../assets/icons/w-mail.svg';
import logo1 from '../../assets/images/home/Group.svg';
import logo2 from '../../assets/images/home/Group (1).svg';
import logo3 from '../../assets/images/home/Group (2).svg';
import phone from '../../assets/icons/phone.svg';
import cancel from '../../assets/icons/x.svg';
import toggle from '../../assets/icons/toggle.svg';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (item: React.SetStateAction<string>) => {
    setSelectedItem(item);
  };

  const handleCancelClick = () => {
    setMenuActive(false);
    setSelectedItem('');
  };

  const handleToggleClick = () => {
    setMenuActive((prevState) => !prevState);
  };

  

  return (
    <>
      <div className={`MA_head ${menuActive ? 'hide' : ''}`}>
        <div>
          <DropdownButton id="dropdown-basic-button" title="العربية">
            <Dropdown.Item href="#/action-1">العربية</Dropdown.Item>
            <Dropdown.Item href="#/action-2">الانكليزية</Dropdown.Item>
          </DropdownButton>
        </div>
        <ul>
          <li>
            <span>info@siriaherbs.com</span>
            <img src={mail} alt="" />
          </li>
          <li>
            <span>+963 41 2020</span>
            <img src={call} alt="" />
          </li>
          <li>
            <img src={insta} alt="" />
          </li>
          <li>
            <img src={facebook} alt="" />
          </li>
        </ul>
      </div>

      <nav className={`MA_navbar ${menuActive ? 'hide' : ''}`}>
        <div className="list" style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="search-logo" style={{ marginRight: '90px' }}>
            <img src={nav_search} alt="nav_search" />
          </div>
          <ul className="navbar-items">
            <li className={`navbar-item ${selectedItem === 'contact' ? 'active' : ''}`}>
              <Link to={'/'} onClick={() => handleItemClick('contact')}>
                تواصل معنا
              </Link>
            </li>
            <li className={`navbar-item ${selectedItem === 'about' ? 'active' : ''}`}>
              <Link to={'/'} onClick={() => handleItemClick('about')}>
                من نحن
              </Link>
            </li>
            <li className={`navbar-item ${selectedItem === 'products' ? 'active' : ''}`}>
              <Link to={'/'} onClick={() => handleItemClick('products')}>
                <DropdownButton id="dropdown-basic-button" title="منتجاتنا ">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
              </Link>
              </li>

            <li className={`navbar-item ${selectedItem === 'home' ? 'active' : ''}`}>
              <Link to={'/'} onClick={() => handleItemClick('home')}>
                الرئيسية
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-logo">
          <img src={nav_logo} alt="nav_search" />
        </div>
        <button
          className="menu-button"
          onClick={handleToggleClick}
          style={{ backgroundColor: 'inherit' }}
        >
          <img src={toggle} alt="toggle" />
        </button>
      </nav>

      <div className={`mobile_nav ${menuActive ? 'active' : ''}`}>

          <div>
            <img
              src={cancel}
              alt="cancel"
              style={{ padding: '15px 15px' }}
              onClick={handleCancelClick}
            />

            <div className="nav-image">
              <img src={logo1} alt="logo" />
              <img src={logo2} alt="logo" />
              <img src={logo3} alt="logo" />
            </div>

            <ul className="mobile_nav_items">
              <li className={`mobile_nav_item ${selectedItem === 'home' ? 'active' : ''}`}>
                <Link to={'/'} onClick={() => handleItemClick('home')}>
                  الرئيسية
                </Link>
              </li>
              <li className={`mobile_nav_item ${selectedItem === 'products' ? 'active' : ''}`}>
                <Link to={'/'} onClick={() => handleItemClick('products')} >
                  <DropdownButton id="dropdown-basic-button" title="منتجاتنا " >
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </DropdownButton>
                </Link>
              </li>
              <li className={`mobile_nav_item ${selectedItem === 'about' ? 'active' : ''}`}>
                <Link to={'/'} onClick={() => handleItemClick('about')}>
                  من نحن
                </Link>
              </li>
              <li className={`mobile_nav_item ${selectedItem === 'contact' ? 'active' : ''}`}>
                <Link to={'/'} onClick={() => handleItemClick('contact')}>
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>
          <div className="mobile_nav_contact">
            <ul>
              <li style={{display:'flex',flexDirection:'row',gap:'15px'}}>
                <img src={w_insta} alt="" /><img src={w_facebook} alt="" />
              </li>
              <li>+963 41 2020<img src={w_call} alt="" /></li>
              <li>+963 994 640000<img src={phone} alt="" /></li>
              <li>info@siriaherbs.com<img src={w_mail} alt="" /></li>
            </ul>
          </div>
        </div>
      
    </>
  );
};

export default Navbar;