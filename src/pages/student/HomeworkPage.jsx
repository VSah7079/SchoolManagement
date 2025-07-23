import React, { useEffect, useState } from 'react';
import { FiBookOpen, FiCheckSquare, FiFileText, FiClipboard } from 'react-icons/fi';

const StudentHomeworkPage = () => {
  // Mock homework data
  const homework = [
    {
      subject: 'Mathematics',
      title: 'Chapter 5 - Algebra Problems',
      dueDate: '2023-10-28',
      status: 'Pending',
    },
    {
      subject: 'Science',
      title: 'Lab Report - Photosynthesis',
      dueDate: '2023-10-26',
      status: 'Submitted',
    },
    {
      subject: 'History',
      title: 'Essay on the Roman Empire',
      dueDate: '2023-10-25',
      status: 'Submitted',
    },
    {
      subject: 'English',
      title: 'Read "To Kill a Mockingbird" Ch. 1-5',
      dueDate: '2023-10-24',
      status: 'Completed',
    },
     {
      subject: 'Art',
      title: 'Sketch a still life composition',
      dueDate: '2023-11-02',
      status: 'Pending',
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Pending':
        return <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-yellow-800 bg-yellow-200 rounded-full"><FiClipboard className="mr-1" />{status}</span>;
      case 'Submitted':
        return <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"><FiCheckSquare className="mr-1" />{status}</span>;
      case 'Completed':
        return <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded-full"><FiCheckSquare className="mr-1" />{status}</span>;
      default:
        return null;
    }
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
          <FiBookOpen className="text-white text-5xl mr-6 drop-shadow-lg" />
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 drop-shadow">Homework & Assignments</h1>
            <p className="text-white/90 text-lg">Stay on top of your assignments and never miss a deadline.</p>
          </div>
        </div>
      </div>

      {/* Table for desktop, cards for mobile */}
      <div className={`max-w-4xl mx-auto px-4 transition-all duration-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="hidden md:block bg-white p-8 rounded-2xl shadow-xl">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg">
              <thead className="bg-blue-50">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-bold text-blue-700 uppercase tracking-wider flex items-center"><FiBookOpen className="mr-2"/>Subject</th>
                  <th className="py-3 px-6 text-left text-xs font-bold text-blue-700 uppercase tracking-wider"><FiFileText className="mr-2 inline-block"/>Title</th>
                  <th className="py-3 px-6 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">Due Date</th>
                  <th className="py-3 px-6 text-left text-xs font-bold text-blue-700 uppercase tracking-wider"><FiCheckSquare className="mr-2 inline-block"/>Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {homework.map((hw, index) => (
                  <tr key={index} className="hover:bg-blue-50 transition">
                    <td className="py-4 px-6 whitespace-nowrap font-medium text-gray-700">{hw.subject}</td>
                    <td className="py-4 px-6 whitespace-nowrap">{hw.title}</td>
                    <td className="py-4 px-6 whitespace-nowrap font-semibold text-gray-700">{hw.dueDate}</td>
                    <td className="py-4 px-6 whitespace-nowrap">{getStatusBadge(hw.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Cards for mobile */}
        <div className="md:hidden space-y-6">
          {homework.map((hw, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-2">
              <div className="flex items-center mb-2">
                <FiBookOpen className="text-blue-500 mr-2" />
                <span className="font-bold text-lg text-gray-800">{hw.subject}</span>
              </div>
              <div className="text-gray-700 mb-1"><FiFileText className="inline-block mr-2 text-blue-400" />{hw.title}</div>
              <div className="text-gray-500 mb-1">Due: <span className="font-semibold text-gray-700">{hw.dueDate}</span></div>
              <div>{getStatusBadge(hw.status)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentHomeworkPage; 