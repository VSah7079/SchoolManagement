import React, { useEffect, useRef } from 'react';
import { FiPlay, FiAward, FiUsers, FiBookOpen } from 'react-icons/fi';
import gsap from 'gsap';

const Banner = () => {
  const heroRef = useRef(null);
  const btnRef = useRef(null);
  const statsRef = useRef([]);
  const svgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      btnRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.7, delay: 0.7, ease: 'back.out(1.7)' }
    );
    gsap.fromTo(
      statsRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, delay: 1, ease: 'power2.out' }
    );
    // Floating SVG animation
    gsap.to(svgRef.current, {
      y: 20,
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left" ref={heroRef}>
              <div className="inline-flex items-center px-4 py-2 bg-gray bg-opacity-20 rounded-full text-sm font-medium mb-6">
                <FiAward className="mr-2" />
                Excellence in Education Since 1995
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Shaping Minds, 
                <span className="block text-yellow-300">Building Futures</span>
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Join our prestigious institution where academic excellence meets character development. 
                We provide world-class education with modern facilities and experienced educators.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" ref={btnRef}>
                <a 
                  href="/admission" 
                  className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Apply Now
                </a>
                <button className="flex items-center justify-center bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-300">
                  <FiPlay className="mr-2" />
                  Watch Video
                </button>
              </div>
            </div>
            
            {/* Right Content - Stats Only (no image) */}
            <div className="relative flex flex-col items-center justify-center text-black">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 w-full">
                {[
                  { icon: <FiUsers className="text-4xl mx-auto mb-3 text-yellow-500 " />, value: '2,500+', label: 'Happy Students' },
                  { icon: <FiBookOpen className="text-4xl mx-auto mb-3 text-yellow-500" />, value: '150+', label: 'Expert Teachers' },
                  { icon: <FiAward className="text-4xl mx-auto mb-3 text-yellow-500" />, value: '95%', label: 'Success Rate' },
                  { icon: <FiPlay className="text-4xl mx-auto mb-3 text-yellow-500" />, value: '25+', label: 'Years Experience' },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    ref={el => statsRef.current[i] = el}
                    className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center"
                  >
                    {stat.icon}
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner; 