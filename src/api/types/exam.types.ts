export interface CreateExamRequest {
  title: string;
  description: string;
  scheduled_start: string;
  scheduled_end: string;
  grievance_start: string;
  grievance_end: string;
}

export interface ExamResponse {
  id: string;
  title: string;
  status: string;
  scheduled_start: string;
  scheduled_end: string;
}

export interface CreateExamResponse {
  message: string;
  exam: ExamResponse;
}