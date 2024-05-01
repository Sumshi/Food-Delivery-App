/*context used: right side are for links, cart , logins etc
left side includes logos etc
*/

import React, { useState } from 'react';
import './Navbar.css';
import SearchIcon from '../../assets/search_icon.png';
import BasketIcon from '../../assets/basket_icon.png';
import Logo from '../../assets/logo.png';

const Navbar = () => {
//state managment using useState

const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={Logo} alt="" className='logo'/>
      <ul className="navbar-menu">
        <li onClick={() =>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
        <li onClick={() =>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
        <li onClick={() =>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</li>
        <li onClick={() =>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</li>
      </ul>

      <div className='navbar-right'>
        <img src={SearchIcon} alt="" />
        <div className='navbar-search-icon'>
            <img src={BasketIcon} alt="" />
            <div className='dot'>{/*dot for cart items*/}</div>
        </div>

        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar;
