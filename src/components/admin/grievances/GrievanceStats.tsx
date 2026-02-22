import { AlertCircle, Clock, CheckCircle } from "lucide-react";

const GrievanceStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard title="Total Grievances" value="6" />
      <StatCard title="Pending" value="2" />
      <StatCard title="Under Review" value="2" />
      <StatCard title="Resolved" value="2" />
    </div>
  );
};

const StatCard = ({ title, value }: any) => (
  <div className="bg-white rounded-xl shadow-sm p-5">
    <p className="text-sm text-gray-500">{title}</p>
    <h3 className="text-2xl font-semibold mt-2">{value}</h3>
  </div>
);

export default GrievanceStats;