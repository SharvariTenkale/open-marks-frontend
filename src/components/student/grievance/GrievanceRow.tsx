import type { Grievance } from "../../../pages/student/Grievances";

interface Props {
  grievance: Grievance;
  onViewDetails: (g: Grievance) => void;
}

const GrievanceRow = ({ grievance, onViewDetails }: Props) => {
  const statusColor = {
    Pending: "bg-yellow-100 text-yellow-700",
    "Under Review": "bg-blue-100 text-blue-700",
    Approved: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-6 py-4">{grievance.examName}</td>
      <td className="px-6 py-4">{grievance.questionNo}</td>
      <td className="px-6 py-4">{grievance.subject}</td>
      <td className="px-6 py-4">{grievance.dateRaised}</td>
      <td className="px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-xs ${statusColor[grievance.status]}`}>
          {grievance.status}
        </span>
      </td>
      <td className="px-6 py-4">
        <button
          onClick={() => onViewDetails(grievance)}
          className="text-blue-600 hover:underline"
        >
          View Details
        </button>
      </td>
    </tr>
  );
};

export default GrievanceRow;