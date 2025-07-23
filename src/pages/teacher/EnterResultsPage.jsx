import React, { useState } from 'react';
import { FiUsers, FiBookOpen, FiSave, FiCheckCircle } from 'react-icons/fi';

const EnterResultsPage = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedExam, setSelectedExam] = useState('');
  const [marks, setMarks] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  // Mock data
  const classes = ['Grade 10 - Section A', 'Grade 9 - Section B'];
  const exams = ['Mid-Term Exam', 'First-Term Exam'];
  const students = [
    { id: 1, name: 'John Doe', marks: '92' },
    { id: 2, name: 'Jane Smith', marks: '88' },
    { id: 3, name: 'Peter Jones', marks: '' },
    { id: 4, name: 'Mary Williams', marks: '95' },
  ];

  // Helper to get initials
  const getInitials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase();

  // Handle marks input
  const handleMarksChange = (studentId, value) => {
    let val = value;
    if (val === '') val = '';
    else if (isNaN(val)) return;
    else if (+val < 0) val = 0;
    else if (+val > 100) val = 100;
    setMarks(prev => ({ ...prev, [studentId]: val }));
  };

  // Save results (simulate)
  const handleSave = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  // Pre-fill marks from mock data
  React.useEffect(() => {
    if (selectedClass && selectedExam) {
      const initial = {};
      students.forEach(s => { initial[s.id] = s.marks; });
      setMarks(initial);
    }
  }, [selectedClass, selectedExam]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-16 font-sans">
      {/* Header */}
      <div className="relative overflow-hidden mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-400 opacity-90"></div>
        <div className="relative z-10 flex flex-col items-center px-8 py-12">
          <FiBookOpen className="text-white text-5xl mb-4 drop-shadow-lg" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 drop-shadow">Enter Exam Results</h1>
          <p className="text-white/90 text-lg">Easily enter and save marks for your students' exams.</p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-3xl mx-auto -mt-16 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1 w-full">
            <label htmlFor="class-select" className="block text-sm font-semibold text-gray-700 mb-1">
              <FiUsers className="inline-block mr-2" />Class
            </label>
            <select
              id="class-select"
              className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={selectedClass}
              onChange={e => setSelectedClass(e.target.value)}
            >
              <option value="">Select a class</option>
              {classes.map(cls => <option key={cls} value={cls}>{cls}</option>)}
            </select>
          </div>
          <div className="flex-1 w-full">
            <label htmlFor="exam-select" className="block text-sm font-semibold text-gray-700 mb-1">
              <FiBookOpen className="inline-block mr-2" />Exam
            </label>
            <select
              id="exam-select"
              className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={selectedExam}
              onChange={e => setSelectedExam(e.target.value)}
            >
              <option value="">Select an exam</option>
              {exams.map(exam => <option key={exam} value={exam}>{exam}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Student Marks Entry */}
      <div className="max-w-4xl mx-auto">
        {selectedClass && selectedExam ? (
          <form onSubmit={handleSave} className="bg-white p-8 rounded-2xl shadow-xl animate-fade-in">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center">
              <FiUsers className="mr-3 text-blue-400" /> {selectedExam} - {selectedClass}
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="py-3 px-6 text-left text-xs font-bold text-blue-700 uppercase">Student</th>
                    <th className="py-3 px-6 text-left text-xs font-bold text-blue-700 uppercase">Marks (0-100)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {students.map(student => (
                    <tr key={student.id} className="hover:bg-blue-50 transition">
                      <td className="py-4 px-6 flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold text-lg">
                          {getInitials(student.name)}
                        </span>
                        <span className="font-medium text-gray-800">{student.name}</span>
                      </td>
                      <td className="py-4 px-6">
                        <input
                          type="number"
                          min="0"
                          max="100"
                          className="w-24 p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 text-center font-semibold"
                          value={marks[student.id] ?? ''}
                          onChange={e => handleMarksChange(student.id, e.target.value)}
                          placeholder="--"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 flex justify-end">
              <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 flex items-center font-semibold text-lg shadow-md transition-transform transform hover:scale-105">
                <FiSave className="mr-2" /> Save Results
              </button>
            </div>
            {/* Success Toast */}
            {showSuccess && (
              <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-fade-in z-50">
                <FiCheckCircle className="text-2xl" /> Results saved successfully!
              </div>
            )}
          </form>
        ) : (
          <div className="text-center text-gray-500 text-lg mt-16 animate-fade-in">
            <FiBookOpen className="mx-auto text-4xl mb-4 text-blue-300" />
            Please select a class and exam to enter results.
          </div>
        )}
      </div>
      {/* Animations */}
      <style>{`
        .animate-fade-in { animation: fadeIn 0.7s; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
};

export default EnterResultsPage; 