import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock, FiMessageSquare, FiUsers, FiAward, FiBookOpen } from 'react-icons/fi';

const contactInfo = [
  {
    icon: <FiPhone className="text-3xl text-blue-500" />,
    title: "Call Us",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    description: "Speak with our admission counselors"
  },
  {
    icon: <FiMail className="text-3xl text-green-500" />,
    title: "Email Us",
    details: ["admissions@school.edu", "info@school.edu"],
    description: "Get detailed information via email"
  },
  {
    icon: <FiMapPin className="text-3xl text-red-500" />,
    title: "Visit Us",
    details: ["123 Education Street", "City, State 12345"],
    description: "Schedule a campus tour"
  },
  {
    icon: <FiClock className="text-3xl text-purple-500" />,
    title: "Office Hours",
    details: ["Mon-Fri: 8:00 AM - 5:00 PM", "Sat: 9:00 AM - 2:00 PM"],
    description: "We're here to help you"
  }
];

const features = [
  {
    icon: <FiUsers className="text-2xl text-blue-500" />,
    title: "Personalized Guidance",
    description: "One-on-one counseling sessions with our expert advisors"
  },
  {
    icon: <FiAward className="text-2xl text-green-500" />,
    title: "Scholarship Programs",
    description: "Merit-based and need-based financial assistance available"
  },
  {
    icon: <FiBookOpen className="text-2xl text-purple-500" />,
    title: "Curriculum Overview",
    description: "Detailed information about our academic programs"
  },
  {
    icon: <FiMessageSquare className="text-2xl text-orange-500" />,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your queries"
  }
];

const ContactSection = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <FiMessageSquare className="mr-2" />
            Get in Touch
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're here to help you make the best decision for your child's education. 
            Contact us today to learn more about our programs, schedule a visit, or begin the admission process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h4>
                      <div className="space-y-1 mb-2">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="mt-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-md">
                    <div className="mr-3">
                      {feature.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 text-sm">{feature.title}</h5>
                      <p className="text-xs text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select a subject</option>
                  <option>Admission Inquiry</option>
                  <option>General Information</option>
                  <option>Campus Tour</option>
                  <option>Scholarship Information</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Apply?</h3>
            <p className="text-xl text-blue-100 mb-6">
              Don't wait! Start your child's educational journey with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admission"
                className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Apply Now
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection; 