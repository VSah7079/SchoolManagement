import React, { useState, useRef, useEffect } from 'react';
import { FiCalendar, FiUsers, FiCheckCircle, FiXCircle, FiClock, FiEye } from 'react-icons/fi';
import gsap from 'gsap';

const AdminViewAttendancePage = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const tableRef = useRef(null);

  // Mock data
  const classes = ['Grade 10 - Section A', 'Grade 9 - Section B', 'Grade 8 - Section A'];
  const attendanceLog = [
    { id: 1, name: 'John Doe', status: 'Present' },
    { id: 2, name: 'Jane Smith', status: 'Present' },
    { id: 3, name: 'Peter Jones', status: 'Absent' },
    { id: 4, name: 'Mary Williams', status: 'Late' },
    { id: 5, name: 'David Brown', status: 'Present' },
  ];

  useEffect(() => {
    if (selectedClass && tableRef.current) {
      gsap.fromTo(
        tableRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }
      );
    }
  }, [selectedClass, date]);

  const getStatusComponent = (status) => {
    let color = '';
    let Icon = null;
    switch (status) {
      case 'Present':
        color = 'bg-green-100 text-green-700 border-green-300';
        Icon = FiCheckCircle;
        break;
      case 'Absent':
        color = 'bg-red-100 text-red-700 border-red-300';
        Icon = FiXCircle;
        break;
      case 'Late':
        color = 'bg-yellow-100 text-yellow-700 border-yellow-300';
        Icon = FiClock;
        break;
      default:
        color = 'bg-gray-100 text-gray-700 border-gray-300';
        Icon = FiClock;
    }
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full border text-sm font-semibold ${color} shadow-sm`}>
        <Icon className="mr-1" /> {status}
      </span>
    );
  };

  return (
    <div className="p-0 min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-green-50">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-green-400 py-10 mb-10 shadow-lg rounded-b-3xl">
        <div className="max-w-4xl mx-auto flex items-center gap-4 px-6">
          <div className="bg-white bg-opacity-20 rounded-full p-4 shadow-lg">
            <FiEye className="text-4xl text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight mb-1">View Attendance Records</h1>
            <p className="text-lg text-blue-100 font-medium">Monitor student attendance by class and date</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg mb-10 flex flex-col sm:flex-row items-center gap-6 -mt-16 relative z-10">
        <div className="flex-1 w-full">
          <label htmlFor="class-select" className="block text-sm font-semibold text-gray-700 mb-1">
            <FiUsers className="inline-block mr-2" />Class
          </label>
          <select
            id="class-select"
            className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400"
            value={selectedClass}
            onChange={e => setSelectedClass(e.target.value)}
          >
            <option value="">Select a class to view</option>
            {classes.map(cls => <option key={cls} value={cls}>{cls}</option>)}
          </select>
        </div>
        <div className="flex-1 w-full">
          <label htmlFor="date-select" className="block text-sm font-semibold text-gray-700 mb-1">
            <FiCalendar className="inline-block mr-2" />Date
          </label>
          <input
            type="date"
            id="date-select"
            className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>
      </div>

      {/* Attendance Log */}
      {selectedClass && (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-2xl animate-fade-in" ref={tableRef}>
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Attendance for <span className="text-green-600">{selectedClass}</span> on <span className="text-blue-600">{date}</span></h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-blue-50">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-bold text-blue-600 uppercase tracking-wider">Student Name</th>
                  <th className="py-3 px-6 text-left text-xs font-bold text-blue-600 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-100">
                {attendanceLog.map(student => (
                  <tr key={student.id} className="hover:bg-blue-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-800">{student.name}</td>
                    <td className="py-4 px-6">{getStatusComponent(student.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminViewAttendancePage; 