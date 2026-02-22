import axiosInstance from "../axios";

export const createExam = async (data: {
  title: string;
  description: string;
  scheduled_start: string;
  scheduled_end: string;
  grievance_start: string;
  grievance_end: string;
}) => {
  const response = await axiosInstance.post("/api/exams", data);
  return response.data;
};
export const getExams = async () => {
  const response = await axiosInstance.get("/api/exams");

  console.log("Full API Response:", response.data);

  // 🔥 Safe extraction (handles both shapes)
  const rawExams = response.data?.exams?.exams || response.data?.exams || [];

  // Map safely
  const mappedExams = rawExams.map((exam: any) => ({
    id: exam.id,
    title: exam.title,
    description: exam.description,
    status: exam.status,
    scheduled_start: exam.scheduled_start,

    subject: "—",
    total_marks: 0,
    duration:
      Math.round(
        (new Date(exam.scheduled_end).getTime() -
          new Date(exam.scheduled_start).getTime()) /
          60000,
      ) || 0,
    questions: 0,
    attempts: 0,
  }));

  return mappedExams;
};
export const startExam = async (examId: string) => {
  const response = await axiosInstance.post(
    `/api/exams/${examId}/start`
  );

  return response.data;
};