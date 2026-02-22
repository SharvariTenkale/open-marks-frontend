const ActivityTable = () => {
  const activities = [
    {
      action: "New exam created",
      user: "Prof. Sarah Johnson",
      date: "Feb 21, 2026 - 2:30 PM",
      type: "Exam",
    },
    {
      action: "Grievance submitted",
      user: "Student ID: 45678",
      date: "Feb 21, 2026 - 1:15 PM",
      type: "Grievance",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 overflow-x-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Recent Activity Preview
      </h2>

      <table className="min-w-full text-sm text-left">
        <thead className="border-b text-gray-500">
          <tr>
            <th className="py-2">Action</th>
            <th>User</th>
            <th>Date</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="py-3">{item.action}</td>
              <td>{item.user}</td>
              <td>{item.date}</td>
              <td>
                <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-600">
                  {item.type}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="mt-6 w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition">
        View Full Audit Logs
      </button>
    </div>
  );
};

export default ActivityTable;
