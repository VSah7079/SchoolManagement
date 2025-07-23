import React, { useState } from 'react';

const CreateClassPage = () => {
  const [className, setClassName] = useState('');
  const [teacher, setTeacher] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
    setClassName('');
    setTeacher('');
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Create Class</h1>
      <div className="bg-white p-8 rounded-lg shadow max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Class Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" value={className} onChange={e => setClassName(e.target.value)} required placeholder="e.g. 10A" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Class Teacher</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" value={teacher} onChange={e => setTeacher(e.target.value)} required placeholder="e.g. Mr. Sharma" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Create Class</button>
          </div>
        </form>
        {success && <div className="mt-4 text-green-600 font-semibold">Class created successfully!</div>}
      </div>
    </>
  );
};

export default CreateClassPage; 