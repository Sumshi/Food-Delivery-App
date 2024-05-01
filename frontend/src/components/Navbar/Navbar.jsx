import React from 'react';
import './Navbar.css';
import SearchIcon from '../../assets/search_icon.png';
import BasketIcon from '../../assets/basket_icon.png';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={Logo} alt="" className='logo'/>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile-app</li>
        <li>Contact Us</li>
      </ul>

      <div className='navbar-right'>
        <img src={SearchIcon} alt="" />
        <div className='navbar-search-icon'>
            <img src={BasketIcon} alt="" />
            <div className='dot'>

            </div>
        </div>

        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
