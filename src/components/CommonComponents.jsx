import React from 'react';
import { TbGridDots } from "react-icons/tb";
import Switch from 'react-switch';
import { MdLocationOn, MdSearch } from 'react-icons/md';
import { utils, writeFile } from 'xlsx';

export const DragHandle = ({ onMouseDown, onMouseUp }) => (
  <div className='flex justify-center'>
    <TbGridDots onMouseDown={onMouseDown} onMouseUp={onMouseUp} />
  </div>
);

export const ExportButton = ({ onClick }) => (
  <button
    className="bg-header_color hover:bg-blue-700 text-primary font-bold py-2 px-4 rounded-2xl"
    onClick={onClick}
  >
    Export
  </button>
);

export const SearchInput = ({ id, value, onChange, placeholder }) => (
  <div className="relative flex-auto">
    <label className="block dark:text-label text-sm font-bold mb-2" htmlFor={id}>
      <MdSearch className="absolute left-2 top-5 text-gray-400" size={20} />
    </label>
    <input
      id={id}
      type="text"
      className="w-full p-2 pl-10 border border-border dark:border-dark_border rounded"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export const LocationSelect = ({ id, value, onChange, options }) => (
  <div className="relative">
    <label className="block  dark:text-label text-sm font-bold mb-2" htmlFor={id}>
      <MdLocationOn className="absolute left-2 top-5 text-gray-400" size={20} />
    </label>
    <select
      id={id}
      className="w-48 p-2 pl-8 border border-border dark:border-dark_border rounded"
      value={value}
      onChange={onChange}
    >
      <option value="">All Locations</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export const ActiveSwitch = ({ checked, onChange }) => (
  <Switch
    className="ml-4 top-4"
    checked={checked}
    onChange={onChange}
    onColor="#2196F3"
    checkedIcon={false}
    uncheckedIcon={false}
    height={24}
    width={48}
    handleDiameter={20}
  />
);

export const handleExport = (people) => {
  const wb = utils.book_new();
  const ws = utils.json_to_sheet(people);
  utils.book_append_sheet(wb, ws, "Mysheet");
  writeFile(wb, "MyExcel.xlsx");
};

export const handleSort = (people, dragPerson, draggedOverPerson) => {
  const peopleClone = [...people];
  const dragIndex = dragPerson.current;
  const dragOverIndex = draggedOverPerson.current;

  if (dragIndex !== null && dragOverIndex !== null && dragIndex !== dragOverIndex) {
    const temp = peopleClone[dragIndex];
    peopleClone[dragIndex] = peopleClone[dragOverIndex];
    peopleClone[dragOverIndex] = temp;
  }

  dragPerson.current = null;
  draggedOverPerson.current = null;

  return peopleClone;
};

// Sample fetchLocations and filterLocations functions
export const fetchLocations = async (setLocations, setFilteredLocations) => {
  try {
    const response = await fetch('https://dev.carzup.in/api/pricelist/test-mock'); // Use your actual API URL
    if (!response.ok) {
      throw new Error('Error while fetching data');
    }
    const data = await response.json();
    setLocations(data.data);
    setFilteredLocations(data.data);
  } catch (error) {
    console.error('Error fetching data', error);
  }
};

export const filterLocations = (locations, searchTerm, showActiveOnly, locationSearchTerm) => {
  let filtered = locations.filter((location) =>
    location.name.toLowerCase().includes(searchTerm)
  );

  if (locationSearchTerm) {
    filtered = filtered.filter((location) =>
      location.location.toLowerCase().includes(locationSearchTerm)
    );
  }

  if (showActiveOnly) {
    filtered = filtered.filter((location) => location.active);
  }

  return filtered;
};
