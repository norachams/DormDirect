import React from 'react';
import './Button.css'

// Define the props type
interface ButtonProps {
  icon: React.ComponentType<{ id: string }>;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ icon: Icon, text }) => {
  return (
    <div className='big-container'>
    <button className='parent-button'>
      <div className='button-container'>
        <Icon id='icon' />
        <p id='button-paragraph-text'>{text}</p>
      </div>
    </button>
    </div>
  );
};

export default Button;
