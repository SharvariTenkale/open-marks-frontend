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
        console.log("Fetched Exams:", data);
        setExams(data);
      } catch (error) {
        console.error("Failed to fetch exams:", error);
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

const dummyExams = [
  {
    id: 1,
    title: "Midterm Examination - Data Structures",
    subject: "Computer Science",
    total_marks: 100,
    scheduled_start: "2026-03-01T10:00:00",
    duration: 120,
    status: "draft",
    description:
      "Comprehensive midterm covering arrays, linked lists, trees, and graphs",
    questions: 0,
    attempts: 0,
  },
  {
    id: 2,
    title: "Final Exam - Database Management",
    subject: "Computer Science",
    total_marks: 150,
    scheduled_start: "2026-02-25T14:00:00",
    duration: 180,
    status: "scheduled",
    description:
      "Final examination covering SQL, normalization, and transactions",
    questions: 45,
    attempts: 0,
  },
];
