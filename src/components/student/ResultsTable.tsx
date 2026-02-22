import type { Result } from "../../pages/student/Results";

interface Props {
  results: Result[];
  onRowClick: (id: string) => void;
}

const ResultsTable = ({ results, onRowClick }: Props) => {
  const getPercentage = (scored: number, total: number) =>
    Math.round((scored / total) * 100);

  const getStatus = (percentage: number) =>
    percentage >= 40 ? "Pass" : "Fail";

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600 bg-green-100";
    if (percentage >= 50) return "text-yellow-700 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr className="text-left text-gray-600 font-medium">
              <th className="px-6 py-3">Sr No</th>
              <th className="px-6 py-3">Exam Name</th>
              <th className="px-6 py-3">Subject Code</th>
              <th className="px-6 py-3">Total</th>
              <th className="px-6 py-3">Scored</th>
              <th className="px-6 py-3">%</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {results.map((result, index) => {
              const percentage = getPercentage(
                result.scoredMarks,
                result.totalMarks
              );
              const status = getStatus(percentage);

              return (
                <tr
                  key={result.id}
                  onClick={() => onRowClick(result.id)}
                  className="border-b hover:bg-blue-50 cursor-pointer transition"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 font-medium">
                    {result.examName}
                  </td>
                  <td className="px-6 py-4">{result.subjectCode}</td>
                  <td className="px-6 py-4">{result.totalMarks}</td>
                  <td className="px-6 py-4">{result.scoredMarks}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getPerformanceColor(
                        percentage
                      )}`}
                    >
                      {percentage}%
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        status === "Pass"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{result.submissionDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="lg:hidden divide-y">
        {results.map((result, index) => {
          const percentage = getPercentage(
            result.scoredMarks,
            result.totalMarks
          );
          const status = getStatus(percentage);

          return (
            <div
              key={result.id}
              onClick={() => onRowClick(result.id)}
              className="p-4 space-y-2 hover:bg-blue-50 cursor-pointer transition"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">
                  {index + 1}. {result.examName}
                </span>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${getPerformanceColor(
                    percentage
                  )}`}
                >
                  {percentage}%
                </span>
              </div>

              <div className="text-xs text-gray-500 flex justify-between">
                <span>{result.subjectCode}</span>
                <span>{result.submissionDate}</span>
              </div>

              <div className="text-xs flex justify-between">
                <span>
                  {result.scoredMarks} / {result.totalMarks}
                </span>
                <span
                  className={`font-medium ${
                    status === "Pass"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultsTable;