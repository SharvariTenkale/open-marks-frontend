import axiosInstance from "../axios";

export const addQuestion = async (examId: string, payload: any) => {
  const response = await axiosInstance.post(
    `/api/exams/${examId}/questions`,
    payload
  );

  return response.data;
};
