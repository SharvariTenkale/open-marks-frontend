import { useState, useEffect } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";
import StatsGrid from "../../components/admin/dashboard/StatsGrid";
import UpcomingExams from "../../components/admin/dashboard/UpcomingExams";
import GrievanceSummary from "../../components/admin/dashboard/GrievanceSummary";
import ActivityTable from "../../components/admin/dashboard/ActivityTable";

const AdminDashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {
    // 🔥 Dummy Data for Demo
    setMetrics({
      total_students: 120,
      total_exams: 5,
      exams_by_status: {
        scheduled: 2,
        live: 1,
        completed: 1,
        locked: 1,
      },
      pending_grievances: 3,
      pending_evaluations: 7,
    });
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <AdminSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div
        className={`
    flex-1 flex flex-col transition-all duration-300
    ${isCollapsed ? "ml-20" : "ml-64"}
  `}
      >
        <AdminTopbar toggleSidebar={() => {}} />

        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          {metrics && <StatsGrid metrics={metrics} />}

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <UpcomingExams />
            </div>
            <GrievanceSummary />
          </div>

          <ActivityTable />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
