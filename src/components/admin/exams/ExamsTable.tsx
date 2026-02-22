import ExamRow from "./ExamRow";
import StatusBadge from "./StatusBadge";
import { getExams } from "../../../api/admin/exam.api";
import { useEffect, useState } from "react";

interface Props {
  exams: any[]; // we keep this so nothing breaks
}

const ExamsTable = ({ exams }: Props) => {
  // Real state for backend data
  const displayExams = exams;

  return (
    <div className="bg-white rounded-xl shadow-sm">
      {/* ---------------- DESKTOP TABLE ---------------- */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="border-b bg-gray-50 text-gray-600">
            <tr>
              <th className="p-4 text-left">Exam Name</th>
              {/* <th>Subject</th> */}
              {/* <th>Total Marks</th> */}
              <th>Scheduled Date & Time</th>
              <th>Duration</th>
              <th>Status</th>
              <th className="text-right pr-6">Actions</th>
            </tr>
          </thead>

          <tbody>
            {displayExams.map((exam) => (
              <ExamRow key={exam.id} exam={exam} />
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------------- MOBILE CARDS ---------------- */}
      <div className="md:hidden flex flex-col divide-y">
        {displayExams.map((exam) => (
          <div key={exam.id} className="p-4 space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-gray-800 text-sm">
                {exam.title}
              </h3>
              <StatusBadge status={exam.status} />
            </div>

            <div className="text-xs text-gray-500 space-y-1">
              <p>
                <strong>Schedule:</strong>{" "}
                {new Date(exam.scheduled_start).toLocaleString()}
              </p>
            </div>

            <div className="pt-2 border-t text-xs text-gray-600">
              {exam.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamsTable;