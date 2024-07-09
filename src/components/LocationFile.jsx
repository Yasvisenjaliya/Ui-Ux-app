import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';
import { MdLocationOn, MdSearch } from 'react-icons/md'; // Import location and search icons
import Table from './Table'; // Import the Table component

const LocationFile = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locations, setLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [showActiveOnly, setShowActiveOnly] = useState(false);
  const [locationSearchTerm, setLocationSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const response = await fetch('https://dev.carzup.in/api/pricelist/test-mock');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Full API data:', data); // Log API data received

      if (data.data && Array.isArray(data.data)) {
        setLocations(data.data);
        setFilteredLocations(data.data); // Initialize with all locations
      } else {
        throw new Error('API response data is not in expected format');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    filterLocations(searchTerm, showActiveOnly, locationSearchTerm);
  };

  const handleLocationSearchChange = (e) => {
    const searchLocationTerm = e.target.value.toLowerCase();
    setLocationSearchTerm(searchLocationTerm);
    filterLocations(searchTerm, showActiveOnly, searchLocationTerm.toLowerCase());
  };

  const handleLocationSelect = (e) => {
    const selectedLocation = e.target.value;
    setSelectedLocation(selectedLocation);
    filterLocations(searchTerm, showActiveOnly, selectedLocation.toLowerCase());
  };

  const filterLocations = (searchTerm, showActiveOnly, searchLocationTerm = '') => {
    const filtered = locations.filter(location =>
      (location.name.toLowerCase().includes(searchTerm) ||
        location.email.toLowerCase().includes(searchTerm)) &&
      (!showActiveOnly || location.active) &&
      (searchLocationTerm === '' || location.location.toLowerCase().includes(searchLocationTerm))
    );
    setFilteredLocations(filtered);
  };

  const handleActiveToggle = (checked) => {
    setShowActiveOnly(checked);
    filterLocations(searchTerm, checked, locationSearchTerm);
  };

  return (
    <div className="fixed top-24 left-[22.9%] right-[9%] bottom-10 bg-[#b8e8f5] dark:bg-gray-800 p-4 flex justify-center rounded-2xl">
      <div className="w-full max-w-4xl">
        <div className='flex mb-4 gap-10'>
          <div className="relative flex-auto">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="search">
              <MdSearch className="absolute left-2 top-5 text-gray-400" size={20} />
            </label>
            <input
              id="search"
              type="text"
              className="w-full p-2 pl-10 border border-gray-300 dark:border-gray-700 rounded"
              placeholder="Search by name or email"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="relative">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="selectLocation">
              <MdLocationOn className="absolute left-2 top-5 text-gray-400" size={20} />
            </label>
            <select
              id="selectLocation"
              className="w-48 p-2 pl-8  border border-gray-300 dark:border-gray-700 rounded"
              value={selectedLocation}
              onChange={handleLocationSelect}
            >
              <option value="">All Locations</option>
              {locations.map((location, index) => (
                <option key={index} value={location.location}>
                  {location.location}
                </option>
              ))}
            </select>
          </div>
          
          <Switch
            className="ml-4 top-4"
            checked={showActiveOnly}
            onChange={handleActiveToggle}
            onColor="#2196F3"
            checkedIcon={false}
            uncheckedIcon={false}
            height={24}
            width={48}
            handleDiameter={20}
          />
        </div>
        {/* Table Section */}
        <div className="max-h-[450px] overflow-x-auto mt-8 ">
          <Table data={filteredLocations} />
        </div>
      </div>
    </div>
  );
};

export default LocationFile;
