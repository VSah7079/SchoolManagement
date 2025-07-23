import React, { useState } from 'react';
import { FiBookOpen, FiSave, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CreateExamPage = () => {
    const [examTitle, setExamTitle] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [subject, setSubject] = useState('');
    const [date, setDate] = useState('');
    const [totalMarks, setTotalMarks] = useState(100);
    const [showSuccess, setShowSuccess] = useState(false);

    // Mock data
    const classes = ['Grade 10 - Section A', 'Grade 9 - Section B', 'Grade 8 - Section A'];

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000);
        setExamTitle('');
        setSelectedClass('');
        setSubject('');
        setDate('');
        setTotalMarks(100);
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-pink-100 pb-16 font-sans relative overflow-hidden">
        {/* Soft background pattern */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg width="100%" height="100%" className="opacity-20">
            <defs>
              <radialGradient id="bg-grad" cx="50%" cy="50%" r="80%">
                <stop offset="0%" stopColor="#a5b4fc" />
                <stop offset="100%" stopColor="#fbc2eb" />
              </radialGradient>
            </defs>
            <circle cx="80%" cy="20%" r="200" fill="url(#bg-grad)" />
            <circle cx="20%" cy="80%" r="150" fill="url(#bg-grad)" />
          </svg>
        </div>
        {/* Header */}
        <div className="relative overflow-visible mb-10 z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-400 opacity-90 rounded-b-3xl shadow-xl"></div>
          <div className="relative z-10 flex flex-col items-center px-8 py-16">
            <span className="inline-block bg-white/30 backdrop-blur-lg rounded-full p-6 shadow-lg animate-bounce-slow mb-4">
              <FiBookOpen className="text-pink-500 text-5xl drop-shadow-lg" />
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 drop-shadow">Create New Exam</h1>
            <p className="text-white/90 text-lg">Schedule a new exam for your class with ease.</p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto -mt-20 z-20 relative">
          <div className="bg-white/60 backdrop-blur-2xl border border-white/40 p-10 rounded-3xl shadow-2xl animate-fade-in-glass">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="exam-title" className="block text-sm font-semibold text-gray-700 mb-1">Exam Title</label>
                <input
                  type="text"
                  id="exam-title"
                  className="w-full p-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-400 bg-white/80 placeholder-pink-300"
                  value={examTitle}
                  onChange={e => setExamTitle(e.target.value)}
                  required
                  placeholder="e.g. Mid-Term Exam"
                />
              </div>
              <div>
                <label htmlFor="class-select" className="block text-sm font-semibold text-gray-700 mb-1">Class</label>
                <select
                  id="class-select"
                  className="w-full p-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-400 bg-white/80 text-gray-700"
                  value={selectedClass}
                  onChange={e => setSelectedClass(e.target.value)}
                  required
                >
                  <option value="">Select a class</option>
                  {classes.map(cls => <option key={cls} value={cls}>{cls}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-400 bg-white/80 placeholder-pink-300"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  required
                  placeholder="e.g. Mathematics"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    id="date"
                    className="w-full p-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-400 bg-white/80"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="total-marks" className="block text-sm font-semibold text-gray-700 mb-1">Total Marks</label>
                  <input
                    type="number"
                    id="total-marks"
                    className="w-full p-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-400 bg-white/80 placeholder-pink-300"
                    value={totalMarks}
                    onChange={e => setTotalMarks(e.target.value)}
                    min="1"
                    max="1000"
                    required
                    placeholder="e.g. 100"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-8">
                <Link to="/teacher/exams" className="bg-white/70 text-pink-600 px-6 py-2 rounded-xl hover:bg-pink-50 font-semibold border border-pink-200 shadow transition">Cancel</Link>
                <button type="submit" className="bg-gradient-to-r from-pink-500 via-indigo-400 to-blue-500 text-white px-10 py-3 rounded-xl font-bold text-lg shadow-lg hover:from-pink-600 hover:to-blue-600 transition-all flex items-center gap-2">
                  <FiSave className="mr-2" /> Create Exam
                </button>
              </div>
            </form>
            {/* Success Toast */}
            {showSuccess && (
              <div className="fixed bottom-8 right-8 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in-glass z-50">
                <FiCheckCircle className="text-2xl" /> Exam created successfully!
              </div>
            )}
          </div>
        </div>
        {/* Animations */}
        <style>{`
          .animate-fade-in-glass { animation: fadeInGlass 0.8s; }
          @keyframes fadeInGlass { from { opacity: 0; transform: translateY(32px) scale(0.98); } to { opacity: 1; transform: none; } }
          .animate-bounce-slow { animation: bounceSlow 2.5s infinite alternate; }
          @keyframes bounceSlow { 0% { transform: translateY(0); } 100% { transform: translateY(-12px); } }
        `}</style>
      </div>
    );
};

export default CreateExamPage; 