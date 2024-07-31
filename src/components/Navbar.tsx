// src/components/Navbar.tsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import logoIcon from '../images/logo.png';



export const Navbar = () => {
  return (
    <nav>
      <div className='navbar-left'>
      <NavLink to={"/home"}><img id='logo-navbar' src={logoIcon} alt='Logo' /></NavLink>
      </div>
      <ul>
      <li><NavLink to={"/about"}>About</NavLink></li>
      <li><NavLink to={"/listings"}>Listings</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
