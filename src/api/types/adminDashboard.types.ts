export interface DashboardStats {
  total_students: number;
  total_exams: number;
  active_exams: number;
  pending_grievances: number;
  pending_evaluations: number;
}

export interface UpcomingExam {
  id: string;
  title: string;
  scheduled_start: string;
  scheduled_end: string;
  status: string;
}

export interface GrievanceSummary {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
  resolution_rate: number;
}

export interface ActivityItem {
  id: string;
  action: string;
  user: string;
  date: string;
  type: string;
}

export interface AdminDashboardResponse {
  stats: DashboardStats;
  upcoming_exams: UpcomingExam[];
  grievance_summary: GrievanceSummary;
  recent_activity: ActivityItem[];
}