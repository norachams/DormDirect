// src/components/Navbar.tsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";
import logoIcon from './images/logo_edited.png';

export const Navbar = () => {
  return (
    <nav>
      <div className='navbar-left'>
        <NavLink to={"/"}><img id='logo-navbar' src={logoIcon} alt='Logo' /></NavLink>
      </div>
      <ul>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/login"}>Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
