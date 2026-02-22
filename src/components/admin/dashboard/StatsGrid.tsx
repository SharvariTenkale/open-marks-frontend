import {
  Users,
  FileText,
  PlayCircle,
  MessageSquare,
  ClipboardCheck,
} from "lucide-react";
import StatsCard from "./StatsCard";

interface Props {
  metrics: any;
}

const StatsGrid = ({ metrics }: Props) => {
  return (
    <div
      className="grid gap-6
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-5"
    >
      <StatsCard
        icon={<Users className="text-blue-600" size={22} />}
        value={metrics.total_students}
        label="Total Students"
        bgColor="bg-blue-100"
      />

      <StatsCard
        icon={<FileText className="text-green-600" size={22} />}
        value={metrics.total_exams}
        label="Total Exams"
        bgColor="bg-green-100"
      />

      <StatsCard
        icon={<PlayCircle className="text-yellow-600" size={22} />}
        value={metrics.exams_by_status?.live || 0}
        label="Active Exams"
        bgColor="bg-yellow-100"
      />

      <StatsCard
        icon={<MessageSquare className="text-red-600" size={22} />}
        value={metrics.pending_grievances}
        label="Pending Grievances"
        bgColor="bg-red-100"
      />

      <StatsCard
        icon={<ClipboardCheck className="text-purple-600" size={22} />}
        value={metrics.pending_evaluations}
        label="Evaluations Pending"
        bgColor="bg-purple-100"
      />
    </div>
  );
};

export default StatsGrid;
