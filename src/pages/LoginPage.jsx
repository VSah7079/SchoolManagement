import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, you'd have authentication logic here.
    // For this wireframe, we'll just navigate to a dashboard.
    console.log('Logging in as:', { role, email });
    // Navigate based on role
    switch (role) {
      case 'admin':
        navigate('/admin/dashboard');
        break;
      case 'student':
        navigate('/student/dashboard');
        break;
      case 'parent':
        navigate('/parent/dashboard');
        break;
      case 'teacher':
        navigate('/teacher/dashboard');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-yellow-50 to-green-100 flex flex-col justify-center items-center py-12 px-4">
      {/* School Logo and Tagline */}
      <div className="flex flex-col items-center mb-6">
        <img src="https://img.icons8.com/color/96/000000/school-building.png" alt="School Logo" className="w-20 h-20 mb-2 drop-shadow-lg" />
        <h1 className="text-4xl font-extrabold text-blue-800 tracking-tight">Springfield Public School</h1>
        <p className="text-lg text-gray-600 mt-1 font-medium italic">Empowering Students for a Brighter Tomorrow</p>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white/90 rounded-2xl shadow-2xl p-8 backdrop-blur-md border border-blue-100">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Sign in to your account</h2>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="role" className="block text-sm font-semibold text-gray-700">
              I am a
            </label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-blue-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-blue-50"
            >
              <option value="admin">Admin</option>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-blue-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-blue-50"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-blue-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-blue-50"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-md text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Springfield Public School. All rights reserved.
      </footer>
    </div>
  );
};

export default LoginPage;
