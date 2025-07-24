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

const parentNavigation = [
  { name: 'Dashboard', href: '/parent/dashboard', icon: FiGrid },
  { name: 'Attendance', href: '/parent/attendance', icon: FiCalendar },
  { name: 'Fee Details', href: '/parent/fee', icon: FiDollarSign },
  { name: 'Grades', href: '/parent/grades', icon: FiAward },
  { name: 'Notices', href: '/parent/notices', icon: FiFileText },
  { name: 'Profile', href: '/parent/profile', icon: FiUser },
];

// Mock parent info for sidebar profile
const parentInfo = {
  name: 'Jane Doe',
  profilePic: 'https://randomuser.me/api/portraits/women/44.jpg',
};

const Sidebar = () => {
  const location = useLocation();

  // Determine role based on URL path
  let role = 'student'; // default role
  if (location.pathname.startsWith('/admin')) {
    role = 'admin';
  } else if (location.pathname.startsWith('/teacher')) {
    role = 'teacher';
  } else if (location.pathname.startsWith('/parent')) {
    role = 'parent';
  }

  const navigation = {
    admin: adminNavigation,
    student: studentNavigation,
    teacher: teacherNavigation,
    parent: parentNavigation,
  }[role];

  const title = {
    admin: 'School Admin',
    student: 'Student Portal',
    teacher: 'Teacher Portal',
    parent: 'Parent Portal',
  }[role];

  return (
    <div style={{ width: 240, minHeight: '100vh', background: '#1e293b', color: '#fff', display: 'flex', flexDirection: 'column', boxShadow: '2px 0 12px rgba(30,41,59,0.08)' }}>
      {/* Logo/Title */}
      <div style={{ padding: '28px 0 16px 0', textAlign: 'center', fontWeight: 900, fontSize: 24, letterSpacing: 1, color: '#fff', borderBottom: '1px solid #23304a', marginBottom: 8 }}>
        <span style={{ background: '#2563eb', color: '#fff', borderRadius: '50%', padding: 8, fontSize: 20, marginRight: 10, fontWeight: 700 }}>S</span>
        School
      </div>
      {/* Parent profile section */}
      {role === 'parent' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 0 10px 0', borderBottom: '1px solid #23304a', marginBottom: 8, background: '#23304a', borderRadius: 12, margin: '0 16px 12px 16px', boxShadow: '0 2px 8px rgba(37,99,235,0.08)' }}>
          <img src={parentInfo.profilePic} alt={parentInfo.name} style={{ width: 54, height: 54, borderRadius: '50%', border: '2px solid #fff', marginBottom: 8 }} />
          <div style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>{parentInfo.name}</div>
          <div style={{ color: '#cbd5e1', fontSize: 12 }}>Parent</div>
        </div>
      )}
      {/* Navigation */}
      <nav style={{ flex: 1, padding: '10px 0' }}>
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              padding: '13px 22px',
              borderRadius: 12,
              fontWeight: isActive ? 700 : 500,
              fontSize: 17,
              color: isActive ? '#2563eb' : '#e0e7ef',
              background: isActive ? '#f1f5f9' : 'transparent',
              marginBottom: 8,
              borderLeft: isActive ? '6px solid #2563eb' : '6px solid transparent',
              boxShadow: isActive ? '0 2px 8px rgba(37,99,235,0.10)' : 'none',
              transition: 'all 0.18s',
              cursor: 'pointer',
            })}
            onMouseOver={e => { if (!e.currentTarget.classList.contains('active')) e.currentTarget.style.background = '#23304a'; }}
            onMouseOut={e => { if (!e.currentTarget.classList.contains('active')) e.currentTarget.style.background = 'transparent'; }}
          >
            <item.icon style={{ marginRight: 18, fontSize: 22, color: 'inherit' }} />
            {item.name}
          </NavLink>
        ))}
      </nav>
      {/* Footer */}
      <div style={{ textAlign: 'center', color: '#cbd5e1', fontSize: 12, padding: '16px 0 10px 0', borderTop: '1px solid #23304a', letterSpacing: 0.5 }}>
        &copy; {new Date().getFullYear()} School
      </div>
    </div>
  );
};

export default Sidebar;
