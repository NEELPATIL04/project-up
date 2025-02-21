import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { FaUserCircle, FaCog, FaBell, FaSearch } from "react-icons/fa";

const projectCompletionData = [{ name: "Completed", value: 75 }, { name: "Remaining", value: 25 }];
const todaysCompletionData = [{ name: "Completed", value: 50 }, { name: "Remaining", value: 50 }];
const remainingDaysData = [{ name: "Remaining", value: 10 }, { name: "Elapsed", value: 90 }];

const COLORS = ["#0075ff", "#E0E0E0"];

export default function Dashboard() {
  return (
    <div className="  ">
      {/* Top Navbar */}
      <div className="flex justify-between items-center mb-6  p-4 rounded-lg">
        <div className="flex items-center space-x-2 text-gray-400">
          <span className="text-sm">🏠 / Dashboard</span>
          <h1 className="text-xl font-bold text-white">Dashboard</h1>
        </div>

        {/* Search Box and Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Type here..."
              className="bg-[#0f1535] text-white rounded-lg pl-10 pr-4 py-2 outline-none"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <FaUserCircle className="text-xl cursor-pointer hover:text-gray-300" />
          <FaCog className="text-xl cursor-pointer hover:text-gray-300" />
          <FaBell className="text-xl cursor-pointer hover:text-gray-300" />
          <button className=" px-4 py-2 rounded-lg">Sign in</button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-4 gap-6 ">
        <GraphCard title="Project Completion" value="75%" data={projectCompletionData} />
        <GraphCard title="Today's Completion" value="50%" data={todaysCompletionData} />
        <GraphCard title="Remaining Days" value="20 Days" data={remainingDaysData} />
        <StatusCard title="Project Status" status="active" />
      </div>
    </div>
  );
}

// Graph Card Component
function GraphCard({ title, value, data }: { title: string; value: string; data: { name: string; value: number }[] }) {
  return (
    <div className="bg-[#0b0c23] p-5 rounded-lg shadow-lg flex justify-between items-center h-20 w-full">
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <h2 className="text-xl font-bold">{value}</h2>
      </div>
      <div className="w-16 h-16">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={20} outerRadius={30}>
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// Status Card Component
function StatusCard({ title, status }: { title: string; status: "active" | "inactive" }) {
  return (
    <div className="bg-[#0b0c23] p-5 rounded-lg shadow-lg flex justify-between items-center h-20 w-full">
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <span className={`text-xl font-bold ${status === "active" ? "text-green-500" : "text-red-500"}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      <div className="flex items-center">
        <div className={`h-3 w-3 rounded-full animate-ping ${status === "active" ? "bg-green-500" : "bg-red-500"}`} />
        <span className="ml-2">{status === "active" ? "Active" : "Inactive"}</span>
      </div>
    </div>
  );
}
