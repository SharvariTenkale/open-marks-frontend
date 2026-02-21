import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Award,
  AlertCircle,
  User,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Sidebar = ({
  isCollapsed,
  setIsCollapsed,
}: {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-screen bg-white border-r flex flex-col justify-between
  transition-all duration-300
  ${isCollapsed ? "w-20" : "w-64"}`}
      >
        {/* Top Section */}
        <div>
          {/* Header */}
          <div className="flex items-center justify-between p-6">
            {!isCollapsed && (
              <div>
                <h1 className="text-lg font-semibold text-blue-700">
                  Exam Portal
                </h1>
                <p className="text-sm text-gray-500">Student Dashboard</p>
              </div>
            )}

            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-lg border hover:bg-gray-100 transition"
            >
              {isCollapsed ? (
                <ChevronRight size={18} />
              ) : (
                <ChevronLeft size={18} />
              )}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2 px-3 mt-4">
            <NavItem
              to="/student"
              icon={<LayoutDashboard size={20} />}
              label="Dashboard"
              collapsed={isCollapsed}
            />
            <NavItem
              to="/student/my-exams"
              icon={<FileText size={20} />}
              label="My Exams"
              collapsed={isCollapsed}
            />
            <NavItem
              to="/student/results"
              icon={<Award size={20} />}
              label="Results"
              collapsed={isCollapsed}
            />
            <NavItem
              to="/student/grievances"
              icon={<AlertCircle size={20} />}
              label="Grievances"
              collapsed={isCollapsed}
            />
            <NavItem
              to="/student/profile"
              icon={<User size={20} />}
              label="Profile"
              collapsed={isCollapsed}
            />
            <NavItem
              to="/student/settings"
              icon={<Settings size={20} />}
              label="Settings"
              collapsed={isCollapsed}
            />
          </nav>
        </div>

        {/* Bottom User Section */}
        <div className="p-4 border-t">
          <div
            className={`flex items-center ${
              isCollapsed ? "justify-center" : "gap-3"
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-semibold">
              JS
            </div>

            {!isCollapsed && (
              <div>
                <p className="text-sm font-medium">John Smith</p>
                <p className="text-xs text-gray-500">STU-2024-001</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const NavItem = ({
  to,
  icon,
  label,
  collapsed,
}: {
  to: string;
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
}) => {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `flex items-center ${
          collapsed ? "justify-center" : "gap-3"
        } px-3 py-2 rounded-lg transition-all duration-200
        ${
          isActive
            ? "bg-blue-700 text-white"
            : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
        }`
      }
    >
      {icon}
      {!collapsed && <span className="text-sm font-medium">{label}</span>}
    </NavLink>
  );
};

export default Sidebar;
