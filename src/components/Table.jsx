import React from 'react';

const Table = ({ data }) => {
  return (
    <div className="rounded-3xl">
      <table className="min-w-full overflow-x-auto bg-slate-200 dark:bg-gray-800 rounded-3xl shadow-md overflow-hidden">
        <thead className="sticky bg-nav dark:bg-dark_card border-b top-0">
          <tr className="text-gray-600 dark:text-gray-100 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Phone No</th>
            <th className="py-3 px-6 text-left">Active</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Location</th>
          </tr>
        </thead>
        <tbody className="text-inp dark:text-gray-400">
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 dark:border-dark_border hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">{item.name}</td>
              <td className="py-3 px-6 text-left">{item.phone}</td>
              <td className="py-3 px-6 text-left">{item.active ? 'Active' : 'Inactive'}</td>
              <td className="py-3 px-6 text-left">{item.email}</td>
              <td className="py-3 px-6 text-left">{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
