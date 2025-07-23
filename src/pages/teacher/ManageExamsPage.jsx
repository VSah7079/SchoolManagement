import React, { useEffect, useState } from 'react';
import { FiBookOpen, FiPlus, FiEdit, FiTrash, FiClipboard } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const ManageExamsPage = () => {
  // Mock exams data
  const [exams, setExams] = useState([
    { id: 1, title: 'Mid-Term Exam', class: 'Grade 10 - Section A', subject: 'Science', date: '2023-10-15' },
    { id: 2, title: 'Mid-Term Exam', class: 'Grade 9 - Section B', subject: 'Mathematics', date: '2023-10-16' },
    { id: 3, title: 'First-Term Exam', class: 'Grade 10 - Section A', subject: 'Science', date: '2023-08-20' },
  ]);
  const [animate, setAnimate] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => { setAnimate(true); }, []);

  const handleEdit = (id) => {
    const exam = exams.find(e => e.id === id);
    if (exam) {
      localStorage.setItem('editExam', JSON.stringify(exam));
    }
    navigate(`/teacher/exams/edit/${id}`);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    setExams(prev => prev.filter(exam => exam.id !== deleteId));
    setDeleteId(null);
  };

  const cancelDelete = () => {
    setDeleteId(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-16 font-sans">
      {/* Header */}
      <div className="relative overflow-hidden mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-400 opacity-80"></div>
        <div className="relative z-10 flex items-center px-8 py-12 justify-between">
          <div className="flex items-center">
            <FiClipboard className="text-white text-5xl mr-6 drop-shadow-lg" />
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 drop-shadow">Manage Exams</h1>
              <p className="text-white/90 text-lg">Create, edit, and manage all your exams in one place.</p>
            </div>
          </div>
          <Link 
            to="/teacher/exams/create" 
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 flex items-center font-semibold text-lg shadow-md transition-transform transform hover:scale-105"
          >
            <FiPlus className="mr-2" /> Create Exam
          </Link>
        </div>
      </div>

      <div className={`max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-xl transition-all duration-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}> 
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg">
            <thead className="bg-blue-50">
              <tr>
                <th className="py-3 px-6 text-left text-xs font-bold text-blue-700 uppercase">Exam Title</th>
                <th className="py-3 px-6 text-left text-xs font-bold text-blue-700 uppercase">Class</th>
                <th className="py-3 px-6 text-left text-xs font-bold text-blue-700 uppercase">Subject</th>
                <th className="py-3 px-6 text-left text-xs font-bold text-blue-700 uppercase">Date</th>
                <th className="py-3 px-6 text-center text-xs font-bold text-blue-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {exams.map(exam => (
                <tr key={exam.id} className="hover:bg-blue-50 transition">
                  <td className="py-4 px-6 font-medium text-gray-800">{exam.title}</td>
                  <td className="py-4 px-6 text-gray-700">{exam.class}</td>
                  <td className="py-4 px-6 text-gray-700">{exam.subject}</td>
                  <td className="py-4 px-6 text-gray-700">{exam.date}</td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center space-x-2">
                      <button onClick={() => handleEdit(exam.id)} className="p-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition" title="Edit"><FiEdit /></button>
                      <button onClick={() => handleDelete(exam.id)} className="p-2 rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition" title="Delete"><FiTrash /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Delete Confirmation Dialog */}
        {deleteId !== null && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl shadow-xl max-w-sm w-full">
              <h2 className="text-xl font-bold text-red-600 mb-4">Delete Exam</h2>
              <p className="mb-6 text-gray-700">Are you sure you want to delete this exam? This action cannot be undone.</p>
              <div className="flex justify-end gap-4">
                <button onClick={cancelDelete} className="px-6 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 font-semibold">Cancel</button>
                <button onClick={confirmDelete} className="px-6 py-2 rounded bg-red-600 text-white hover:bg-red-700 font-semibold">Delete</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageExamsPage;
