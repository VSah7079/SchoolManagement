import React from 'react';
import Banner from '@/components/home/Banner';
import AboutSchool from '@/components/home/AboutSchool';
import Courses from '@/components/home/Courses';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/Testimonials';
import ContactSection from '@/components/home/ContactSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Banner />
      <AboutSchool />
      <Courses />
      <Stats />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default HomePage; 