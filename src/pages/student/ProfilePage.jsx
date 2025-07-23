import React, { useState, useEffect, useRef } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBook, FaIdCard, FaUserShield, FaPencilAlt, FaSave, FaTimes, FaCamera } from 'react-icons/fa';

const StudentProfilePage = () => {
  // Mock student data, used as initial state
  const initialStudentData = {
    name: 'John Doe',
    studentId: 'S12345',
    class: '10th Grade - Section A',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    address: '123 Main Street, Anytown, USA',
    enrollmentDate: '2022-08-15',
    emergencyContact: {
      name: 'Jane Doe',
      relation: 'Mother',
      phone: '+1 987 654 321',
    },
    profilePic: 'https://via.placeholder.com/150',
    coverPic: 'https://via.placeholder.com/1200x300',
  };

  const [studentData, setStudentData] = useState(initialStudentData);
  const [isEditing, setIsEditing] = useState(false);
  const [animate, setAnimate] = useState(false);
  
  const profilePicInputRef = useRef(null);
  const coverPicInputRef = useRef(null);

  useEffect(() => {
    // Trigger animations on component mount
    setAnimate(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setStudentData((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }));
    } else {
      setStudentData((prev) => ({ ...prev, [name]: value }));
    }
  };
  
  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStudentData((prev) => ({ ...prev, [field]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log('Updated data:', studentData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setStudentData(initialStudentData);
    setIsEditing(false);
  };

  const InfoField = ({ icon, label, value, name, onChange, isEditing, isEditable = true }) => (
    <div className="flex items-start py-3">
      <div className="text-blue-600 mr-4 w-5 flex-shrink-0 pt-1">{icon}</div>
      <div className="flex-grow">
        <label className="text-sm font-medium text-gray-500">{label}</label>
        {isEditing && isEditable ? (
          <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition"
          />
        ) : (
          <p className="text-lg font-semibold text-gray-900">{value}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hidden File Inputs */}
      <input
        type="file"
        ref={profilePicInputRef}
        onChange={(e) => handleFileChange(e, 'profilePic')}
        className="hidden"
        accept="image/*"
      />
      <input
        type="file"
        ref={coverPicInputRef}
        onChange={(e) => handleFileChange(e, 'coverPic')}
        className="hidden"
        accept="image/*"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <div className={`bg-white rounded-2xl shadow-xl mb-8 transition-all duration-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="h-56 rounded-t-2xl bg-cover bg-center relative">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${studentData.coverPic})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            {isEditing && (
              <button 
                onClick={() => coverPicInputRef.current.click()}
                className="absolute top-4 right-4 bg-white/90 text-gray-800 p-2 rounded-full hover:bg-white transition-colors flex items-center shadow-md"
              >
                <FaCamera className="mr-2" /> Change Cover
              </button>
            )}
          </div>
          <div className="p-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-24 sm:-mt-28">
              <div className="relative group">
                <img
                  src={studentData.profilePic}
                  alt="Profile"
                  className="w-40 h-40 rounded-full border-8 border-white shadow-lg"
                />
                {isEditing && (
                  <button 
                    onClick={() => profilePicInputRef.current.click()}
                    className="absolute inset-0 bg-black/50 text-white flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <FaPencilAlt size={24} />
                  </button>
                )}
              </div>
              <div className="ml-0 sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={studentData.name}
                    onChange={handleInputChange}
                    className="text-3xl font-bold text-gray-900 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none bg-transparent"
                  />
                ) : (
                  <h2 className="text-4xl font-bold text-gray-900">{studentData.name}</h2>
                )}
                <p className="text-gray-500 text-lg">{studentData.class}</p>
              </div>
              <div className="ml-0 sm:ml-auto mt-6 sm:mt-0 flex items-center gap-4">
                {isEditing ? (
                  <>
                    <button onClick={handleSave} className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 flex items-center transition-transform transform hover:scale-105 shadow-md">
                      <FaSave className="mr-2" /> Save
                    </button>
                    <button onClick={handleCancel} className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 flex items-center transition-transform transform hover:scale-105 shadow-md">
                      <FaTimes className="mr-2" /> Cancel
                    </button>
                  </>
                ) : (
                  <button onClick={() => setIsEditing(true)} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center transition-transform transform hover:scale-105 shadow-md">
                    <FaPencilAlt className="mr-2" /> Update Profile
                  </button>
                )}
              </div>
            </div>
          </div>
              </div>

        {/* Profile Details */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-500 delay-200 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Personal Information */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-xl transition-shadow hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center"><FaUser className="mr-3 text-blue-500" /> Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <InfoField icon={<FaIdCard />} label="Student ID" value={studentData.studentId} isEditing={false} />
              <InfoField icon={<FaEnvelope />} label="Email Address" value={studentData.email} name="email" onChange={handleInputChange} isEditing={isEditing} />
              <InfoField icon={<FaPhone />} label="Phone Number" value={studentData.phone} name="phone" onChange={handleInputChange} isEditing={isEditing} />
              <InfoField icon={<FaMapMarkerAlt />} label="Mailing Address" value={studentData.address} name="address" onChange={handleInputChange} isEditing={isEditing} className="md:col-span-2" />
            </div>
          </div>

          {/* Academic and Emergency Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl transition-shadow hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center"><FaBook className="mr-3 text-blue-500" /> Academic Information</h3>
              <InfoField icon={<FaBook />} label="Enrolled On" value={studentData.enrollmentDate} isEditing={false} />
              </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl transition-shadow hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center"><FaUserShield className="mr-3 text-blue-500" /> Emergency Contact</h3>
              <InfoField icon={<FaUser />} label="Name" value={studentData.emergencyContact.name} name="emergencyContact.name" onChange={handleInputChange} isEditing={isEditing} />
              <InfoField icon={<FaUserShield />} label="Relation" value={studentData.emergencyContact.relation} name="emergencyContact.relation" onChange={handleInputChange} isEditing={isEditing} />
              <InfoField icon={<FaPhone />} label="Phone" value={studentData.emergencyContact.phone} name="emergencyContact.phone" onChange={handleInputChange} isEditing={isEditing} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfilePage; 