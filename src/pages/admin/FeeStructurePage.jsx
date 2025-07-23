import React from 'react';

const feeStructure = [
  { class: 'Grade 1', term: 'Term 1', amount: '₹500' },
  { class: 'Grade 1', term: 'Term 2', amount: '₹500' },
  { class: 'Grade 2', term: 'Term 1', amount: '₹600' },
  { class: 'Grade 2', term: 'Term 2', amount: '₹600' },
];

const FeeStructurePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-green-50 p-0">
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-green-400 py-10 mb-10 shadow-lg rounded-b-3xl">
        <div className="max-w-2xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-1">Fee Structure</h1>
          <p className="text-lg text-blue-100 font-medium">Academic Year 2023-24</p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl -mt-16 relative z-10">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-[#e0e7ff]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-[#1e40af] uppercase tracking-wider">Class</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-[#1e40af] uppercase tracking-wider">Term</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-[#1e40af] uppercase tracking-wider">Amount</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {feeStructure.map((fee, index) => (
              <tr key={index} className="hover:bg-[#f1f5f9] transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">{fee.class}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{fee.term}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-700 font-bold">{fee.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeeStructurePage; 