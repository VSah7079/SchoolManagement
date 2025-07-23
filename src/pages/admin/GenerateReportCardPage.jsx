import React, { useRef, useState } from 'react';
import ReportCard from '../../components/admin/ReportCard';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const students = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Peter Jones' },
];

const GenerateReportCardPage = () => {
  const [selectedClass, setSelectedClass] = useState('10A');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const componentRef = useRef();

  const handleStudentSelect = (id) => {
    setSelectedStudent(students.find(s => s.id === parseInt(id)));
  };

  const handleDownloadPDF = async () => {
    if (!componentRef.current) return;
    const card = componentRef.current;
    const canvas = await html2canvas(card);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const imgWidth = pageWidth - 40;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 20, 20, imgWidth, imgHeight);
    pdf.save('report-card.pdf');
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Generate Report Card</h1>
      <div className="bg-white p-8 rounded-lg shadow border border-[#e0e7ff]">
        <div className="flex items-center space-x-4 mb-6">
          <select onChange={e => setSelectedClass(e.target.value)} value={selectedClass} className="p-2 border rounded-md">
            <option value="10A">Class 10A</option>
            <option value="9B">Class 9B</option>
          </select>
          <select onChange={e => handleStudentSelect(e.target.value)} className="p-2 border rounded-md">
            <option>Select Student</option>
            {students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
          {selectedStudent && (
            <button
              onClick={handleDownloadPDF}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Download PDF
            </button>
          )}
        </div>
        {selectedStudent && (
          <div className="border border-gray-300 flex justify-center">
            <div ref={componentRef}>
              <ReportCard student={selectedStudent} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GenerateReportCardPage; 