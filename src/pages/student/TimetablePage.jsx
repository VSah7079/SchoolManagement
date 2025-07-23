import React, { useEffect, useState } from 'react';
import { FiClock, FiUser, FiBookOpen, FiCoffee } from 'react-icons/fi';

const StudentTimetablePage = () => {
  // Mock timetable data
  const timetable = {
    Monday: [
      { time: '09:00 - 10:00', subject: 'Mathematics', teacher: 'Mr. Smith' },
      { time: '10:00 - 11:00', subject: 'Science', teacher: 'Ms. Jones' },
      { time: '11:00 - 12:00', subject: 'History', teacher: 'Mr. Brown' },
      { time: '12:00 - 01:00', subject: 'Lunch Break', teacher: '' },
      { time: '01:00 - 02:00', subject: 'English', teacher: 'Ms. Davis' },
    ],
    Tuesday: [
      { time: '09:00 - 10:00', subject: 'Science', teacher: 'Ms. Jones' },
      { time: '10:00 - 11:00', subject: 'English', teacher: 'Ms. Davis' },
      { time: '11:00 - 12:00', subject: 'Physical Education', teacher: 'Mr. Wilson' },
      { time: '12:00 - 01:00', subject: 'Lunch Break', teacher: '' },
      { time: '01:00 - 02:00', subject: 'Mathematics', teacher: 'Mr. Smith' },
    ],
    Wednesday: [],
    Thursday: [],
    Friday: [],
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  // Animation state
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-16">
      {/* Header */}
      <div className="relative overflow-hidden mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 opacity-80"></div>
        <div className="relative z-10 flex items-center px-8 py-12">
          <FiClock className="text-white text-5xl mr-6 drop-shadow-lg" />
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 drop-shadow">My Timetable</h1>
            <p className="text-white/90 text-lg">Plan your week and never miss a class.</p>
          </div>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto px-4 transition-all duration-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {days.map(day => (
            <div key={day} className="relative bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center group hover:shadow-2xl transition-shadow">
              {/* Floating Day Badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-blue-500 to-blue-300 px-6 py-2 rounded-full shadow-lg text-white font-bold text-lg tracking-wide border-4 border-white group-hover:scale-105 transition-transform">
                {day}
              </div>
              <div className="mt-8 w-full">
                {timetable[day] && timetable[day].length > 0 ? (
                  <div className="space-y-4">
                    {timetable[day].map((slot, index) => (
                      <div
                        key={index}
                        className={`flex flex-col items-start p-4 rounded-xl w-full shadow-sm border-l-4 ${slot.subject === 'Lunch Break' ? 'bg-yellow-50 border-yellow-400' : 'bg-blue-50 border-blue-400'} animate-fadeIn`}
                      >
                        <div className="flex items-center mb-1">
                          {slot.subject === 'Lunch Break' ? (
                            <FiCoffee className="text-yellow-500 mr-2" />
                          ) : (
                            <FiBookOpen className="text-blue-500 mr-2" />
                          )}
                          <span className={`font-bold ${slot.subject === 'Lunch Break' ? 'text-yellow-700' : 'text-blue-700'}`}>{slot.subject}</span>
                        </div>
                        <div className="text-gray-600 text-sm mb-1">{slot.time}</div>
                        {slot.teacher && (
                          <div className="flex items-center text-xs text-gray-500"><FiUser className="mr-1" />{slot.teacher}</div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-gray-400 py-8 font-medium">No classes</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentTimetablePage; 