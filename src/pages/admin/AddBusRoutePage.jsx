import React, { useState } from 'react';
import { FiTruck, FiMap, FiUser } from 'react-icons/fi';

const AddBusRoutePage = () => {
  const [formData, setFormData] = useState({
    busNo: '',
    routeName: '',
    driverName: '',
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
    console.log('New Bus Route Data:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-green-50 p-0">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-green-400 py-10 mb-10 shadow-lg rounded-b-3xl">
        <div className="max-w-2xl mx-auto flex items-center gap-4 px-6">
          <div className="bg-white bg-opacity-20 rounded-full p-4 shadow-lg">
            <FiTruck className="text-4xl text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight mb-1">Add Bus Route</h1>
            <p className="text-lg text-blue-100 font-medium">Add a new bus route for your school</p>
          </div>
        </div>
      </div>
      {/* Form Card */}
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl -mt-16 relative z-10">
        {success && (
          <div className="flex items-center justify-center mb-6 animate-bounce">
            <span className="text-green-700 font-bold text-lg">Bus route added successfully!</span>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-7">
          <div>
            <label htmlFor="busNo" className="block text-sm font-semibold text-gray-700 mb-1 flex items-center">
              <FiTruck className="mr-2 text-blue-500" /> Bus Number
            </label>
            <input type="text" name="busNo" id="busNo" required value={formData.busNo} onChange={handleChange} className="mt-1 block w-full border border-blue-200 rounded-lg shadow-sm py-3 px-4 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"/>
          </div>
          <div>
            <label htmlFor="routeName" className="block text-sm font-semibold text-gray-700 mb-1 flex items-center">
              <FiMap className="mr-2 text-green-500" /> Route Name
            </label>
            <input type="text" name="routeName" id="routeName" required value={formData.routeName} onChange={handleChange} className="mt-1 block w-full border border-green-200 rounded-lg shadow-sm py-3 px-4 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"/>
          </div>
          <div>
            <label htmlFor="driverName" className="block text-sm font-semibold text-gray-700 mb-1 flex items-center">
              <FiUser className="mr-2 text-indigo-500" /> Driver Name
            </label>
            <input type="text" name="driverName" id="driverName" required value={formData.driverName} onChange={handleChange} className="mt-1 block w-full border border-indigo-200 rounded-lg shadow-sm py-3 px-4 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"/>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="ml-3 inline-flex justify-center py-3 px-8 border border-transparent shadow-md text-base font-bold rounded-lg text-white bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 transition">
              Add Route
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBusRoutePage; 