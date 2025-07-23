import React, { useState } from 'react';
import { FiEdit3, FiBookOpen, FiUsers, FiCalendar, FiList, FiCheckCircle } from 'react-icons/fi';

const CreateExamPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    class: '10A',
    date: '',
    subjects: '',
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
    console.log('New Exam Data:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-green-50 p-0">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-green-400 py-10 mb-10 shadow-lg rounded-b-3xl">
        <div className="max-w-2xl mx-auto flex items-center gap-4 px-6">
          <div className="bg-white bg-opacity-20 rounded-full p-4 shadow-lg">
            <FiEdit3 className="text-4xl text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight mb-1">Create New Exam</h1>
            <p className="text-lg text-blue-100 font-medium">Schedule a new exam for your classes</p>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl -mt-16 relative z-10">
        {success && (
          <div className="flex items-center justify-center mb-6 animate-bounce">
            <FiCheckCircle className="text-green-500 text-3xl mr-2" />
            <span className="text-green-700 font-bold text-lg">Exam created successfully!</span>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-7">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1 flex items-center">
              <FiBookOpen className="mr-2 text-blue-500" /> Exam Name
            </label>
            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full border border-blue-200 rounded-lg shadow-sm py-3 px-4 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition" placeholder="e.g. Mid Term Exam"/>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="class" className="block text-sm font-semibold text-gray-700 mb-1 flex items-center">
                <FiUsers className="mr-2 text-green-500" /> Class
              </label>
              <select id="class" name="class" value={formData.class} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-blue-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 transition">
                <option>10A</option>
                <option>9B</option>
                <option>11C</option>
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-1 flex items-center">
                <FiCalendar className="mr-2 text-yellow-500" /> Date
              </label>
              <input type="date" id="date" name="date" required value={formData.date} onChange={handleChange} className="mt-1 block w-full py-3 px-4 border border-blue-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"/>
            </div>
          </div>
          <div>
            <label htmlFor="subjects" className="block text-sm font-semibold text-gray-700 mb-1 flex items-center">
              <FiList className="mr-2 text-indigo-500" /> Subjects (comma-separated)
            </label>
            <input type="text" name="subjects" id="subjects" required value={formData.subjects} onChange={handleChange} className="mt-1 block w-full border border-blue-200 rounded-lg shadow-sm py-3 px-4 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition" placeholder="e.g. Math, Science, English"/>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="ml-3 inline-flex justify-center py-3 px-8 border border-transparent shadow-md text-base font-bold rounded-lg text-white bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 transition">
              Create Exam
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateExamPage; 