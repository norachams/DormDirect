// src/components/Home.tsx
import React from 'react';
import "./styles/HomeBlock3.css";
import VerticalBlockItem from '../../VerticalBlockItem';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GiHouseKeys } from "react-icons/gi";

export const HomeBlock3: React.FC = () => {
     return (
          <div className='container3'>
               <div className='center-content'>
                    <h1 className='container-3-header'>
                         How it Works? Find the Perfect Rental
                    </h1>
               </div>
               <div className='section-block'>
                    <div className='block-1'>
                         <VerticalBlockItem icon={FaMagnifyingGlass} headingText='Find a Rental that Works for You' text='Scroll Through our Rental Options and Filter by Duration, Price, and Type to Find What Suits You Best!' />
                    </div>
                    <div className='block-1'>
                         <VerticalBlockItem icon={FaPhoneAlt} headingText='Get in Touch with the Tenant or Landlord' text='Our site will redirect you to the parent site of the listing where you can reach out to the landlord or current lease holder.' />
                    </div>
                    <div className='block-2'>
                         <VerticalBlockItem icon={GiHouseKeys} headingText='Grab the Keys and Move in!' text='Sign the Lease and Move in - It’s that Easy!' />
                    </div>
               </div>
          </div>
     );
};

export default HomeBlock3;
