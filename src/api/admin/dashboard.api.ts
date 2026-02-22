import api from "../axios";

export interface AdminDashboardSummaryResponse {
  metrics: {
    total_exams: number;
    exams_by_status: {
      scheduled?: number;
      live?: number;
      completed?: number;
      locked?: number;
    };
    total_students: number;
    total_attempts: number;
    pending_grievances: number;
    resolved_grievances: number;
  };
}

export const getAdminDashboardSummary = async (): Promise<AdminDashboardSummaryResponse> => {
  const response = await api.get("/admin/dashboard/summary");
  return response.data;
};