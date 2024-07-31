// src/components/Navbar.tsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import logoIcon from '../images/logo.png';



export const Navbar = () => {
  return (
    <nav>
      <div className='navbar-left'>
        <img id='logo-navbar' src={logoIcon} alt='Logo' />
      </div>
      <ul>
        <li>About</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
