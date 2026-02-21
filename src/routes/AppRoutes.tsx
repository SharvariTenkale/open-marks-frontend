import { Routes, Route } from "react-router-dom";
import StudentRoutes from "./StudentRoutes";
import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import ReviewerDashboard from "../pages/ReviewerDashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/student/*" element={<StudentRoutes />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/reviewer" element={<ReviewerDashboard />} />
    </Routes>
  )
}

export default AppRoutes