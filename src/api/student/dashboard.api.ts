import axiosInstance from "..//axios";

export const getStudentExams = async () => {
  const response = await axiosInstance.get("/api/exams");
  return response.data.exams;
};
