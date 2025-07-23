import React, { useState, useEffect } from 'react';
import { FiCalendar, FiUsers, FiCheck, FiX, FiClock, FiClipboard, FiCheckCircle } from 'react-icons/fi';

const TakeAttendancePage = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [animate, setAnimate] = useState(false);
  const [students, setStudents] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  // Mock data
  const classes = ['Grade 10 - Section A', 'Grade 9 - Section B', 'Grade 8 - Section A'];
  const allStudents = {
    'Grade 10 - Section A': [
      { id: 1, name: 'John Doe', status: 'Present' },
      { id: 2, name: 'Jane Smith', status: 'Present' },
      { id: 3, name: 'Peter Jones', status: 'Absent' },
      { id: 4, name: 'Mary Williams', status: 'Late' },
      { id: 5, name: 'David Brown', status: 'Present' },
    ],
    'Grade 9 - Section B': [
      { id: 6, name: 'Alice Green', status: 'Present' },
      { id: 7, name: 'Bob White', status: 'Absent' },
    ],
    'Grade 8 - Section A': [
      { id: 8, name: 'Charlie Black', status: 'Present' },
      { id: 9, name: 'Diana Blue', status: 'Late' },
    ],
  };

  useEffect(() => { setAnimate(true); }, []);

  useEffect(() => {
    if (selectedClass) {
      setStudents(allStudents[selectedClass] || []);
    } else {
      setStudents([]);
    }
  }, [selectedClass]);

  const handleStatusChange = (studentId, status) => {
    setStudents(prev => prev.map(s => s.id === studentId ? { ...s, status } : s));
  };

  const handleSaveAttendance = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
    // Here you could send the attendance data to a backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-16 font-sans">
      {/* Header */}
      <div className="relative overflow-hidden mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-400 opacity-80"></div>
        <div className="relative z-10 flex items-center px-8 py-12">
          <FiClipboard className="text-white text-5xl mr-6 drop-shadow-lg" />
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 drop-shadow">Take Attendance</h1>
            <p className="text-white/90 text-lg">Mark your students' attendance quickly and easily.</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className={`max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl mb-10 flex flex-col md:flex-row gap-6 items-center transition-all duration-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}> 
        <div className="flex-1 w-full">
          <label htmlFor="class-select" className="block text-sm font-semibold text-blue-700 mb-2 flex items-center">
            <FiUsers className="inline-block mr-2" />Class
          </label>
          <select 
            id="class-select"
            className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
            value={selectedClass}
            onChange={e => setSelectedClass(e.target.value)}
          >
            <option value="">Select a class</option>
            {classes.map(cls => <option key={cls} value={cls}>{cls}</option>)}
          </select>
        </div>
        <div className="flex-1 w-full">
           <label htmlFor="date-select" className="block text-sm font-semibold text-blue-700 mb-2 flex items-center">
            <FiCalendar className="inline-block mr-2" />Date
          </label>
          <input 
            type="date" 
            id="date-select"
            className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>
      </div>

      {/* Student List */}
      {selectedClass && (
        <div className={`max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl transition-all duration-500 delay-100 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}> 
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Students in {selectedClass}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg">
              <thead className="bg-blue-50">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-bold text-blue-700 uppercase">Student Name</th>
                  <th className="py-3 px-6 text-center text-xs font-bold text-blue-700 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {students.map(student => (
                  <tr key={student.id} className="hover:bg-blue-50 transition">
                    <td className="py-4 px-6 font-medium text-gray-800">{student.name}</td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center space-x-2">
                        <button onClick={() => handleStatusChange(student.id, 'Present')} className={`p-2 rounded-full border-2 ${student.status === 'Present' ? 'bg-green-500 text-white border-green-500 shadow' : 'bg-gray-100 border-gray-200 text-green-500 hover:bg-green-100'} transition`} title="Present"><FiCheck /></button>
                        <button onClick={() => handleStatusChange(student.id, 'Absent')} className={`p-2 rounded-full border-2 ${student.status === 'Absent' ? 'bg-red-500 text-white border-red-500 shadow' : 'bg-gray-100 border-gray-200 text-red-500 hover:bg-red-100'} transition`} title="Absent"><FiX /></button>
                        <button onClick={() => handleStatusChange(student.id, 'Late')} className={`p-2 rounded-full border-2 ${student.status === 'Late' ? 'bg-yellow-500 text-white border-yellow-500 shadow' : 'bg-gray-100 border-gray-200 text-yellow-500 hover:bg-yellow-100'} transition`} title="Late"><FiClock /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex justify-end">
            <button onClick={handleSaveAttendance} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold text-lg shadow-md transition-transform transform hover:scale-105">Save Attendance</button>
          </div>
          {showSuccess && (
            <div className="mt-6 flex items-center justify-end text-green-600 font-semibold text-lg gap-2">
              <FiCheckCircle /> Attendance saved successfully!
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TakeAttendancePage; 