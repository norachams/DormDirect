import React from 'react';
import { IoCheckmarkDone } from "react-icons/io5";
import '../styles/HomeBlock2.css';

// Define the props type
interface CheckMarkProps {
     text: string;
}

export const CheckMarkItem: React.FC<CheckMarkProps> = ({ text }) => {
     return (
          <div className='small-section'>
               <IoCheckmarkDone />
               <p id='small-text'>{text}</p>
          </div>
     );
};

export default CheckMarkItem;
