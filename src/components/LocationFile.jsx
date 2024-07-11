import React from 'react';
import { SearchInput, LocationSelect, ActiveSwitch } from './CommonComponents';
import Table from './Table';
import Fetch from '../hooks/Fetch';

const LocationFile = () => {
  const {
    filteredData,
    searchText,
    setSearchText,
    isSwitchActive,
    setIsSwitchActive,
    selectedOptions,
    setSelectedOptions,
    tableData,
    setFilteredData,
  } = Fetch('https://dev.carzup.in/api/pricelist/test-mock');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const handleLocationSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSelectedOptions(value);

    if (value === 'all locations') {
      setFilteredData(tableData);
    }
  };

  const handleActiveSwitchChange = (checked) => {
    setIsSwitchActive(checked);
  };

  return (
    <div className="fixed top-24 left-[22.9%] right-[9%] bottom-10 bg-[#b8e8f5] dark:bg-gray-800 p-4 flex justify-center rounded-2xl">
      <div className="w-full max-w-4xl">
        <div className="flex mb-4 gap-10">
          <SearchInput
            id="search"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Search by name..."
          />
          <LocationSelect
            id="location"
            value={selectedOptions}
            onChange={handleLocationSearchChange}
            options={[ ...Array.from(new Set(tableData.map((location) => location.location.toLowerCase())))]}
          />
          <ActiveSwitch
            checked={isSwitchActive}
            onChange={handleActiveSwitchChange}
          />
        </div>
        <div className="max-h-[450px] overflow-x-auto mt-8">
          <Table data={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default LocationFile;
