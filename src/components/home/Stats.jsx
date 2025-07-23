import React from 'react';
import { FiUsers, FiAward, FiBookOpen, FiTrendingUp, FiMapPin, FiStar, FiTarget, FiHeart } from 'react-icons/fi';

const stats = [
  { 
    name: 'Total Students', 
    value: '2,500+', 
    icon: <FiUsers className="text-4xl text-yellow-300" />,
    description: 'Enrolled across all grades'
  },
  { 
    name: 'Expert Teachers', 
    value: '150+', 
    icon: <FiAward className="text-4xl text-yellow-300" />,
    description: 'Qualified professionals'
  },
  { 
    name: 'Years of Excellence', 
    value: '25+', 
    icon: <FiStar className="text-4xl text-yellow-300" />,
    description: 'Since our establishment'
  },
  { 
    name: 'Academic Programs', 
    value: '20+', 
    icon: <FiBookOpen className="text-4xl text-yellow-300" />,
    description: 'Comprehensive curriculum'
  },
  { 
    name: 'Success Rate', 
    value: '95%', 
    icon: <FiTrendingUp className="text-4xl text-yellow-300" />,
    description: 'University admissions'
  },
  { 
    name: 'Global Alumni', 
    value: '500+', 
    icon: <FiMapPin className="text-4xl text-yellow-300" />,
    description: 'Worldwide network'
  },
  { 
    name: 'Sports Achievements', 
    value: '100+', 
    icon: <FiTarget className="text-4xl text-yellow-300" />,
    description: 'Championship titles'
  },
  { 
    name: 'Community Service', 
    value: '10,000+', 
    icon: <FiHeart className="text-4xl text-yellow-300" />,
    description: 'Hours contributed'
  }
];

const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Discover the scale of our educational excellence and the positive impact we've made 
            in shaping the future of thousands of students over the past 25 years.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.name} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-opacity-20 transition-all duration-300 hover:scale-105">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-extrabold text-white mb-2">{stat.value}</h3>
              <p className="text-lg font-semibold text-blue-100 mb-2">{stat.name}</p>
              <p className="text-sm text-blue-200">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6 text-center text-white">
            <h4 className="text-2xl font-bold mb-2">National Recognition</h4>
            <p className="text-yellow-100">Awarded "Best School" by Education Ministry</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-6 text-center text-white">
            <h4 className="text-2xl font-bold mb-2">International Partnerships</h4>
            <p className="text-green-100">Collaborations with 15+ global institutions</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-center text-white">
            <h4 className="text-2xl font-bold mb-2">Innovation Hub</h4>
            <p className="text-purple-100">State-of-the-art labs and technology centers</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-xl text-blue-200 mb-6">
            Join our community and be part of this incredible journey of learning and growth.
          </p>
          <a 
            href="/admission" 
            className="inline-flex items-center px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-full hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stats;
