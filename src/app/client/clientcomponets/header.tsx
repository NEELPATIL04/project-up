// components/layout/Header.tsx
"use client"
import { useState } from 'react';
import { FaUserCircle, FaCog, FaBell, FaSearch } from "react-icons/fa";
import Breadcrumb from './breadcrumb';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-[#0f1535] border-b border-gray-800">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-4">
        <Breadcrumb />
        
        {/* Right side icons */}
        <div className="flex items-center space-x-4 ml-auto">
          <div className="relative">
            <FaSearch 
              className="text-xl cursor-pointer hover:text-gray-300" 
              onClick={() => setIsSearchOpen(!isSearchOpen)} 
            />
            {/* Desktop Search */}
            {isSearchOpen && (
              <div className="hidden lg:block absolute right-0 top-full mt-2 w-64 bg-[#0b0c23] rounded-lg p-2 shadow-lg">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-transparent text-white pl-10 pr-4 py-2 outline-none rounded-lg border border-gray-700"
                    autoFocus
                  />
                </div>
              </div>
            )}
          </div>
          
          <FaBell className="text-xl cursor-pointer hover:text-gray-300" />
          <FaCog className="text-xl cursor-pointer hover:text-gray-300" />
          <FaUserCircle className="text-xl cursor-pointer hover:text-gray-300" />
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-[#0f1535] p-4 shadow-lg z-20">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent text-white pl-10 pr-4 py-2 outline-none rounded-lg border border-gray-700"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;