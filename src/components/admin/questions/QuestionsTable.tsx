import QuestionRow from "./QuestionRow";

const QuestionsTable = ({ questions }: any) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="border-b text-gray-500">
          <tr>
            <th className="p-3 text-left">#</th>
            <th>Type</th>
            <th>Marks</th>
            <th>Keywords</th>
            <th>Model Answer</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {questions.map((q: any) => (
            <QuestionRow key={q.id} question={q} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionsTable;