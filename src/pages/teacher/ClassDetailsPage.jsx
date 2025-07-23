import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiBook, FiUsers } from 'react-icons/fi';

const ClassDetailsPage = () => {
  const { id } = useParams();

  // Placeholder for class details (could fetch real data here)
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-16 font-sans px-4">
      <div className="max-w-3xl mx-auto py-10">
        <Link to="/teacher/classes" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <FiArrowLeft className="mr-2" /> Back to My Classes
        </Link>
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold text-blue-700 mb-4 flex items-center">
            <FiBook className="mr-3" /> Class Details
          </h1>
          <p className="text-lg text-gray-700 mb-2">Class ID: <span className="font-semibold">{id}</span></p>
          <div className="flex items-center gap-4 mb-4">
            <FiUsers className="text-indigo-500" />
            <span className="text-gray-600">(Class details will appear here.)</span>
          </div>
          <div className="mt-8 text-gray-400">(You can enhance this page to show students, schedule, assignments, etc.)</div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetailsPage; 