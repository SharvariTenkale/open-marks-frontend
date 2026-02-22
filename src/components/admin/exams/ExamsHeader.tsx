import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ExamsHeader = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Exam Management
        </h1>
        <p className="text-gray-500 text-sm">
          Create, manage, and monitor all examinations
        </p>
      </div>

      <button
        onClick={() => navigate("/admin/exams/create")}
        className="flex items-center gap-2 bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition"
      >
        <Plus size={18} />
        Create New Exam
      </button>
    </div>
  );
};

export default ExamsHeader;
