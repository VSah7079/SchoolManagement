import React, { useEffect, useState } from 'react';
import { FiUsers, FiClipboard, FiClock, FiBookOpen, FiUser, FiCalendar, FiCheckSquare } from 'react-icons/fi';
import DashboardCard from '../../components/dashboard/DashboardCard';

const TeacherDashboard = () => {
    // Mock data
    const upcomingClasses = [
        { time: '10:00 AM', class: 'Grade 10 - Section A', subject: 'Science' },
        { time: '11:00 AM', class: 'Grade 9 - Section B', subject: 'Mathematics' },
        { time: '01:00 PM', class: 'Grade 10 - Section A', subject: 'Physics Lab' },
    ];

    // Animation state
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, []);

    const quickActions = [
        { label: 'Take Attendance', icon: <FiCheckSquare />, path: '/teacher/take-attendance' },
        { label: 'Grade Assignments', icon: <FiClipboard />, path: '/teacher/enter-results' },
        { label: 'View Timetable', icon: <FiCalendar />, path: '/teacher/timetable' },
        { label: 'My Profile', icon: <FiUser />, path: '/teacher/profile' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-16 font-sans">
            {/* Header */}
            <div className="relative overflow-hidden mb-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-400 opacity-80"></div>
                <div className="relative z-10 flex items-center px-8 py-12">
                    <FiUser className="text-white text-5xl mr-6 drop-shadow-lg" />
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 drop-shadow">Welcome, [Teacher Name]!</h1>
                        <p className="text-white/90 text-lg">Empower your students and manage your classes efficiently.</p>
                    </div>
                </div>
            </div>

            {/* Stat Cards */}
            <div className={`max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 px-4 transition-all duration-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <DashboardCard
                    title="Total Students"
                    value="125"
                    icon={<FiUsers className="text-3xl text-blue-500" />}
                />
                <DashboardCard
                    title="Classes Assigned"
                    value="4"
                    icon={<FiBookOpen className="text-3xl text-green-500" />}
                />
                <DashboardCard
                    title="Pending Assignments"
                    value="8"
                    icon={<FiClipboard className="text-3xl text-yellow-500" />}
                />
                <DashboardCard
                    title="Today's Classes"
                    value="3"
                    icon={<FiClock className="text-3xl text-indigo-500" />}
                />
            </div>

            {/* Quick Actions */}
            <div className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 px-4 transition-all duration-500 delay-100 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-blue-700 mb-6">Quick Actions</h2>
                    <div className="space-y-4">
                        {quickActions.map((action, idx) => (
                            <a
                                key={idx}
                                href={action.path}
                                className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors font-medium text-blue-800"
                            >
                                <span className="mr-4 text-xl">{action.icon}</span>
                                {action.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Upcoming Classes */}
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                    <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center">
                        <FiClock className="mr-3" /> Upcoming Classes Today
                    </h2>
                    <ul className="space-y-4">
                        {upcomingClasses.map((item, index) => (
                            <li key={index} className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                <div className="w-20 text-center">
                                    <p className="text-lg font-bold text-blue-600">{item.time}</p>
                                </div>
                                <div className="border-l-2 border-blue-200 pl-4">
                                    <p className="font-semibold text-gray-800">{item.subject}</p>
                                    <p className="text-gray-600 text-sm">{item.class}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TeacherDashboard; 