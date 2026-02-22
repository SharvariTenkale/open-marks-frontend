// src/components/ProtectedRoute.tsx

import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRole: string;
}

const ProtectedRoute = ({ children, allowedRole }: ProtectedRouteProps) => {
  // Temporary: get user role from localStorage
  const user = localStorage.getItem("user");
  const parsedUser = user ? JSON.parse(user) : null;

  if (!parsedUser) {
    // Not logged in
    return <Navigate to="/login" replace />;
  }

  if (parsedUser.role !== allowedRole) {
    // Role mismatch
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;