import React from 'react';
import { IoCheckmarkDone } from "react-icons/io5";
import "./homeSections/styles/HomeBlock3.css"

// Define the props type
interface BlockItemProps {
     icon: React.ComponentType<{ id: string }>;
     headingText: string;
     text: string;
}

export const VerticalBlockItem: React.FC<BlockItemProps> = ({ icon: Icon, headingText, text }) => {
     return (
          <div className='vertical-block'>
               <div className='circle-icon'>
                    <Icon id='icon' />
               </div>
               <h5 id='heading-text'>{headingText}</h5>
               <p id='how-it-works-text'>{text}</p>
          </div>
     );
};

export default VerticalBlockItem;
