import React, { useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

const studentsByClass = {
  '10A': [
    { id: 1, name: 'John Doe' },
    { id: 3, name: 'Samantha Smith' },
  ],
  '9B': [
    { id: 2, name: 'Peter Jones' },
  ],
  '11C': [
    { id: 4, name: 'Luke Hobbs' },
  ]
};

const TakeAttendancePage = () => {
  const [selectedClass, setSelectedClass] = useState('10A');
  const [attendanceDate, setAttendanceDate] = useState(new Date().toISOString().slice(0, 10));
  const [attendance, setAttendance] = useState({});
  const [success, setSuccess] = useState(false);

  const handleAttendanceChange = (studentId, status) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: status,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  const students = studentsByClass[selectedClass] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-16 font-sans">
      <div className="relative overflow-hidden mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-400 opacity-90"></div>
        <div className="relative z-10 flex flex-col items-center px-8 py-12">
          <span className="inline-block bg-white/30 backdrop-blur-lg rounded-full p-6 shadow-lg mb-4">
            <FiCheckSquare className="w-10 h-10 text-blue-600" />
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 drop-shadow">Take Attendance</h1>
          <p className="text-white/90 text-lg">Mark attendance for each student in the selected class.</p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto -mt-16 z-20 relative">
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 p-10 rounded-3xl shadow-2xl animate-fade-in-glass">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <div className="w-full">
                <label htmlFor="class" className="block text-sm font-medium text-gray-700">Class</label>
                <select id="class" name="class" value={selectedClass} onChange={e => setSelectedClass(e.target.value)} className="mt-1 block w-full border border-blue-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500">
                  <option>10A</option>
                  <option>9B</option>
                  <option>11C</option>
                </select>
              </div>
              <div className="w-full">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                <input type="date" id="date" name="date" value={attendanceDate} onChange={e => setAttendanceDate(e.target.value)} className="mt-1 block w-full border border-blue-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"/>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Student Name</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students.map(student => (
                    <tr key={student.id} className="hover:bg-blue-50 transition">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{student.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select value={attendance[student.id] || ''} onChange={e => handleAttendanceChange(student.id, e.target.value)} className="border border-blue-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500">
                          <option value="">Select</option>
                          <option value="Present">Present</option>
                          <option value="Absent">Absent</option>
                          <option value="Late">Late</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-end mt-8">
              <button type="submit" className="inline-flex justify-center py-3 px-8 border border-transparent shadow-lg text-lg font-bold rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 transition-all">Submit Attendance</button>
            </div>
          </form>
          {success && (
            <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in-glass z-50">
              Attendance submitted successfully!
            </div>
          )}
        </div>
      </div>
      <style>{`
        .animate-fade-in-glass { animation: fadeInGlass 0.8s; }
        @keyframes fadeInGlass { from { opacity: 0; transform: translateY(32px) scale(0.98); } to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
};

export default TakeAttendancePage; 