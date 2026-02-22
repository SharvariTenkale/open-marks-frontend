// src/components/admin/AdminSidebar.tsx

import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  HelpCircle,
  ClipboardCheck,
  MessageSquare,
  Users,
  Settings,
  FileSearch,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminSidebar = ({ isCollapsed, setIsCollapsed }: SidebarProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div
      className={`
    fixed top-0 left-0
    h-screen
    bg-[#243B8A]
    text-white
    flex flex-col justify-between
    transition-all duration-300
    ${isCollapsed ? "w-20" : "w-64"}
  `}
    >
      {/* Top Section */}
      <div>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-6 border-b border-blue-800">
          {!isCollapsed && (
            <h1 className="text-lg font-semibold">Exam Admin</h1>
          )}

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-md hover:bg-blue-700 transition"
          >
            {isCollapsed ? (
              <ChevronRight size={18} />
            ) : (
              <ChevronLeft size={18} />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-4 flex flex-col gap-1 px-2">
          <NavItem
            to="/admin/dashboard"
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            collapsed={isCollapsed}
          />

          <NavItem
            to="/admin/exams"
            icon={<FileText size={20} />}
            label="Exams"
            collapsed={isCollapsed}
          />

          <NavItem
            to="/admin/questions"
            icon={<HelpCircle size={20} />}
            label="Questions"
            collapsed={isCollapsed}
          />

          <NavItem
            to="/admin/attempts"
            icon={<ClipboardCheck size={20} />}
            label="Attempts & Evaluation"
            collapsed={isCollapsed}
          />

          <NavItem
            to="/admin/grievances"
            icon={<MessageSquare size={20} />}
            label="Grievances"
            collapsed={isCollapsed}
          />

          <NavItem
            to="/admin/users"
            icon={<Users size={20} />}
            label="Users"
            collapsed={isCollapsed}
          />

          <NavItem
            to="/admin/settings"
            icon={<Settings size={20} />}
            label="System Settings"
            collapsed={isCollapsed}
          />

          <NavItem
            to="/admin/audit-logs"
            icon={<FileSearch size={20} />}
            label="Audit Logs"
            collapsed={isCollapsed}
          />
        </nav>
      </div>

      {/* Logout Section */}
      <div className="p-4 border-t border-blue-800">
        <button
          onClick={handleLogout}
          className={`
            flex items-center w-full
            ${isCollapsed ? "justify-center" : "gap-3"}
            px-3 py-2 rounded-lg
            hover:bg-blue-700 transition
          `}
        >
          <LogOut size={20} />
          {!isCollapsed && <span className="text-sm">Logout</span>}
        </button>
      </div>
    </div>
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
        `
        relative flex items-center
        ${collapsed ? "justify-center" : "gap-3"}
        px-3 py-3 rounded-md transition-all duration-200
        ${
          isActive
            ? "bg-[#2563EB] text-white"
            : "text-blue-100 hover:bg-blue-700"
        }
        `
      }
    >
      {/* Green Left Indicator */}
      <span
        className={`
          absolute left-0 top-0 h-full w-1 rounded-r
          ${window.location.pathname === to ? "bg-green-400" : "transparent"}
        `}
      />

      {icon}
      {!collapsed && <span className="text-sm">{label}</span>}
    </NavLink>
  );
};

export default AdminSidebar;
