import { Eye, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import EditQuestionModal from "./modals/EditQuestionModal";
import DeleteQuestionModal from "./modals/DeleteQuestionModal";

const QuestionRow = ({ question }: any) => {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <>
      <tr className="border-b hover:bg-gray-50">
        <td className="p-3">{question.id}</td>
        <td>
          <span className={`px-3 py-1 text-xs rounded-full ${
            question.type === "MCQ"
              ? "bg-purple-100 text-purple-600"
              : "bg-blue-100 text-blue-600"
          }`}>
            {question.type}
          </span>
        </td>
        <td>{question.marks}</td>
        <td>{question.keywords ? "Yes" : "N/A"}</td>
        <td>{question.modelAnswer ? "Yes" : "N/A"}</td>
        <td>
          <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
            {question.status}
          </span>
        </td>
        <td className="flex gap-3">
          <Eye size={16} className="cursor-pointer" />
          <Pencil size={16} onClick={() => setEditOpen(true)} className="cursor-pointer" />
          <Trash2 size={16} onClick={() => setDeleteOpen(true)} className="cursor-pointer text-red-600" />
        </td>
      </tr>

      {editOpen && <EditQuestionModal onClose={() => setEditOpen(false)} />}
      {deleteOpen && <DeleteQuestionModal onClose={() => setDeleteOpen(false)} />}
    </>
  );
};

export default QuestionRow;