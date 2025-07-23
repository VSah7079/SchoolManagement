import React from 'react';

const cardData = [
  { title: 'Total Students', value: '1,234', icon: 'users', bg: 'from-green-400 to-blue-500' },
  { title: 'Total Teachers', value: '82', icon: 'academic-cap', bg: 'from-purple-400 to-pink-500' },
  { title: 'Fee Collected', value: '₹56,789', icon: 'cash', bg: 'from-yellow-400 to-orange-500' },
  { title: 'Attendance Today', value: '95.8%', icon: 'check-circle', bg: 'from-blue-400 to-indigo-500' },
];

const Icon = ({ name }) => {
  const icons = {
    users: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
    'academic-cap': (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zM4.93 19.07A10.023 10.023 0 0112 17.947a10.023 10.023 0 017.07-1.123" />
      </>
    ),
    cash: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />,
    'check-circle': <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  };
  return <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">{icons[name]}</svg>;
};

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardData.map((card, index) => (
        <div key={card.title} className="bg-white rounded-2xl shadow-xl p-6 flex items-center justify-between transition-transform hover:scale-105">
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-1">{card.title}</p>
            <p className="text-3xl font-extrabold text-gray-900">{card.value}</p>
          </div>
          <div className={`p-4 rounded-full bg-gradient-to-br ${card.bg} shadow-lg flex items-center justify-center`}>
            <Icon name={card.icon} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards; 