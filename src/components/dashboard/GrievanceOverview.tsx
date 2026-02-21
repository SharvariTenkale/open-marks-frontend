import { Clock, CheckCircle, XCircle } from "lucide-react";

const GrievanceOverview = () => {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-5 space-y-4">
      <h3 className="font-semibold text-gray-800">
        Grievance Overview
      </h3>

      <div className="space-y-3">

        <div className="flex justify-between items-center bg-yellow-100 text-yellow-700 px-4 py-3 rounded-lg">
          <div className="flex items-center gap-2">
            <Clock size={16} />
            Pending
          </div>
          <span>2</span>
        </div>

        <div className="flex justify-between items-center bg-green-100 text-green-700 px-4 py-3 rounded-lg">
          <div className="flex items-center gap-2">
            <CheckCircle size={16} />
            Approved
          </div>
          <span>5</span>
        </div>

        <div className="flex justify-between items-center bg-red-100 text-red-700 px-4 py-3 rounded-lg">
          <div className="flex items-center gap-2">
            <XCircle size={16} />
            Rejected
          </div>
          <span>1</span>
        </div>

      </div>
    </div>
  );
};

export default GrievanceOverview;