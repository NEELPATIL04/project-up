import { FaTasks, FaChartBar, FaClipboardCheck, FaCalendarAlt, FaUserShield, FaFileInvoiceDollar, FaHome } from "react-icons/fa";
import { useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

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
    <div className="h-screen w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-5 flex flex-col rounded-r-3xl shadow-lg">
      <h1 className="text-2xl font-bold mb-8 text-center">WEBDRIFT</h1>
      <nav className="flex flex-col space-y-2">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            active={active === item.text}
            onClick={() => setActive(item.text)}
          />
        ))}
      </nav>
    </div>
  );
}

function SidebarItem({ icon, text, active, onClick }: { icon: JSX.Element; text: string; active: boolean; onClick: () => void }) {
  return (
    <div
      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition ${
        active ? "bg-gray-700 font-semibold" : "hover:bg-gray-700"
      }`}
      onClick={onClick}
    >
      <span className="text-lg">{icon}</span>
      <span className="text-sm">{text}</span>
    </div>
  );
}
