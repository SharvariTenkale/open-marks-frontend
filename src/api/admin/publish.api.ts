import api from "../axios";

export const publishExam = async (
  examId: string,
  force_publish: boolean = false
) => {
  const response = await api.patch(
    `/exams/${examId}/publish`,
    { force_publish }
  );

  return response.data;
};