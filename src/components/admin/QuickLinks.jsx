import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { name: 'Add Student', href: '/admin/students/add' },
  { name: 'Add Teacher', href: '/admin/teachers/add' },
  { name: 'Create Class', href: '/admin/classes/add' },
  { name: 'Generate Report', href: '/admin/reports/generate' },
];

const QuickLinks = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Links</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-3 px-4 rounded-lg text-center"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks; 