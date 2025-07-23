import React from 'react';
import { FiTarget, FiHeart, FiAward, FiUsers, FiBookOpen, FiGlobe } from 'react-icons/fi';

const AboutSchool = () => {
  const features = [
    {
      icon: <FiTarget className="text-3xl text-blue-500" />,
      title: "Academic Excellence",
      description: "Consistently achieving outstanding academic results with 95% of students gaining admission to top universities."
    },
    {
      icon: <FiHeart className="text-3xl text-red-500" />,
      title: "Character Development",
      description: "We focus not just on academic success, but also on developing strong moral character and leadership skills."
    },
    {
      icon: <FiAward className="text-3xl text-yellow-500" />,
      title: "Award-Winning Programs",
      description: "Our innovative programs have received national recognition for excellence in education and student development."
    },
    {
      icon: <FiUsers className="text-3xl text-green-500" />,
      title: "Diverse Community",
      description: "A welcoming environment that celebrates diversity and promotes understanding among students from all backgrounds."
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <FiBookOpen className="mr-2" />
            About Our Institution
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
            Excellence in Education Since 1995
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a community of learners, dedicated to creating a better future through innovative education, 
            character development, and academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                Founded in 1995, our school has been a pillar of the community, providing top-tier education for over 25 years. 
                We have grown from a small institution with 50 students to a large campus serving over 2,500 students annually.
              </p>
              <p className="text-lg leading-relaxed">
                Our journey has been marked by continuous innovation in teaching methodologies, state-of-the-art facilities, 
                and a commitment to nurturing the whole child - academically, socially, and emotionally.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we stand as one of the region's most respected educational institutions, known for our academic rigor, 
                character development programs, and commitment to community service.
              </p>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Impact</h4>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">2,500+</div>
                <div className="text-gray-600">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
                <div className="text-gray-600">Expert Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">25+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
            <FiTarget className="text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-blue-100 leading-relaxed">
              To empower students with the knowledge, skills, and values needed to thrive in a dynamic world. 
              We are committed to fostering critical thinking, creativity, and a passion for lifelong learning.
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-8 text-white">
            <FiGlobe className="text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-indigo-100 leading-relaxed">
              To be the leading educational institution that shapes future leaders, innovators, and responsible global citizens 
              who make positive contributions to society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSchool; 