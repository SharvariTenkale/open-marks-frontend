import { X } from "lucide-react";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  questionId: number | null;
}

const GrievanceModal = ({ isOpen, onClose, questionId }: Props) => {
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (description.length < 50) {
      alert("Minimum 50 characters required");
      return;
    }

    console.log("Submit grievance for question:", questionId);
    console.log("Description:", description);

    // 🔥 Later: Call API here

    onClose();
    setDescription("");
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b px-6 py-4">
          <h2 className="text-lg font-semibold">
            Raise Grievance - Question {questionId}
          </h2>
          <button onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          <div>
            <label className="block font-medium mb-2">
              Describe your concern *
            </label>
            <textarea
              rows={5}
              className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Explain clearly why this evaluation should be reviewed..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <p className="text-xs text-gray-500 mt-2">
              Minimum 50 characters required.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
            <p className="font-medium mb-2">Important Guidelines:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Grievances must be submitted within the deadline</li>
              <li>Only one grievance per question is allowed</li>
              <li>Review process takes 3-5 business days</li>
              <li>Provide clear and valid reasons</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t px-6 py-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-700 text-white rounded-lg"
          >
            Submit Grievance
          </button>
        </div>
      </div>
    </div>
  );
};

export default GrievanceModal;