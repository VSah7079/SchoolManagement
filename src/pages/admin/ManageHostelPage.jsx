import React, { useState } from 'react';

const initialHostels = [
  { id: 1, name: 'Boys Hostel', warden: 'Mr. Kumar', capacity: 120, occupied: 98 },
  { id: 2, name: 'Girls Hostel', warden: 'Ms. Verma', capacity: 100, occupied: 87 },
];

const ManageHostelPage = () => {
  const [hostels, setHostels] = useState(initialHostels);
  const [viewHostel, setViewHostel] = useState(null);
  const [editHostel, setEditHostel] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', warden: '', capacity: '', occupied: '' });

  // View Modal
  const handleView = (hostel) => setViewHostel(hostel);
  const closeView = () => setViewHostel(null);

  // Edit Modal
  const handleEdit = (hostel) => {
    setEditHostel(hostel);
    setEditForm({ ...hostel });
  };
  const closeEdit = () => setEditHostel(null);
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleEditSave = () => {
    setHostels((prev) => prev.map(h => h.id === editHostel.id ? { ...editForm, id: editHostel.id } : h));
    setEditHostel(null);
  };

  // Delete
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this hostel?')) {
      setHostels((prev) => prev.filter(h => h.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-green-50 p-0">
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-green-400 py-10 mb-10 shadow-lg rounded-b-3xl">
        <div className="max-w-2xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-1">Manage Hostel</h1>
          <p className="text-lg text-blue-100 font-medium">Hostel Information & Actions</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-2xl -mt-16 relative z-10">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-[#e0e7ff]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-[#1e40af] uppercase tracking-wider">Hostel Name</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-[#1e40af] uppercase tracking-wider">Warden</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-[#1e40af] uppercase tracking-wider">Capacity</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-[#1e40af] uppercase tracking-wider">Occupied</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-[#1e40af] uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {hostels.map(hostel => (
              <tr key={hostel.id} className="hover:bg-[#f1f5f9] transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">{hostel.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{hostel.warden}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{hostel.capacity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{hostel.occupied}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition" onClick={() => handleView(hostel)}>View</button>
                  <button className="ml-2 px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition" onClick={() => handleEdit(hostel)}>Edit</button>
                  <button className="ml-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition" onClick={() => handleDelete(hostel.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* View Modal */}
      {viewHostel && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Hostel Details</h2>
            <div className="mb-2"><b>Name:</b> {viewHostel.name}</div>
            <div className="mb-2"><b>Warden:</b> {viewHostel.warden}</div>
            <div className="mb-2"><b>Capacity:</b> {viewHostel.capacity}</div>
            <div className="mb-2"><b>Occupied:</b> {viewHostel.occupied}</div>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" onClick={closeView}>Close</button>
          </div>
        </div>
      )}
      {/* Edit Modal */}
      {editHostel && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Edit Hostel</h2>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Hostel Name</label>
              <input name="name" value={editForm.name} onChange={handleEditChange} className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Warden</label>
              <input name="warden" value={editForm.warden} onChange={handleEditChange} className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
              <input name="capacity" type="number" value={editForm.capacity} onChange={handleEditChange} className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Occupied</label>
              <input name="occupied" type="number" value={editForm.occupied} onChange={handleEditChange} className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition" onClick={closeEdit}>Cancel</button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition" onClick={handleEditSave}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageHostelPage; 