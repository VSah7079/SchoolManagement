import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import MainLayout from '@/layouts/MainLayout';
import DashboardLayout from '@/layouts/DashboardLayout';

// Public Pages
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import AdmissionPage from '@/pages/AdmissionPage';
import LoginPage from '@/pages/LoginPage';

// Admin Pages
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AddStudentPage from '@/pages/admin/AddStudentPage';
import ManageStudentsPage from '@/pages/admin/ManageStudentsPage';
import AddTeacherPage from '@/pages/admin/AddTeacherPage';
import ManageTeachersPage from '@/pages/admin/ManageTeachersPage';
import AdminTakeAttendancePage from '@/pages/admin/TakeAttendancePage';
import AdminViewAttendancePage from '@/pages/admin/ViewAttendancePage';
import AdminCreateExamPage from '@/pages/admin/CreateExamPage';
import AdminEnterMarksPage from '@/pages/admin/EnterMarksPage';
import GenerateReportCardPage from '@/pages/admin/GenerateReportCardPage';
import FeeStructurePage from '@/pages/admin/FeeStructurePage';
import FeeStatusPage from '@/pages/admin/FeeStatusPage';
import AddBusRoutePage from '@/pages/admin/AddBusRoutePage';
import AssignStudentToRoutePage from '@/pages/admin/AssignStudentToRoutePage';
import ManageClassesPage from '@/pages/admin/ManageClassesPage';
import ManageHostelPage from '@/pages/admin/ManageHostelPage';
import ReportsPage from '@/pages/admin/ReportsPage';
import SettingsPage from '@/pages/admin/SettingsPage';
import CreateClassPage from '@/pages/admin/CreateClassPage';
import GenerateReportPage from '@/pages/admin/GenerateReportPage';

// Student Pages
import StudentDashboard from '@/pages/student/StudentDashboard';
import StudentProfilePage from '@/pages/student/ProfilePage';
import StudentAttendancePage from '@/pages/student/AttendancePage';
import StudentGradesPage from '@/pages/student/GradesPage';
import StudentHomeworkPage from '@/pages/student/HomeworkPage';
import StudentTimetablePage from '@/pages/student/TimetablePage';
import StudentFeeDetailsPage from '@/pages/student/FeeDetailsPage';

// Teacher Pages
import TeacherDashboard from '@/pages/teacher/TeacherDashboard';
import TeacherProfilePage from '@/pages/teacher/ProfilePage';
import MyClassesPage from '@/pages/teacher/MyClassesPage';
import TeacherTakeAttendancePage from '@/pages/teacher/TakeAttendancePage';
import TeacherViewAttendancePage from '@/pages/teacher/ViewAttendancePage';
import ManageExamsPage from '@/pages/teacher/ManageExamsPage';
import TeacherCreateExamPage from '@/pages/teacher/CreateExamPage';
import EnterResultsPage from '@/pages/teacher/EnterResultsPage';
import ClassDetailsPage from '@/pages/teacher/ClassDetailsPage';
import EditExamPage from '@/pages/teacher/EditExamPage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admission" element={<AdmissionPage />} />
      </Route>

      {/* Auth Route */}
      <Route path="/login" element={<LoginPage />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<DashboardLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="students/add" element={<AddStudentPage />} />
        <Route path="students/manage" element={<ManageStudentsPage />} />
        <Route path="teachers/add" element={<AddTeacherPage />} />
        <Route path="teachers/manage" element={<ManageTeachersPage />} />
        <Route path="classes" element={<ManageClassesPage />} />
        <Route path="classes/add" element={<CreateClassPage />} />
        <Route path="hostel" element={<ManageHostelPage />} />
        <Route path="attendance/take" element={<AdminTakeAttendancePage />} />
        <Route path="attendance/view" element={<AdminViewAttendancePage />} />
        <Route path="exams/create" element={<AdminCreateExamPage />} />
        <Route path="exams/marks/enter" element={<AdminEnterMarksPage />} />
        <Route path="exams/report-card" element={<GenerateReportCardPage />} />
        <Route path="fees/structure" element={<FeeStructurePage />} />
        <Route path="fees/status" element={<FeeStatusPage />} />
        <Route path="transport/routes/add" element={<AddBusRoutePage />} />
        <Route path="transport/assign" element={<AssignStudentToRoutePage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="reports/generate" element={<GenerateReportPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      {/* Student Routes */}
      <Route path="/student" element={<DashboardLayout />}>
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="profile" element={<StudentProfilePage />} />
        <Route path="attendance" element={<StudentAttendancePage />} />
        <Route path="grades" element={<StudentGradesPage />} />
        <Route path="homework" element={<StudentHomeworkPage />} />
        <Route path="timetable" element={<StudentTimetablePage />} />
        <Route path="fees" element={<StudentFeeDetailsPage />} />
      </Route>

      {/* Teacher Routes */}
      <Route path="/teacher" element={<DashboardLayout />}>
        <Route path="dashboard" element={<TeacherDashboard />} />
        <Route path="profile" element={<TeacherProfilePage />} />
        <Route path="classes" element={<MyClassesPage />} />
        <Route path="classes/:id" element={<ClassDetailsPage />} />
        <Route path="attendance/take" element={<TeacherTakeAttendancePage />} />
        <Route path="attendance/view" element={<TeacherViewAttendancePage />} />
        <Route path="exams" element={<ManageExamsPage />} />
        <Route path="exams/create" element={<TeacherCreateExamPage />} />
        <Route path="exams/edit/:id" element={<EditExamPage />} />
        <Route path="results/enter" element={<EnterResultsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes; 