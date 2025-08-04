# School Management System

A comprehensive web-based School Management System built with React, Vite, and Tailwind CSS. This application provides role-based dashboards and functionality for administrators, teachers, students, and parents to manage all aspects of school operations.

## 🚀 Features

### Multi-Role Dashboard System
- **Admin Dashboard**: Complete school administration with analytics and reports
- **Teacher Dashboard**: Class management, attendance, and grading tools
- **Student Dashboard**: Academic progress tracking and resources access
- **Parent Dashboard**: Child progress monitoring and communication

### Core Functionality

#### Admin Features
- **Student Management**: Add, edit, and manage student records
- **Teacher Management**: Handle teacher profiles and assignments
- **Class Management**: Create and organize classes and sections
- **Attendance System**: Take and view attendance records
- **Examination System**: Create exams, enter marks, generate report cards
- **Fee Management**: Structure fees, track payment status
- **Transport Management**: Manage bus routes and student assignments
- **Hostel Management**: Oversee hostel accommodations
- **Reports & Analytics**: Generate various school reports with charts
- **Settings**: Configure school information and system preferences

#### Teacher Features
- **My Classes**: View assigned classes and student lists
- **Attendance Management**: Mark and view student attendance
- **Exam Management**: Create exams and enter student results
- **Grade Management**: Input and manage student grades
- **Class Details**: Access detailed class information
- **Profile Management**: Update personal information

#### Student Features
- **Academic Dashboard**: Overview of grades, attendance, and assignments
- **Timetable**: View class schedules
- **Homework Tracking**: Access assignments and submissions
- **Grade Reports**: View academic performance
- **Fee Status**: Check fee payment details
- **Profile Management**: Update personal information

#### Parent Features
- **Children Overview**: Monitor multiple children's progress
- **Attendance Tracking**: View child attendance records
- **Grade Monitoring**: Access child's academic performance
- **Fee Management**: Track fee payments and dues
- **Notifications**: Receive important school updates
- **Communication**: Access notices and announcements

### Public Features
- **Home Page**: School introduction with banner, courses, and testimonials
- **About Page**: School history, mission, vision, and team information
- **Admission Page**: Application process and requirements
- **Contact Page**: School contact information and inquiry forms

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.0
- **Styling**: Tailwind CSS 4.1.11
- **Routing**: React Router DOM 7.6.2
- **Icons**: React Icons 5.5.0
- **Animations**: Framer Motion 12.23.0, GSAP 3.13.0
- **Charts**: Recharts 3.0.0
- **PDF Generation**: jsPDF 3.0.1, html2canvas 1.4.1
- **Printing**: react-to-print 3.1.0

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── admin/          # Admin-specific components
│   ├── contact/        # Contact page components
│   ├── dashboard/      # Dashboard shared components
│   ├── home/           # Homepage components
│   ├── about/          # About page components
│   └── shared/         # Common components (Navbar, Footer)
├── layouts/            # Layout components
│   ├── MainLayout.jsx  # Public pages layout
│   └── DashboardLayout.jsx # Dashboard layout with sidebar
├── pages/              # Page components
│   ├── admin/          # Admin dashboard pages
│   ├── teacher/        # Teacher dashboard pages
│   ├── student/        # Student dashboard pages
│   ├── parent/         # Parent dashboard pages
│   └── [public pages]  # Home, About, Contact, etc.
├── router/             # Routing configuration
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── assets/             # Static assets
```

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/VSah7079/SchoolManagement.git
   cd SchoolManagement
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🔧 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

## 🚪 Application Routes

### Public Routes
- `/` - Homepage
- `/about` - About school
- `/contact` - Contact information
- `/admission` - Admission process
- `/login` - Authentication page

### Admin Routes (Protected)
- `/admin/dashboard` - Main admin dashboard
- `/admin/students/*` - Student management
- `/admin/teachers/*` - Teacher management
- `/admin/classes/*` - Class management
- `/admin/attendance/*` - Attendance system
- `/admin/exams/*` - Examination system
- `/admin/fees/*` - Fee management
- `/admin/transport/*` - Transport management
- `/admin/reports/*` - Reports and analytics
- `/admin/settings` - System settings

### Teacher Routes (Protected)
- `/teacher/dashboard` - Teacher dashboard
- `/teacher/classes/*` - Class management
- `/teacher/attendance/*` - Attendance management
- `/teacher/exams/*` - Exam management
- `/teacher/profile` - Profile management

### Student Routes (Protected)
- `/student/dashboard` - Student dashboard
- `/student/attendance` - View attendance
- `/student/grades` - Academic performance
- `/student/homework` - Assignments
- `/student/timetable` - Class schedule
- `/student/fees` - Fee details
- `/student/profile` - Profile management

### Parent Routes (Protected)
- `/parent/dashboard` - Parent dashboard
- `/parent/attendance` - Child attendance
- `/parent/grades` - Child grades
- `/parent/fee` - Fee management
- `/parent/notices` - School notices
- `/parent/profile` - Profile management

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional interface with gradient backgrounds
- **Interactive Elements**: Hover effects, smooth transitions, and animations
- **Data Visualization**: Charts and graphs for analytics
- **Role-based Navigation**: Dynamic sidebar based on user role
- **Print-friendly**: Generate and print report cards and documents

## 🔐 Authentication System

The application includes a role-based authentication system with:
- Login page with role selection (Admin, Teacher, Student, Parent)
- Protected routes based on user roles
- Automatic redirection to appropriate dashboards
- Session management (implementation ready)

## 📊 Key Components

### Dashboard Cards
- Real-time statistics display
- Interactive hover effects
- Gradient backgrounds
- Icon integration

### Sidebar Navigation
- Role-based menu items
- Active state indicators
- Profile section for parents
- Responsive design

### Data Tables
- CRUD operations (Create, Read, Update, Delete)
- Modal-based forms
- Search and filter functionality
- Action buttons with icons

### Report Generation
- PDF export functionality
- Print-friendly layouts
- Chart integration
- Data visualization

## 🚀 Deployment

The application is ready for deployment on platforms like:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Firebase Hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Contact

**Author**: VSah7079  
**Repository**: [SchoolManagement](https://github.com/VSah7079/SchoolManagement)

---

## 🔮 Future Enhancements

- Backend API integration
- Real-time notifications
- Mobile application
- Advanced analytics
- Multi-language support
- Online payment integration
- Video conferencing integration
- Document management system
- Advanced reporting features
- Machine learning for attendance prediction

Built with ❤️ using React and modern web technologies.
