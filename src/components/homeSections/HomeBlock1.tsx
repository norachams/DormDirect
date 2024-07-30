// src/components/Home.tsx
import React from 'react';
import { FaSearch } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import Button from '../Button';
import "./styles/HomeBlock1.css";

export const HomeBlock1: React.FC = () => {
  return (
    <div className='container'>
      <div className='headings'>
        <h1 id="main-text">Easy Rentals for Busy Students</h1>
        <h3 id='main-text-2'>Search Properties to Rent in Waterloo, Ontario</h3>
      </div>
      <div className='search-bar-container'>
        <div className='input-wrapper'>
          <FaSearch id="search-icon" />
          <input placeholder='Enter Name, Keywords...' />
        </div>
      </div>
      <div className='button-group'>
        <Button icon={FaHouseUser} text="House" />
        <Button icon={MdApartment} text="Apartment" />
        <Button icon={GiFamilyHouse} text="Villa" />
      </div>
    </div>
  );
};

export default HomeBlock1;
