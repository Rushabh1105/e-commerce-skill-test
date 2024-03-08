import React from 'react';
import '../Styles/Navbar.css';
import logo from '../Static/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHouse, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <>
        <div className='navbar'>
            <div className='logo-div'>
                <NavLink to='/'>
                    <img src={logo} alt='logo' className='logo'/>
                </NavLink>
            </div>
            <div className='nav-buttons'>
                <NavLink to='/'>
                    <span>
                        Products&nbsp;
                        <FontAwesomeIcon icon={faHouse} />
                    </span>
                </NavLink>
                <NavLink to='/newProduct'>
                    <span>
                        Add A Product&nbsp;
                        <FontAwesomeIcon icon={faPlus} />
                    </span>
                </NavLink>
                <NavLink to='/cart'>
                    <span>
                        Your Cart&nbsp;
                        <FontAwesomeIcon icon={faCartShopping} />
                    </span>
                </NavLink>
            </div>
        </div>
        <Outlet />
    </>
  )
}

export default Navbar