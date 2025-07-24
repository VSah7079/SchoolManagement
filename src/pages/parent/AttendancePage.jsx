import React from "react";
import { FaCheckCircle, FaTimesCircle, FaClock, FaCalendarAlt, FaUser } from "react-icons/fa";

// Mock data for parent's children and their attendance
const children = [
  {
    id: 1,
    name: "John Doe",
    class: "10A",
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
    attendanceSummary: {
      totalDays: 120,
      present: 110,
      absent: 8,
      late: 2,
    },
    attendanceLog: [
      { date: "2023-10-25", status: "Present" },
      { date: "2023-10-24", status: "Present" },
      { date: "2023-10-23", status: "Absent" },
      { date: "2023-10-22", status: "Present" },
      { date: "2023-10-21", status: "Late" },
      { date: "2023-10-20", status: "Present" },
      { date: "2023-10-19", status: "Present" },
      { date: "2023-10-18", status: "Present" },
    ],
  },
  {
    id: 2,
    name: "Samantha Smith",
    class: "8B",
    profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
    attendanceSummary: {
      totalDays: 120,
      present: 105,
      absent: 10,
      late: 5,
    },
    attendanceLog: [
      { date: "2023-10-25", status: "Late" },
      { date: "2023-10-24", status: "Present" },
      { date: "2023-10-23", status: "Absent" },
      { date: "2023-10-22", status: "Present" },
      { date: "2023-10-21", status: "Present" },
      { date: "2023-10-20", status: "Present" },
      { date: "2023-10-19", status: "Absent" },
      { date: "2023-10-18", status: "Present" },
    ],
  },
];

const getStatusIcon = (status) => {
  switch (status) {
    case "Present":
      return <FaCheckCircle style={{ color: "#22c55e" }} />;
    case "Absent":
      return <FaTimesCircle style={{ color: "#ef4444" }} />;
    case "Late":
      return <FaClock style={{ color: "#f59e42" }} />;
    default:
      return null;
  }
};

const ParentAttendancePage = () => {
  return (
    <div style={{ padding: "2.5rem 1rem", background: "#f3f6fa", minHeight: "100vh", maxWidth: 900, margin: "0 auto" }}>
      <div style={{ fontSize: 26, fontWeight: 800, color: "#2563eb", marginBottom: 28, display: "flex", alignItems: "center", gap: 12 }}>
        <FaCalendarAlt /> Attendance Overview
      </div>
      {children.map((child) => {
        const { totalDays, present, absent, late } = child.attendanceSummary;
        const attendancePercent = ((present + late) / totalDays) * 100;
        return (
          <div key={child.id} style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", padding: 28, marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 18 }}>
              <img src={child.profilePic} alt={child.name} style={{ width: 60, height: 60, borderRadius: "50%", border: "2px solid #2563eb" }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 20 }}>{child.name}</div>
                <div style={{ color: "#555", fontSize: 15 }}>Class: <b>{child.class}</b></div>
              </div>
            </div>
            {/* Summary */}
            <div style={{ display: "flex", gap: 24, marginBottom: 16 }}>
              <div style={{ color: "#2563eb", fontWeight: 700, fontSize: 17 }}>Total: {totalDays}</div>
              <div style={{ color: "#22c55e", fontWeight: 700, fontSize: 17 }}>Present: {present}</div>
              <div style={{ color: "#ef4444", fontWeight: 700, fontSize: 17 }}>Absent: {absent}</div>
              <div style={{ color: "#f59e42", fontWeight: 700, fontSize: 17 }}>Late: {late}</div>
              <div style={{ color: "#2563eb", fontWeight: 700, fontSize: 17 }}>Attendance: {attendancePercent.toFixed(1)}%</div>
            </div>
            {/* Progress Bar */}
            <div style={{ background: "#e5e7eb", borderRadius: 8, height: 16, width: "100%", marginBottom: 18, overflow: "hidden" }}>
              <div style={{ width: `${attendancePercent}%`, background: "linear-gradient(90deg,#2563eb,#22c55e)", height: "100%", borderRadius: 8, transition: "width 0.5s" }}></div>
            </div>
            {/* Attendance Log */}
            <div style={{ fontWeight: 600, fontSize: 16, color: "#2563eb", marginBottom: 8 }}>Recent Attendance</div>
            <div style={{ background: "#f3f6fa", borderRadius: 10, padding: 12 }}>
              {child.attendanceLog.map((entry, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: 14, padding: "7px 0", borderBottom: idx !== child.attendanceLog.length - 1 ? "1px solid #e5e7eb" : "none" }}>
                  <span style={{ fontSize: 18 }}>{getStatusIcon(entry.status)}</span>
                  <span style={{ fontWeight: 500, color: "#222", minWidth: 90 }}>{entry.date}</span>
                  <span style={{ fontWeight: 500, color: entry.status === "Present" ? "#22c55e" : entry.status === "Absent" ? "#ef4444" : "#f59e42" }}>{entry.status}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ParentAttendancePage; 