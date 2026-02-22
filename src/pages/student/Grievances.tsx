import { useState } from "react";
import GrievanceStatsCards from "../../components/student/grievance/GrievanceStatsCards";
import GrievanceTable from "../../components/student/grievance/GrievanceTable";
import GrievanceDetailsModal from "../../components/student/grievance/GrievanceDetailsModal";

export interface Grievance {
  id: string;
  examName: string;
  questionNo: string;
  subject: string;
  dateRaised: string;
  status: "Pending" | "Under Review" | "Approved" | "Rejected";
}

const mockGrievances: Grievance[] = [
  {
    id: "GR001",
    examName: "Data Structures Mid-Term Exam",
    questionNo: "Q15",
    subject: "Computer Science",
    dateRaised: "Feb 18, 2026",
    status: "Pending",
  },
  {
    id: "GR002",
    examName: "Operating Systems Quiz 2",
    questionNo: "Q12",
    subject: "Computer Science",
    dateRaised: "Feb 10, 2026",
    status: "Approved",
  },
  {
    id: "GR003",
    examName: "Computer Networks Mid-Term",
    questionNo: "Q20",
    subject: "Computer Science",
    dateRaised: "Feb 8, 2026",
    status: "Rejected",
  },
];

const Grievances = () => {
  const [selected, setSelected] = useState<Grievance | null>(null);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold">My Grievances</h2>
        <p className="text-gray-500">
          View and manage your exam grievances
        </p>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-blue-800 text-sm">
        <p className="font-medium mb-1">
          Grievance Submission Period Active
        </p>
        <p>
          You can raise grievances within the allowed time period after result publication.
        </p>
      </div>

      <GrievanceStatsCards grievances={mockGrievances} />

      <GrievanceTable
        grievances={mockGrievances}
        onViewDetails={(g) => setSelected(g)}
      />

      <GrievanceDetailsModal
        grievance={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
};

export default Grievances;