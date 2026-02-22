import axiosInstance from "../axios";

export const addQuestion = async (
  examId: string,
  data: any
) => {
  const response = await axiosInstance.post(
    `/api/exams/${examId}/questions`,
    data
  );
  return response.data;
};