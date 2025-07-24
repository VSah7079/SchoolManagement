import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaChild, FaCheckCircle, FaExclamationCircle, FaRupeeSign, FaBell, FaCalendarCheck, FaFileAlt, FaAward, FaInfoCircle, FaUserCircle, FaChevronRight } from "react-icons/fa";

// Mock parent and children data
const parent = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  phone: "+1 987 654 321",
  profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
  children: [
    {
      id: 1,
      name: "John Doe",
      studentId: "S12345",
      class: "10A",
      roll: "23",
      status: "Active",
      profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
      feeDue: false,
    },
    {
      id: 2,
      name: "Samantha Smith",
      studentId: "S12346",
      class: "8B",
      roll: "12",
      status: "Active",
      profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
      feeDue: true,
    },
  ],
};

const notifications = [
  {
    icon: <FaBell style={{ color: "#2563eb" }} />,
    title: "PTM Scheduled",
    description: "Parent-Teacher Meeting on 2023-11-10 at 10:00 AM.",
    date: "2023-10-28",
  },
  {
    icon: <FaInfoCircle style={{ color: "#22c55e" }} />,
    title: "Fee Reminder",
    description: "Fee for Samantha Smith is due by 2023-11-05.",
    date: "2023-10-25",
  },
  {
    icon: <FaAward style={{ color: "#f59e42" }} />,
    title: "Result Published",
    description: "Mid-term results for John Doe are now available.",
    date: "2023-10-20",
  },
];

const cardData = [
  { title: "Attendance", link: "/parent/attendance", icon: <FaCalendarCheck size={28} /> },
  { title: "Fee Details", link: "/parent/fee", icon: <FaRupeeSign size={28} /> },
  { title: "Grades/Report Card", link: "/parent/grades", icon: <FaAward size={28} /> },
  { title: "Notices", link: "/parent/notices", icon: <FaFileAlt size={28} /> },
  { title: "Profile", link: "/parent/profile", icon: <FaUserCircle size={28} /> },
];

const getStats = (children) => {
  const total = children.length;
  const active = children.filter((c) => c.status === "Active").length;
  const feeDue = children.filter((c) => c.feeDue).length;
  return [
    { label: "Total Children", value: total, icon: <FaChild color="#2563eb" /> },
    { label: "Active", value: active, icon: <FaCheckCircle color="#22c55e" /> },
    { label: "Fee Due", value: feeDue, icon: <FaExclamationCircle color="#f59e42" /> },
  ];
};

const sectionTitleStyle = {
  fontSize: 22,
  fontWeight: 700,
  margin: "0 0 18px 0",
  color: "#2563eb",
  letterSpacing: 0.5,
  display: "flex",
  alignItems: "center",
  gap: 10,
};

const dividerStyle = {
  height: 1,
  background: "#e5e7eb",
  margin: "24px 0",
  border: 0,
};

const ParentDashboard = () => {
  const stats = getStats(parent.children);
  return (
    <div style={{ padding: "2.5rem 1rem", background: "#f3f6fa", minHeight: "100vh", maxWidth: 1200, margin: "0 auto" }}>
      {/* Parent Profile Card */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "center", background: "#fff", borderRadius: 18, boxShadow: "0 2px 16px rgba(0,0,0,0.09)", padding: 36, marginBottom: 32 }}>
        <img src={parent.profilePic} alt={parent.name} style={{ width: 110, height: 110, borderRadius: "50%", objectFit: "cover", border: "4px solid #2563eb", marginBottom: 12 }} />
        <div style={{ flex: 1, minWidth: 220 }}>
          <div style={{ fontSize: 30, fontWeight: 800, color: "#222", marginBottom: 8 }}>{parent.name}</div>
          <div style={{ color: "#555", marginBottom: 4, fontSize: 17 }}><FaEnvelope style={{ marginRight: 8, verticalAlign: "middle" }} /> {parent.email}</div>
          <div style={{ color: "#555", fontSize: 17 }}><FaPhone style={{ marginRight: 8, verticalAlign: "middle" }} /> {parent.phone}</div>
        </div>
        <div style={{ display: "flex", gap: 18 }}>
          {stats.map((stat) => (
            <div key={stat.label} style={{ background: "#f3f6fa", borderRadius: 12, boxShadow: "0 1px 6px rgba(37,99,235,0.08)", padding: "18px 28px", display: "flex", alignItems: "center", minWidth: 120, flexDirection: "column" }}>
              <span style={{ fontSize: 26, marginBottom: 4 }}>{stat.icon}</span>
              <div style={{ fontWeight: 700, fontSize: 22, color: "#2563eb" }}>{stat.value}</div>
              <div style={{ color: "#666", fontSize: 15 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Children Section */}
      <div style={sectionTitleStyle}><FaChild color="#2563eb" /> Your Children</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 28, justifyContent: "flex-start", marginBottom: 18 }}>
        {parent.children.map((child) => (
          <div key={child.id} style={{ background: "#fff", borderRadius: 16, boxShadow: "0 1px 8px rgba(0,0,0,0.07)", padding: 24, minWidth: 240, maxWidth: 270, display: "flex", flexDirection: "column", alignItems: "center", position: "relative", transition: "box-shadow 0.2s", border: child.feeDue ? "2px solid #f59e42" : "2px solid #f3f6fa" }}>
            <img src={child.profilePic} alt={child.name} style={{ width: 70, height: 70, borderRadius: "50%", marginBottom: 12, border: "2px solid #2563eb" }} />
            <div style={{ fontWeight: 700, fontSize: 19, marginBottom: 4 }}>{child.name}</div>
            <div style={{ color: "#555", marginBottom: 2 }}>Class: <b>{child.class}</b></div>
            <div style={{ color: "#555", marginBottom: 2 }}>Roll No: <b>{child.roll}</b></div>
            <div style={{ color: child.status === "Active" ? "#22c55e" : "#f59e42", fontWeight: 600, marginBottom: 2 }}>{child.status}</div>
            {child.feeDue && <div style={{ color: "#f59e42", fontWeight: 600, fontSize: 14, marginTop: 4, display: "flex", alignItems: "center" }}><FaExclamationCircle style={{ marginRight: 4, verticalAlign: "middle" }} /> Fee Due</div>}
            <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
              <Link to="/parent/grades" style={{ color: "#2563eb", fontWeight: 500, fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                <FaAward /> Grades <FaChevronRight style={{ fontSize: 13 }} />
              </Link>
              <Link to="/parent/profile" style={{ color: "#22c55e", fontWeight: 500, fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                <FaUser /> Profile <FaChevronRight style={{ fontSize: 13 }} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <hr style={dividerStyle} />

      {/* Notifications Section */}
      <div style={sectionTitleStyle}><FaBell color="#2563eb" /> Notifications</div>
      <div style={{ maxWidth: 900, margin: "0 auto 32px auto", background: "#fff", borderRadius: 16, boxShadow: "0 1px 8px rgba(0,0,0,0.07)", padding: 24 }}>
        {notifications.length === 0 ? (
          <div style={{ color: "#888", textAlign: "center" }}>No notifications.</div>
        ) : (
          notifications.map((note, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", borderBottom: idx !== notifications.length - 1 ? "1px solid #eee" : "none", padding: "14px 0" }}>
              <span style={{ fontSize: 22, marginRight: 16 }}>{note.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 17, color: "#2563eb" }}>{note.title}</div>
                <div style={{ color: "#555", fontSize: 15 }}>{note.description}</div>
              </div>
              <div style={{ color: "#888", fontSize: 13, marginLeft: 16 }}>{note.date}</div>
            </div>
          ))
        )}
      </div>
      <hr style={dividerStyle} />

      {/* Dashboard Actions */}
      <div style={sectionTitleStyle}><FaUserCircle color="#2563eb" /> Quick Actions</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
        {cardData.map((card) => (
          <Link
            key={card.title}
            to={card.link}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                minWidth: 170,
                minHeight: 100,
                background: "#fff",
                borderRadius: 14,
                boxShadow: "0 2px 8px rgba(37,99,235,0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 17,
                fontWeight: 600,
                transition: "box-shadow 0.2s, transform 0.2s",
                cursor: "pointer",
                marginBottom: 12,
                border: "2px solid #f3f6fa",
                color: "#2563eb",
                boxSizing: "border-box",
              }}
              onMouseOver={e => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(37,99,235,0.13)"; e.currentTarget.style.transform = "translateY(-2px) scale(1.03)"; }}
              onMouseOut={e => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(37,99,235,0.08)"; e.currentTarget.style.transform = "none"; }}
            >
              <span style={{ marginBottom: 8 }}>{card.icon}</span>
              {card.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ParentDashboard; 