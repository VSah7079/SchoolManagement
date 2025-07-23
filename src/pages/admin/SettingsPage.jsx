import React, { useState } from 'react';
import { FiSettings, FiUser, FiMail, FiLock, FiMoon, FiBell, FiImage } from 'react-icons/fi';

const SettingsPage = () => {
  // School Info
  const [schoolInfo, setSchoolInfo] = useState({
    name: 'Springfield Public School',
    address: '123 Main St, Springfield',
    contact: '9876543210',
    logo: null,
  });
  const [schoolSaved, setSchoolSaved] = useState(false);

  // Admin Profile
  const [adminProfile, setAdminProfile] = useState({
    name: 'Admin User',
    email: 'admin@school.com',
    password: '',
  });
  const [adminSaved, setAdminSaved] = useState(false);

  // System Preferences
  const [preferences, setPreferences] = useState({
    darkMode: false,
    notifications: true,
  });
  const [prefSaved, setPrefSaved] = useState(false);

  // Handlers
  const handleSchoolChange = (e) => {
    const { name, value, files } = e.target;
    setSchoolInfo((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };
  const handleSchoolSave = (e) => {
    e.preventDefault();
    setSchoolSaved(true);
    setTimeout(() => setSchoolSaved(false), 2000);
  };

  const handleAdminChange = (e) => {
    const { name, value } = e.target;
    setAdminProfile((prev) => ({ ...prev, [name]: value }));
  };
  const handleAdminSave = (e) => {
    e.preventDefault();
    setAdminSaved(true);
    setTimeout(() => setAdminSaved(false), 2000);
  };

  const handlePrefChange = (e) => {
    const { name, checked } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: checked }));
  };
  const handlePrefSave = (e) => {
    e.preventDefault();
    setPrefSaved(true);
    setTimeout(() => setPrefSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-green-50 p-0">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-green-400 py-10 mb-10 shadow-lg rounded-b-3xl">
        <div className="max-w-2xl mx-auto flex items-center gap-4 px-6">
          <div className="bg-white bg-opacity-20 rounded-full p-4 shadow-lg">
            <FiSettings className="text-4xl text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight mb-1">Settings</h1>
            <p className="text-lg text-blue-100 font-medium">Update your school, admin, or system settings here</p>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-2xl -mt-16 relative z-10 space-y-10">
        {/* School Info */}
        <form onSubmit={handleSchoolSave} className="space-y-5">
          <h2 className="text-xl font-bold text-blue-700 flex items-center gap-2 mb-2"><FiImage /> School Information</h2>
          {schoolSaved && <div className="text-green-700 font-semibold bg-green-50 border border-green-200 rounded py-2 px-4">School info saved!</div>}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
            <input name="name" value={schoolInfo.name} onChange={handleSchoolChange} className="w-full border border-blue-200 rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input name="address" value={schoolInfo.address} onChange={handleSchoolChange} className="w-full border border-blue-200 rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
            <input name="contact" value={schoolInfo.contact} onChange={handleSchoolChange} className="w-full border border-blue-200 rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">School Logo</label>
            <input name="logo" type="file" accept="image/*" onChange={handleSchoolChange} className="w-full" />
            {schoolInfo.logo && <div className="mt-2"><img src={URL.createObjectURL(schoolInfo.logo)} alt="Logo Preview" className="h-16" /></div>}
          </div>
          <div className="flex justify-end">
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">Save</button>
          </div>
        </form>
        {/* Admin Profile */}
        <form onSubmit={handleAdminSave} className="space-y-5">
          <h2 className="text-xl font-bold text-indigo-700 flex items-center gap-2 mb-2"><FiUser /> Admin Profile</h2>
          {adminSaved && <div className="text-green-700 font-semibold bg-green-50 border border-green-200 rounded py-2 px-4">Profile saved!</div>}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input name="name" value={adminProfile.name} onChange={handleAdminChange} className="w-full border border-indigo-200 rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input name="email" type="email" value={adminProfile.email} onChange={handleAdminChange} className="w-full border border-indigo-200 rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Change Password</label>
            <input name="password" type="password" value={adminProfile.password} onChange={handleAdminChange} className="w-full border border-indigo-200 rounded-lg px-3 py-2" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition">Save</button>
          </div>
        </form>
        {/* System Preferences */}
        <form onSubmit={handlePrefSave} className="space-y-5">
          <h2 className="text-xl font-bold text-green-700 flex items-center gap-2 mb-2"><FiMoon /> System Preferences</h2>
          {prefSaved && <div className="text-green-700 font-semibold bg-green-50 border border-green-200 rounded py-2 px-4">Preferences saved!</div>}
          <div className="flex items-center gap-3">
            <input id="darkMode" name="darkMode" type="checkbox" checked={preferences.darkMode} onChange={handlePrefChange} className="h-5 w-5 text-green-600 rounded" />
            <label htmlFor="darkMode" className="text-gray-700 font-medium flex items-center gap-1"><FiMoon /> Dark Mode</label>
          </div>
          <div className="flex items-center gap-3">
            <input id="notifications" name="notifications" type="checkbox" checked={preferences.notifications} onChange={handlePrefChange} className="h-5 w-5 text-green-600 rounded" />
            <label htmlFor="notifications" className="text-gray-700 font-medium flex items-center gap-1"><FiBell /> Enable Notifications</label>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage; 