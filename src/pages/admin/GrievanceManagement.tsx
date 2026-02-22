import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";
import GrievanceHeader from "../../components/admin/grievances/GrievanceHeader";
import GrievanceFilters from "../../components/admin/grievances/GrievanceFilters";
import GrievanceStats from "../../components/admin/grievances/GrievanceStats";
import GrievanceTable from "../../components/admin/grievances/GrievanceTable";

const GrievanceManagement = ({ role = "admin" }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <AdminSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isCollapsed ? "ml-20" : "ml-64"
        }`}
      >
        <AdminTopbar toggleSidebar={() => setIsCollapsed(!isCollapsed)} />

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          <GrievanceHeader />
          <GrievanceFilters />
          <GrievanceStats />
          <GrievanceTable />
        </main>
      </div>
    </div>
  );
};

export default GrievanceManagement;
