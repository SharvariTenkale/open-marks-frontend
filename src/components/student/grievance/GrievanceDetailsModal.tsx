import { X } from "lucide-react";
import type { Grievance } from "../../../pages/student/Grievances";

interface Props {
  grievance: Grievance | null;
  onClose: () => void;
}

const GrievanceDetailsModal = ({ grievance, onClose }: Props) => {
  if (!grievance) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg max-h-[90vh] overflow-y-auto">

        <div className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold">
            Grievance Details
          </h3>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="p-6 space-y-6">

          <div className="bg-gray-50 border rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500">Exam Name</p>
              <p className="font-medium">{grievance.examName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p className="font-medium">{grievance.status}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Question</p>
              <p className="font-medium">{grievance.questionNo}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Date Raised</p>
              <p className="font-medium">{grievance.dateRaised}</p>
            </div>
          </div>

          {grievance.status === "Approved" && (
            <div className="bg-green-50 border border-green-300 rounded-xl p-6">
              <p className="font-medium text-green-700">
                Faculty Response
              </p>
              <p className="text-sm mt-2">
                After review, full marks awarded.
              </p>
            </div>
          )}

          {grievance.status === "Rejected" && (
            <div className="bg-red-50 border border-red-300 rounded-xl p-6">
              <p className="font-medium text-red-700">
                Faculty Response
              </p>
              <p className="text-sm mt-2">
                Evaluation stands after review.
              </p>
            </div>
          )}

        </div>

        <div className="flex justify-end border-t p-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default GrievanceDetailsModal;