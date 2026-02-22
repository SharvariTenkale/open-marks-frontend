import { Plus } from "lucide-react";
import { useState } from "react";
import AddQuestionModal from "./modals/AddQuestionModal";

const QuestionsHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Question Management</h1>
          <p className="text-gray-500 text-sm">
            Select exam and manage questions
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm">
            Status:{" "}
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
              Draft
            </span>
          </span>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
          >
            <Plus size={16} />
            Add New Question
          </button>
        </div>
      </div>

      {open && <AddQuestionModal onClose={() => setOpen(false)} />}
    </>
  );
};

export default QuestionsHeader;
