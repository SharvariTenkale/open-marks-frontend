import { MessageSquare, Clock, CheckCircle, XCircle } from "lucide-react";

const GrievanceSummary = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Grievance Summary
        </h2>
        <button className="text-blue-600 text-sm font-medium hover:underline">
          Manage Grievances
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <SummaryCard icon={<MessageSquare size={18} />} value="127" label="Total" color="blue" />
        <SummaryCard icon={<Clock size={18} />} value="23" label="Pending" color="yellow" />
        <SummaryCard icon={<CheckCircle size={18} />} value="89" label="Approved" color="green" />
        <SummaryCard icon={<XCircle size={18} />} value="15" label="Rejected" color="red" />
      </div>

      <div>
        <div className="flex justify-between text-sm mb-2">
          <span>Resolution Rate</span>
          <span>81.9%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full w-[81%]"></div>
        </div>
      </div>
    </div>
  );
};

const SummaryCard = ({ icon, value, label, color }: any) => {
  return (
    <div className="border rounded-lg p-4 text-center">
      <div className={`mx-auto mb-2 w-10 h-10 flex items-center justify-center rounded-lg bg-${color}-100 text-${color}-600`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{value}</h3>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
};

export default GrievanceSummary;