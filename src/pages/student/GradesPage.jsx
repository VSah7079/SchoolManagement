import React, { useEffect, useState } from 'react';
import { FiAward, FiBook } from 'react-icons/fi';

const StudentGradesPage = () => {
  // Mock grades data
  const grades = [
    { exam: 'Mid-Term Exam', subject: 'Mathematics', grade: 'A', score: '92/100' },
    { exam: 'Mid-Term Exam', subject: 'Science', grade: 'B+', score: '88/100' },
    { exam: 'Mid-Term Exam', subject: 'History', grade: 'A-', score: '90/100' },
    { exam: 'Mid-Term Exam', subject: 'English', grade: 'B', score: '84/100' },
    { exam: 'First-Term Exam', subject: 'Mathematics', grade: 'A-', score: '89/100' },
    { exam: 'First-Term Exam', subject: 'Science', grade: 'A', score: '94/100' },
    { exam: 'First-Term Exam', subject: 'History', grade: 'B+', score: '86/100' },
    { exam: 'First-Term Exam', subject: 'English', grade: 'A', score: '95/100' },
  ];

  // Group grades by exam
  const groupedGrades = grades.reduce((acc, grade) => {
    (acc[grade.exam] = acc[grade.exam] || []).push(grade);
    return acc;
  }, {});

  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return 'bg-green-100 text-green-700 border-green-300';
    if (grade.startsWith('B')) return 'bg-blue-100 text-blue-700 border-blue-300';
    if (grade.startsWith('C')) return 'bg-yellow-100 text-yellow-700 border-yellow-300';
    if (grade.startsWith('D')) return 'bg-orange-100 text-orange-700 border-orange-300';
    return 'bg-red-100 text-red-700 border-red-300';
  };

  // Animation state
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-16">
      {/* Header */}
      <div className="relative overflow-hidden mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 opacity-80"></div>
        <div className="relative z-10 flex items-center px-8 py-12">
          <FiAward className="text-white text-5xl mr-6 drop-shadow-lg" />
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 drop-shadow">My Grades & Results</h1>
            <p className="text-white/90 text-lg">See your academic performance at a glance.</p>
          </div>
        </div>
      </div>

      <div className={`max-w-5xl mx-auto px-4 transition-all duration-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {Object.entries(groupedGrades).map(([exam, results], index) => (
          <div key={index} className="relative bg-white p-8 rounded-2xl shadow-xl mb-10 border-t-4 border-b-4 border-transparent bg-clip-padding group hover:shadow-2xl transition-shadow">
            {/* Floating Icon */}
            <div className="absolute -top-7 left-6 bg-gradient-to-tr from-blue-500 to-blue-300 p-3 rounded-full shadow-lg flex items-center justify-center">
              <FiAward className="text-white text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center mt-2">
              {exam}
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="py-3 px-6 text-left text-xs font-bold text-blue-700 uppercase tracking-wider flex items-center"><FiBook className="mr-2"/>Subject</th>
                    <th className="py-3 px-6 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">Score</th>
                    <th className="py-3 px-6 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {results.map((result, idx) => (
                    <tr key={idx} className="hover:bg-blue-50 transition">
                      <td className="py-4 px-6 whitespace-nowrap font-medium text-gray-700">{result.subject}</td>
                      <td className="py-4 px-6 whitespace-nowrap font-semibold text-gray-700">{result.score}</td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <span className={`inline-block px-4 py-1 rounded-full border font-bold text-lg ${getGradeColor(result.grade)}`}>
                          {result.grade}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentGradesPage; 