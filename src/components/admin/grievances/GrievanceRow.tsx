import { Eye } from "lucide-react";
import GrievanceStatusBadge from "./GrievanceStatusBadge";
import { useNavigate } from "react-router-dom";

interface Props {
  item: {
    id: number;
    exam: string;
    student: string;
    roll: string;
    question: string;
    date: string;
    status: string;
  };
}

const GrievanceRow = ({ item }: Props) => {
    const navigate = useNavigate();
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="p-4 font-medium text-gray-800">{item.exam}</td>

      <td>{item.student}</td>

      <td>{item.roll}</td>

      <td>{item.question}</td>

      <td>{item.date}</td>

      <td>
        <GrievanceStatusBadge status={item.status} />
      </td>

      <td>
        {/* <button className="flex items-center gap-2 border px-3 py-1.5 rounded-lg text-sm hover:bg-gray-100 transition">
          <Eye size={16} />
          Review
        </button> */}
        <button
          className="flex items-center gap-2 border px-3 py-1.5 rounded-lg text-sm hover:bg-gray-100 transition"
          onClick={() => navigate(`/admin/grievances/${item.id}`)}
        >
          Review
        </button>
      </td>
    </tr>
  );
};

export default GrievanceRow;
