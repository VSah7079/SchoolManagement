import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiEdit, FiTrash2, FiUserPlus, FiX } from 'react-icons/fi';

const students = [
  { id: 1, name: 'John Doe', class: '10A', roll: '23', parent: 'Jane Doe', status: 'Active' },
  { id: 2, name: 'Peter Jones', class: '9B', roll: '12', parent: 'Mary Jones', status: 'Active' },
  { id: 3, name: 'Samantha Smith', class: '10A', roll: '31', parent: 'Robert Smith', status: 'Inactive' },
  { id: 4, name: 'Luke Hobbs', class: '11C', roll: '5', parent: 'Laura Hobbs', status: 'Active' },
];

const ManageStudentsPage = () => {
  const [modal, setModal] = useState(null); // { type: 'view'|'edit'|'delete', student: {...} }
  const [editData, setEditData] = useState(null);
  const [studentList, setStudentList] = useState(students);

  const openModal = (type, student) => {
    setModal({ type, student });
    if (type === 'edit') setEditData({ ...student });
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
    setStudentList((prev) => prev.map(s => s.id === editData.id ? { ...editData } : s));
    closeModal();
  };
  const handleDelete = () => {
    setStudentList((prev) => prev.filter(s => s.id !== modal.student.id));
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
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 drop-shadow">Manage Students</h1>
          <p className="text-white/90 text-lg">View, edit, or remove students from the system.</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto -mt-16 z-20 relative">
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-2xl animate-fade-in-glass">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Student List</h2>
            <Link to="/admin/students/add" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-2 px-5 rounded-lg shadow hover:from-blue-700 hover:to-indigo-600 font-semibold transition-all">
              <FiUserPlus className="w-5 h-5" /> Add Student
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Class</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Roll No.</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Parent</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {studentList.map((student) => (
                  <tr key={student.id} className="hover:bg-blue-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{student.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{student.class}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{student.roll}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{student.parent}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${student.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex gap-2 justify-end">
                      <button className="p-2 rounded-full hover:bg-blue-100 text-blue-600" title="View" onClick={() => openModal('view', student)}><FiEye className="w-5 h-5" /></button>
                      <button className="p-2 rounded-full hover:bg-yellow-100 text-yellow-600" title="Edit" onClick={() => openModal('edit', student)}><FiEdit className="w-5 h-5" /></button>
                      <button className="p-2 rounded-full hover:bg-red-100 text-red-600" title="Delete" onClick={() => openModal('delete', student)}><FiTrash2 className="w-5 h-5" /></button>
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
                <h3 className="text-xl font-bold mb-4 text-blue-700">Student Details</h3>
                <div className="space-y-2">
                  <div><span className="font-semibold">Name:</span> {modal.student.name}</div>
                  <div><span className="font-semibold">Class:</span> {modal.student.class}</div>
                  <div><span className="font-semibold">Roll No.:</span> {modal.student.roll}</div>
                  <div><span className="font-semibold">Parent:</span> {modal.student.parent}</div>
                  <div><span className="font-semibold">Status:</span> {modal.student.status}</div>
                </div>
              </div>
            )}
            {modal.type === 'edit' && editData && (
              <div>
                <h3 className="text-xl font-bold mb-4 text-yellow-600">Edit Student</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input className="w-full border border-gray-300 rounded-lg p-2" name="name" value={editData.name} onChange={handleEditChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Class</label>
                    <input className="w-full border border-gray-300 rounded-lg p-2" name="class" value={editData.class} onChange={handleEditChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Roll No.</label>
                    <input className="w-full border border-gray-300 rounded-lg p-2" name="roll" value={editData.roll} onChange={handleEditChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Parent</label>
                    <input className="w-full border border-gray-300 rounded-lg p-2" name="parent" value={editData.parent} onChange={handleEditChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Status</label>
                    <select className="w-full border border-gray-300 rounded-lg p-2" name="status" value={editData.status} onChange={handleEditChange}>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
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
                <h3 className="text-xl font-bold mb-4 text-red-600">Delete Student</h3>
                <p>Are you sure you want to delete <span className="font-semibold">{modal.student.name}</span>?</p>
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

export default ManageStudentsPage; 