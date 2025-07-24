import React from "react";
import { FaRupeeSign, FaCheckCircle, FaExclamationCircle, FaCalendarAlt, FaRegCreditCard } from "react-icons/fa";

const children = [
  {
    id: 1,
    name: "John Doe",
    class: "10A",
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
    feeSummary: {
      total: 75000,
      paid: 60000,
      due: 15000,
      nextDueDate: "2023-11-15",
    },
    paymentHistory: [
      { date: "2023-08-10", amount: 30000, receiptId: "R89234", status: "Paid" },
      { date: "2023-09-12", amount: 15000, receiptId: "R90345", status: "Paid" },
      { date: "2023-10-14", amount: 15000, receiptId: "R91456", status: "Paid" },
    ],
  },
  {
    id: 2,
    name: "Samantha Smith",
    class: "8B",
    profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
    feeSummary: {
      total: 70000,
      paid: 50000,
      due: 20000,
      nextDueDate: "2023-11-10",
    },
    paymentHistory: [
      { date: "2023-08-10", amount: 20000, receiptId: "R81234", status: "Paid" },
      { date: "2023-09-12", amount: 15000, receiptId: "R82345", status: "Paid" },
      { date: "2023-10-14", amount: 15000, receiptId: "R83456", status: "Paid" },
    ],
  },
];

const ParentFeeDetailsPage = () => {
  return (
    <div style={{ padding: "2.5rem 1rem", background: "#f3f6fa", minHeight: "100vh", maxWidth: 900, margin: "0 auto" }}>
      <div style={{ fontSize: 26, fontWeight: 800, color: "#2563eb", marginBottom: 28, display: "flex", alignItems: "center", gap: 12 }}>
        <FaRupeeSign /> Fee Details
      </div>
      {children.map((child) => {
        const { total, paid, due, nextDueDate } = child.feeSummary;
        return (
          <div key={child.id} style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", padding: 28, marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 18 }}>
              <img src={child.profilePic} alt={child.name} style={{ width: 60, height: 60, borderRadius: "50%", border: "2px solid #2563eb" }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 20 }}>{child.name}</div>
                <div style={{ color: "#555", fontSize: 15 }}>Class: <b>{child.class}</b></div>
              </div>
            </div>
            {/* Fee Summary */}
            <div style={{ display: "flex", gap: 24, marginBottom: 16, flexWrap: "wrap" }}>
              <div style={{ color: "#2563eb", fontWeight: 700, fontSize: 17 }}>Total: ₹{total.toLocaleString()}</div>
              <div style={{ color: "#22c55e", fontWeight: 700, fontSize: 17 }}>Paid: ₹{paid.toLocaleString()}</div>
              <div style={{ color: due > 0 ? "#ef4444" : "#22c55e", fontWeight: 700, fontSize: 17 }}>Due: ₹{due.toLocaleString()}</div>
              <div style={{ color: "#f59e42", fontWeight: 700, fontSize: 17 }}>Next Due: {nextDueDate}</div>
            </div>
            {due > 0 && (
              <button style={{ background: "linear-gradient(90deg,#2563eb,#22c55e)", color: "#fff", fontWeight: 700, fontSize: 16, border: "none", borderRadius: 8, padding: "10px 28px", marginBottom: 18, cursor: "pointer", boxShadow: "0 2px 8px rgba(37,99,235,0.13)" }}>
                <FaRegCreditCard style={{ marginRight: 8, verticalAlign: "middle" }} /> Pay Now
              </button>
            )}
            {/* Payment History */}
            <div style={{ fontWeight: 600, fontSize: 16, color: "#2563eb", marginBottom: 8 }}>Payment History</div>
            <div style={{ background: "#f3f6fa", borderRadius: 10, padding: 12 }}>
              {child.paymentHistory.map((entry, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: 14, padding: "7px 0", borderBottom: idx !== child.paymentHistory.length - 1 ? "1px solid #e5e7eb" : "none" }}>
                  <span style={{ fontWeight: 500, color: "#222", minWidth: 90 }}>{entry.date}</span>
                  <span style={{ fontWeight: 500, color: "#2563eb" }}>₹{entry.amount.toLocaleString()}</span>
                  <span style={{ fontWeight: 500, color: "#888" }}>Receipt: {entry.receiptId}</span>
                  <span style={{ fontWeight: 500, color: entry.status === "Paid" ? "#22c55e" : "#ef4444" }}>{entry.status === "Paid" ? <FaCheckCircle style={{ color: "#22c55e", marginRight: 4, verticalAlign: "middle" }} /> : <FaExclamationCircle style={{ color: "#ef4444", marginRight: 4, verticalAlign: "middle" }} />} {entry.status}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ParentFeeDetailsPage; 