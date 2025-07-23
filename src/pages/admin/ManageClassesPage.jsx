import React, { useState } from 'react';
import { FiEye, FiEdit, FiTrash2, FiLayers, FiX } from 'react-icons/fi';

const initialClasses = [
  { id: 1, name: '10A', teacher: 'Mr. Sharma', students: 32 },
  { id: 2, name: '9B', teacher: 'Ms. Gupta', students: 28 },
  { id: 3, name: '11C', teacher: 'Mrs. Singh', students: 30 },
];

const ManageClassesPage = () => {
  const [modal, setModal] = useState(null); // { type: 'view'|'edit'|'delete', cls: {...} }
  const [editData, setEditData] = useState(null);
  const [classList, setClassList] = useState(initialClasses);

  const openModal = (type, cls) => {
    setModal({ type, cls });
    if (type === 'edit') setEditData({ ...cls });
  };
  const closeModal = () => {
    setModal(null);
    setEditData(null);
  };
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };
  const handleEditSave = () => {
    setClassList((prev) => prev.map(c => c.id === editData.id ? { ...editData, students: Number(editData.students) } : c));
    closeModal();
  };
  const handleDelete = () => {
    setClassList((prev) => prev.filter(c => c.id !== modal.cls.id));
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-16 font-sans">
      <div className="relative overflow-hidden mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-400 opacity-90"></div>
        <div className="relative z-10 flex flex-col items-center px-8 py-12">
          <span className="inline-block bg-white/30 backdrop-blur-lg rounded-full p-6 shadow-lg mb-4">
            <FiLayers className="w-10 h-10 text-blue-600" />
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 drop-shadow">Manage Classes</h1>
          <p className="text-white/90 text-lg">View, edit, or remove classes from the system.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto -mt-16 z-20 relative">
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-2xl animate-fade-in-glass">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Class List</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Class Name</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Class Teacher</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Total Students</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {classList.map(cls => (
                  <tr key={cls.id} className="hover:bg-blue-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{cls.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{cls.teacher}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{cls.students}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm flex gap-2 justify-start">
                      <button className="p-2 rounded-full hover:bg-blue-100 text-blue-600" title="View" onClick={() => openModal('view', cls)}><FiEye className="w-5 h-5" /></button>
                      <button className="p-2 rounded-full hover:bg-yellow-100 text-yellow-600" title="Edit" onClick={() => openModal('edit', cls)}><FiEdit className="w-5 h-5" /></button>
                      <button className="p-2 rounded-full hover:bg-red-100 text-red-600" title="Delete" onClick={() => openModal('delete', cls)}><FiTrash2 className="w-5 h-5" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Modals */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative animate-fade-in-glass">
            <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" onClick={closeModal}><FiX className="w-6 h-6" /></button>
            {modal.type === 'view' && (
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-700">Class Details</h3>
                <div className="space-y-2">
                  <div><span className="font-semibold">Class Name:</span> {modal.cls.name}</div>
                  <div><span className="font-semibold">Class Teacher:</span> {modal.cls.teacher}</div>
                  <div><span className="font-semibold">Total Students:</span> {modal.cls.students}</div>
                </div>
              </div>
            )}
            {modal.type === 'edit' && editData && (
              <div>
                <h3 className="text-xl font-bold mb-4 text-yellow-600">Edit Class</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Class Name</label>
                    <input className="w-full border border-gray-300 rounded-lg p-2" name="name" value={editData.name} onChange={handleEditChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Class Teacher</label>
                    <input className="w-full border border-gray-300 rounded-lg p-2" name="teacher" value={editData.teacher} onChange={handleEditChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Total Students</label>
                    <input className="w-full border border-gray-300 rounded-lg p-2" name="students" type="number" value={editData.students} onChange={handleEditChange} />
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300" onClick={closeModal}>Cancel</button>
                    <button className="px-4 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600" onClick={handleEditSave}>Save</button>
                  </div>
                </div>
              </div>
            )}
            {modal.type === 'delete' && (
              <div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Delete Class</h3>
                <p>Are you sure you want to delete <span className="font-semibold">{modal.cls.name}</span>?</p>
                <div className="flex justify-end gap-2 mt-6">
                  <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300" onClick={closeModal}>Cancel</button>
                  <button className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600" onClick={handleDelete}>Delete</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <style>{`
        .animate-fade-in-glass { animation: fadeInGlass 0.8s; }
        @keyframes fadeInGlass { from { opacity: 0; transform: translateY(32px) scale(0.98); } to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
};

export default ManageClassesPage; 