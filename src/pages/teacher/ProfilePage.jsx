import React, { useEffect, useState, useRef } from 'react';
import { FiUser, FiMail, FiPhone, FiBook, FiBriefcase, FiAward, FiEdit2 } from 'react-icons/fi';

const TeacherProfilePage = () => {
  // Mock teacher data
  const initialTeacher = {
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@school.edu',
    phone: '+1 (555) 123-4567',
    subject: 'Mathematics',
    experience: '8 years',
    education: 'Ph.D. in Mathematics',
    achievements: ['Teacher of the Year 2022', 'Excellence in Teaching Award 2021'],
    bio: 'Passionate mathematics teacher with expertise in algebra and calculus. Committed to making complex concepts accessible to all students.',
    classes: ['Grade 10 Algebra', 'Grade 11 Calculus', 'Grade 12 Advanced Math'],
    profilePic: 'https://randomuser.me/api/portraits/women/44.jpg',
  };

  const [teacher, setTeacher] = useState(initialTeacher);
  const [animate, setAnimate] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => { setAnimate(true); }, []);

  const handleProfilePicClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTeacher((prev) => ({ ...prev, profilePic: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-16 font-sans">
      {/* Hidden file input for profile pic */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="hidden"
        onChange={handleProfilePicChange}
      />
      {/* Header */}
      <div className="relative overflow-hidden mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-400 opacity-80"></div>
        <div className="relative z-10 flex flex-col sm:flex-row items-center px-8 py-12">
          <div className="relative mb-4 sm:mb-0 sm:mr-8">
            <img
              src={teacher.profilePic}
              alt="Profile"
              className="w-36 h-36 rounded-full border-8 border-white shadow-lg object-cover"
            />
            <button
              className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
              title="Edit Profile Photo"
              onClick={handleProfilePicClick}
            >
              <FiEdit2 />
            </button>
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-extrabold text-white mb-2 drop-shadow">{teacher.name}</h1>
            <p className="text-white/90 text-lg font-medium mb-1">{teacher.subject} Teacher</p>
            <span className="inline-block bg-white/80 text-blue-700 font-semibold px-4 py-1 rounded-full shadow">{teacher.education}</span>
          </div>
        </div>
      </div>

      <div className={`max-w-4xl mx-auto px-4 space-y-8 transition-all duration-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>  
        {/* Contact Information */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center"><FiMail className="mr-3" /> Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3 text-lg">
              <FiMail className="text-blue-400" />
              <span className="text-gray-700">{teacher.email}</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <FiPhone className="text-blue-400" />
              <span className="text-gray-700">{teacher.phone}</span>
            </div>
          </div>
        </div>

        {/* Professional Information */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center"><FiBook className="mr-3" /> Professional Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3 text-lg">
              <FiBook className="text-green-400" />
              <span className="text-gray-700">{teacher.education}</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <FiBriefcase className="text-green-400" />
              <span className="text-gray-700">{teacher.experience} experience</span>
            </div>
          </div>
        </div>

        {/* Current Classes */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center"><FiBook className="mr-3" /> Current Classes</h3>
          <div className="flex flex-wrap gap-3">
            {teacher.classes.map((className, index) => (
              <span key={index} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium shadow-sm">{className}</span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center"><FiAward className="mr-3 text-yellow-500" /> Achievements</h3>
          <ul className="space-y-3">
            {teacher.achievements.map((achievement, index) => (
              <li key={index} className="flex items-center gap-3 text-lg">
                <FiAward className="text-yellow-500" />
                <span className="text-gray-700">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bio */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center"><FiUser className="mr-3" /> About</h3>
          <p className="text-gray-700 leading-relaxed text-lg">{teacher.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfilePage; 