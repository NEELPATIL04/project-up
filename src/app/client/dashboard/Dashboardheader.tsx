import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { FaUserCircle, FaCog, FaBell, FaSearch } from "react-icons/fa";

const projectCompletionData = [{ name: "Completed", value: 75 }, { name: "Remaining", value: 25 }];
const todaysCompletionData = [{ name: "Completed", value: 50 }, { name: "Remaining", value: 50 }];
const remainingDaysData = [{ name: "Remaining", value: 10 }, { name: "Elapsed", value: 90 }];

const COLORS = ["#0075ff", "#E0E0E0"];

export default function DashboardHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div>
      {/* Top Navbar */}
      <div className="flex flex-col lg:flex-row justify-between mb-6 p-4 rounded-lg relative">
        {/* Breadcrumb moved to top left in desktop */}
        <div className="hidden lg:flex items-center space-x-2 text-gray-400">
          <span className="text-sm">🏠 / Dashboard</span>
        </div>

        {/* Icons group with search */}
        <div className="flex items-center space-x-4 justify-end relative z-10">
          <div className="relative">
            <FaSearch 
              className="text-xl cursor-pointer hover:text-gray-300" 
              onClick={() => setIsSearchOpen(!isSearchOpen)} 
            />
            {/* Desktop Search - Opens to the left of search icon */}
            {isSearchOpen && (
              <div className="hidden lg:block absolute right-0 top-full mt-2 w-64 bg-[#0f1535] rounded-lg p-2 shadow-lg">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="w-full bg-transparent text-white pl-10 pr-4 py-2 outline-none rounded-lg"
                    autoFocus
                  />
                </div>
              </div>
            )}
          </div>
          <FaUserCircle className="text-xl cursor-pointer hover:text-gray-300" />
          <FaCog className="text-xl cursor-pointer hover:text-gray-300" />
          <FaBell className="text-xl cursor-pointer hover:text-gray-300" />
        </div>

        {/* Mobile Search - Full width */}
        {isSearchOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-[#0f1535] p-4 shadow-lg z-20">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Type here..."
                className="w-full bg-transparent text-white pl-10 pr-4 py-2 outline-none rounded-lg border border-gray-700"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Breadcrumb */}
      <div className="lg:hidden flex items-center space-x-2 text-gray-400 pl-5 mb-4 z-10 relative">
        <span className="text-xs">🏠 / Dashboard</span>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {/* Graph Cards */}
        {[ 
          { title: "Project Completion", value: "75%", data: projectCompletionData },
          { title: "Today's Completion", value: "50%", data: todaysCompletionData },
          { title: "Remaining Days", value: "20 Days", data: remainingDaysData },
        ].map((card, index) => (
          <div key={index} className="bg-[#0b0c23] p-5 rounded-lg shadow-lg flex justify-between items-center h-24 lg:h-20 w-full">
            <div>
              <p className="text-gray-400 text-sm">{card.title}</p>
              <h2 className="text-xl font-bold">{card.value}</h2>
            </div>
            <div className="w-16 h-16">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={card.data} dataKey="value" cx="50%" cy="50%" innerRadius={20} outerRadius={30}>
                    {card.data.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}

        {/* Status Card */}
        <div className="bg-[#0b0c23] p-5 rounded-lg shadow-lg flex justify-between items-center h-24 lg:h-20 w-full">
          <div>
            <p className="text-gray-400 text-sm">Project Status</p>
            <span className="text-xl font-bold text-green-500">Active</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full animate-ping bg-green-500" />
            <span className="ml-2">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}