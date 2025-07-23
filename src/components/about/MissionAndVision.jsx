import React from 'react';

const MissionAndVision = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              Our mission is to provide a nurturing and challenging learning environment that inspires students to achieve their full potential. We are dedicated to fostering a culture of excellence, respect, and responsibility, preparing students to become compassionate and engaged global citizens.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Our Vision</h2>
            <p className="mt-4 text-gray-600">
              Our vision is to be a leading educational institution recognized for our commitment to innovation, academic excellence, and the holistic development of our students. We aim to create a community where every student feels valued, supported, and empowered to pursue their dreams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision; 