import React from "react";
import { FaAward, FaBook } from "react-icons/fa";

const children = [
  {
    id: 1,
    name: "John Doe",
    class: "10A",
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
    grades: [
      { exam: "Mid-Term Exam", subject: "Mathematics", grade: "A", score: "92/100" },
      { exam: "Mid-Term Exam", subject: "Science", grade: "B+", score: "88/100" },
      { exam: "Mid-Term Exam", subject: "History", grade: "A-", score: "90/100" },
      { exam: "Mid-Term Exam", subject: "English", grade: "B", score: "84/100" },
      { exam: "First-Term Exam", subject: "Mathematics", grade: "A-", score: "89/100" },
      { exam: "First-Term Exam", subject: "Science", grade: "A", score: "94/100" },
      { exam: "First-Term Exam", subject: "History", grade: "B+", score: "86/100" },
      { exam: "First-Term Exam", subject: "English", grade: "A", score: "95/100" },
    ],
  },
  {
    id: 2,
    name: "Samantha Smith",
    class: "8B",
    profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
    grades: [
      { exam: "Mid-Term Exam", subject: "Mathematics", grade: "B", score: "82/100" },
      { exam: "Mid-Term Exam", subject: "Science", grade: "A", score: "91/100" },
      { exam: "Mid-Term Exam", subject: "History", grade: "A-", score: "89/100" },
      { exam: "Mid-Term Exam", subject: "English", grade: "A", score: "93/100" },
      { exam: "First-Term Exam", subject: "Mathematics", grade: "A", score: "95/100" },
      { exam: "First-Term Exam", subject: "Science", grade: "A-", score: "89/100" },
      { exam: "First-Term Exam", subject: "History", grade: "B+", score: "85/100" },
      { exam: "First-Term Exam", subject: "English", grade: "A", score: "97/100" },
    ],
  },
];

const getGradeColor = (grade) => {
  if (grade.startsWith("A")) return { background: "#d1fae5", color: "#059669", border: "1.5px solid #34d399" };
  if (grade.startsWith("B")) return { background: "#dbeafe", color: "#2563eb", border: "1.5px solid #60a5fa" };
  if (grade.startsWith("C")) return { background: "#fef9c3", color: "#ca8a04", border: "1.5px solid #fde047" };
  if (grade.startsWith("D")) return { background: "#fef3c7", color: "#ea580c", border: "1.5px solid #fdba74" };
  return { background: "#fee2e2", color: "#dc2626", border: "1.5px solid #fca5a5" };
};

const ParentGradesPage = () => {
  return (
    <div style={{ padding: "2.5rem 1rem", background: "#f3f6fa", minHeight: "100vh", maxWidth: 900, margin: "0 auto" }}>
      <div style={{ fontSize: 26, fontWeight: 800, color: "#2563eb", marginBottom: 28, display: "flex", alignItems: "center", gap: 12 }}>
        <FaAward /> Grades / Report Card
      </div>
      {children.map((child) => {
        // Group grades by exam
        const grouped = child.grades.reduce((acc, grade) => {
          (acc[grade.exam] = acc[grade.exam] || []).push(grade);
          return acc;
        }, {});
        return (
          <div key={child.id} style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", padding: 28, marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 18 }}>
              <img src={child.profilePic} alt={child.name} style={{ width: 60, height: 60, borderRadius: "50%", border: "2px solid #2563eb" }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 20 }}>{child.name}</div>
                <div style={{ color: "#555", fontSize: 15 }}>Class: <b>{child.class}</b></div>
              </div>
            </div>
            {Object.keys(grouped).map((exam) => (
              <div key={exam} style={{ marginBottom: 18 }}>
                <div style={{ fontWeight: 700, color: "#2563eb", fontSize: 17, marginBottom: 6 }}>{exam}</div>
                <div style={{ background: "#f3f6fa", borderRadius: 10, padding: 12 }}>
                  {grouped[exam].map((g, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: 14, padding: "7px 0", borderBottom: idx !== grouped[exam].length - 1 ? "1px solid #e5e7eb" : "none" }}>
                      <span style={{ color: "#2563eb", fontWeight: 600, minWidth: 110 }}>{g.subject}</span>
                      <span style={{ ...getGradeColor(g.grade), fontWeight: 700, fontSize: 15, borderRadius: 8, padding: "4px 14px", display: "inline-block", border: getGradeColor(g.grade).border }}>{g.grade}</span>
                      <span style={{ color: "#888", fontWeight: 500 }}>{g.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default ParentGradesPage; 