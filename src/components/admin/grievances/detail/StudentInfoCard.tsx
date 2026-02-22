import { User } from "lucide-react";

const StudentInfoCard = () => {
  return (
    <div className="bg-white rounded-xl border p-6 space-y-4">
      <div className="flex items-center gap-3">
        <User size={18} />
        <h2 className="font-semibold text-lg">Student Information</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div>
          <p className="text-gray-500">Student Name</p>
          <p className="font-medium">Priya Sharma</p>
        </div>

        <div>
          <p className="text-gray-500">Roll Number</p>
          <p className="font-medium">CS21B1045</p>
        </div>

        <div>
          <p className="text-gray-500">Exam Name</p>
          <p className="font-medium">
            Data Structures and Algorithms - Final Exam
          </p>
        </div>

        <div>
          <p className="text-gray-500">Question Number</p>
          <p className="font-medium">Q3</p>
        </div>
      </div>
    </div>
  );
};

export default StudentInfoCard;