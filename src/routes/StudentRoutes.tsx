import { Navigate, Route, Routes } from "react-router-dom";
import StudentLayout from "../components/StudentLayout";
import { Settings } from "lucide-react";
import Dashboard from "../pages/student/Dashboard";
import ExamAttempt from "../pages/student/ExamAttempt";
import ResultDetails from "../pages/student/ResultDetails";
import Results from "../pages/student/Results";
import Grievances from "../pages/student/Grievances";

const StudentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<StudentLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="my-exams/:examId" element={<ExamAttempt />} />
        <Route path="results" element={<Results />} />
        <Route path="results/:examId" element={<ResultDetails />} />
        <Route path="grievances" element={<Grievances />} />
      </Route>
    </Routes>
  );
};

export default StudentRoutes;
