import React, { useState, useEffect } from 'react';
import { FiCalendar, FiUsers, FiCheckCircle, FiXCircle, FiClock, FiClipboard } from 'react-icons/fi';

const ViewAttendancePage = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [animate, setAnimate] = useState(false);

  // Mock data
  const classes = ['Grade 10 - Section A', 'Grade 9 - Section B', 'Grade 8 - Section A'];
  const attendanceLog = [
    { id: 1, name: 'John Doe', status: 'Present' },
    { id: 2, name: 'Jane Smith', status: 'Present' },
    { id: 3, name: 'Peter Jones', status: 'Absent' },
    { id: 4, name: 'Mary Williams', status: 'Late' },
    { id: 5, name: 'David Brown', status: 'Present' },
  ];
  
  useEffect(() => { setAnimate(true); }, []);

  const getStatusComponent = (status) => {
    const styles = 'flex items-center font-semibold';
    switch (status) {
      case 'Present':
        return <span className={`${styles} text-green-600`}><FiCheckCircle className="mr-2" /> {status}</span>;
      case 'Absent':
        return <span className={`${styles} text-red-600`}><FiXCircle className="mr-2" /> {status}</span>;
      case 'Late':
        return <span className={`${styles} text-yellow-600`}><FiClock className="mr-2" /> {status}</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-16 font-sans">
      {/* Header */}
      <div className="relative overflow-hidden mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-400 opacity-80"></div>
        <div className="relative z-10 flex items-center px-8 py-12">
          <FiClipboard className="text-white text-5xl mr-6 drop-shadow-lg" />
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 drop-shadow">View Attendance Records</h1>
            <p className="text-white/90 text-lg">Check attendance for any class and date.</p>
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
            <option value="">Select a class to view</option>
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

      {/* Attendance Log */}
      {selectedClass && (
        <div className={`max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl transition-all duration-500 delay-100 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}> 
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Attendance for {selectedClass} on {date}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg">
              <thead className="bg-blue-50">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-bold text-blue-700 uppercase">Student Name</th>
                  <th className="py-3 px-6 text-left text-xs font-bold text-blue-700 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {attendanceLog.map(student => (
                  <tr key={student.id} className="hover:bg-blue-50 transition">
                    <td className="py-4 px-6 font-medium text-gray-800">{student.name}</td>
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

export default ViewAttendancePage; 