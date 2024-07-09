// Navbar.jsx
import React, { useState } from 'react';
import Button from './Button'; 
import YourDetailsCard from './YourDetailsCard';
import FatherDetailsCard from './FatherDetailsCard';
import EducationDetailsCard from './EducationDetailsCard';

const Navbar = ({ activeSection, onClose }) => {
  const [activeTab, setActiveTab] = useState('yourDetails'); 

  const handleTabClick = (tabName) => {
    setActiveTab(tabName === activeTab ? null : tabName);
    if (onClose) onClose(); 
  };

  const handleCloseCard = () => {
    setActiveTab(null);
    if (onClose) onClose(); 
  };

  return (
    <div className="fixed m-16 w-[68%] bg-[#b8e8f5] dark:bg-gray-800 justify-center rounded-2xl">
      <div className="flex justify-center space-x-4 p-4 rounded-2xl bg-[#8cceee] dark:bg-gray-800 border-b-2 border-b-black">
        <Button onClick={() => handleTabClick('yourDetails')} active={activeTab === 'yourDetails'}>
          Your Details
        </Button>
        <Button onClick={() => handleTabClick('fatherDetails')} active={activeTab === 'fatherDetails'}>
          Father Details
        </Button>
        <Button onClick={() => handleTabClick('educationDetails')} active={activeTab === 'educationDetails'}>
          Education Details
        </Button>
      </div>

      {activeTab === 'yourDetails' && <YourDetailsCard onClose={handleCloseCard} />}
      {activeTab === 'fatherDetails' && <FatherDetailsCard onClose={handleCloseCard} />}
      {activeTab === 'educationDetails' && <EducationDetailsCard onClose={handleCloseCard} />}
    </div>
  );
};

export default Navbar;
