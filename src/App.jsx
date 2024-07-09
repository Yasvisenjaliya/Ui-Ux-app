import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import Sidebar from './components/Sidebar';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeCard, setActiveCard] = useState('yourDetails');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const handleSidebarItemClick = (section) => {
    setActiveCard(section);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-[#ebf1fd] dark:bg-gray-900'}`}>
      <div className='flex'>
        <div>
          <Sidebar setActiveCard={setActiveCard} handleSidebarItemClick={handleSidebarItemClick} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <div className='flex'>
          <div>
            <h1 className="text-7xl text-blue-600 dark:text-blue-400 font-bold underline">
              Demaze
            </h1>
          </div>
          <div>
            <button
              className="p-2 m-4 ml-[50rem]  bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded "
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <>
                  <MdOutlineLightMode className="h-6 w-6 mr-1" />
                </>
              ) : (
                <>
                  <MdDarkMode className="h-6 w-6 mr-1" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      <Navbar activeCard={activeCard} />
    </div>
  );
}
