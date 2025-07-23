import React, { useEffect, useState } from 'react';
import { FiCheckCircle, FiXCircle, FiClock, FiCalendar, FiBarChart2 } from 'react-icons/fi';

const StudentAttendancePage = () => {
  // Mock attendance data
  const attendanceSummary = {
    totalDays: 120,
    present: 110,
    absent: 8,
    late: 2,
  };

  const attendanceLog = [
    { date: '2023-10-25', status: 'Present' },
    { date: '2023-10-24', status: 'Present' },
    { date: '2023-10-23', status: 'Absent' },
    { date: '2023-10-22', status: 'Present' },
    { date: '2023-10-21', status: 'Late' },
    { date: '2023-10-20', status: 'Present' },
    { date: '2023-10-19', status: 'Present' },
    { date: '2023-10-18', status: 'Present' },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Present':
        return <FiCheckCircle className="text-green-500" />;
      case 'Absent':
        return <FiXCircle className="text-red-500" />;
      case 'Late':
        return <FiClock className="text-yellow-500" />;
      default:
        return null;
    }
  };

  const attendancePercentage = ((attendanceSummary.present + attendanceSummary.late) / attendanceSummary.totalDays) * 100;

  // Animation state for progress bar and fade-in
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

  // Card data for summary
  const summaryCards = [
    {
      label: 'Total Days',
      value: attendanceSummary.totalDays,
      icon: <FiBarChart2 className="text-2xl text-blue-500" />,
      color: 'bg-blue-50',
      text: 'text-blue-700',
    },
    {
      label: 'Present',
      value: attendanceSummary.present,
      icon: <FiCheckCircle className="text-2xl text-green-500" />,
      color: 'bg-green-50',
      text: 'text-green-700',
    },
    {
      label: 'Absent',
      value: attendanceSummary.absent,
      icon: <FiXCircle className="text-2xl text-red-500" />,
      color: 'bg-red-50',
      text: 'text-red-700',
    },
    {
      label: 'Late',
      value: attendanceSummary.late,
      icon: <FiClock className="text-2xl text-yellow-500" />,
      color: 'bg-yellow-50',
      text: 'text-yellow-700',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-16">
      {/* Header */}
      <div className="relative overflow-hidden mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 opacity-80"></div>
        <div className="relative z-10 flex items-center px-8 py-12">
          <FiCalendar className="text-white text-5xl mr-6 drop-shadow-lg" />
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 drop-shadow">My Attendance</h1>
            <p className="text-white/90 text-lg">Track your attendance and stay on top of your progress.</p>
          </div>
        </div>
      </div>

      {/* Attendance Summary Cards */}
      <div className={`max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 px-4 transition-all duration-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {summaryCards.map((card, idx) => (
          <div key={idx} className={`rounded-xl shadow-md p-6 flex flex-col items-center ${card.color} hover:shadow-xl transition-shadow`}>
            <div className="mb-2">{card.icon}</div>
            <div className={`text-3xl font-bold ${card.text}`}>{card.value}</div>
            <div className="text-gray-500 mt-1 font-medium">{card.label}</div>
          </div>
        ))}
      </div>

      {/* Animated Progress Bar */}
      <div className="max-w-2xl mx-auto mb-12 px-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-semibold text-blue-700">Attendance Rate</span>
          <span className="text-lg font-bold text-gray-700">{attendancePercentage.toFixed(2)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-green-400 h-5 rounded-full transition-all duration-1000"
            style={{ width: animate ? `${attendancePercentage.toFixed(2)}%` : '0%' }}
          ></div>
        </div>
      </div>

      {/* Detailed Log */}
      <div className={`max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl transition-all duration-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center">
          <FiCalendar className="mr-3" /> Detailed Log
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg">
            <thead className="bg-blue-50">
              <tr>
                <th className="py-3 px-6 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">Date</th>
                <th className="py-3 px-6 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {attendanceLog.map((log, index) => (
                <tr key={index} className="hover:bg-blue-50 transition">
                  <td className="py-4 px-6 whitespace-nowrap font-medium text-gray-700">{log.date}</td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(log.status)}
                      <span className="ml-2 font-semibold text-gray-700">{log.status}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentAttendancePage; 