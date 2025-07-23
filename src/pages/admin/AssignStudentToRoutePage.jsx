import React, { useState } from 'react';

const studentsByClass = {
  '10A': [{ id: 1, name: 'John Doe' }],
  '9B': [{ id: 2, name: 'Peter Jones' }],
};

const routes = [
  { id: 1, name: 'Route A' },
  { id: 2, name: 'Route B' },
];

const AssignStudentToRoutePage = () => {
  const [selectedClass, setSelectedClass] = useState('10A');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedRoute, setSelectedRoute] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Assigning Student to Route:', { selectedClass, selectedStudent, selectedRoute });
    alert('Student assigned to route successfully!');
  };

  const students = studentsByClass[selectedClass] || [];

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Assign Student to Bus Route</h1>
      <div className="bg-white p-8 rounded-lg shadow">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <label htmlFor="class" className="block text-sm font-medium text-gray-700">Class</label>
              <select id="class" value={selectedClass} onChange={e => setSelectedClass(e.target.value)} className="mt-1 block w-full p-2 border rounded-md">
                <option value="10A">Class 10A</option>
                <option value="9B">Class 9B</option>
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="student" className="block text-sm font-medium text-gray-700">Student</label>
              <select id="student" value={selectedStudent} onChange={e => setSelectedStudent(e.target.value)} required className="mt-1 block w-full p-2 border rounded-md">
                <option value="">Select Student</option>
                {students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="route" className="block text-sm font-medium text-gray-700">Route</label>
              <select id="route" value={selectedRoute} onChange={e => setSelectedRoute(e.target.value)} required className="mt-1 block w-full p-2 border rounded-md">
                <option value="">Select Route</option>
                {routes.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Assign to Route
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AssignStudentToRoutePage; 