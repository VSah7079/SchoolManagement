import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

const info = [
  {
    icon: <FiMapPin className="text-blue-500 text-xl" />,
    label: 'Address',
    value: '123 School Lane, Education City, 12345',
    glow: 'shadow-blue-300',
  },
  {
    icon: <FiPhone className="text-green-500 text-xl" />,
    label: 'Phone',
    value: '(123) 456-7890',
    glow: 'shadow-green-300',
  },
  {
    icon: <FiMail className="text-pink-500 text-xl" />,
    label: 'Email',
    value: 'info@school.com',
    glow: 'shadow-pink-300',
  },
];

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="backdrop-blur-md bg-gradient-to-br from-white/70 to-blue-50/60 rounded-2xl shadow-2xl border border-white/40 max-w-md mx-auto px-7 py-7 relative overflow-hidden"
      style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}
    >
      {/* Decorative Accent */}
      <span className="absolute top-4 left-4 w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-pink-400 shadow-lg"></span>
      <h2 className="text-2xl font-bold text-blue-700 mb-7 flex items-center gap-2 drop-shadow-sm">
        <FiMapPin className="text-blue-500" /> Contact Information
      </h2>
      <div className="space-y-6">
        {info.map((item) => (
          <div key={item.label} className="flex items-center gap-4">
            <div className={`rounded-full p-3 bg-white/70 backdrop-blur-md ${item.glow} shadow-md flex items-center justify-center transition-transform duration-200 hover:scale-110`}>
              {item.icon}
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-700 uppercase tracking-wide">{item.label}</div>
              <div className="text-gray-700 text-base font-medium">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactInfo; 