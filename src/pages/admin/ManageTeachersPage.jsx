import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiEdit, FiTrash2, FiUserPlus, FiX } from 'react-icons/fi';

const initialTeachers = [
  { id: 1, name: 'Dr. Evelyn Reed', subjects: 'Physics, Chemistry', experience: '15 years', qualification: 'Ph.D. in Physics' },
  { id: 2, name: 'Mr. David Chen', subjects: 'Mathematics', experience: '12 years', qualification: 'M.Sc. in Mathematics' },
  { id: 3, name: 'Ms. Sarah Johnson', subjects: 'English, History', experience: '10 years', qualification: 'M.A. in English' },
];

const ManageTeachersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [modal, setModal] = useState(null); // { type: 'view'|'edit'|'delete', teacher: {...} }
  const [editData, setEditData] = useState(null);
  const [teacherList, setTeacherList] = useState(initialTeachers);

  const filteredTeachers = teacherList.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.subjects.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (type, teacher) => {
    setModal({ type, teacher });
    if (type === 'edit') setEditData({ ...teacher });
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
    setTeacherList((prev) => prev.map(t => t.id === editData.id ? { ...editData } : t));
    closeModal();
  };
  const handleDelete = () => {
    setTeacherList((prev) => prev.filter(t => t.id !== modal.teacher.id));
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-16 font-sans">
      <div className="relative overflow-hidden mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-400 opacity-90"></div>
        <div className="relative z-10 flex flex-col items-center px-8 py-12">
          <span className="inline-block bg-white/30 backdrop-blur-lg rounded-full p-6 shadow-lg mb-4">
            <FiUserPlus className="w-10 h-10 text-blue-600" />
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 drop-shadow">Manage Teachers</h1>
          <p className="text-white/90 text-lg">View, edit, or remove teachers from the system.</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto -mt-16 z-20 relative">
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-2xl animate-fade-in-glass">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Teacher List</h2>
            <Link to="/admin/teachers/add" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-2 px-5 rounded-lg shadow hover:from-blue-700 hover:to-indigo-600 font-semibold transition-all">
              <FiUserPlus className="w-5 h-5" /> Add Teacher
            </Link>
          </div>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by name or subject..."
              className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white/70"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Subjects</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Experience</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Qualification</th>
                  <th className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTeachers.map((teacher) => (
                  <tr key={teacher.id} className="hover:bg-blue-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{teacher.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{teacher.subjects}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{teacher.experience}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{teacher.qualification}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex gap-2 justify-end">
                      <button className="p-2 rounded-full hover:bg-blue-100 text-blue-600" title="View" onClick={() => openModal('view', teacher)}><FiEye className="w-5 h-5" /></button>
                      <button className="p-2 rounded-full hover:bg-yellow-100 text-yellow-600" title="Edit" onClick={() => openModal('edit', teacher)}><FiEdit className="w-5 h-5" /></button>
                      <button className="p-2 rounded-full hover:bg-red-100 text-red-600" title="Delete" onClick={() => openModal('delete', teacher)}><FiTrash2 className="w-5 h-5" /></button>
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
                <h3 className="text-xl font-bold mb-4 text-blue-700">Teacher Details</h3>
                <div className="space-y-2">
                  <div><span className="font-semibold">Name:</span> {modal.teacher.name}</div>
                  <div><span className="font-semibold">Subjects:</span> {modal.teacher.subjects}</div>
                  <div><span className="font-semibold">Experience:</span> {modal.teacher.experience}</div>
                  <div><span className="font-semibold">Qualification:</span> {modal.teacher.qualification}</div>
                </div>
              </div>
            )}
            {modal.type === 'edit' && editData && (
              <div>
                <h3 className="text-xl font-bold mb-4 text-yellow-600">Edit Teacher</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input className="w-full border border-gray-300 rounded-lg p-2" name="name" value={editData.name} onChange={handleEditChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Subjects</label>
                    <input className="w-full border border-gray-300 rounded-lg p-2" name="subjects" value={editData.subjects} onChange={handleEditChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Experience</label>
                    <input className="w-full border border-gray-300 rounded-lg p-2" name="experience" value={editData.experience} onChange={handleEditChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Qualification</label>
                    <input className="w-full border border-gray-300 rounded-lg p-2" name="qualification" value={editData.qualification} onChange={handleEditChange} />
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
                <h3 className="text-xl font-bold mb-4 text-red-600">Delete Teacher</h3>
                <p>Are you sure you want to delete <span className="font-semibold">{modal.teacher.name}</span>?</p>
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

export default ManageTeachersPage; 