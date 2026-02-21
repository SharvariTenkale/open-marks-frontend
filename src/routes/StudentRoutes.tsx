import { Route, Routes } from "react-router-dom";
import StudentLayout from "../components/StudentLayout";
import { Settings } from "lucide-react";
import Dashboard from "../pages/student/Dashboard";
// import Dashboard from "../pages/student/Dashboard";
// import MyExams from "../pages/student/MyExams";
// import Results from "../pages/student/Results";
// import Grievances from "../pages/student/Grievances";
// import Profile from "../pages/student/Profile";
// import Settings from "../pages/student/Settings";

const StudentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<StudentLayout />}>
        <Route index element={<Dashboard />} />
        {/* <Route path="my-exams" element={<MyExams />} />
        <Route path="results" element={<Results />} />
        <Route path="grievances" element={<Grievances />} />
        <Route path="profile" element={<Profile />} /> */}
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default StudentRoutes;
