import React from 'react';
import { FaUser, FaCalendarAlt, FaBook, FaClipboardList, FaDollarSign, FaClock, FaBell, FaRupeeSign } from 'react-icons/fa';
import DashboardCard from '../../components/dashboard/DashboardCard';

const StudentDashboard = () => {
  // Dummy data - replace with actual data from your state or props
  const student = {
    name: 'Jessica',
    profilePic: 'https://via.placeholder.com/150', // Placeholder image
  };

  const notifications = [
    {
      icon: <FaBook className="text-blue-500" />,
      title: 'New Assignment Posted',
      description: 'Maths: Chapter 5 Exercise due on 2023-10-28.',
      bgColor: 'bg-blue-100',
    },
    {
      icon: <FaClipboardList className="text-green-500" />,
      title: 'Results Published',
      description: 'Mid-term exam results are now available.',
      bgColor: 'bg-green-100',
    },
    {
      icon: <FaCalendarAlt className="text-yellow-500" />,
      title: 'Upcoming Holiday',
      description: "School closed on 2023-11-01 for All Saints' Day.",
      bgColor: 'bg-yellow-100',
    },
  ];

  const quickActions = [
    { label: 'View Timetable', icon: <FaCalendarAlt />, path: '/student/timetable' },
    { label: 'View Homework', icon: <FaBook />, path: '/student/homework' },
    { label: 'View Grades', icon: <FaClipboardList />, path: '/student/grades' },
    { label: 'Fee Details', icon: <FaRupeeSign />, path: '/student/fees' },
    { label: 'My Profile', icon: <FaUser />, path: '/student/profile' },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Welcome, {student.name}!</h1>
          <p className="text-gray-600">Let's have a productive day.</p>
        </div>
        <div className="flex items-center">
          <FaBell className="text-2xl text-gray-500 mr-6" />
          <img
            src={student.profilePic}
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
        </div>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <DashboardCard
          title="Attendance"
          value="95%"
          icon={<FaCalendarAlt className="text-3xl text-blue-500" />}
        />
        <DashboardCard
          title="Upcoming Assignments"
          value="3"
          icon={<FaBook className="text-3xl text-green-500" />}
        />
        <DashboardCard
          title="Recent Grades"
          value="A-"
          icon={<FaClipboardList className="text-3xl text-yellow-500" />}
        />
         <DashboardCard
          title="Fees Due"
          value="₹1,250"
          icon={<FaRupeeSign className="text-3xl text-red-500" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Quick Actions</h2>
          <div className="space-y-4">
            {quickActions.map((action, index) => (
              <a
                key={index}
                href={action.path}
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <div className="mr-4 text-gray-600">{action.icon}</div>
                <span className="font-medium text-gray-800">{action.label}</span>
              </a>
            ))}
          </div>
      </div>

      {/* Recent Activity or Notifications */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Notifications</h2>
        <ul className="space-y-4">
            {notifications.map((notification, index) => (
              <li key={index} className="flex items-start p-4 rounded-lg bg-white hover:bg-gray-50">
                <div className={`p-3 rounded-full mr-4 ${notification.bgColor}`}>
                  {notification.icon}
            </div>
            <div>
                  <p className="font-semibold text-gray-800">{notification.title}</p>
                  <p className="text-gray-600 text-sm">{notification.description}</p>
            </div>
          </li>
            ))}
          </ul>
            </div>
      </div>
    </div>
  );
};

export default StudentDashboard; 