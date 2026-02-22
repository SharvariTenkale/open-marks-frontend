import { useEffect, useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";
import ExamsHeader from "../../components/admin/exams/ExamsHeader";
import ExamsTable from "../../components/admin/exams/ExamsTable";
import axiosInstance from "../../api/axios";
import { getExams } from "../../api/admin/exam.api";
const ExamManagement = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);

  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const data = await getExams();
        setExams(data);
      } catch (error) {
        console.error("Failed to fetch exams:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExams();
  }, []);

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
          <ExamsHeader />
          {loading ? (
            <div className="text-center py-10">Loading exams...</div>
          ) : (
            <ExamsTable exams={exams} />
          )}
        </main>
      </div>
    </div>
  );
};

export default ExamManagement;

/* ---------------- Dummy Data ---------------- */
