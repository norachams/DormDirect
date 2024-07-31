// src/components/Home.tsx
import React from 'react';
import '../../../styles/HomeBlock2.css';
import campusStudents from "../../../images/campusStudents.png"
import { MdArrowRightAlt } from "react-icons/md";
import CheckMarkItem from '../../CheckMarkItem';

export const HomeBlock2: React.FC = () => {
     return (
          <div className='container2'>
               <div className='left-section'>
                    <img id="campus-picture" src={campusStudents} />
               </div>
               <div className='right-section'>
                    <div className='top-group'>
                         <h3 id='page-2-title'>Why You Should Rent Through Us</h3>
                         <p id='sub-text'>In a Saturated Housing Market - Choose Us for the Best Student Rentals</p>
                    </div>
                    <div className='bottom-group'>
                         <div className='left-group'>
                              <CheckMarkItem text='100% Secure and Student Verified' />
                              <CheckMarkItem text='Rent or Sublease Room' />
                         </div>
                         <div className='right-group'>
                              <CheckMarkItem text='Wide Range of Properties' />
                              <CheckMarkItem text='Trusted By Students and Landlords' />
                         </div>
                    </div>
                    <a href='/about'>
                    <button className='learn-more-button'>
                         Learn More
                         <MdArrowRightAlt />
                    </button>
                    </a>
               </div>
          </div>
     );
};

export default HomeBlock2;
