import React from 'react';
import { FiStar, FiMessageSquare, FiUser, FiAward } from 'react-icons/fi';

const testimonials = [
  {
    quote: 'This school has been a wonderful place for my child to grow. The teachers are caring, the curriculum is top-notch, and the facilities are excellent. My daughter has flourished academically and personally.',
    author: 'Sarah Johnson',
    relation: 'Parent',
    rating: 5,
    avatar: 'SJ',
    achievement: 'Parent of Class 12 Student'
  },
  {
    quote: 'I loved my time at this school. I made lifelong friends and learned so much. The teachers were incredibly supportive and the extracurricular activities helped me discover my passion for science.',
    author: 'Michael Chen',
    relation: 'Alumni',
    rating: 5,
    avatar: 'MC',
    achievement: 'Studying Medicine at Harvard'
  },
  {
    quote: 'As a teacher, I appreciate the supportive environment and the focus on student success. The administration values our input and provides excellent resources. It\'s a great place to work and grow.',
    author: 'Dr. Emily Rodriguez',
    relation: 'Teacher',
    rating: 5,
    avatar: 'ER',
    achievement: 'Mathematics Department Head'
  },
  {
    quote: 'The school\'s emphasis on character development alongside academic excellence is what sets it apart. My son has become more confident, responsible, and academically strong.',
    author: 'David Thompson',
    relation: 'Parent',
    rating: 5,
    avatar: 'DT',
    achievement: 'Parent of Class 10 Student'
  },
  {
    quote: 'The school prepared me not just for university but for life. The leadership opportunities, community service programs, and academic rigor gave me a solid foundation for my career.',
    author: 'Priya Patel',
    relation: 'Alumni',
    rating: 5,
    avatar: 'PP',
    achievement: 'Software Engineer at Google'
  },
  {
    quote: 'Working here has been incredibly rewarding. The students are motivated, the parents are supportive, and the school\'s vision for education aligns perfectly with my teaching philosophy.',
    author: 'Prof. James Wilson',
    relation: 'Teacher',
    rating: 5,
    avatar: 'JW',
    achievement: 'Physics Department'
  }
];

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <FiStar key={i} className="text-yellow-400 fill-current" />
    ));
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
            <FiAward className="mr-2" />
            Testimonials
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our students, parents, teachers, and alumni about their experiences 
            and the positive impact our school has had on their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              {/* Quote Icon */}
              <div className="mb-6">
                <FiMessageSquare className="text-4xl text-blue-500" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.relation}</p>
                  <p className="text-xs text-blue-600 font-medium">{testimonial.achievement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Parent Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Student Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Happy Alumni</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Join our community and experience the difference quality education makes.
          </p>
          <a 
            href="/admission" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <FiUser className="mr-2" />
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 