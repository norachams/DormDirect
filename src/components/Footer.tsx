// src/components/Footer.tsx
import React from 'react';
import "./styles/Footer.css";
import Logo from './images/logo_edited.png'

export const Footer = () => {
     return (
          <div className='main-footer'>
               <div className='footer-container'>
                    {/* Column1 */}
                    <div className='col'>
                         <a href='/'><img id='logo-icon' src={Logo} /></a>
                    </div>
                    {/* Column2 */}
                    <div className='col'>
                         <h4 id='header-title'>Subscribe</h4>
                         <ul className='list-unstyled'>
                              <li id='newsletter-item'>Click on our <span>NewsLetter</span> to Sign Up!</li>
                         </ul>
                    </div>
                    {/* Column3 */}
                    <div className='col'>
                         <h4 id='header-title'>Contact Us</h4>
                         <ul className='list-unstyled'>
                              <a id='link' href='mailto:hi@justhome.com'><li>hi@justhome.com</li></a>
                              <li>(123) 456-7890</li>
                         </ul>
                    </div>
                    {/* Column4 */}
                    <div className='col'>
                         <h4 id='header-title'>Our Address</h4>
                         <ul className='list-unstyled'>
                              <a id='link' href='https://www.google.com/maps/place/99+Fifth+Ave+3rd+Floor,+Ottawa,+ON+K1S+5K4/data=!4m2!3m1!1s0x4cce05c754701f0f:0x991f427008b04d7e?sa=X&ved=1t:242&ictx=111'><li>99 Fifth Avenue, 3rd Floor</li></a>
                              <li>San Francisco, CA 1980</li>
                         </ul>
                    </div>
               </div>
          </div>
     );
};
