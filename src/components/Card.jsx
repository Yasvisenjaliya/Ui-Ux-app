import React from 'react';

export const Card = ({ title, children }) => {
  return (
    <div className=" w-[82%] ml-[8%] m-4 mb-10  bg-white dark:bg-dark_card rounded-3xl shadow-md ">
      <div className="md:flex h-[25rem]   ">
        <div className="p-2 mt-10">
          <div className="uppercase tracking-wide text-base ml-5 text-inp dark:text-slate-100 font-semibold">{title}</div>
          <div className="mt-2 text-gray-600 dark:text-slate-300">{children}</div>
        </div>
      </div>
    </div>
  );
};

export const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex ml-[89.9%] items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-primary bg-header_color hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring"
    >
      {children}
    </button>
  );
};

export const ConfirmationDialog = ({ show, onClose, onConfirm, title, children }) => {
  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${show ? 'block' : 'hidden'}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" id="modal-title">
                  {title}
                </h3>
                <div className="mt-2">{children}</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-dark_card px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={onConfirm}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-header_color text-base font-medium text-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring sm:ml-3 sm:w-auto sm:text-sm"
            >
              Confirm
            </button>
            <button
              onClick={onClose}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-border dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium  dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
