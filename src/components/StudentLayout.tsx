import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useState } from "react";

const StudentLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div
        className={`min-h-screen transition-all duration-300
        ${isCollapsed ? "ml-20" : "ml-64"}`}
      >
        <Topbar />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StudentLayout;
