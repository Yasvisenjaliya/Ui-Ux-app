import React, { useState, useRef } from 'react';
import { utils, writeFile } from 'xlsx';
import { TbGridDots } from "react-icons/tb";

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

  const handleSort = () => {
    const peopleClone = [...people];
    const dragIndex = dragPerson.current;
    const dragOverIndex = draggedOverPerson.current;

    if (dragIndex !== null && dragOverIndex !== null && dragIndex !== dragOverIndex) {
      const temp = peopleClone[dragIndex];
      peopleClone[dragIndex] = peopleClone[dragOverIndex];
      peopleClone[dragOverIndex] = temp;
      setPeople(peopleClone);
    }

    dragPerson.current = null;
    draggedOverPerson.current = null;
    setDragging(false);
  };

  const handleExport = () => {
    const wb = utils.book_new();
    const ws = utils.json_to_sheet(people);
    utils.book_append_sheet(wb, ws, "Mysheet");
    writeFile(wb, "MyExcel.xlsx");
  };

  const handleDragStart = (index) => {
    dragPerson.current = index;
    setDragging(true);
  };

  const handleDragEnter = (index) => {
    draggedOverPerson.current = index;
  };

  return (
    <div className="fixed w-[68%] top-24 left-[22.9%] right-[9%] bg-[#b8e8f5] dark:bg-gray-800 rounded-2xl">
      <div className=''>
        <table className="min-w-full">

          <thead>
            <tr className=" text-[16px] text-gray-700 dark:text-gray-300 bg-[#8cceee] dark:bg-gray-800 ">
              <th className="p-3 border-b rounded-tl-2xl border-slate-400  ">Action</th>
              <th className="p-3 border-b border-slate-400 ">no</th>
              <th className="p-3 border-b border-slate-400 ">ID</th>
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
                onDragStart={() => handleDragStart(index)}
                onDragEnter={() => handleDragEnter(index)}
                onDragEnd={handleSort}
                onDragOver={(e) => e.preventDefault()}
              >
                <td className="p-3 border-b border-slate-300 dark:border-slate-600">
                  <div className=' flex justify-center'>
                    <TbGridDots
                      onMouseDown={() => setDragging(true)}
                      onMouseUp={() => setDragging(false)}
                    />
                  </div>
                </td>
                <td className="text-center p-3 border-b border-slate-300 dark:border-slate-600">{index + 1}</td>
                <td className="text-center p-3 border-b border-slate-300 dark:border-slate-600">{person.id}</td>
                <td className="text-center p-3 border-b border-slate-300 dark:border-slate-600">{person.name}</td>
                <td className="text-center p-3 border-b border-slate-300 dark:border-slate-600">{person.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end  p-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl "
            onClick={handleExport}
          >
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default DragDropList;
