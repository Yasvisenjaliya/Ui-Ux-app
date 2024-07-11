import React, { useState, useEffect } from 'react';
import { Card, Button, ConfirmationDialog } from './Card';

const EducationDetailsCard = () => {
  const [educationLevel, setEducationLevel] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [obtainedMarks, setObtainedMarks] = useState('');
  const [percentage, setPercentage] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleEducationLevelChange = (e) => {
    setEducationLevel(e.target.value);
  };

  const handleSchoolNameChange = (e) => {
    setSchoolName(e.target.value);
  };

  const handleTotalMarksChange = (e) => {
    setTotalMarks(e.target.value);
  };

  const handleObtainedMarksChange = (e) => {
    setObtainedMarks(e.target.value);
  };

  useEffect(() => {
    if (totalMarks && obtainedMarks) {
      const calculatedPercentage = (obtainedMarks / totalMarks) * 100;
      setPercentage(calculatedPercentage.toFixed(2));
    }
  }, [totalMarks, obtainedMarks]);

  const handleOpenConfirmation = () => {
    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleSubmit = () => {
    setShowConfirmation(true); 
  };

  const handleConfirmSubmission = () => {
    setShowConfirmation(false); 
    console.log(`Submitted: Education Level - ${educationLevel}, School Name - ${schoolName}, Percentage - ${percentage}`);
  };

  return (
    <>
      <Card title="Education Details">
        <div className="w-[48rem] ml-5">
          <div className="mb-4">
            <label className="block  dark:text-label text-sm font-bold mb-2" htmlFor="educationLevel">
              Education Level
            </label>
            <input
              id="educationLevel"
              type="text"
              className="border-border rounded-md shadow-sm  text-inp focus:ring focus:ring-ring focus:ring-opacity-50 block w-full sm:text-sm border p-2"
              placeholder="Enter education level"
              value={educationLevel}
              onChange={handleEducationLevelChange}
            />
          </div>
          <div className="mb-4">
            <label className="block  dark:text-label text-sm font-bold mb-2" htmlFor="schoolName">
              School Name
            </label>
            <input
              id="schoolName"
              type="text"
              className="border-border rounded-md shadow-sm  text-inp focus:ring focus:ring-ring focus:ring-opacity-50 block w-full sm:text-sm border p-2"
              placeholder="Enter school name"
              value={schoolName}
              onChange={handleSchoolNameChange}
            />
          </div>
          <div className=" mb-4 flex gap-4">
            <div className="w-1/3">
              <label className="block  dark:text-label text-sm font-bold mb-2" htmlFor="totalMarks">
                Total Marks
              </label>
              <input
                id="totalMarks"
                type="number"
                className="w-full h-14 p-2 border text-inp border-border dark:border-dark_border rounded"
                placeholder="Enter total marks"
                value={totalMarks}
                onChange={handleTotalMarksChange}
              />
            </div>
            <div className="w-1/3">
              <label className="block  dark:text-label text-sm font-bold mb-2" htmlFor="obtainedMarks">
                Obtained Marks
              </label>
              <input
                id="obtainedMarks"
                type="number"
                className="w-full h-14 p-2 border text-inp border-border dark:border-dark_border rounded"
                placeholder="Enter obtained marks"
                value={obtainedMarks}
                onChange={handleObtainedMarksChange}
              />
            </div>
            <div className="w-1/3">
              <label className="block dark:text-label text-sm font-bold mb-2">
                Percentage
              </label>
              <input
                type="text"
                className="w-full h-14 p-2 border text-inp border-border dark:border-dark_border rounded"
                value={percentage}
                readOnly
              />
            </div>
          </div>
          <Button onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Card>

      {showConfirmation && (
        <ConfirmationDialog
          show={showConfirmation}
          onClose={handleCloseConfirmation}
          onConfirm={handleConfirmSubmission}
          title="Confirm Submission"
        >
          <p className="dark:text-label mb-2"><strong>Education Level:</strong> {educationLevel}</p>
          <p className="dark:text-label mb-2"><strong>School Name:</strong> {schoolName}</p>
          <p className="dark:text-label mb-2"><strong>Total Marks:</strong> {totalMarks}</p>
          <p className="dark:text-label mb-2"><strong>Obtained Marks:</strong> {obtainedMarks}</p>
          <p className="dark:text-label mb-2"><strong>Percentage:</strong> {percentage}%</p>
        </ConfirmationDialog>
      )}
    </>
  );
};

export default EducationDetailsCard;
