// Import React module
import React from 'react';
// Import styling
import '../Styles/Navbar.css';
// Import logo
import logo from '../Static/logo.png';
// Import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHouse, faPlus } from '@fortawesome/free-solid-svg-icons';
// Import moduels from react router DOM
import { NavLink, Outlet } from 'react-router-dom';

// Navbar component
function Navbar() {
  return (
    <>
        <div className='navbar'>
            {/* App Logo */}
            <div className='logo-div'>
                <NavLink to='/'>
                    <img src={logo} alt='logo' className='logo'/>
                </NavLink>
            </div>
            
            <div className='nav-buttons'>
                {/* Go to products page */}
                <NavLink to='/'>
                    <span>
                        Products&nbsp;
                        <FontAwesomeIcon icon={faHouse} />
                    </span>
                </NavLink>
                {/* Go to add new product page */}
                <NavLink to='/newProduct'>
                    <span>
                        Add A Product&nbsp;
                        <FontAwesomeIcon icon={faPlus} />
                    </span>
                </NavLink>
                {/* Go to cart page */}
                <NavLink to='/cart'>
                    <span>
                        Your Cart&nbsp;
                        <FontAwesomeIcon icon={faCartShopping} />
                    </span>
                </NavLink>
            </div>
        </div>
        {/* Append other compoents */}
        <Outlet />
    </>
  )
}

export default Navbar