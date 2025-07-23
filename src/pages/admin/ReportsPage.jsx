import React, { useState } from 'react';
import { FiBarChart2, FiDownload, FiFileText, FiX } from 'react-icons/fi';

const ReportsPage = () => {
  const [openModal, setOpenModal] = useState(null);

  // Sample details for each report
  const reportDetails = {
    attendance: (
      <div>
        <h2 className="text-xl font-bold mb-2 text-blue-700">Attendance Report Details</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Class 10A: 95% attendance</li>
          <li>Class 9B: 89% attendance</li>
          <li>Class 8C: 92% attendance</li>
        </ul>
      </div>
    ),
    fee: (
      <div>
        <h2 className="text-xl font-bold mb-2 text-green-700">Fee Collection Report Details</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Total Collected: ₹2,50,000</li>
          <li>Pending: ₹30,000</li>
          <li>Defaulters: 5 students</li>
        </ul>
      </div>
    ),
    exam: (
      <div>
        <h2 className="text-xl font-bold mb-2 text-indigo-700">Exam Results Report Details</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Topper: John Doe (98%)</li>
          <li>Pass Percentage: 92%</li>
          <li>Distinctions: 15 students</li>
        </ul>
      </div>
    ),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-green-50 p-0">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-green-400 py-10 mb-10 shadow-lg rounded-b-3xl">
        <div className="max-w-2xl mx-auto flex items-center gap-4 px-6">
          <div className="bg-white bg-opacity-20 rounded-full p-4 shadow-lg">
            <FiBarChart2 className="text-4xl text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight mb-1">Reports</h1>
            <p className="text-lg text-blue-100 font-medium">View and generate various school reports</p>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 -mt-16 relative z-10">
        {/* Attendance Report Card */}
        <div
          className="bg-white p-6 rounded-2xl shadow-2xl flex flex-col cursor-pointer hover:ring-2 hover:ring-blue-400 transition"
          onClick={() => setOpenModal('attendance')}
        >
          <div className="flex items-center gap-2 mb-2">
            <FiFileText className="text-blue-600 text-xl" />
            <span className="font-bold text-blue-700 text-lg">Attendance Report</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            {/* Placeholder chart */}
            <div className="w-32 h-24 bg-[#e0e7ff] rounded-lg flex items-end gap-1 p-2">
              <div className="w-4 h-12 bg-blue-400 rounded"></div>
              <div className="w-4 h-20 bg-green-400 rounded"></div>
              <div className="w-4 h-16 bg-yellow-400 rounded"></div>
              <div className="w-4 h-8 bg-red-400 rounded"></div>
            </div>
          </div>
          <button className="mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:bg-gray-300" disabled>
            <FiDownload /> Export
          </button>
        </div>
        {/* Fee Collection Report Card */}
        <div
          className="bg-white p-6 rounded-2xl shadow-2xl flex flex-col cursor-pointer hover:ring-2 hover:ring-green-400 transition"
          onClick={() => setOpenModal('fee')}
        >
          <div className="flex items-center gap-2 mb-2">
            <FiFileText className="text-green-600 text-xl" />
            <span className="font-bold text-green-700 text-lg">Fee Collection Report</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            {/* Placeholder chart */}
            <div className="w-32 h-24 bg-[#e0e7ff] rounded-lg flex items-end gap-1 p-2">
              <div className="w-4 h-20 bg-green-400 rounded"></div>
              <div className="w-4 h-16 bg-blue-400 rounded"></div>
              <div className="w-4 h-8 bg-yellow-400 rounded"></div>
              <div className="w-4 h-12 bg-red-400 rounded"></div>
            </div>
          </div>
          <button className="mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition disabled:bg-gray-300" disabled>
            <FiDownload /> Export
          </button>
        </div>
        {/* Exam Results Report Card */}
        <div
          className="bg-white p-6 rounded-2xl shadow-2xl flex flex-col cursor-pointer hover:ring-2 hover:ring-indigo-400 transition"
          onClick={() => setOpenModal('exam')}
        >
          <div className="flex items-center gap-2 mb-2">
            <FiFileText className="text-indigo-600 text-xl" />
            <span className="font-bold text-indigo-700 text-lg">Exam Results Report</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            {/* Placeholder chart */}
            <div className="w-32 h-24 bg-[#e0e7ff] rounded-lg flex items-end gap-1 p-2">
              <div className="w-4 h-16 bg-indigo-400 rounded"></div>
              <div className="w-4 h-20 bg-green-400 rounded"></div>
              <div className="w-4 h-12 bg-blue-400 rounded"></div>
              <div className="w-4 h-8 bg-yellow-400 rounded"></div>
            </div>
          </div>
          <button className="mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition disabled:bg-gray-300" disabled>
            <FiDownload /> Export
          </button>
        </div>
      </div>
      {/* Modal for details */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
              onClick={() => setOpenModal(null)}
              aria-label="Close"
            >
              <FiX />
            </button>
            {reportDetails[openModal]}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportsPage; 