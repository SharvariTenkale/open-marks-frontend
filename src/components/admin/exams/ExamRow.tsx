import { useState } from "react";
import { ChevronDown, ChevronUp, MoreVertical } from "lucide-react";
import ExamExpandedRow from "./ExamExpandedRow";
import StatusBadge from "./StatusBadge";

const ExamRow = ({ exam }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <tr className="border-b hover:bg-gray-50">
        <td className="p-4 flex items-center gap-2 font-medium text-gray-800">
          <button onClick={() => setOpen(!open)}>
            {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {exam.title}
        </td>

        <td>{exam.subject}</td>
        <td>{exam.total_marks}</td>
        <td>{new Date(exam.scheduled_start).toLocaleString()}</td>
        <td>{exam.duration} min</td>
        <td>
          <StatusBadge status={exam.status} />
        </td>
        <td className="text-right pr-6">
          <MoreVertical size={18} className="cursor-pointer" />
        </td>
      </tr>

      {open && <ExamExpandedRow exam={exam} />}
    </>
  );
};

export default ExamRow;