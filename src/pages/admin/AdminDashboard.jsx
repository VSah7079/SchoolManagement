import React from 'react';
import DashboardCards from '../../components/admin/DashboardCards';
import QuickLinks from '../../components/admin/QuickLinks';
import GraphicalReports from '../../components/admin/GraphicalReports';

const AdminDashboard = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
      <DashboardCards />
      <div className="mt-6">
        <QuickLinks />
      </div>
      <GraphicalReports />
    </>
  );
};

export default AdminDashboard; 