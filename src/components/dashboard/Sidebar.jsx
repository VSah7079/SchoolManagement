import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
    FiGrid, FiUsers, FiUser, FiCalendar, FiBookOpen, 
    FiAward, FiFileText, FiClock, FiDollarSign, FiUsers as FiClass, FiCheckSquare, FiFile, FiBarChart2, FiSettings, FiHome, FiTruck
} from 'react-icons/fi';

const adminNavigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: FiGrid },
  { name: 'Add Student', href: '/admin/students/add', icon: FiUser },
  { name: 'Manage Students', href: '/admin/students/manage', icon: FiUsers },
  { name: 'Add Teacher', href: '/admin/teachers/add', icon: FiUser },
  { name: 'Manage Teachers', href: '/admin/teachers/manage', icon: FiUsers },
  { name: 'Manage Classes', href: '/admin/classes', icon: FiClass },
  { name: 'Take Attendance', href: '/admin/attendance/take', icon: FiCheckSquare },
  { name: 'View Attendance', href: '/admin/attendance/view', icon: FiCalendar },
  { name: 'Create Exam', href: '/admin/exams/create', icon: FiBookOpen },
  { name: 'Enter Marks', href: '/admin/exams/marks/enter', icon: FiFileText },
  { name: 'Report Card', href: '/admin/exams/report-card', icon: FiAward },
  { name: 'Fee Structure', href: '/admin/fees/structure', icon: FiDollarSign },
  { name: 'Fee Status', href: '/admin/fees/status', icon: FiFile },
  { name: 'Manage Hostel', href: '/admin/hostel', icon: FiHome },
  { name: 'Manage Transport', href: '/admin/transport/routes/add', icon: FiTruck },
  { name: 'Reports', href: '/admin/reports', icon: FiBarChart2 },
  { name: 'Settings', href: '/admin/settings', icon: FiSettings },
];

const studentNavigation = [
    { name: 'Dashboard', href: '/student/dashboard', icon: FiGrid },
    { name: 'My Profile', href: '/student/profile', icon: FiUser },
    { name: 'Attendance', href: '/student/attendance', icon: FiCalendar },
    { name: 'Grades', href: '/student/grades', icon: FiAward },
    { name: 'Homework', href: '/student/homework', icon: FiBookOpen },
    { name: 'Timetable', href: '/student/timetable', icon: FiClock },
    { name: 'Fee Details', href: '/student/fees', icon: FiDollarSign },
];

const teacherNavigation = [
    { name: 'Dashboard', href: '/teacher/dashboard', icon: FiGrid },
    { name: 'My Profile', href: '/teacher/profile', icon: FiUser },
    { name: 'My Classes', href: '/teacher/classes', icon: FiClass },
    { name: 'Take Attendance', href: '/teacher/attendance/take', icon: FiCheckSquare },
    { name: 'View Attendance', href: '/teacher/attendance/view', icon: FiCalendar },
    { name: 'Manage Exams', href: '/teacher/exams', icon: FiBookOpen },
    { name: 'Enter Results', href: '/teacher/results/enter', icon: FiFileText },
];

const Sidebar = () => {
    const location = useLocation();
    
    // Determine role based on URL path
    let role = 'student'; // default role
    if (location.pathname.startsWith('/admin')) {
        role = 'admin';
    } else if (location.pathname.startsWith('/teacher')) {
        role = 'teacher';
    }

    const navigation = {
        admin: adminNavigation,
        student: studentNavigation,
        teacher: teacherNavigation,
    }[role];

    const title = {
        admin: 'School Admin',
        student: 'Student Portal',
        teacher: 'Teacher Portal',
    }[role];

  return (
    <div className="w-64 h-full min-h-screen bg-gray-800 text-white flex flex-col">
      <div className="px-4 py-6 text-2xl font-bold text-center">
        {title}
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive 
                ? 'bg-gray-900 text-white' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`
            }
          >
            <item.icon className="mr-3 h-6 w-6" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
