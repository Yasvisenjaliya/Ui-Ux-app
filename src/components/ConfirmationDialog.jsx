import React from 'react';

export const ConfirmationDialog = ({ show, onClose, onConfirm, title, children }) => {
  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden max-w-md w-full">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
          {children}
          <div className="flex justify-end mt-4">
            <Button onClick={onConfirm} className="mr-2">
              Confirm
            </Button>
            <Button onClick={onClose} className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-400">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
