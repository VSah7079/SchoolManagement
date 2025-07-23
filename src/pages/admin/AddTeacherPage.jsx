import React, { useState } from 'react';
import { FiUserPlus } from 'react-icons/fi';

const AddTeacherPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    subjects: '',
    experience: '',
    qualification: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
    setFormData({ name: '', subjects: '', experience: '', qualification: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-16 font-sans">
      <div className="relative overflow-hidden mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-400 opacity-90"></div>
        <div className="relative z-10 flex flex-col items-center px-8 py-12">
          <span className="inline-block bg-white/30 backdrop-blur-lg rounded-full p-6 shadow-lg mb-4">
            <FiUserPlus className="w-10 h-10 text-blue-600" />
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 drop-shadow">Add New Teacher</h1>
          <p className="text-white/90 text-lg">Register a new teacher with all details.</p>
        </div>
      </div>
      <div className="max-w-xl mx-auto -mt-16 z-20 relative">
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 p-10 rounded-3xl shadow-2xl animate-fade-in-glass">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full border border-blue-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label htmlFor="subjects" className="block text-sm font-medium text-gray-700">Subjects (comma-separated)</label>
              <input type="text" name="subjects" id="subjects" required value={formData.subjects} onChange={handleChange} className="mt-1 block w-full border border-blue-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience</label>
              <input type="text" name="experience" id="experience" required value={formData.experience} onChange={handleChange} className="mt-1 block w-full border border-blue-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label htmlFor="qualification" className="block text-sm font-medium text-gray-700">Qualification</label>
              <input type="text" name="qualification" id="qualification" required value={formData.qualification} onChange={handleChange} className="mt-1 block w-full border border-blue-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="ml-3 inline-flex justify-center py-3 px-8 border border-transparent shadow-lg text-lg font-bold rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 transition-all">Save Teacher</button>
            </div>
          </form>
          {success && (
            <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in-glass z-50">
              Teacher added successfully!
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

export default AddTeacherPage; 