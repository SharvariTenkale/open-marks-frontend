import type { Grievance } from "../../../pages/student/Grievances";
import GrievanceRow from "./GrievanceRow";

interface Props {
  grievances: Grievance[];
  onViewDetails: (g: Grievance) => void;
}

const GrievanceTable = ({ grievances, onViewDetails }: Props) => {
  return (
    <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
      
      {/* Desktop */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr className="text-left text-gray-600 font-medium">
              <th className="px-6 py-3">Exam Name</th>
              <th className="px-6 py-3">Question</th>
              <th className="px-6 py-3">Subject</th>
              <th className="px-6 py-3">Date Raised</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {grievances.map((g) => (
              <GrievanceRow
                key={g.id}
                grievance={g}
                onViewDetails={onViewDetails}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="lg:hidden divide-y">
        {grievances.map((g) => (
          <div key={g.id} className="p-4 space-y-2">
            <div className="flex justify-between">
              <p className="font-medium">{g.examName}</p>
              <span className="text-sm">{g.questionNo}</span>
            </div>
            <p className="text-sm text-gray-500">{g.subject}</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">{g.dateRaised}</span>
              <button
                onClick={() => onViewDetails(g)}
                className="text-blue-600 text-sm"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrievanceTable;