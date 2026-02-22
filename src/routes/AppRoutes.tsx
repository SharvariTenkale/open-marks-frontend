import { Routes, Route } from "react-router-dom";
import StudentRoutes from "./StudentRoutes";
import AdminRoutes from "./AdminRoutes";
import Login from "../pages/Login";
import ReviewerDashboard from "../pages/ReviewerDashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import ReviewerGrievanceDetail from "../pages/admin/GrievanceDetail";
const AppRoutes = () => {
  return (
    <Routes>
      {/* Login Route */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      {/* Student Module */}
      <Route
        path="/student/*"
        element={
          <ProtectedRoute allowedRole="student">
            <StudentRoutes />
          </ProtectedRoute>
        }
      />

      {/* Admin Module */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminRoutes />
          </ProtectedRoute>
        }
      />

      {/* Reviewer */}
      <Route
        path="/reviewer"
        element={
          <ProtectedRoute allowedRole="reviewer">
            <ReviewerDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/reviewer/grievances/:id"
        element={<ReviewerGrievanceDetail />}
      />
    </Routes>
  );
};

export default AppRoutes;
