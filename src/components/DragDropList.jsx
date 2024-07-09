import React, { useState, useRef } from 'react';
import { DragHandle, ExportButton, handleExport, handleSort } from './CommonComponents';

const DragDropList = () => {
  const [people, setPeople] = useState([
    { id: 1, name: 'Yasvi', phone: 8796453352, sets: '3x10' },
    { id: 2, name: 'snehangi', phone: 9834764356, sets: '3x10' },
    { id: 3, name: 'Rutu', phone: 8764892893, sets: '3x10' },
    { id: 4, name: 'Hasti', phone: 7872389723, sets: '3x10' },
  ]);
  const [dragging, setDragging] = useState(false);

  const dragPerson = useRef(null);
  const draggedOverPerson = useRef(null);

  const onDragStart = (index) => {
    dragPerson.current = index;
    setDragging(true);
  };

  const onDragEnter = (index) => {
    draggedOverPerson.current = index;
  };

  const onDragEnd = () => {
    const sortedPeople = handleSort(people, dragPerson, draggedOverPerson);
    setPeople(sortedPeople);
    setDragging(false);
  };

  return (
    <div className="fixed w-[68%] top-24 left-[22.9%] right-[9%] bg-[#b8e8f5] dark:bg-gray-800 rounded-2xl">
      <div className=''>
        <table className="min-w-full">
          <thead>
            <tr className=" text-[16px] text-gray-700 dark:text-gray-300 bg-[#8cceee] dark:bg-gray-800 ">
              <th className="p-3 border-b rounded-tl-2xl border-slate-400">Action</th>
              <th className="p-3 border-b border-slate-400">no</th>
              <th className="p-3 border-b border-slate-400">ID</th>
              <th className="p-3 border-b border-slate-400">Name</th>
              <th className="p-3 border-b rounded-tr-2xl border-slate-400">Phone</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => (
              <tr
                className="text-[16px] text-gray-700 dark:text-gray-400"
                key={index}
                draggable={dragging}
                onDragStart={() => onDragStart(index)}
                onDragEnter={() => onDragEnter(index)}
                onDragEnd={onDragEnd}
                onDragOver={(e) => e.preventDefault()}
              >
                <td className="p-3 border-b border-slate-300 dark:border-slate-600">
                  <DragHandle
                    onMouseDown={() => setDragging(true)}
                    onMouseUp={() => setDragging(false)}
                  />
                </td>
                <td className="text-center p-3 border-b border-slate-300 dark:border-slate-600">{index + 1}</td>
                <td className="text-center p-3 border-b border-slate-300 dark:border-slate-600">{person.id}</td>
                <td className="text-center p-3 border-b border-slate-300 dark:border-slate-600">{person.name}</td>
                <td className="text-center p-3 border-b border-slate-300 dark:border-slate-600">{person.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end p-6">
          <ExportButton onClick={() => handleExport(people)} />
        </div>
      </div>
    </div>
  );
};

export default DragDropList;
