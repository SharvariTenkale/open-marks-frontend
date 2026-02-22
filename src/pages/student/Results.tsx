import { useNavigate } from "react-router-dom";
import ResultsTable from "../../components/student/ResultsTable";

export interface Result {
  id: string;
  examName: string;
  subjectCode: string;
  totalMarks: number;
  scoredMarks: number;
  submissionDate: string;
}

const Results = () => {
  const navigate = useNavigate();

  // 🔹 Mock Data (API-ready structure)
  const results: Result[] = [
    {
      id: "1",
      examName: "Data Structures - Midterm",
      subjectCode: "CSE 301",
      totalMarks: 100,
      scoredMarks: 78,
      submissionDate: "Feb 15, 2026",
    },
    {
      id: "2",
      examName: "Operating Systems - Final",
      subjectCode: "CSE 302",
      totalMarks: 100,
      scoredMarks: 45,
      submissionDate: "Jan 10, 2026",
    },
    {
      id: "3",
      examName: "Computer Networks - Quiz",
      subjectCode: "CSE 303",
      totalMarks: 50,
      scoredMarks: 42,
      submissionDate: "Dec 20, 2025",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold">Results</h2>
        <p className="text-gray-500">
          View your exam performance and detailed evaluations
        </p>
      </div>

      {/* Table */}
      <ResultsTable
        results={results}
        onRowClick={(id) => navigate(`/student/results/${id}`)}
      />
    </div>
  );
};

export default Results;