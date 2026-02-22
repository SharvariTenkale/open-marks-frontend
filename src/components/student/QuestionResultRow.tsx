import { useState } from "react";
import { ChevronDown, ChevronUp, AlertCircle } from "lucide-react";

interface Question {
  id: number;
  type: string;
  marksAwarded: number;
  totalMarks: number;
  status: "Correct" | "Incorrect" | "Partial";
  questionText: string;
  studentAnswer: string;
  correctAnswer: string;
  facultyRemark: string;
}
interface Props {
  question: Question;
  onRaiseGrievance: (id: number) => void;
}

const QuestionResultRow = ({ question, onRaiseGrievance }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const statusColor = () => {
    if (question.status === "Correct") return "bg-green-100 text-green-600";
    if (question.status === "Incorrect") return "bg-red-100 text-red-600";
    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="border-b">
      {/* ===== Top Row ===== */}
      <div className="grid grid-cols-12 items-center px-4 py-3 text-sm">
        <div className="col-span-1">{question.id}</div>

        <div className="col-span-2">
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            {question.type}
          </span>
        </div>

        <div className="col-span-2">
          {question.marksAwarded} / {question.totalMarks}
        </div>

        <div className="col-span-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor()}`}
          >
            {question.status}
          </span>
        </div>

        <div className="col-span-3">
          {/* <button className="flex items-center gap-2 border border-blue-500 text-blue-600 px-3 py-1 rounded-lg text-xs hover:bg-blue-50 transition">
            <AlertCircle size={14} />
            Raise Grievance
          </button> */}
          <button
            onClick={() => onRaiseGrievance(question.id)}
            className="flex items-center gap-2 border border-blue-500 text-blue-600 px-3 py-1 rounded-lg text-xs hover:bg-blue-50 transition"
          >
            <AlertCircle size={14} />
            Raise Grievance
          </button>
        </div>

        <div
          className="col-span-2 flex items-center justify-end cursor-pointer text-gray-600 hover:text-black"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              <ChevronUp size={16} />
              <span className="ml-1">Collapse</span>
            </>
          ) : (
            <>
              <ChevronDown size={16} />
              <span className="ml-1">Expand</span>
            </>
          )}
        </div>
      </div>

      {/* ===== Expanded Section ===== */}
      {expanded && (
        <div className="bg-gray-50 px-6 py-6 space-y-6">
          <div>
            <h4 className="font-medium text-blue-700 mb-2">Question:</h4>
            <div className="bg-white border rounded-lg p-4 text-sm">
              {question.questionText}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-blue-700 mb-2">Your Answer:</h4>
            <div className="bg-white border rounded-lg p-4 text-sm">
              {question.studentAnswer}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-green-600 mb-2">Correct Answer:</h4>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm">
              {question.correctAnswer}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-blue-700 mb-2">
              Faculty Evaluation & Remarks:
            </h4>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
              {question.facultyRemark}
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <p className="text-gray-500">Total Marks</p>
              <p className="font-medium">{question.totalMarks}</p>
            </div>
            <div>
              <p className="text-gray-500">Marks Awarded</p>
              <p className="font-medium text-green-600">
                {question.marksAwarded}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Marks Deducted</p>
              <p className="font-medium text-red-600">
                {question.totalMarks - question.marksAwarded}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Status</p>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor()}`}
              >
                {question.status}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionResultRow;
