import React, { useEffect, useState } from 'react';
import { FiUsers, FiBook, FiUser, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const MyClassesPage = () => {
  // Mock classes data
  const classes = [
    {
      id: 1,
      name: 'Grade 10 - Section A',
      subject: 'Science',
      studentCount: 45,
    },
    {
      id: 2,
      name: 'Grade 9 - Section B',
      subject: 'Mathematics',
      studentCount: 42,
    },
    {
      id: 3,
      name: 'Grade 8 - Section A',
      subject: 'History',
      studentCount: 38,
    },
    {
      id: 4,
      name: 'Grade 10 - Section B',
      subject: 'Science',
      studentCount: 44,
    },
  ];

  const [animate, setAnimate] = useState(false);
  useEffect(() => { setAnimate(true); }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-16 font-sans">
      {/* Header */}
      <div className="relative overflow-hidden mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-400 opacity-80"></div>
        <div className="relative z-10 flex items-center px-8 py-12">
          <FiUsers className="text-white text-5xl mr-6 drop-shadow-lg" />
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 drop-shadow">My Classes</h1>
            <p className="text-white/90 text-lg">Manage your classes and connect with your students.</p>
          </div>
        </div>
      </div>

      <div className={`max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 transition-all duration-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {classes.map(cls => (
          <div key={cls.id} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-blue-700 mb-2 flex items-center">
                <FiBook className="mr-2 text-blue-400" /> {cls.name}
              </h2>
              <div className="flex items-center text-gray-600 mb-3">
                <FiUser className="mr-2 text-green-400" />
                <span className="font-medium">Subject:</span>
                <span className="ml-2 text-gray-800">{cls.subject}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-3">
                <FiUsers className="mr-2 text-indigo-400" />
                <span className="font-medium">Students:</span>
                <span className="ml-2 text-gray-800">{cls.studentCount}</span>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <Link
                to={`/teacher/classes/${cls.id}`}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
              >
                View Details <FiArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyClassesPage; 