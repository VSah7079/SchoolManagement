import React from 'react';
import { FiBookOpen, FiUsers, FiClock, FiAward, FiTrendingUp, FiTarget } from 'react-icons/fi';

const courses = [
  {
    title: 'Science Stream',
    description: 'Comprehensive study of Physics, Chemistry, Biology, and Mathematics with practical laboratory sessions.',
    icon: <FiBookOpen className="text-4xl text-blue-500" />,
    duration: '2 Years',
    students: '450+',
    subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics'],
    career: 'Engineering, Medicine, Research',
    color: 'blue'
  },
  {
    title: 'Commerce Stream',
    description: 'Focus on Accountancy, Business Studies, Economics, and Mathematics with real-world applications.',
    icon: <FiTrendingUp className="text-4xl text-green-500" />,
    duration: '2 Years',
    students: '380+',
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics'],
    career: 'Business, Finance, Entrepreneurship',
    color: 'green'
  },
  {
    title: 'Arts & Humanities',
    description: 'Exploration of History, Geography, Political Science, and Literature with critical thinking focus.',
    icon: <FiTarget className="text-4xl text-purple-500" />,
    duration: '2 Years',
    students: '320+',
    subjects: ['History', 'Geography', 'Political Science', 'Literature'],
    career: 'Law, Journalism, Civil Services',
    color: 'purple'
  },
  {
    title: 'Computer Science',
    description: 'Modern programming, data structures, algorithms, and software development with hands-on projects.',
    icon: <FiAward className="text-4xl text-orange-500" />,
    duration: '2 Years',
    students: '280+',
    subjects: ['Programming', 'Data Structures', 'Web Development', 'Database'],
    career: 'Software Development, IT, Data Science',
    color: 'orange'
  },
  {
    title: 'Physical Education',
    description: 'Sports science, fitness training, and physical development with professional coaching.',
    icon: <FiUsers className="text-4xl text-red-500" />,
    duration: '2 Years',
    students: '150+',
    subjects: ['Sports Science', 'Fitness Training', 'Anatomy', 'Nutrition'],
    career: 'Sports, Fitness, Physical Therapy',
    color: 'red'
  },
  {
    title: 'Vocational Courses',
    description: 'Skill-based training in various trades with industry partnerships and practical experience.',
    icon: <FiClock className="text-4xl text-indigo-500" />,
    duration: '1-2 Years',
    students: '200+',
    subjects: ['Automotive', 'Electronics', 'Carpentry', 'Culinary Arts'],
    career: 'Skilled Trades, Entrepreneurship',
    color: 'indigo'
  }
];

const Courses = () => {
  const getColorClasses = (color) => {
    const colors = {
      blue: 'border-blue-200 bg-blue-50 hover:bg-blue-100',
      green: 'border-green-200 bg-green-50 hover:bg-green-100',
      purple: 'border-purple-200 bg-purple-50 hover:bg-purple-100',
      orange: 'border-orange-200 bg-orange-50 hover:bg-orange-100',
      red: 'border-red-200 bg-red-50 hover:bg-red-100',
      indigo: 'border-indigo-200 bg-indigo-50 hover:bg-indigo-100'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <FiBookOpen className="mr-2" />
            Academic Programs
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
            Explore Our Academic Streams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer diverse academic streams designed to cater to different interests, 
            career aspirations, and learning styles. Each program is carefully crafted 
            to provide comprehensive education and practical skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={course.title} 
              className={`bg-white rounded-2xl shadow-lg p-8 border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${getColorClasses(course.color)}`}
            >
              <div className="mb-6">
                {course.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <FiClock className="mr-2" />
                  Duration: {course.duration}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FiUsers className="mr-2" />
                  Students: {course.students}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Core Subjects:</h4>
                <div className="flex flex-wrap gap-2">
                  {course.subjects.map((subject, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 border"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Career Paths:</h4>
                <p className="text-sm text-gray-600">{course.career}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">1,780+</div>
              <div className="text-blue-100">Students Enrolled</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Industry Partners</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses; 