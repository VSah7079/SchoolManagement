import React, { useState } from 'react';
import { FiEdit3, FiUsers, FiBookOpen, FiCheckCircle } from 'react-icons/fi';

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

const subjectsByClass = {
  '10A': ['Maths', 'Science', 'English'],
  '9B': ['Maths', 'Science', 'History'],
  '11C': ['Physics', 'Chemistry', 'Biology'],
};

const EnterMarksPage = () => {
  const [selectedClass, setSelectedClass] = useState('10A');
  const [marks, setMarks] = useState({});
  const [success, setSuccess] = useState(false);

  const handleMarksChange = (studentId, subject, value) => {
    setMarks(prev => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        [subject]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
    console.log('Marks Submitted:', {
      class: selectedClass,
      marks,
    });
  };

  const students = studentsByClass[selectedClass] || [];
  const subjects = subjectsByClass[selectedClass] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-green-50 p-0">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-green-400 py-10 mb-10 shadow-lg rounded-b-3xl">
        <div className="max-w-2xl mx-auto flex items-center gap-4 px-6">
          <div className="bg-white bg-opacity-20 rounded-full p-4 shadow-lg">
            <FiEdit3 className="text-4xl text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight mb-1">Enter Exam Marks</h1>
            <p className="text-lg text-blue-100 font-medium">Record marks for each student and subject</p>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-2xl -mt-16 relative z-10">
        {success && (
          <div className="flex items-center justify-center mb-6 animate-bounce">
            <FiCheckCircle className="text-green-500 text-3xl mr-2" />
            <span className="text-green-700 font-bold text-lg">Marks submitted successfully!</span>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-8 flex flex-col sm:flex-row gap-6 items-end">
            <div className="flex-1">
              <label htmlFor="class" className="block text-sm font-semibold text-gray-700 mb-1 flex items-center">
                <FiUsers className="mr-2 text-green-500" /> Class
              </label>
              <select id="class" name="class" value={selectedClass} onChange={e => setSelectedClass(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-blue-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 transition">
                <option>10A</option>
                <option>9B</option>
                <option>11C</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-blue-100 rounded-lg overflow-hidden">
              <thead className="bg-blue-50 sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-blue-600 uppercase tracking-wider flex items-center">
                    <FiUsers className="inline-block mr-2 text-blue-400" /> Student Name
                  </th>
                  {subjects.map(subject => (
                    <th key={subject} className="px-6 py-3 text-left text-xs font-bold text-blue-600 uppercase tracking-wider"></th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-blue-100">
                {students.map(student => (
                  <tr key={student.id} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">{student.name}</td>
                    {subjects.map(subject => (
                      <td key={subject} className="px-6 py-4 whitespace-nowrap">
                        <label className="block text-xs font-medium text-gray-600 mb-1">{subject}</label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          className="w-20 p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-center font-semibold"
                          value={marks[student.id]?.[subject] || ''}
                          onChange={e => handleMarksChange(student.id, subject, e.target.value)}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pt-8 flex justify-end">
            <button type="submit" className="inline-flex justify-center py-3 px-8 border border-transparent shadow-md text-base font-bold rounded-lg text-white bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 transition">
              Save Marks
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnterMarksPage; 