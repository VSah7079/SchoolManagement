import React from 'react';

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between transition-transform transform hover:-translate-y-1 hover:shadow-lg">
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
      <div className="text-3xl">
        {icon}
      </div>
    </div>
  );
};

export default DashboardCard;
