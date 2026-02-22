import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, Menu } from "lucide-react";

const ReviewerDashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  // Dummy grievance data (replace with API later)
  const grievances = [
    {
      id: 1,
      student: "Priya Sharma",
      exam: "Data Structures Final",
      status: "Pending",
    },
    {
      id: 2,
      student: "Rahul Verma",
      exam: "Operating Systems Mid",
      status: "Pending",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">

      {/* ================= SIDEBAR ================= */}
      <div
        className={`fixed top-0 left-0 h-full bg-blue-900 text-white transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          {!isCollapsed && <h2 className="font-semibold">Reviewer</h2>}
          <button onClick={() => setIsCollapsed(!isCollapsed)}>
            <Menu size={18} />
          </button>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-3 px-6 py-3 bg-blue-800">
            <FileText size={18} />
            {!isCollapsed && "Grievances"}
          </div>
        </div>
      </div>

      {/* ================= MAIN AREA ================= */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isCollapsed ? "ml-20" : "ml-64"
        }`}
      >
        {/* TOPBAR */}
        <div className="h-16 bg-white shadow flex items-center px-6 justify-between">
          <h1 className="text-lg font-semibold">Grievance Management</h1>
          <div className="text-sm text-gray-600">
            reviewer@gmail.com
          </div>
        </div>

        {/* CONTENT */}
        <main className="flex-1 overflow-y-auto p-6">

          <div className="bg-white rounded-xl border p-6">
            <h2 className="text-xl font-semibold mb-6">
              All Grievances
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="text-left p-3">#</th>
                    <th className="text-left p-3">Student</th>
                    <th className="text-left p-3">Exam</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {grievances.map((item, index) => (
                    <tr key={item.id} className="border-t">
                      <td className="p-3">{index + 1}</td>
                      <td className="p-3">{item.student}</td>
                      <td className="p-3">{item.exam}</td>
                      <td className="p-3">
                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">
                          {item.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <button
                          onClick={() =>
                            navigate(`/reviewer/grievances/${item.id}`)
                          }
                          className="bg-blue-700 text-white px-4 py-1 rounded-md hover:bg-blue-800 transition"
                        >
                          Review
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
};

export default ReviewerDashboard;