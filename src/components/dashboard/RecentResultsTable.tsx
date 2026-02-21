import { Eye } from "lucide-react";

const results = [
  { subject: "Computer Networks", marks: "85/100", status: "Pass" },
  { subject: "Theory of Computation", marks: "72/100", status: "Pass" },
  { subject: "Compiler Design", marks: "91/100", status: "Pass" },
  { subject: "Digital Electronics", marks: "68/100", status: "Pass" },
];

const RecentResultsTable = () => {
  return (
    <div className="bg-white rounded-xl border shadow-sm">
      <div className="p-5 border-b">
        <h3 className="font-semibold text-gray-800">Recent Results</h3>
      </div>
      <div className="bg-white rounded-xl border shadow-sm overflow-x-auto">
        <table className="w-full min-w-[600px] text-sm">
          <thead className="text-gray-500 bg-gray-50">
            <tr>
              <th className="text-left p-4">Subject</th>
              <th className="text-left p-4">Marks</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {results.map((result, index) => (
              <tr key={index} className="border-t">
                <td className="p-4">{result.subject}</td>
                <td className="p-4">{result.marks}</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                    {result.status}
                  </span>
                </td>
                <td className="p-4 text-blue-600 flex items-center gap-1 cursor-pointer">
                  <Eye size={16} />
                  View
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentResultsTable;
