import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";

import GrievanceHeader from "../../components/admin/grievances/detail/GrievanceHeader";
import StudentInfoCard from "../../components/admin/grievances/detail/StudentInfoCard";
import QuestionContextCard from "../../components/admin/grievances/detail/QuestionContextCard";
import StudentGrievanceCard from "../../components/admin/grievances/detail/StudentGrievanceCard";
// import ResolutionHistoryCard from "../../components/admin/grievances/detail/ResolutionHistoryCard";
import ResolutionPanel from "../../components/admin/grievances/detail/ResolutionPanel";

const GrievanceDetail = ({ role = "admin" }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isCollapsed ? "ml-20" : "ml-64"
        }`}
      >
        <AdminTopbar toggleSidebar={() => setIsCollapsed(!isCollapsed)} />

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <GrievanceHeader />

          {/* Responsive layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
            {/* Left Section */}
            <div className="lg:col-span-2 space-y-6">
              <StudentInfoCard />
              <QuestionContextCard />
              <StudentGrievanceCard />
              {/* <ResolutionHistoryCard /> */}
            </div>

            {/* Right Panel */}
            <div>
              <ResolutionPanel role="admin" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GrievanceDetail;
