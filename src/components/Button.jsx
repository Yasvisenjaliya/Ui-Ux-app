// Button.jsx
import React from 'react';

const Button = ({ children, onClick, active }) => {
  return (
    <button
      className={` w-[20%] px-4 py-2 rounded-xl ${active ? 'bg-blue-500 text-white' : 'bg-[#b8e8f5] text-black dark:bg-gray-700 dark:text-white'}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 
