import React from 'react';
import jsPDF from 'jspdf';

const feeStatus = [
  { student: 'John Doe', due: '₹500', paid: '₹500', status: 'Paid' },
  { student: 'Peter Jones', due: '₹600', paid: '₹300', status: 'Partially Paid' },
  { student: 'Samantha Smith', due: '₹500', paid: '₹0', status: 'Unpaid' },
];

const FeeStatusPage = () => {
  const handleGenerateInvoice = (student) => {
    // Generate a simple PDF invoice using jsPDF
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Fee Invoice', 105, 20, { align: 'center' });
    doc.setFontSize(12);
    doc.text(`Student: ${student.student}`, 20, 40);
    doc.text(`Amount Due: ${student.due}`, 20, 55);
    doc.text(`Amount Paid: ${student.paid}`, 20, 70);
    doc.text(`Status: ${student.status}`, 20, 85);
    doc.text('Thank you for your payment!', 20, 110);
    doc.save(`${student.student.replace(/\s+/g, '_')}_invoice.pdf`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-green-50 p-0">
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-green-400 py-10 mb-10 shadow-lg rounded-b-3xl">
        <div className="max-w-2xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-1">Fee Status</h1>
          <p className="text-lg text-blue-100 font-medium">Academic Year 2023-24</p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl -mt-16 relative z-10">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-[#e0e7ff]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-[#1e40af] uppercase tracking-wider">Student</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-[#1e40af] uppercase tracking-wider">Amount Due</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-[#1e40af] uppercase tracking-wider">Amount Paid</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-[#1e40af] uppercase tracking-wider">Status</th>
              <th className="relative px-6 py-3"><span className="sr-only">Invoice</span></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {feeStatus.map((student, idx) => (
              <tr key={idx} className="hover:bg-[#f1f5f9] transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">{student.student}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{student.due}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{student.paid}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${student.status === 'Paid' ? 'bg-green-100 text-green-800' : student.status === 'Partially Paid' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                    {student.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => handleGenerateInvoice(student)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Invoice</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeeStatusPage; 