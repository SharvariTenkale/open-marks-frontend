import { useNavigate } from "react-router-dom";
import ResultsTable from "../../components/student/ResultsTable";
import { useEffect, useState } from "react";

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

  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const token = localStorage.getItem("token");

        // STEP 1 — GET ATTEMPTS LIST
        const attemptRes = await fetch("http://localhost:5000/api/attempts", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!attemptRes.ok) throw new Error("Failed to fetch attempts");

        const attempts = await attemptRes.json();

        // If no attempts
        if (!Array.isArray(attempts) || attempts.length === 0) {
          setResults([]);
          return;
        }

        // STEP 2 — GET RESULT FOR EACH ATTEMPT
        const resultsData = await Promise.all(
          attempts.map(async (a: any) => {
            try {
              const res = await fetch(
                `http://localhost:5000/api/attempts/${a.attempt_id}/result`,
                {
                  headers: { Authorization: `Bearer ${token}` },
                },
              );

              if (!res.ok) return null;

              return await res.json();
            } catch {
              return null;
            }
          }),
        );

        // STEP 3 — MAP TO UI FORMAT
        const mapped: Result[] = resultsData
          .filter((data: any) => data && data.questions)
          .map((data: any) => ({
            id: data.attempt_id,
            examName: data.exam_title,
            subjectCode: "—",

            totalMarks: data.total_marks,

            scoredMarks: data.questions.reduce(
              (sum: number, q: any) => sum + (q.evaluated_marks ?? 0),
              0,
            ),

            submissionDate: data.submitted_at
              ? new Date(data.submitted_at).toLocaleDateString()
              : new Date().toLocaleDateString(),
          }));

        setResults(mapped);
      } catch (err) {
        console.error("Failed to load results", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Results</h2>
        <p className="text-gray-500">
          View your exam performance and detailed evaluations
        </p>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading results...</p>
      ) : (
        <ResultsTable
          results={results}
          onRowClick={(id) => navigate(`/student/results/${id}`)}
        />
      )}
    </div>
  );
};

export default Results;
