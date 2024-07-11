import React, { useState } from 'react';
import Navbar from './Navbar';
import LocationFile from './LocationFile';
import DragDropList from './DragDropList';

const Sidebar = ({ setActiveCard, handleSidebarItemClick, darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState('ui-ux');

  const handleSectionChange = (section) => {
    setActiveSection(section);
    handleSidebarItemClick(section); 
  };

  const handleClick = (e, section) => {
    e.preventDefault(); 
    handleSectionChange(section);
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900' : 'bg-[#ebf1fd]'}`}>
      <div className={`w-64 p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">Menu</h2>
        <nav>
          <ul>
            <li>
              <button
                className={`w-full text-left px-4 py-2 rounded-lg ${activeSection === 'ui-ux' ? 'bg-header_color text-primary' : 'text-gray-900 dark:text-gray-100'}`}
                onClick={(e) => handleClick(e, 'ui-ux')}
              >
                UI-UX
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-4 py-2 rounded-lg ${activeSection === 'location' ? 'bg-header_color text-primary' : 'text-gray-900 dark:text-gray-100'}`}
                onClick={(e) => handleClick(e, 'location')}
              >
                Location
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-4 py-2 rounded-lg ${activeSection === 'list' ? 'bg-header_color text-primary' : 'text-gray-900 dark:text-gray-100'}`}
                onClick={(e) => handleClick(e, 'list')}
              >
                List
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-grow p-8">
        {activeSection === 'ui-ux' && <Navbar />}
        {activeSection === 'location' && <LocationFile/>}
        {activeSection === 'list' && <DragDropList/>}
      </div>
    </div>
  );
};

export default Sidebar;
