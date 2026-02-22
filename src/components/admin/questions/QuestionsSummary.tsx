const QuestionsSummary = ({ questions }: any) => {
  const totalMarks = questions.reduce((sum: number, q: any) => sum + q.marks, 0);
  const mcq = questions.filter((q: any) => q.type === "MCQ").length;
  const descriptive = questions.filter((q: any) => q.type === "Descriptive").length;

  return (
    <div className="bg-white rounded-xl p-4 flex flex-col md:flex-row justify-between text-sm">
      <div>Total Questions: {questions.length}</div>
      <div>Total Marks: {totalMarks}</div>
      <div>MCQ: {mcq} | Descriptive: {descriptive}</div>
    </div>
  );
};

export default QuestionsSummary;