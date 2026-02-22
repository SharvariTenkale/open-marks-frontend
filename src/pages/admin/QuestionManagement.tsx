import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";
import QuestionsHeader from "../../components/admin/questions/QuestionsHeader";
import QuestionsTable from "../../components/admin/questions/QuestionsTable";
import QuestionsSummary from "../../components/admin/questions/QuestionsSummary";
import { useEffect } from "react";
type Question = {
  id: string;
  type: string;
  max_marks: number;
  model_answer: string | null;
  key_points: { marks: number; point: string }[] | null;
};
const QuestionManagement = () => {
  const { examId } = useParams();
  console.log("Parent examId:", examId);

  const location = useLocation(); // ✅ FIXED

  const isCreateFlow = location.pathname === "/admin/exams/questions";

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);

  // temporary selected exam id (later replace with real state / param)

  // ✅ PUBLISH FUNCTION
  const handlePublish = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token"); // JWT stored after login

      const res = await fetch(`/exams/${examId}/publish`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ force_publish: false }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Publish failed");
        return;
      }

      alert("Exam Published Successfully!");

      console.log("Published Exam:", data.exam);
    } catch (err) {
      console.error(err);
      alert("Server error while publishing");
    } finally {
      setLoading(false);
    }
  };

  const [questions, setQuestions] = useState([]);
  const [loadingQuestions, setLoadingQuestions] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(
          `http://localhost:5000/api/exams/${examId}/questions`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const data = await res.json();

        // transform backend data → UI format
        const formatted = data.questions.map((q: Question) => ({
          id: q.id,
          type: q.type.toUpperCase(),
          marks: q.max_marks,
          keywords: (q.key_points?.length ?? 0) > 0,
          modelAnswer: !!q.model_answer,
          status: "Draft",
        }));

        setQuestions(formatted);
      } catch (err) {
        console.error("Failed to load questions", err);
      } finally {
        setLoadingQuestions(false);
      }
    };

    fetchQuestions();
  }, []);
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <AdminSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isCollapsed ? "ml-20" : "ml-64"
        }`}
      >
        <AdminTopbar toggleSidebar={() => setIsCollapsed(!isCollapsed)} />

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* HEADER + BUTTON ROW */}
          <div className="flex justify-between items-center">
            <QuestionsHeader />

            {isCreateFlow && (
              <button
                onClick={handlePublish}
                disabled={loading}
                className={`px-6 py-2 rounded-lg text-white font-medium transition
                  ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-purple-700 hover:bg-purple-800"
                  }
                `}
              >
                {loading ? "Publishing..." : "Publish Exam"}
              </button>
            )}
          </div>

          {loadingQuestions ? (
            <p className="text-gray-500">Loading questions...</p>
          ) : (
            <QuestionsTable questions={questions} />
          )}
          <QuestionsSummary questions={questions} />
        </main>
      </div>
    </div>
  );
};

export default QuestionManagement;
