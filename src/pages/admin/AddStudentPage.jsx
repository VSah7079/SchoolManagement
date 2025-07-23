import React, { useState } from 'react';

const AddStudentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: 'male',
    photo: null,
    class: '',
    rollNo: '',
    section: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFormData((prevState) => ({ ...prevState, [name]: files[0] }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
    setFormData({
      name: '', dob: '', gender: 'male', photo: null, class: '', rollNo: '', section: '', parentName: '', parentPhone: '', parentEmail: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-16 font-sans">
      <div className="relative overflow-hidden mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-400 opacity-90"></div>
        <div className="relative z-10 flex flex-col items-center px-8 py-12">
          <span className="inline-block bg-white/30 backdrop-blur-lg rounded-full p-6 shadow-lg mb-4">
            <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 drop-shadow">Add New Student</h1>
          <p className="text-white/90 text-lg">Register a new student with all details.</p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto -mt-16 z-20 relative">
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 p-10 rounded-3xl shadow-2xl animate-fade-in-glass">
          <form onSubmit={handleSubmit}>
            <div className="space-y-8 divide-y divide-gray-200">
              <div>
                <h3 className="text-lg leading-6 font-bold text-blue-700">Personal Information</h3>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full border border-blue-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"/>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input type="date" name="dob" id="dob" required value={formData.dob} onChange={handleChange} className="mt-1 block w-full border border-blue-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"/>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                    <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="mt-1 block w-full border border-blue-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo</label>
                    <input type="file" name="photo" id="photo" onChange={handleChange} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-lg leading-6 font-bold text-blue-700">Academic Information</h3>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-2">
                    <label htmlFor="class" className="block text-sm font-medium text-gray-700">Class</label>
                    <input type="text" name="class" id="class" required value={formData.class} onChange={handleChange} className="mt-1 block w-full border border-blue-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"/>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="rollNo" className="block text-sm font-medium text-gray-700">Roll No.</label>
                    <input type="text" name="rollNo" id="rollNo" required value={formData.rollNo} onChange={handleChange} className="mt-1 block w-full border border-blue-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"/>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="section" className="block text-sm font-medium text-gray-700">Section</label>
                    <input type="text" name="section" id="section" required value={formData.section} onChange={handleChange} className="mt-1 block w-full border border-blue-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"/>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-lg leading-6 font-bold text-blue-700">Parent Information</h3>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">Parent's Name</label>
                    <input type="text" name="parentName" id="parentName" required value={formData.parentName} onChange={handleChange} className="mt-1 block w-full border border-blue-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"/>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700">Parent's Phone</label>
                    <input type="tel" name="parentPhone" id="parentPhone" required value={formData.parentPhone} onChange={handleChange} className="mt-1 block w-full border border-blue-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"/>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-700">Parent's Email</label>
                    <input type="email" name="parentEmail" id="parentEmail" required value={formData.parentEmail} onChange={handleChange} className="mt-1 block w-full border border-blue-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-5 flex justify-end">
              <button type="submit" className="ml-3 inline-flex justify-center py-3 px-8 border border-transparent shadow-lg text-lg font-bold rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 transition-all">Save Student</button>
            </div>
          </form>
          {success && (
            <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in-glass z-50">
              Student added successfully!
            </div>
          )}
        </div>
      </div>
      <style>{`
        .animate-fade-in-glass { animation: fadeInGlass 0.8s; }
        @keyframes fadeInGlass { from { opacity: 0; transform: translateY(32px) scale(0.98); } to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
};

export default AddStudentPage; 