import { Routes, Route } from "react-router-dom";
import ReviewerLayout from "../layouts/ReviewerLayout";
import GrievanceManagement from "../pages/admin/GrievanceManagement";
import GrievanceDetail from "../pages/admin/GrievanceDetail";

const ReviewerRoutes = () => {
  return (
    <Routes>
      <Route element={<ReviewerLayout />}>
        <Route index element={<GrievanceManagement role="reviewer" />} />
        <Route
          path="grievances"
          element={<GrievanceManagement role="reviewer" />}
        />
        <Route
          path="grievances/:id"
          element={<GrievanceDetail role="reviewer" />}
        />
      </Route>
    </Routes>
  );
};

export default ReviewerRoutes;
