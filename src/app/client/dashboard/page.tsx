"use client";

import Sidebar from '../clientcomponets/Sidebar';
import DashboardHeader from './Dashboardheader';

export default function Dashboard() {
  return (
    <div className="relative flex min-h-screen text-white bg-[#0f172a]">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-blur-gradient pointer-events-none"></div>

      {/* Dashboard Content */}
      <div className="relative flex w-full">
        <Sidebar />
        <main className="flex-1 p-6 backdrop-blur-lg shadow-2xl bg-opacity-60">
          <DashboardHeader />
        </main>
      </div>
    </div>
  );
}

