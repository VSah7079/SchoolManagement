import React from 'react';
import { FaUserEdit, FaFileAlt, FaComments, FaCheckCircle, FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa';

const AdmissionPage = () => {
  const steps = [
    {
      icon: <FaUserEdit className="w-12 h-12 mx-auto text-blue-600" />,
      title: 'Application',
      description: 'Complete the online application form with all required documents and information.',
    },
    {
      icon: <FaFileAlt className="w-12 h-12 mx-auto text-blue-600" />,
      title: 'Assessment',
      description: 'Students may be required to take an assessment test to determine their academic level.',
    },
    {
      icon: <FaComments className="w-12 h-12 mx-auto text-blue-600" />,
      title: 'Interview',
      description: 'A meeting with parents and student to discuss expectations and answer questions.',
    },
    {
      icon: <FaCheckCircle className="w-12 h-12 mx-auto text-blue-600" />,
      title: 'Enrollment',
      description: 'Complete the enrollment process and submit all required fees and documents.',
    },
    {
      icon: <FaChalkboardTeacher className="w-12 h-12 mx-auto text-blue-600" />,
      title: 'Orientation',
      description: 'Attend orientation sessions to familiarize with school policies and procedures.',
    },
    {
      icon: <FaGraduationCap className="w-12 h-12 mx-auto text-blue-600" />,
      title: 'Start Classes',
      description: 'Begin your educational journey with our comprehensive academic programs.',
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl tracking-tight">
            Admissions
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Join our vibrant learning community. Here's how to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
          </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Contact Admissions Office
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;
