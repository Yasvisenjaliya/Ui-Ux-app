import React, { useState } from 'react';
import { Card, ConfirmationDialog, Button } from './Card';
import Select from 'react-select';  

const courseOptions = [
  { value: 'course1', label: 'Course 1' },
  { value: 'course2', label: 'Course 2' },
  { value: 'course3', label: 'Course 3' },
];

const YourDetailsCard = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value)
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCourseChange = (selectedOptions) => {
    setSelectedCourses(selectedOptions.map(option => option.value)); 
  };

  const handleSubmit = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    setShowConfirmation(false);
    console.log(`Submitted: Name - ${name}, Address - ${address}, Courses - ${selectedCourses.join(', ')}`);
  };

  const handleClose = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <Card title="Your Details ">
        <div className="w-[48rem] ml-5 ">
          <div className="mb-4">
            <label className="block  dark:text-label text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="border-border rounded-md shadow-sm  focus:ring focus:ring-ring text-inp focus:ring-opacity-50 block w-full sm:text-sm  border p-2"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="mb-4">
            <label className="block  dark:text-label text-sm font-bold mb-2" htmlFor="address">
              Address
            </label>
            <input
              id="address"
              type="text"
              className="border-border rounded-md shadow-sm focus: focus:ring focus:ring-ring text-inp focus:ring-opacity-50 block w-full sm:text-sm border p-2"
              placeholder="Enter your address"
              value={address}
              onChange={handleAddressChange}
            />
          </div>
          <div className="mb-4">
            <label className="block dark:text-label text-sm font-bold mb-2" htmlFor="courses">
              Courses
            </label>
            <Select
              id="courses"
              isMulti
              options={courseOptions}
              value={courseOptions.filter(option => selectedCourses.includes(option.value))}
              onChange={handleCourseChange}
              className="border-border rounded-md shadow-sm  focus:ring focus:ring-ring text-inp focus:ring-opacity-50 block w-full sm:text-sm border p-2"
            />
          </div>
          <Button onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Card>

      {showConfirmation && (
        <ConfirmationDialog
          show={showConfirmation}
          onClose={handleClose}
          onConfirm={handleConfirm}
          title="Confirm Submission"
        >
          <p className="dark:text-label mb-2"><strong>Name:</strong> {name}</p>
          <p className="dark:text-label mb-2"><strong>Address:</strong> {address}</p>
          <p className="dark:text-label mb-2"><strong>Courses:</strong> {selectedCourses.join(', ')}</p>
        </ConfirmationDialog>
      )}
    </>
  );
};

export default YourDetailsCard;
