import React, { useState, useEffect } from 'react';
import { SearchInput, LocationSelect, ActiveSwitch, fetchLocations, filterLocations } from './CommonComponents';
import Table from './Table';

const LocationFile = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locations, setLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [showActiveOnly, setShowActiveOnly] = useState(false);
  const [locationSearchTerm, setLocationSearchTerm] = useState('');

  useEffect(() => {
    fetchLocations(setLocations, setFilteredLocations);
  }, []);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    setFilteredLocations(filterLocations(locations, searchTerm, showActiveOnly, locationSearchTerm));
  };

  const handleLocationSearchChange = (e) => {
    const locationSearchTerm = e.target.value.toLowerCase();
    setLocationSearchTerm(locationSearchTerm);
    setFilteredLocations(filterLocations(locations, searchTerm, showActiveOnly, locationSearchTerm));
  };

  const handleActiveSwitchChange = (checked) => {
    setShowActiveOnly(checked);
    setFilteredLocations(filterLocations(locations, searchTerm, showActiveOnly, locationSearchTerm));
  };

  return (
    <div className="fixed top-24 left-[22.9%] right-[9%] bottom-10 bg-[#b8e8f5] dark:bg-gray-800 p-4 flex justify-center rounded-2xl">
      <div className="w-full max-w-4xl">
        <div className="flex mb-4 gap-10">
          <SearchInput
            id="search"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by name..."
          />
          <LocationSelect
            id="location"
            value={locationSearchTerm}
            onChange={handleLocationSearchChange}
            options={Array.from(new Set(locations.map((location) => location.location)))}
          />
          <ActiveSwitch
            checked={showActiveOnly}
            onChange={handleActiveSwitchChange}
          />
        </div>
        <div className="max-h-[450px] overflow-x-auto mt-8 ">
          <Table data={filteredLocations} />
        </div>
      </div>
    </div>
  );
};

export default LocationFile;
