import { Clock, CheckCircle, Save, Flag, X, Send } from "lucide-react";
import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";

// const questions = allQuestions.filter(q => q.examId === examId);
const ExamAttempt = () => {
  const { examId } = useParams();

  if (!examId) {
    return <Navigate to="/student" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <h1>Exam ID: {examId}</h1>
      {/* Load questions for this exam */}
      {/* ===== TOP HEADER ===== */}
      <div className="bg-white border-b px-6 py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-lg font-semibold">
            Computer Science Final Examination
          </h1>
          <p className="text-sm text-gray-500">
            Data Structures & Web Development
          </p>
        </div>

        <div className="flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-2 text-green-600 text-sm">
            <CheckCircle size={16} />
            Auto-save active
          </div>

          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg text-sm">
            <Clock size={16} />
            01:59:06
          </div>

          <button className="bg-blue-800 text-white px-6 py-2 rounded-lg font-medium">
            Submit Exam
          </button>
        </div>
      </div>

      {/* ===== MAIN BODY ===== */}
      <div className="flex flex-1">
        {/* ===== LEFT PANEL ===== */}
        <div className="hidden xl:block w-72 bg-white border-r p-6 space-y-8">
          <div>
            <h2 className="font-semibold mb-2">Question Navigator</h2>
            <p className="text-sm text-gray-500 mb-4">Total: 15</p>

            <div className="grid grid-cols-5 gap-3">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className={`h-10 flex items-center justify-center rounded-lg text-sm font-medium
                  ${i === 0 ? "bg-blue-800 text-white" : "bg-gray-200"}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Legend</h3>

            <div className="space-y-2 text-sm">
              <Legend color="bg-green-500" label="Answered (0)" />
              <Legend color="bg-red-500" label="Marked (0)" />
              <Legend color="bg-blue-500" label="Visited (0)" />
              <Legend color="bg-gray-300" label="Not Visited (14)" />
            </div>
          </div>
        </div>

        {/* ===== CENTER QUESTION AREA ===== */}
        <div className="flex-1 p-6 space-y-6">
          {/* Question Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b pb-4">
            <div className="flex items-center gap-3">
              <span className="bg-blue-800 text-white px-4 py-2 rounded-full text-sm">
                Question 1 of 15
              </span>

              <span className="bg-gray-200 px-3 py-1 rounded-lg text-sm">
                2 Marks
              </span>
            </div>

            <span className="text-sm text-gray-500">MULTIPLE CHOICE</span>
          </div>

          {/* Question */}
          <div className="space-y-6">
            <h3 className="text-lg">
              What is the primary purpose of the OSI model in computer
              networking?
            </h3>

            <div className="space-y-4">
              {options.map((opt, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-4 flex items-center gap-4 hover:border-blue-500 cursor-pointer transition"
                >
                  <input type="radio" name="question" />
                  <span>{opt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== RIGHT PANEL ===== */}
        <div className="hidden xl:block w-80 bg-white border-l p-6 space-y-6">
          <h3 className="font-semibold">Quick Actions</h3>

          <button className="w-full bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2">
            <Save size={18} />
            Save & Next
          </button>

          <button className="w-full bg-gray-200 py-3 rounded-lg">
            Previous
          </button>

          <button className="w-full bg-yellow-100 text-yellow-700 py-3 rounded-lg flex items-center justify-center gap-2">
            <Flag size={18} />
            Mark for Review
          </button>

          <button className="w-full bg-gray-200 text-gray-500 py-3 rounded-lg flex items-center justify-center gap-2">
            <X size={18} />
            Clear Response
          </button>

          <div className="border-t pt-4 text-sm text-gray-500">
            <div className="flex items-center gap-2 text-green-600 mb-2">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Auto-saving enabled
            </div>
            Your responses are automatically saved as you answer
          </div>
        </div>
      </div>

      {/* ===== STICKY FOOTER (Mobile & Tablet) ===== */}
      <div className="xl:hidden bg-white border-t p-4 flex justify-between items-center">
        <button className="bg-blue-800 text-white px-6 py-2 rounded-lg flex items-center gap-2">
          Next
        </button>

        <button className="border px-6 py-2 rounded-lg flex items-center gap-2">
          <Send size={16} />
          Submit Exam
        </button>
      </div>
    </div>
  );
};

const Legend = ({ color, label }: { color: string; label: string }) => (
  <div className="flex items-center gap-3">
    <div className={`w-5 h-5 rounded ${color}`} />
    <span>{label}</span>
  </div>
);

const options = [
  "To define the physical structure of network cables",
  "To standardize network communication protocols across different systems",
  "To encrypt data transmitted over the internet",
  "To measure network bandwidth and latency",
];

export default ExamAttempt;
