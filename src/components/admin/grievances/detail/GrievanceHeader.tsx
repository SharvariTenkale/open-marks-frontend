import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GrievanceHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-black"
      >
        <ArrowLeft size={18} />
        Back to List
      </button>

      <div className="flex flex-wrap items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Grievance #GRV-2026-001
        </h1>

        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
          Pending
        </span>
      </div>

      <p className="text-gray-500 text-sm">
        Raised on February 18, 2026 16:00
      </p>
    </div>
  );
};

export default GrievanceHeader;