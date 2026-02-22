import type { Grievance } from "../../../pages/student/Grievances";

interface Props {
  grievances: Grievance[];
}

const GrievanceStatsCards = ({ grievances }: Props) => {
  const total = grievances.length;
  const pending = grievances.filter((g) => g.status === "Pending").length;
  const review = grievances.filter((g) => g.status === "Under Review").length;
  const resolved = grievances.filter((g) => g.status === "Approved").length;

  const Card = ({ title, value, color }: any) => (
    <div className="bg-white border rounded-xl p-6 shadow-sm">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className={`text-2xl font-semibold ${color}`}>{value}</p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      <Card title="Total Grievances" value={total} color="text-black" />
      <Card title="Pending" value={pending} color="text-yellow-600" />
      <Card title="Under Review" value={review} color="text-blue-600" />
      <Card title="Resolved" value={resolved} color="text-green-600" />
    </div>
  );
};

export default GrievanceStatsCards;
