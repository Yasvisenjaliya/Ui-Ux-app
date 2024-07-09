import React, { useState } from 'react';
import { Card, Button, ConfirmationDialog } from './Card'; 
import Select from 'react-select'; 

const occupationOptions = [
  { value: 'engineer', label: 'Engineer' },
  { value: 'doctor', label: 'Doctor' },
  { value: 'teacher', label: 'Teacher' },
];

const FatherDetailsCard = () => {
  const [fatherName, setFatherName] = useState('');
  const [income, setIncome] = useState('');
  const [selectedOccupations, setSelectedOccupations] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleNameChange = (e) => {
    setFatherName(e.target.value);
  };

  const handleIncomeChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setIncome(value);
    }
  };

  const handleOccupationsChange = (selectedOptions) => {
    setSelectedOccupations(selectedOptions);
  };

  const handleSubmit = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    setShowConfirmation(false);
    console.log(`Submitted: Father's Name - ${fatherName}, Occupations - ${selectedOccupations.join(', ')}`);
  };

  const handleClose = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <Card title="Father's Details">
        <div className="w-[48rem] ml-5">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-slate-200 text-sm font-bold mb-2" htmlFor="fatherName">
              Father's Name
            </label>
            <input
              id="fatherName"
              type="text"
              className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 text-black focus:ring focus:ring-blue-500 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
              placeholder="Enter father's name"
              value={fatherName}
              onChange={handleNameChange}
            />
          </div>
          <div className="mb-4">
          <label className="block text-gray-700 dark:text-slate-200 text-sm font-bold mb-2" htmlFor="income">
            Income
          </label>
          <input
            id="income"
            type="number"
            className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 text-black focus:ring focus:ring-blue-500 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
            placeholder="Enter father's income"
            value={income}
            onChange={handleIncomeChange}
          />
        </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-slate-200 text-sm font-bold mb-2" htmlFor="occupations">
              Occupations
            </label>
            <Select
              id="occupations"
              isMulti
              options={occupationOptions}
              value={selectedOccupations}
              onChange={handleOccupationsChange}
              className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 text-black focus:ring focus:ring-blue-500 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
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
          <p className="dark:text-gray-300 mb-2"><strong>Father's Name:</strong> {fatherName}</p>
          <p className="dark:text-gray-300 mb-2"><strong>Income:</strong> {income}</p>
          <p className="dark:text-gray-300 mb-2"><strong>Occupations:</strong> {selectedOccupations.join(', ')}</p>
        </ConfirmationDialog>
      )}
    </>
  );
};

export default FatherDetailsCard;
