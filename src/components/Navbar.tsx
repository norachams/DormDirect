import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav>
        <h1 className='title'>DormDirect</h1>
      <ul>
        <li>
          About
        </li>
        <li>
          Login
        </li>
      </ul>
    </nav>
  )
}
