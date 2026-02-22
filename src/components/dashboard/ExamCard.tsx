import { Clock, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { startExam } from "../../api/admin/exam.api";
// interface ExamCardProps {
//   title?: string;
//   duration?: string;
//   marks?: string;
//   status?: "available" | "locked" | "completed";
// }
interface Exam {
  id: string;
  title: string;
  duration: number;
  marks: number;
  status: string;
}

interface Props {
  exam: Exam;
}
const ExamCard = ({ exam }: Props) => {
  const navigate = useNavigate();

  const { id, title, duration, marks } = exam;

  const computedStatus =
    exam.status === "live"
      ? "available"
      : exam.status === "completed"
        ? "completed"
        : "locked";
  return (
    <div className="bg-white rounded-xl border p-5 shadow-sm space-y-4">
      <div className="flex justify-between items-start">
        <h4 className="font-semibold text-gray-800">{title}</h4>

        {computedStatus === "available" && (
          <span className="text-green-600 bg-green-100 px-3 py-1 rounded-full text-xs font-medium">
            Available
          </span>
        )}

        {computedStatus === "locked" && (
          <span className="text-red-600 bg-red-100 px-3 py-1 rounded-full text-xs font-medium">
            Locked
          </span>
        )}

        {computedStatus === "completed" && (
          <span className="text-blue-600 bg-blue-100 px-3 py-1 rounded-full text-xs font-medium">
            Completed
          </span>
        )}
      </div>

      <div className="flex items-center gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>{duration} mins</span>
        </div>

        <div className="flex items-center gap-2">
          <BookOpen size={16} />
          <span>{marks} marks</span>
        </div>
      </div>

      {computedStatus === "available" && (
        <button
          onClick={async () => {
            try {
              const data = await startExam(id);

              navigate(`/student/my-exams/${id}`, {
                state: {
                  attemptId: data.attempt_id,
                  questions: data.questions,
                },
              });
            } catch (error) {
              console.error("Failed to start exam", error);
              alert("Unable to start exam");
            }
          }}
          className="w-full bg-blue-800 text-white py-2 rounded-lg font-medium hover:bg-blue-900 transition"
        >
          Start Exam
        </button>
      )}

      {computedStatus === "completed" && (
        <button className="w-full border py-2 rounded-lg font-medium text-gray-700">
          View Details
        </button>
      )}

      {computedStatus === "locked" && (
        <button className="w-full bg-gray-200 text-gray-500 py-2 rounded-lg font-medium cursor-not-allowed">
          Not Available
        </button>
      )}  
    </div>
  );
};

export default ExamCard;
