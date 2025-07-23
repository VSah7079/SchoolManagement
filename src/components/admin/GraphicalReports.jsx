import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const attendanceData = [
  { name: 'Mon', Present: 95, Absent: 5 },
  { name: 'Tue', Present: 92, Absent: 8 },
  { name: 'Wed', Present: 98, Absent: 2 },
  { name: 'Thu', Present: 93, Absent: 7 },
  { name: 'Fri', Present: 90, Absent: 10 },
];

const feeData = [
  { name: 'Paid', value: 400 },
  { name: 'Due', value: 150 },
  { name: 'Overdue', value: 50 },
];

const COLORS = ['#0088FE', '#FFBB28', '#FF8042'];

const examData = [
  { name: 'Term 1', 'Avg Score': 75 },
  { name: 'Term 2', 'Avg Score': 82 },
  { name: 'Term 3', 'Avg Score': 88 },
];

const GraphicalReports = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Weekly Attendance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Present" fill="#8884d8" />
            <Bar dataKey="Absent" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Fees Status</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={feeData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {feeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-lg shadow col-span-1 lg:col-span-2">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Exam Result Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={examData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Avg Score" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GraphicalReports; 