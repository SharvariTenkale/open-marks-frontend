const ExamExpandedRow = ({ exam }: any) => {
  return (
    <tr className="bg-gray-50 border-b">
      <td colSpan={7} className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <p className="text-gray-500 text-sm">Number of Questions</p>
            <p className="text-lg font-semibold">0</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Total Attempts</p>
            <p className="text-lg font-semibold">0</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Exam Schedule</p>
            <p className="text-sm">
              {new Date(exam.scheduled_start).toLocaleString()}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Lock Status</p>
            <p className="text-sm">Unlocked</p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-gray-500 text-sm">Description</p>
          <p className="text-sm mt-1">{exam.description}</p>
        </div>
      </td>
    </tr>
  );
};

export default ExamExpandedRow;
