"use client"
import { FaTasks, FaChartBar, FaClipboardCheck, FaCalendarAlt, FaUserShield, FaFileInvoiceDollar, FaHome, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <FaHome />, text: "Dashboard" },
    { icon: <FaTasks />, text: "Tasks" },
    { icon: <FaChartBar />, text: "Project Report" },
    { icon: <FaClipboardCheck />, text: "Details Completion" },
    { icon: <FaCalendarAlt />, text: "Deadlines" },
    { icon: <FaUserShield />, text: "Contact Admin" },
    { icon: <FaFileInvoiceDollar />, text: "Billing & Pending Payments" },
  ];

  return (
    <>
      {/* Hamburger Menu Button */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-800 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed lg:relative h-screen w-64 bg-gradient-to-b from-gray-900 to-gray-800 
        text-white p-5 flex flex-col rounded-r-3xl shadow-lg transition-transform duration-300 ease-in-out z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <h1 className="text-2xl font-bold mb-8 text-center">WEBDRIFT</h1>
        <nav className="flex flex-col space-y-2">
          {menuItems.map((item) => (
            <div
              key={item.text}
              className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition ${
                active === item.text ? "bg-gray-700 font-semibold" : "hover:bg-gray-700"
              }`}
              onClick={() => setActive(item.text)}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}