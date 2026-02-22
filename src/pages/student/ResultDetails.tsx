import { useParams, Navigate } from "react-router-dom";
import QuestionResultRow from "../../components/student/QuestionResultRow";
import GrievanceModal from "../../components/student/GrievanceModal";
import { useState } from "react";
const ResultDetails = () => {
  const { examId } = useParams();

  if (!examId) {
    return <Navigate to="/student/results" replace />;
  }
  type QuestionStatus = "Correct" | "Incorrect" | "Partial";

  interface Question {
    id: number;
    type: string;
    marksAwarded: number;
    totalMarks: number;
    status: QuestionStatus;
    questionText: string;
    studentAnswer: string;
    correctAnswer: string;
    facultyRemark: string;
  }
  // 🔹 Mock Data (Replace with API later)
  const result = {
    examName: "Data Structures and Algorithms - Midterm Exam",
    subject: "Computer Science - CSE 301",
    totalMarks: 100,
    scoredMarks: 78,
    submissionDate: "Feb 15, 2026",
    totalQuestions: 20,
  };

  const percentage = Math.round((result.scoredMarks / result.totalMarks) * 100);

  const status = percentage >= 40 ? "Pass" : "Fail";
  const mockQuestions: Question[] = Array.from(
    { length: result.totalQuestions },
    (_, i) => ({
      id: i + 1,
      type: "MCQ",
      marksAwarded: 5,
      totalMarks: 5,
      status: "Correct", // ✅ now strongly typed
      questionText:
        "What is the average time complexity of Quick Sort algorithm?",
      studentAnswer: "O(n log n)",
      correctAnswer: "O(n log n)",
      facultyRemark: "Excellent! Correct answer with proper understanding.",
    }),
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState<number | null>(
    null,
  );

  const handleRaiseGrievance = (id: number) => {
    setSelectedQuestionId(id);
    setIsModalOpen(true);
  };
  return (
    <div className="space-y-6">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">{result.examName}</h2>
          <p className="text-gray-500">{result.subject}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="text-right">
            <p className="text-sm text-gray-500">Total Marks</p>
            <p className="font-semibold">
              {result.scoredMarks} / {result.totalMarks}
            </p>
          </div>

          <span
            className={`px-4 py-1 rounded-full text-sm font-medium ${
              status === "Pass"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {status}
          </span>
        </div>
      </div>

      {/* ================= SUMMARY CARD ================= */}
      <div className="bg-white border rounded-xl shadow-sm p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <div>
          <p className="text-gray-500 text-sm">Total Marks</p>
          <p className="font-semibold">
            {result.scoredMarks} / {result.totalMarks}
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Percentage</p>
          <p className="font-semibold">{percentage}%</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Grade</p>
          <p className="font-semibold">B+</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Submission Date</p>
          <p className="font-semibold">{result.submissionDate}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Total Questions</p>
          <p className="font-semibold">{result.totalQuestions}</p>
        </div>
      </div>

      {/* ================= QUESTION TABLE ================= */}
      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        {/* <div className="hidden lg:block overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr className="text-left text-gray-600 font-medium">
                <th className="px-6 py-3">Q. No</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Marks</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {[...Array(result.totalQuestions)].map((_, i) => (
                <tr key={i} className="border-b hover:bg-gray-50 transition">
                  <td className="px-6 py-4">{i + 1}</td>
                  <td className="px-6 py-4">MCQ</td>
                  <td className="px-6 py-4">5 / 5</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">
                      Correct
                    </span>
                  </td>
                  <td className="px-6 py-4 text-blue-600 cursor-pointer">
                    Expand
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}

        {/* MOBILE VIEW
        <div className="lg:hidden divide-y">
          {[...Array(result.totalQuestions)].map((_, i) => (
            <div key={i} className="p-4 space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Question {i + 1}</span>
                <span className="text-sm text-green-600 font-medium">
                  Correct
                </span>
              </div>

              <div className="text-xs text-gray-500 flex justify-between">
                <span>Type: MCQ</span>
                <span>5 / 5</span>
              </div>

              <div className="text-blue-600 text-sm cursor-pointer">Expand</div>
            </div>
          ))}
        </div> */}
        {/* Table Header (Desktop Only) */}
        <div className="hidden lg:grid grid-cols-12 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-600 border-b">
          <div className="col-span-1">Q. No</div>
          <div className="col-span-2">Type</div>
          <div className="col-span-2">Marks</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-3">Grievance</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        {mockQuestions.map((q) => (
          <QuestionResultRow
            key={q.id}
            question={q}
            onRaiseGrievance={handleRaiseGrievance}
          />
        ))}
        <GrievanceModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          questionId={selectedQuestionId}
        />
      </div>
    </div>
  );
};

export default ResultDetails;
