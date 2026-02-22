import { Outlet } from "react-router-dom";
import AdminTopbar from "../components/admin/AdminTopbar";
import ReviewerSidebar from "../components/reviewer/ReviewerSidebar";
import { useState } from "react";

const ReviewerLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <ReviewerSidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isCollapsed ? "ml-20" : "ml-64"
        }`}
      >
        <AdminTopbar toggleSidebar={() => setIsCollapsed(!isCollapsed)} />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ReviewerLayout;
