// src/components/Navbar.tsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import logoIcon from '../images/logo_edited.png';
import { useAuth } from '../AuthContext'; 


export const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useAuth();
  return (
    <nav>
      <div className='navbar-left'>
      <NavLink to={"/"}><img id='logo-navbar' src={logoIcon} alt='Logo' /></NavLink>
      </div>
      <ul>
      <li><NavLink to={"/about"}>About</NavLink></li>
      {isAuthenticated && <li><NavLink to={"/listings"}>Browse Listings</NavLink></li>}
      <li><NavLink to={"/login"}>{isAuthenticated ? 'Logout' : 'Login'}</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
