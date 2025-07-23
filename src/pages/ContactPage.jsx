import React from 'react';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import { FiMail } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-green-50 p-0">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-green-400 py-10 mb-10 shadow-lg rounded-b-3xl">
        <div className="max-w-2xl mx-auto flex items-center gap-4 px-6">
          <div className="bg-white bg-opacity-20 rounded-full p-4 shadow-lg">
            <FiMail className="text-4xl text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight mb-1">Contact Us</h1>
            <p className="text-lg text-blue-100 font-medium">We'd love to hear from you! Reach out with any questions or feedback.</p>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 -mt-16 mb-10 relative z-10">
        <div className="bg-white p-8 rounded-2xl shadow-2xl">
          <ContactForm />
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-2xl">
          <ContactInfo />
        </div>
      </div>
      {/* Map Section */}
      <div className="max-w-4xl mx-auto mb-16 bg-white p-6 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Find Us Here</h2>
        <div className="w-full h-80 rounded-lg overflow-hidden">
          <iframe
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019019145409!2d-122.4194151846816!3d37.7749297797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b6e7b0b%3A0x4a0b0b0b0b0b0b0b!2sSchool!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>z
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 