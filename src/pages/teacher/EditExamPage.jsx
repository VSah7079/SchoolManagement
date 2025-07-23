import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiEdit, FiBookOpen } from 'react-icons/fi';

const EditExamPage = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    title: '',
    class: '',
    subject: '',
    date: '',
  });
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const examData = localStorage.getItem('editExam');
    if (examData) {
      const exam = JSON.parse(examData);
      setForm({
        title: exam.title || '',
        class: exam.class || '',
        subject: exam.subject || '',
        date: exam.date || '',
      });
    } else {
      setNotFound(true);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white font-sans">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Exam Details Not Found</h2>
          <p className="mb-6 text-gray-700">Exam details are missing. Please go back and try editing again.</p>
          <Link to="/teacher/exams" className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 font-semibold">Back to Manage Exams</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-16 font-sans px-4">
      <div className="max-w-3xl mx-auto py-10">
        <Link to="/teacher/exams" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <FiArrowLeft className="mr-2" /> Back to Manage Exams
        </Link>
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold text-blue-700 mb-4 flex items-center">
            <FiEdit className="mr-3" /> Edit Exam
          </h1>
          <p className="text-lg text-gray-700 mb-6">Editing Exam ID: <span className="font-semibold">{id}</span></p>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Exam Title</label>
              <input type="text" name="title" value={form.title} onChange={handleChange} className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Exam Title" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Class</label>
              <input type="text" name="class" value={form.class} onChange={handleChange} className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Class" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Subject</label>
              <input type="text" name="subject" value={form.subject} onChange={handleChange} className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Subject" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Date</label>
              <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex justify-end gap-4">
              <Link to="/teacher/exams" className="px-6 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 font-semibold">Cancel</Link>
              <button type="submit" className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 font-semibold">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditExamPage; 
