import React from 'react';

const ReportCard = React.forwardRef(({ student }, ref) => {
  if (!student) return null;
  return (
    <div ref={ref} className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 border border-[#e0e7ff]">
      {/* Header with logo */}
      <div className="flex flex-col items-center mb-6">
        <img src="https://img.icons8.com/color/96/000000/school-building.png" alt="School Logo" className="w-16 h-16 mb-2" />
        <h2 className="text-2xl font-extrabold text-[#1e40af] tracking-tight">Springfield Public School</h2>
        <p className="text-sm text-gray-500">Academic Year 2023-24</p>
      </div>
      {/* Student Details */}
      <div className="mb-6 bg-[#e0e7ff] rounded-lg p-4 flex flex-col gap-1">
        <div><span className="font-semibold text-gray-700">Name:</span> <span className="text-gray-800">{student.name}</span></div>
        <div><span className="font-semibold text-gray-700">Class:</span> <span className="text-gray-800">10A</span></div>
        {/* Add roll number or other details if available */}
      </div>
      {/* Marks Table */}
      <table className="min-w-full bg-white rounded-lg overflow-hidden mb-6">
        <thead className="bg-[#e0e7ff]">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-bold text-[#1e40af] uppercase tracking-wider">Subject</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-[#1e40af] uppercase tracking-wider">Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-[#f1f5f9]">
            <td className="px-6 py-4 font-medium text-gray-700">Maths</td>
            <td className="px-6 py-4 font-semibold text-gray-900">85</td>
          </tr>
          <tr className="hover:bg-[#f1f5f9]">
            <td className="px-6 py-4 font-medium text-gray-700">Science</td>
            <td className="px-6 py-4 font-semibold text-gray-900">92</td>
          </tr>
        </tbody>
      </table>
      {/* Footer */}
      <div className="mt-8 text-center text-gray-500 text-xs border-t pt-4">
        &copy; {new Date().getFullYear()} Springfield Public School. All rights reserved.<br/>
        <span className="italic">Principal's Signature: ____________________</span>
      </div>
    </div>
  );
});

export default ReportCard; 