import React from "react";
import { FaFileAlt, FaPaperclip, FaCalendarAlt, FaBullhorn } from "react-icons/fa";

const notices = [
  {
    id: 1,
    title: "PTM Scheduled",
    date: "2023-11-10",
    description: "Parent-Teacher Meeting will be held in the school auditorium at 10:00 AM.",
    attachment: null,
  },
  {
    id: 2,
    title: "Fee Reminder",
    date: "2023-11-05",
    description: "Please pay the pending school fee for the second term before the due date.",
    attachment: "fee-circular.pdf",
  },
  {
    id: 3,
    title: "Sports Day",
    date: "2023-11-20",
    description: "Annual Sports Day will be organized on the school ground. All students must participate in at least one event.",
    attachment: null,
  },
  {
    id: 4,
    title: "Winter Vacation",
    date: "2023-12-24",
    description: "School will remain closed from 24th Dec to 2nd Jan for winter vacation.",
    attachment: null,
  },
];

const ParentNoticesPage = () => {
  return (
    <div style={{ padding: "2.5rem 1rem", background: "#f3f6fa", minHeight: "100vh", maxWidth: 900, margin: "0 auto" }}>
      <div style={{ fontSize: 26, fontWeight: 800, color: "#2563eb", marginBottom: 28, display: "flex", alignItems: "center", gap: 12 }}>
        <FaBullhorn /> School Notices & Announcements
      </div>
      {notices.map((notice) => (
        <div key={notice.id} style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", padding: 28, marginBottom: 24, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
            <FaFileAlt style={{ color: "#2563eb", fontSize: 22 }} />
            <span style={{ fontWeight: 700, fontSize: 19 }}>{notice.title}</span>
            <span style={{ color: "#888", fontSize: 15, marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}><FaCalendarAlt /> {notice.date}</span>
          </div>
          <div style={{ color: "#444", fontSize: 16, marginBottom: 4 }}>{notice.description}</div>
          {notice.attachment && (
            <a href={`/${notice.attachment}`} target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb", fontWeight: 500, fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
              <FaPaperclip /> Attachment
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default ParentNoticesPage; 