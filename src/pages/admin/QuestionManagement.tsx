import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";
import QuestionsHeader from "../../components/admin/questions/QuestionsHeader";
import QuestionsTable from "../../components/admin/questions/QuestionsTable";
import QuestionsSummary from "../../components/admin/questions/QuestionsSummary";
import ExamFilterDropdown from "../../components/admin/questions/ExamFilterDropdown";
//for nature based routing
import { useLocation } from "react-router-dom";

const QuestionManagement = () => {
  const location = useLocation();

  const isCreateFlow = location.pathname === "/admin/exams/questions";
  const [selectedExam, setSelectedExam] = useState({
    id: "1",
    name: "Data Structures Mid-Term - Feb 2026",
  });

  const exams = [
    { id: "1", name: "Data Structures Mid-Term - Feb 2026" },
    { id: "2", name: "Database Management Final Exam" },
    { id: "3", name: "Operating Systems Quiz" },
  ];
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [questions, setQuestions] = useState([
    {
      id: 1,
      type: "MCQ",
      marks: 2,
      keywords: false,
      modelAnswer: false,
      status: "Draft",
    },
    {
      id: 2,
      type: "Descriptive",
      marks: 10,
      keywords: true,
      modelAnswer: true,
      status: "Draft",
    },
    {
      id: 3,
      type: "MCQ",
      marks: 2,
      keywords: false,
      modelAnswer: false,
      status: "Draft",
    },
  ]);
  //   {
  //     !fromCreateExam && (
  //       <ExamFilterDropdown
  //         exams={exams}
  //         selectedExam={selectedExam}
  //         onSelect={setSelectedExam}
  //       />
  //     );
  //   }
  //   {
  //     fromCreateExam && (
  //       <button className="bg-purple-700 text-white px-5 py-2 rounded-lg">
  //         Publish Exam
  //       </button>
  //     );
  //   }
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* <div className="flex flex-col sm:flex-row justify-between gap-4">
        {!isCreateFlow && (
          <ExamFilterDropdown
            exams={exams}
            selectedExam={selectedExam}
            onSelect={setSelectedExam}
          />
        )}

        {isCreateFlow && (
          <button className="bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-800 transition">
            Publish Exam
          </button>
        )}
      </div> */}
      <AdminSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isCollapsed ? "ml-20" : "ml-64"
        }`}
      >
        <AdminTopbar toggleSidebar={() => setIsCollapsed(!isCollapsed)} />

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          <QuestionsHeader />
          <QuestionsTable questions={questions} />
          <QuestionsSummary questions={questions} />
        </main>
      </div>
    </div>
  );
};

export default QuestionManagement;
