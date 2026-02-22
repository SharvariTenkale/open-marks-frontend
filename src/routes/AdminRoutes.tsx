// src/routes/AdminRoutes.tsx

import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/admin/Dashboard";
import ExamManagement from "../pages/admin/ExamManagement";
import GrievanceManagement from "../pages/admin/GrievanceManagement";
import CreateExam from "../pages/admin/CreateExam";
import QuestionManagement from "../pages/admin/QuestionManagement";
import GrievanceDetail from "../pages/admin/GrievanceDetail";
import AuditLogs from "../pages/admin/AuditLogs";
const AdminRoutes = () => {
  return (
    <Routes>
      {/* Admin Dashboard */}
      <Route path="dashboard" element={<AdminDashboard />} />

      {/* Exam Management */}
      <Route path="exams" element={<ExamManagement />} />
      <Route path="exams/create" element={<CreateExam />} />
      {/* Grievance Management */}
      <Route path="grievances" element={<GrievanceManagement />} />
      {/* Question Management */}
      <Route path="questions" element={<QuestionManagement />} />
      <Route path="exams/questions" element={<QuestionManagement />} />
      <Route
        path="/admin/exams/:examId/questions"
        element={<QuestionManagement />}
      />
      <Route path="grievances/:id" element={<GrievanceDetail />} />
      <Route path="audit-logs" element={<AuditLogs />} />
      {/* Default Route */}
      <Route path="*" element={<AdminDashboard />} />
    </Routes>
  );
};

export default AdminRoutes;
