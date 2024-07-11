// Button.jsx
import React from 'react';

const Button = ({ children, onClick, active }) => {
  return (
    <button
      className={` w-[20%] px-4 py-2 rounded-xl ${active ? 'bg-header_color text-primary' : 'bg-back text-inp dark:bg-dark_card dark:text-primary'}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 
