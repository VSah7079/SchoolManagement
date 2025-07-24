import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaChild } from "react-icons/fa";

const parent = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  phone: "+1 987 654 321",
  profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
  children: [
    {
      id: 1,
      name: "John Doe",
      class: "10A",
      roll: "23",
      profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Samantha Smith",
      class: "8B",
      roll: "12",
      profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ],
};

const ParentProfilePage = () => {
  return (
    <div style={{ padding: "2.5rem 1rem", background: "#f3f6fa", minHeight: "100vh", maxWidth: 900, margin: "0 auto" }}>
      <div style={{ fontSize: 26, fontWeight: 800, color: "#2563eb", marginBottom: 28, display: "flex", alignItems: "center", gap: 12 }}>
        <FaUser /> Parent Profile
      </div>
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", padding: 32, marginBottom: 32, display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
        <img src={parent.profilePic} alt={parent.name} style={{ width: 110, height: 110, borderRadius: "50%", objectFit: "cover", border: "4px solid #2563eb" }} />
        <div style={{ flex: 1, minWidth: 220 }}>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#222", marginBottom: 8 }}>{parent.name}</div>
          <div style={{ color: "#555", marginBottom: 4, fontSize: 17 }}><FaEnvelope style={{ marginRight: 8, verticalAlign: "middle" }} /> {parent.email}</div>
          <div style={{ color: "#555", fontSize: 17 }}><FaPhone style={{ marginRight: 8, verticalAlign: "middle" }} /> {parent.phone}</div>
        </div>
      </div>
      <div style={{ fontSize: 22, fontWeight: 700, color: "#2563eb", marginBottom: 18, display: "flex", alignItems: "center", gap: 10 }}><FaChild color="#2563eb" /> Children</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 28, justifyContent: "flex-start" }}>
        {parent.children.map((child) => (
          <div key={child.id} style={{ background: "#fff", borderRadius: 16, boxShadow: "0 1px 8px rgba(0,0,0,0.07)", padding: 24, minWidth: 220, maxWidth: 250, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img src={child.profilePic} alt={child.name} style={{ width: 60, height: 60, borderRadius: "50%", marginBottom: 12, border: "2px solid #2563eb" }} />
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>{child.name}</div>
            <div style={{ color: "#555", marginBottom: 2 }}>Class: <b>{child.class}</b></div>
            <div style={{ color: "#555", marginBottom: 2 }}>Roll No: <b>{child.roll}</b></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentProfilePage; 