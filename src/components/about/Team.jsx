import React from 'react';

const teamMembers = [
  {
    name: 'Dr. Evelyn Reed',
    role: 'Principal',
    imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    name: 'Mr. David Chen',
    role: 'Vice Principal',
    imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
  },
  {
    name: 'Ms. Sarah Johnson',
    role: 'Head of Academics',
    imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704f',
  },
  {
    name: 'Mr. Robert Brown',
    role: 'Head of Administration',
    imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704g',
  },
];

const Team = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Leadership Team
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Meet the dedicated individuals who guide our school.
          </p>
        </div>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <img
                className="mx-auto h-40 w-40 rounded-full"
                src={member.imageUrl}
                alt={member.name}
              />
              <h3 className="mt-6 text-base font-medium text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team; 