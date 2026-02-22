// src/components/admin/AdminTopbar.tsx

import { Bell, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

interface TopbarProps {
  toggleSidebar: () => void;
}

const AdminTopbar = ({ toggleSidebar }: TopbarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full h-16 bg-gray-100 border-b flex items-center justify-between px-6 sticky top-0 z-30">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-md hover:bg-gray-200 transition"
        ></button>

        <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-6">
        {/* System Status */}
        <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
          <span>System Online</span>
        </div>

        {/* Notification */}
        <div className="relative">
          <button className="p-2 rounded-full hover:bg-gray-200 transition">
            <Bell size={20} className="text-gray-700" />
          </button>

          {/* Red Notification Dot */}
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center font-semibold">
              AD
            </div>

            <div className="hidden md:block text-left">
              <p className="text-sm font-medium text-gray-800">Admin User</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>

            <ChevronDown size={16} className="text-gray-600" />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-3 w-44 bg-white border rounded-lg shadow-lg py-2 z-50">
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                Profile
              </button>
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                Settings
              </button>
              <hr />
              <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminTopbar;
